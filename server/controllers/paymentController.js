const Payment = require("../models/Payment.model");

exports.createPayment = async (req, res, next) => {
  try {
    const p = await Payment.create(req.body);
    res.status(201).json({ payment: p });
  } catch (err) {
    next(err);
  }
};

exports.listPayments = async (req, res, next) => {
  try {
    const query = {};
    if (req.query.clientId) query.clientId = req.query.clientId;
    const payments = await Payment.find(query).sort({ date: -1 });
    res.json({ payments });
  } catch (err) {
    next(err);
  }
};

exports.getPayment = async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ error: "Not found" });
    res.json({ payment });
  } catch (err) {
    next(err);
  }
};

exports.updatePayment = async (req, res, next) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (!payment) return res.status(404).json({ error: "Not found" });
    res.json({ payment });
  } catch (err) {
    next(err);
  }
};

exports.deletePayment = async (req, res, next) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};

exports.getAllPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find().sort({ date: -1 });
    console.log("getAllPayments: returning", payments.length, "payments");
    res.json({ payments });
  } catch (err) {
    next(err);
  }
};