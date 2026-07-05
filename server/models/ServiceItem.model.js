// models/ServiceItem.model.js
const mongoose = require("mongoose");

const serviceItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "website",
        "design",
        "social_media",
        "email_marketing",
        "seo",
        "add_on",
        "maintenance",
        "custom",
      ],
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    defaultPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    minPrice: {
      type: Number,
      min: 0,
    },

    maxPrice: {
      type: Number,
      min: 0,
    },

    pricingType: {
      type: String,
      enum: ["fixed", "starting_at", "range", "monthly", "hourly", "custom"],
      default: "fixed",
    },

    estimatedTimeline: {
      type: String,
      default: "",
    },

    deliverables: [
      {
        type: String,
        trim: true,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
    archived: {
      type: Boolean,
      default: false,
    },

    archivedAt: {
      type: Date,
    },

    archivedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("ServiceItem", serviceItemSchema);
