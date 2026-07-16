const Receipt = require("../models/Receipt.model");

exports.createReceipt = async (req, res, next) => {
  try {
    const {
      clientId,
      paymentId,
      paymentIds,
      receiptNumber,
      amount,
      currency,
      issuedAt,
      notes,
    } = req.body;
    if (!clientId) return res.status(400).json({ error: "clientId required" });
    if (amount === undefined || amount === null)
      return res.status(400).json({ error: "amount required" });

    const paymentIdsNormalized = [];
    if (Array.isArray(paymentIds)) paymentIdsNormalized.push(...paymentIds);
    if (paymentId) paymentIdsNormalized.push(paymentId);

    const r = await Receipt.create({
      clientId,
      paymentIds: paymentIdsNormalized.length ? paymentIdsNormalized : undefined,
      receiptNumber,
      amount,
      currency: currency || "CAD",
      issuedAt: issuedAt || Date.now(),
      notes,
    });

    res.status(201).json({ receipt: r });
  } catch (err) {
    next(err);
  }
};

exports.listReceipts = async (req, res, next) => {
  try {
    const q = {};
    if (req.query.clientId) q.clientId = req.query.clientId;
    const receipts = await Receipt.find(q).sort({ issuedAt: -1 }).limit(200);
    res.json({ receipts });
  } catch (err) {
    next(err);
  }
};

exports.getReceipt = async (req, res, next) => {
  try {
    const r = await Receipt.findById(req.params.id)
      .populate("clientId")
      .populate("paymentIds");
    if (!r) return res.status(404).json({ error: "Not found" });
    res.json({ receipt: r });
  } catch (err) {
    next(err);
  }
};

exports.updateReceipt = async (req, res, next) => {
  try {
    const id = req.params.id;
    // normalize incoming paymentIds/paymentId
    const body = { ...req.body };
    if (body.paymentId && !body.paymentIds) body.paymentIds = [body.paymentId];

    const updated = await Receipt.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    });
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json({ receipt: updated });
  } catch (err) {
    next(err);
  }
};

exports.deleteReceipt = async (req, res, next) => {
  try {
    const r = await Receipt.findByIdAndDelete(req.params.id);
    if (!r) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};

exports.getAllReceipts = async (req, res, next) => {
  try {
    const receipts = await Receipt.find().sort({ issuedAt: -1 });
    res.json({ receipts });
  } catch (err) {
    next(err);
  }
};
