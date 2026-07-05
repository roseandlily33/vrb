// models/Client.model.js
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
      trim: true,
    },
    contactName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    industry: {
      type: String,
      trim: true,
    },
    address: {
      street: String,
      city: String,
      province: String,
      postalCode: String,
      country: {
        type: String,
        default: "Canada",
      },
    },
    notes: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["lead", "active", "past", "archived"],
      default: "lead",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);