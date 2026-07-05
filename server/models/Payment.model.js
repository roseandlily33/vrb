const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    amount: { type: Number, required: true },
    currency: { type: String, default: "CAD" },
    method: {
      type: String,
      enum: ["card", "bank_transfer", "cash", "cheque", "other"],
      default: "card",
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
    date: { type: Date, default: Date.now },
    invoiceId: { type: String },
    notes: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Payment", PaymentSchema);
