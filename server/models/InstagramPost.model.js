const mongoose = require("mongoose");

const InstagramPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    tag: {
      type: String,
      enum: ["photo", "educational", "about-me"],
      default: "photo",
    },
    done: { type: Boolean, default: false },
    doneAt: { type: Date },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("InstagramPost", InstagramPostSchema);
