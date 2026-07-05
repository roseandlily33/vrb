const mongoose = require("mongoose");

const LineItemSchema = new mongoose.Schema({
  description: { type: String, required: true },
  serviceItemId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceItem" },
  quantity: { type: Number, default: 1 },
  unitPrice: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  custom: { type: Boolean, default: false },
});

const InvoiceSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    invoiceId: { type: String, required: true, unique: true },
    number: { type: Number, index: true },
    currency: { type: String, default: "CAD" },
    title: { type: String },
    description: { type: String },
    issuer: {
      name: { type: String },
      email: { type: String },
      address: { type: String },
      phone: { type: String },
    },
    lineItems: [LineItemSchema],
    subtotal: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["draft", "sent", "paid", "void"],
      default: "draft",
    },
    issuedAt: { type: Date, default: Date.now },
    dueDate: { type: Date },
    notes: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
