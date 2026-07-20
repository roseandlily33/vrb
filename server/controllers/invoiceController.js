const Invoice = require("../models/Invoice.model");
const Client = require("../models/Client.model");
const ServiceItem = require("../models/ServiceItem.model");
const Counter = require("../models/Counter.model");

function generateInvoiceId() {
  // Simple YYYY-<random 5 digits> scheme
  const y = new Date().getFullYear();
  const n = Math.floor(10000 + Math.random() * 90000);
  return `${y}-${n}`;
}

// Resolve and normalize line items; fetch ServiceItem pricing when required.
async function resolveLineItems(items) {
  const out = [];

  for (const li of items || []) {
    const qty = Number(li.quantity || 1);

    // decide whether to use provided unitPrice or model price
    let unit = Number(li.unitPrice || 0);
    const useModelPrice = li.useModelPrice === true;

    if ((unit === 0 || useModelPrice) && li.serviceItemId) {
      try {
        const si = await ServiceItem.findById(li.serviceItemId).lean();
        if (si) {
          // basic resolution: prefer defaultPrice; future: handle pricingType/options
          unit = Number(si.defaultPrice || unit || 0);
        }
      } catch (e) {
        // ignore and fall back to provided unit
      }
    }

    const costTracking = li.costTracking || {};
    const enabled = !!costTracking.enabled;
    let unitCost = Number(costTracking.unitCost || 0);

    // if unitCost missing but totalCost provided, derive unitCost
    const providedTotalCost = Number(costTracking.totalCost || 0);
    if ((!unitCost || unitCost === 0) && providedTotalCost) {
      unitCost = Number((providedTotalCost / (qty || 1)).toFixed(2));
    }

    const totalCost = enabled
      ? Number((qty * (unitCost || 0)).toFixed(2))
      : undefined;

    // compute markup rate if possible
    let markupRate = Number(costTracking.markupRate || 0);
    if (unitCost > 0 && unit > 0) {
      markupRate = Number(((unit / unitCost - 1) * 100).toFixed(2));
    }

    out.push({
      description: li.description || "",
      serviceItemId: li.serviceItemId || undefined,
      quantity: qty,
      unitPrice: unit,
      total: Number((qty * unit).toFixed(2)),
      costTracking: {
        enabled,
        supplier: costTracking.supplier,
        unitCost: unitCost || undefined,
        totalCost: totalCost,
        markupRate,
      },
      custom: li.custom || false,
      itemType: li.itemType || "service",
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
      lineItems = [],
      tax = 0,
      notes,
      terms,

      dueDate,
    } = req.body;
    if (!clientId) return res.status(400).json({ error: "clientId required" });

    const normalized = await resolveLineItems(lineItems);

    const subtotal = normalized.reduce((s, i) => s + (i.total || 0), 0);
    const totalCost = normalized.reduce(
      (s, i) => s + (i.costTracking?.totalCost || 0),
      0,
    );

    const taxAmount = Number(tax || 0);
    const total = +(subtotal + taxAmount);

    // generate a sequential invoice number using counters collection
    // start value set so next number will be 3 (since you already have 2 existing invoices)
    // Ensure a counter document exists, then increment it.
    // This two-step approach avoids conflicting update operators and is compatible
    // with mongoose versions that don't accept pipeline updates by default.
    const existingCounter = await Counter.findById("invoice");
    if (!existingCounter) {
      try {
        // create with seq:2 so that after increment the first invoice is 3
        await Counter.create({ _id: "invoice", seq: 2 });
      } catch (e) {
        // ignore duplicate key errors from concurrent creates
        if (
          !(
            e.code === 11000 ||
            (e.name === "MongoServerError" && e.code === 11000)
          )
        )
          throw e;
      }
    }

    const counterDoc = await Counter.findByIdAndUpdate(
      "invoice",
      { $inc: { seq: 1 } },
      { returnDocument: "after" },
    );
    const number = counterDoc.seq;
    const padded = String(number).padStart(4, "0");
    const invoiceId = padded;

    const invoice = new Invoice({
      clientId,
      number,
      invoiceId,
      currency,
      title,
      description,
      issuer,
      lineItems: normalized,
      subtotal,
      tax: taxAmount,
      total,
      notes,
      terms,
      dueDate,
    });
    // Set cents and profit-related fields prior to save so they persist
    invoice.subtotalCents = Math.round(subtotal * 100);
    invoice.taxCents = Math.round(taxAmount * 100);
    invoice.totalCents = Math.round(total * 100);
    invoice.totalCostCents = Math.round(totalCost * 100);
    invoice.grossProfitCents = Math.round((total - totalCost) * 100);
    invoice.amountPaidCents = 0;
    invoice.balanceDueCents = invoice.totalCents;

    await invoice.save();

    res.status(201).json({ invoice });
  } catch (err) {
    next(err);
  }
}

async function getInvoice(req, res, next) {
  try {
    const inv = await Invoice.findById(req.params.id)
      .populate("clientId")
      .populate("lineItems.serviceItemId");
    if (!inv) return res.status(404).json({ error: "Not found" });
    res.json({ invoice: inv });
  } catch (err) {
    next(err);
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
    const id = req.params.id;
    const {
      currency,
      title,
      description,
      issuer,
      terms,
      lineItems = [],
      tax = 0,
      notes,
      dueDate,
      issuedAt,
      status,
    } = req.body;

    // resolve and normalize incoming line items (fetch model prices when needed)
    const normalized = await resolveLineItems(lineItems);

    const subtotal = normalized.reduce((s, i) => s + (i.total || 0), 0);
    const totalCost = normalized.reduce(
      (s, i) => s + (i.costTracking?.totalCost || 0),
      0,
    );
    const taxAmount = Number(tax || 0);
    const total = +(subtotal + taxAmount);

    const updated = await Invoice.findByIdAndUpdate(
      id,
      {
        title,
        description,
        issuer,
        terms,
        currency,
        lineItems: normalized,
        subtotal,
        tax: taxAmount,
        total,
        notes,
        dueDate,
        issuedAt: issuedAt ? new Date(issuedAt) : undefined,
        status,
        // cents and profit fields
        subtotalCents: Math.round(subtotal * 100),
        taxCents: Math.round(taxAmount * 100),
        totalCents: Math.round(total * 100),
        totalCostCents: Math.round(totalCost * 100),
        grossProfitCents: Math.round((total - totalCost) * 100),
      },
      { returnDocument: "after" },
    )
      .populate("clientId")
      .populate("lineItems.serviceItemId");

    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json({ invoice: updated });
  } catch (err) {
    next(err);
  }
}
