const Invoice = require("../models/Invoice.model");
const Client = require("../models/Client.model");
const ServiceItem = require("../models/ServiceItem.model");
const Counter = require("../models/Counter.model");

// Resolve and normalize line items; fetch ServiceItem pricing when required.
async function resolveLineItems(items) {
  const out = [];

  for (const li of items || []) {
    const qty = Number(li.quantity ?? 1);

    let unitPrice = Number(li.unitPrice ?? 0);
    const useModelPrice = li.useModelPrice === true;

    if ((unitPrice === 0 || useModelPrice) && li.serviceItemId) {
      try {
        const serviceItem = await ServiceItem.findById(li.serviceItemId).lean();

        if (serviceItem) {
          unitPrice = Number(serviceItem.defaultPrice ?? unitPrice ?? 0);
        }
      } catch (error) {
        // Keep the manually supplied price if the ServiceItem lookup fails.
      }
    }

    const incomingCostTracking = li.costTracking || {};
    const enabled = incomingCostTracking.enabled === true;

    let costTracking = {
      enabled: false,
    };

    if (enabled) {
      let unitCost = Number(incomingCostTracking.unitCost ?? 0);

      /*
        Backwards compatibility:
        If the form supplied a total cost but not a unit cost,
        derive the unit cost.
      */
      const providedTotalCost = Number(incomingCostTracking.totalCost ?? 0);

      if (unitCost === 0 && providedTotalCost > 0 && qty > 0) {
        unitCost = Number((providedTotalCost / qty).toFixed(2));
      }

      const totalCost = Number((qty * unitCost).toFixed(2));

      /*
        Keep supplier tax as entered.

        This is useful because a supplier invoice may calculate and
        round tax across the whole order rather than per line item.
      */
      // const supplierTax =
      //   incomingCostTracking.supplierTax !== undefined &&
      //   incomingCostTracking.supplierTax !== null &&
      //   incomingCostTracking.supplierTax !== ""
      //     ? Number(incomingCostTracking.supplierTax)
      //     : undefined;

      const supplierTaxRate = Number(
        incomingCostTracking.supplierTaxRate ?? 14,
      );

      // allow an explicitly provided supplierTax (useful when supplier rounded differently)
      let supplierTax = undefined;
      if (
        incomingCostTracking.supplierTax !== undefined &&
        incomingCostTracking.supplierTax !== null &&
        incomingCostTracking.supplierTax !== ""
      ) {
        const parsed = Number(incomingCostTracking.supplierTax);
        if (Number.isFinite(parsed)) supplierTax = parsed;
      }

      const calculatedSupplierTax =
        supplierTax !== undefined
          ? Number(supplierTax.toFixed(2))
          : Number((totalCost * (supplierTaxRate / 100)).toFixed(2));

      const totalPaid = Number((totalCost + calculatedSupplierTax).toFixed(2));

      const lineTotal = Number((qty * unitPrice).toFixed(2));

      /*
        Profit excludes supplier HST because supplier HST is tracked
        separately as a potential input tax credit.
      */
      const grossProfit = Number((lineTotal - totalCost).toFixed(2));

      const markupRate =
        totalCost > 0
          ? Number(((grossProfit / totalCost) * 100).toFixed(2))
          : 0;

      costTracking = {
        enabled: true,
        supplier: incomingCostTracking.supplier?.trim() || undefined,

        unitCost,
        totalCost,

        supplierTaxLabel: incomingCostTracking.supplierTaxLabel || "HST",

        supplierTaxRate,
        supplierTax: calculatedSupplierTax,
        totalPaid,

        markupRate,
        grossProfit,
      };
    }

    out.push({
      description: li.description?.trim() || "",
      serviceItemId: li.serviceItemId || undefined,
      itemType: li.itemType || "service",
      quantity: qty,
      unitPrice,
      total: Number((qty * unitPrice).toFixed(2)),
      costTracking,
      custom: li.custom === true,
    });
  }

  return out;
}

async function createInvoice(req, res, next) {
  try {
    const {
      clientId,
      currency,
      title,
      description,
      issuer,
      clientSnapshot,
      lineItems = [],

      taxRate = 14,
      taxLabel = "HST",
      discountCents = 0,

      notes,
      internalNotes,
      paymentTerms,
      terms,
      dueDate,
      issuedAt,
      status,
    } = req.body;

    if (!clientId) {
      return res.status(400).json({
        error: "clientId required",
      });
    }

    const normalizedLineItems = await resolveLineItems(lineItems);

    /*
      Generate sequential invoice number.
    */
    const existingCounter = await Counter.findById("invoice");

    if (!existingCounter) {
      try {
        await Counter.create({
          _id: "invoice",
          seq: 2,
        });
      } catch (error) {
        const isDuplicate =
          error.code === 11000 ||
          (error.name === "MongoServerError" && error.code === 11000);

        if (!isDuplicate) {
          throw error;
        }
      }
    }

    const counterDoc = await Counter.findByIdAndUpdate(
      "invoice",
      {
        $inc: {
          seq: 1,
        },
      },
      {
        returnDocument: "after",
      },
    );

    if (!counterDoc) {
      throw new Error("Unable to generate invoice number");
    }

    const number = counterDoc.seq;
    const invoiceId = String(number).padStart(4, "0");

    const invoice = new Invoice({
      clientId,
      number,
      invoiceId,

      currency,
      title,
      description,

      clientSnapshot,
      issuer,

      lineItems: normalizedLineItems,

      taxRate: Number(taxRate ?? 14),
      taxLabel,
      discountCents: Number(discountCents ?? 0),

      notes,
      internalNotes,

      /*
        Allows your older frontend field name to continue working.
      */
      paymentTerms: paymentTerms ?? terms,

      dueDate: dueDate || undefined,
      issuedAt: issuedAt ? new Date(issuedAt) : undefined,

      status: status || "draft",

      amountPaidCents: 0,
    });

    await invoice.save();

    // const populatedInvoice = await Invoice.findById(invoice._id)
    //   .populate("clientId")
    //   .populate("lineItems.serviceItemId");
    const populatedInvoice = await Invoice.findById(invoice._id)
      .select(
        "+totalCostCents " +
          "+grossProfitCents " +
          "+supplierSubtotalCents " +
          "+supplierTaxPaidCents " +
          "+supplierTotalPaidCents " +
          "+grossMarginRate " +
          "+netTaxCents " +
          "+internalNotes",
      )
      .populate("clientId")
      .populate("lineItems.serviceItemId");

    res.status(201).json({
      invoice: populatedInvoice,
    });
  } catch (error) {
    next(error);
  }
}

// async function getInvoice(req, res, next) {
//   try {
//     const inv = await Invoice.findById(req.params.id)
//       .populate("clientId")
//       .populate("lineItems.serviceItemId");
//     if (!inv) return res.status(404).json({ error: "Not found" });
//     res.json({ invoice: inv });
//   } catch (err) {
//     next(err);
//   }
// }
async function getInvoice(req, res, next) {
  try {
    const invoice = await Invoice.findById(req.params.id)
      .select(
        "+totalCostCents " +
          "+grossProfitCents " +
          "+supplierSubtotalCents " +
          "+supplierTaxPaidCents " +
          "+supplierTotalPaidCents " +
          "+grossMarginRate " +
          "+netTaxCents " +
          "+internalNotes",
      )
      .populate("clientId")
      .populate("lineItems.serviceItemId");

    if (!invoice) {
      return res.status(404).json({
        error: "Not found",
      });
    }

    res.json({
      invoice,
    });
  } catch (error) {
    next(error);
  }
}

async function listInvoices(req, res, next) {
  try {
    const { clientId } = req.query;
    const q = clientId ? { clientId } : {};
    const invoices = await Invoice.find(q).sort({ createdAt: -1 }).limit(200);
    res.json({ invoices });
  } catch (err) {
    next(err);
  }
}

async function getAllInvoices(req, res, next) {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    console.log("getAllInvoices: returning", invoices.length, "invoices");
    res.json({ invoices });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createInvoice,
  getInvoice,
  listInvoices,
  updateInvoice,
  deleteInvoice,
  getAllInvoices,
};

async function deleteInvoice(req, res, next) {
  try {
    const inv = await Invoice.findByIdAndDelete(req.params.id);
    if (!inv) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
}

async function updateInvoice(req, res, next) {
  try {
    const invoice = await Invoice.findById(req.params.id).select(
      "+totalCostCents " +
        "+grossProfitCents " +
        "+supplierSubtotalCents " +
        "+supplierTaxPaidCents " +
        "+supplierTotalPaidCents " +
        "+grossMarginRate " +
        "+netTaxCents " +
        "+internalNotes",
    );

    if (!invoice) {
      return res.status(404).json({
        error: "Not found",
      });
    }

    const {
      clientId,
      currency,
      title,
      description,
      issuer,
      clientSnapshot,

      lineItems,

      taxRate,
      taxLabel,
      discountCents,

      amountPaidCents,

      notes,
      internalNotes,
      paymentTerms,
      terms,

      dueDate,
      issuedAt,
      paidAt,
      status,
    } = req.body;

    if (lineItems !== undefined) {
      invoice.lineItems = await resolveLineItems(lineItems);
    }

    if (clientId !== undefined) {
      invoice.clientId = clientId;
    }

    if (currency !== undefined) {
      invoice.currency = currency;
    }

    if (title !== undefined) {
      invoice.title = title;
    }

    if (description !== undefined) {
      invoice.description = description;
    }

    if (issuer !== undefined) {
      invoice.issuer = issuer;
    }

    if (clientSnapshot !== undefined) {
      invoice.clientSnapshot = clientSnapshot;
    }

    if (taxRate !== undefined) {
      invoice.taxRate = Number(taxRate);
    }

    if (taxLabel !== undefined) {
      invoice.taxLabel = taxLabel;
    }

    if (discountCents !== undefined) {
      invoice.discountCents = Number(discountCents);
    }

    if (amountPaidCents !== undefined) {
      invoice.amountPaidCents = Number(amountPaidCents);
    }

    if (notes !== undefined) {
      invoice.notes = notes;
    }

    if (internalNotes !== undefined) {
      invoice.internalNotes = internalNotes;
    }

    if (paymentTerms !== undefined || terms !== undefined) {
      invoice.paymentTerms = paymentTerms ?? terms;
    }

    if (dueDate !== undefined) {
      invoice.dueDate = dueDate ? new Date(dueDate) : undefined;
    }

    if (issuedAt !== undefined) {
      invoice.issuedAt = issuedAt ? new Date(issuedAt) : undefined;
    }

    if (paidAt !== undefined) {
      invoice.paidAt = paidAt ? new Date(paidAt) : undefined;
    }

    if (status !== undefined) {
      invoice.status = status;
    }
    await invoice.save();

    await invoice.populate([
      {
        path: "clientId",
      },
      {
        path: "lineItems.serviceItemId",
      },
    ]);

    res.json({
      invoice,
    });
  } catch (error) {
    next(error);
  }
}
