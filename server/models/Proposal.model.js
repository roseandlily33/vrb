// models/Proposal.model.js
const mongoose = require("mongoose");

const proposalLineItemSchema = new mongoose.Schema(
  {
    serviceItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceItem",
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    quantity: {
      type: Number,
      default: 1,
      min: 1,
    },

    unitPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    total: {
      type: Number,
      required: true,
      min: 0,
    },

    pricingType: {
      type: String,
      enum: ["fixed", "starting_at", "range", "monthly", "hourly", "custom"],
      default: "fixed",
    },

    deliverables: [
      {
        type: String,
        trim: true,
      },
    ],

    notes: {
      type: String,
      default: "",
    },
  },
  { _id: true }
);

const proposalSectionSchema = new mongoose.Schema(
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

    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  { _id: true }
);

const proposalSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },

    proposalNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    projectType: {
      type: String,
      enum: [
        "website",
        "design",
        "social_media",
        "email_marketing",
        "maintenance",
        "custom",
      ],
      default: "custom",
    },

    status: {
      type: String,
      enum: ["draft", "sent", "viewed", "accepted", "declined", "archived"],
      default: "draft",
    },

    overview: {
      type: String,
      default: "",
    },

    goals: [
      {
        type: String,
        trim: true,
      },
    ],

    scopeSummary: {
      type: String,
      default: "",
    },

    lineItems: [proposalLineItemSchema],

    sections: [proposalSectionSchema],

    timeline: {
      estimatedStartDate: Date,
      estimatedEndDate: Date,
      estimatedDuration: {
        type: String,
        default: "",
      },
    },

    pricing: {
      subtotal: {
        type: Number,
        default: 0,
      },

      discount: {
        type: Number,
        default: 0,
      },

      taxRate: {
        type: Number,
        default: 0,
      },

      taxAmount: {
        type: Number,
        default: 0,
      },

      total: {
        type: Number,
        default: 0,
      },

      depositType: {
        type: String,
        enum: ["percentage", "fixed"],
        default: "percentage",
      },

      depositValue: {
        type: Number,
        default: 50,
      },

      depositAmount: {
        type: Number,
        default: 0,
      },

      remainingBalance: {
        type: Number,
        default: 0,
      },
    },

    paymentTerms: {
      type: String,
      default:
        "A 50% deposit is required before work begins. The remaining balance is due before final launch or delivery.",
    },

    revisionTerms: {
      type: String,
      default:
        "This proposal includes two rounds of revisions. Additional revisions may be billed separately.",
    },

    expiryDate: {
      type: Date,
    },

    sentAt: Date,
    acceptedAt: Date,
    declinedAt: Date,

    pdfUrl: {
      type: String,
      default: "",
    },

    internalNotes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Proposal", proposalSchema);