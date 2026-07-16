const mongoose = require("mongoose");
const LineItemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },

  serviceItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceItem",
  },

  itemType: {
    type: String,
    enum: ["service", "product", "reimbursable", "other"],
    default: "service",
  },

  quantity: {
    type: Number,
    default: 1,
    min: 0,
  },

  // What the client is charged before HST
  unitPrice: {
    type: Number,
    default: 0,
    min: 0,
  },

  total: {
    type: Number,
    default: 0,
    min: 0,
  },

  /*
    Optional internal purchasing details.
    These remain empty for services such as SEO.
  */
  costTracking: {
    enabled: {
      type: Boolean,
      default: false,
    },

    supplier: {
      type: String,
      trim: true,
    },

    unitCost: {
      type: Number,
      min: 0,
    },

    totalCost: {
      type: Number,
      min: 0,
    },

    markupRate: {
      type: Number,
      min: 0,
    },
  },

  custom: {
    type: Boolean,
    default: false,
  },
});

const InvoiceSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
      index: true,
    },

    invoiceId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    number: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },

    currency: {
      type: String,
      default: "CAD",
      uppercase: true,
      trim: true,
    },

    title: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    /*
      Store a snapshot so an old invoice does not change
      if the client's information is later edited.
    */
    clientSnapshot: {
      name: { type: String },
      companyName: { type: String },
      email: { type: String },
      phone: { type: String },
      address: { type: String },
    },

    issuer: {
      name: { type: String },
      businessName: { type: String },
      email: { type: String },
      address: { type: String },
      phone: { type: String },

      /*
        This should appear on invoices where required.
      */
      taxRegistrationNumber: {
        type: String,
        trim: true,
      },
    },

    lineItems: {
      type: [LineItemSchema],
      default: [],
    },

    /* convenience numeric totals (dollars) kept for client APIs */
    subtotal: {
      type: Number,
      default: 0,
      min: 0,
    },

    tax: {
      type: Number,
      default: 0,
      min: 0,
    },

    total: {
      type: Number,
      default: 0,
      min: 0,
    },

    /* trackedCosts in dollars (not cents) */
    trackedCosts: {
      type: Number,
      default: 0,
      min: 0,
    },

    /*
      CLIENT-FACING TOTALS
    */
    subtotalCents: {
      type: Number,
      default: 0,
      min: 0,
    },

    discountCents: {
      type: Number,
      default: 0,
      min: 0,
    },

    taxableSubtotalCents: {
      type: Number,
      default: 0,
      min: 0,
    },

    taxLabel: {
      type: String,
      default: "HST",
    },

    /*
      Store 14 for 14%, not 0.14.
    */
    taxRate: {
      type: Number,
      default: 14,
      min: 0,
    },

    taxCents: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalCents: {
      type: Number,
      default: 0,
      min: 0,
    },

    /*
      PAYMENT TRACKING
    */
    amountPaidCents: {
      type: Number,
      default: 0,
      min: 0,
    },

    balanceDueCents: {
      type: Number,
      default: 0,
      min: 0,
    },

    /*
      INTERNAL PROFITABILITY

      These should not be returned in a client-facing API.
    */
    totalCostCents: {
      type: Number,
      default: 0,
      min: 0,
      select: false,
    },

    grossProfitCents: {
      type: Number,
      default: 0,
      select: false,
    },

    status: {
      type: String,
      enum: ["draft", "sent", "partially_paid", "paid", "overdue", "void"],
      default: "draft",
      index: true,
    },

    issuedAt: {
      type: Date,
      default: Date.now,
    },

    dueDate: {
      type: Date,
    },

    paidAt: {
      type: Date,
    },

    paymentTerms: {
      type: String,
      trim: true,
    },

    notes: {
      type: String,
      trim: true,
    },

    internalNotes: {
      type: String,
      trim: true,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

InvoiceSchema.pre("validate", function calculateInvoiceTotals() {
  let subtotal = 0;
  let trackedCosts = 0;

  for (const item of this.lineItems || []) {
    item.total = Number((item.quantity * item.unitPrice).toFixed(2));

    subtotal += item.total;

    if (item.costTracking?.enabled) {
      const unitCost = item.costTracking.unitCost || 0;

      item.costTracking.totalCost = Number(
        (item.quantity * unitCost).toFixed(2),
      );

      trackedCosts += item.costTracking.totalCost;
    } else {
      item.costTracking.totalCost = undefined;
    }
  }

  this.subtotal = Number(subtotal.toFixed(2));

  this.tax = Number((this.subtotal * (this.taxRate / 100)).toFixed(2));

  this.total = Number((this.subtotal + this.tax).toFixed(2));

  this.trackedCosts = Number(trackedCosts.toFixed(2));

  // update cents fields so API responses can rely on both dollars and cents
  this.subtotalCents = Math.round((this.subtotal || 0) * 100);
  this.taxCents = Math.round((this.tax || 0) * 100);
  this.totalCents = Math.round((this.total || 0) * 100);
  this.totalCostCents = Math.round((this.trackedCosts || 0) * 100);
  this.grossProfitCents = Math.round(((this.total || 0) - (this.trackedCosts || 0)) * 100);

  // synchronous pre-validate hook -- no callback invocation
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
