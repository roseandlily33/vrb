const mongoose = require("mongoose");

const serviceItemHistorySchema = new mongoose.Schema(
  {
    serviceItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceItem",
      required: true,
    },
    action: {
      type: String,
      enum: ["create", "update", "archive", "unarchive"],
      required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    before: { type: Object },
    after: { type: Object },
    changes: { type: Object },
  },
  { timestamps: true },
);

module.exports = mongoose.model("ServiceItemHistory", serviceItemHistorySchema);
