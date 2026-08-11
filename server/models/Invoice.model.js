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

    /*
    Supplier price before supplier HST.
    Store the actual discounted amount you paid.
  */
    unitCost: {
      type: Number,
      default: 0,
      min: 0,
    },

    /*
    Quantity × unitCost, before supplier HST.
  */
    subtotalCost: {
      type: Number,
      default: 0,
      min: 0,
    },

    supplierTaxLabel: {
      type: String,
      default: "HST",
      trim: true,
    },

    /*
    Store 14 for 14%, not 0.14.
  */
    supplierTaxRate: {
      type: Number,
      default: 14,
      min: 0,
    },

    /*
    Actual supplier HST allocated to this line item.
    Allow this to be entered manually because supplier invoices
    may round tax at the invoice level.
  */
    supplierTax: {
      type: Number,
      default: 0,
      min: 0,
    },

    /*
    Supplier subtotal plus supplier HST.
  */
    totalPaid: {
      type: Number,
      default: 0,
      min: 0,
    },

    /*
    Client price before HST minus supplier subtotal before HST.
  */
    grossProfit: {
      type: Number,
      default: 0,
    },

    /*
    Markup on cost:
    profit ÷ supplier subtotal × 100
  */
    markupRate: {
      type: Number,
      default: 0,
      min: 0,
    },

    /*
    Margin on selling price:
    profit ÷ client line total × 100
  */
    grossMarginRate: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
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
    /*
  INTERNAL PURCHASING AND PROFITABILITY
  Do not expose through client-facing APIs.
*/

    supplierSubtotalCents: {
      type: Number,
      default: 0,
      min: 0,
      select: false,
    },

    supplierTaxPaidCents: {
      type: Number,
      default: 0,
      min: 0,
      select: false,
    },

    supplierTotalPaidCents: {
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

    grossMarginRate: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
      select: false,
    },

    /*
  Informational estimate:
  customer HST collected minus supplier HST paid.
  Your actual GST/HST return may include other sales,
  expenses, adjustments, or credits.
*/
    netTaxCents: {
      type: Number,
      default: 0,
      select: false,
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
      enum: ["draft", "sent", "partially_paid", "paid", "overdue", "void", "unpaid"],
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
  let subtotalCents = 0;
  let supplierSubtotalCents = 0;
  let supplierTaxPaidCents = 0;

  for (const item of this.lineItems || []) {
    const quantity = Number(item.quantity || 0);
    const unitPriceCents = Math.round(Number(item.unitPrice || 0) * 100);

    /*
      CLIENT-FACING LINE TOTAL
    */
    const lineTotalCents = quantity * unitPriceCents;

    item.total = lineTotalCents / 100;
    subtotalCents += lineTotalCents;

    /*
      INTERNAL COST TRACKING
    */
    if (item.costTracking?.enabled) {
      const unitCostCents = Math.round(
        Number(item.costTracking.unitCost || 0) * 100,
      );

      const lineSupplierSubtotalCents = quantity * unitCostCents;

      /*
        Prefer a manually entered supplier tax amount when available.
        Otherwise calculate it using the supplier tax rate.
      */
      const enteredSupplierTax = Number(item.costTracking.supplierTax);

      const supplierTaxCents = Number.isFinite(enteredSupplierTax)
        ? Math.round(enteredSupplierTax * 100)
        : Math.round(
            lineSupplierSubtotalCents *
              (Number(item.costTracking.supplierTaxRate || 0) / 100),
          );

      const supplierTotalPaidCents =
        lineSupplierSubtotalCents + supplierTaxCents;

      const lineGrossProfitCents = lineTotalCents - lineSupplierSubtotalCents;

      const markupRate =
        lineSupplierSubtotalCents > 0
          ? (lineGrossProfitCents / lineSupplierSubtotalCents) * 100
          : 0;

      const grossMarginRate =
        lineTotalCents > 0 ? (lineGrossProfitCents / lineTotalCents) * 100 : 0;

      item.costTracking.subtotalCost = lineSupplierSubtotalCents / 100;

      item.costTracking.supplierTax = supplierTaxCents / 100;

      item.costTracking.totalPaid = supplierTotalPaidCents / 100;

      item.costTracking.grossProfit = lineGrossProfitCents / 100;

      item.costTracking.markupRate = Number(markupRate.toFixed(2));

      item.costTracking.grossMarginRate = Number(grossMarginRate.toFixed(2));

      supplierSubtotalCents += lineSupplierSubtotalCents;
      supplierTaxPaidCents += supplierTaxCents;
    } else {
      item.costTracking.subtotalCost = 0;
      item.costTracking.supplierTax = 0;
      item.costTracking.totalPaid = 0;
      item.costTracking.grossProfit = 0;
      item.costTracking.markupRate = 0;
      item.costTracking.grossMarginRate = 0;
    }
  }

  /*
    CLIENT INVOICE TOTALS
  */
  const discountCents = Math.min(
    Math.round(Number(this.discountCents || 0)),
    subtotalCents,
  );

  const taxableSubtotalCents = subtotalCents - discountCents;

  const taxCents = Math.round(
    taxableSubtotalCents * (Number(this.taxRate || 0) / 100),
  );

  const totalCents = taxableSubtotalCents + taxCents;

  /*
    PAYMENT TOTALS
  */
  const amountPaidCents = Math.min(
    Math.round(Number(this.amountPaidCents || 0)),
    totalCents,
  );

  const balanceDueCents = Math.max(totalCents - amountPaidCents, 0);

  /*
    INTERNAL TOTALS
  */
  const supplierTotalPaidCents = supplierSubtotalCents + supplierTaxPaidCents;

  /*
    Profit excludes:
    - HST collected from the customer
    - supplier HST potentially recoverable as an ITC
  */
  const grossProfitCents = taxableSubtotalCents - supplierSubtotalCents;

  const grossMarginRate =
    taxableSubtotalCents > 0
      ? (grossProfitCents / taxableSubtotalCents) * 100
      : 0;

  const netTaxCents = taxCents - supplierTaxPaidCents;

  /*
    CENT FIELDS
  */
  this.subtotalCents = subtotalCents;
  this.taxableSubtotalCents = taxableSubtotalCents;
  this.taxCents = taxCents;
  this.totalCents = totalCents;
  this.amountPaidCents = amountPaidCents;
  this.balanceDueCents = balanceDueCents;

  this.supplierSubtotalCents = supplierSubtotalCents;
  this.supplierTaxPaidCents = supplierTaxPaidCents;
  this.supplierTotalPaidCents = supplierTotalPaidCents;
  this.grossProfitCents = grossProfitCents;
  this.grossMarginRate = Number(grossMarginRate.toFixed(2));
  this.netTaxCents = netTaxCents;

  /*
    LEGACY DOLLAR FIELDS
  */
  this.subtotal = subtotalCents / 100;
  this.tax = taxCents / 100;
  this.total = totalCents / 100;
  this.trackedCosts = supplierSubtotalCents / 100;
  this.totalCostCents = supplierSubtotalCents;
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
