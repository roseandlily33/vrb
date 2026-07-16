const mongoose = require("mongoose");

const ReceiptSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    paymentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
      },
    ],
    receiptNumber: { type: String },
    amount: { type: Number, required: true },
    currency: { type: String, default: "CAD" },
    issuedAt: { type: Date, default: Date.now },
    notes: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Receipt", ReceiptSchema);
