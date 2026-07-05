// models/ProposalTemplate.model.js
const mongoose = require("mongoose");

const proposalTemplateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: [
        "website",
        "design",
        "social_media",
        "email_marketing",
        "custom",
      ],
      default: "custom",
    },

    sections: [
      {
        title: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          default: "",
        },
        order: {
          type: Number,
          default: 0,
        },
      },
    ],

    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProposalTemplate", proposalTemplateSchema);