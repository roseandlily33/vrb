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

    // compute totals and normalize line items
    const normalized = lineItems.map((li) => {
      const qty = Number(li.quantity || 1);
      const unit = Number(li.unitPrice || 0);
      return {
        description: li.description || "",
        serviceItemId: li.serviceItemId || undefined,
        quantity: qty,
        unitPrice: unit,
        total: +(qty * unit),
      };
    });

    const subtotal = normalized.reduce((s, i) => s + (i.total || 0), 0);
    const taxAmount = Number(tax || 0);
    const total = +(subtotal + taxAmount);

    // generate a sequential invoice number using counters collection
    // start value set so next number will be 3 (since you already have 2 existing invoices)
    const counterDoc = await Counter.findOneAndUpdate(
      { _id: "invoice" },
      { $inc: { seq: 1 }, $setOnInsert: { seq: 2 } },
      { new: true, upsert: true },
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

module.exports = {
  createInvoice,
  getInvoice,
  listInvoices,
  updateInvoice,
  deleteInvoice,
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
      status,
    } = req.body;

    // normalize incoming line items
    const normalized = lineItems.map((li) => {
      const qty = Number(li.quantity || 1);
      const unit = Number(li.unitPrice || 0);
      return {
        description: li.description || "",
        serviceItemId: li.serviceItemId || undefined,
        quantity: qty,
        unitPrice: unit,
        total: +(qty * unit),
        custom: li.custom || false,
      };
    });

    const subtotal = normalized.reduce((s, i) => s + (i.total || 0), 0);
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
        status,
      },
      { new: true },
    )
      .populate("clientId")
      .populate("lineItems.serviceItemId");

    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json({ invoice: updated });
  } catch (err) {
    next(err);
  }
}
