const mongoose = require("mongoose");

const SocialMediaPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    caption: { type: String },
    scheduledAt: { type: Date, required: true },
    tag: { type: String },
    clientName: { type: String },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["scheduled", "posted", "canceled"],
      default: "scheduled",
    },
    postedAt: { type: Date },
  },
  { timestamps: true },
);

module.exports = mongoose.model("SocialMediaPost", SocialMediaPostSchema);
