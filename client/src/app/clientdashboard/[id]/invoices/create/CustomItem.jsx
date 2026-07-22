import styles from "./page.module.css";
import React from "react";
const CustomItem = ({
  invoiceItems = [],
  updateInvoiceItem,
  invoiceMeta,
  setInvoiceMeta,
  removeInvoiceItem,
}) => {
  return (
    <>
      <h3 style={{ marginBottom: "2rem" }}>Invoice Items</h3>

      <div className={styles.invoiceItems}>
        {!invoiceItems?.length && <p>No invoice items have been added yet.</p>}

        {invoiceItems?.map((item, index) => {
          const itemTotal = Number(item.total ?? 0);

          const supplierSubtotal = Number(item.costTracking?.totalCost ?? 0);

          const supplierTax = Number(item.costTracking?.supplierTax ?? 0);

          const supplierTotalPaid = Number(
            item.costTracking?.totalPaid ?? supplierSubtotal + supplierTax,
          );

          const grossProfit = Number(
            item.costTracking?.grossProfit ?? itemTotal - supplierSubtotal,
          );

          return (
            <div key={item.localId} className={styles.invoiceItemWrap}>
              <p
                style={{
                  color: "var(--blue-600)",
                  fontWeight: "900",
                }}
              >
                {index + 1}
              </p>

              <div className={styles.itemTotal}>
                <span>Total</span>
                <strong>${itemTotal.toFixed(2)}</strong>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => removeInvoiceItem(index)}
                  className={styles.delete}
                >
                  Remove
                </button>
              </div>

              <div className={styles.invoiceItem}>
                <div className={styles.itemDescription}>
                  <label>
                    Description
                    <input
                      value={item.title || ""}
                      onChange={(event) =>
                        updateInvoiceItem(index, {
                          title: event.target.value,
                        })
                      }
                    />
                  </label>
                </div>

                <div className={styles.itemQty}>
                  <label>
                    Qty
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={item.quantity ?? 1}
                      onChange={(event) =>
                        updateInvoiceItem(index, {
                          quantity: Number(event.target.value || 0),
                        })
                      }
                    />
                  </label>
                </div>

                <div className={styles.itemPrice}>
                  <label>
                    Unit Price
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.unitPrice ?? 0}
                      onChange={(event) =>
                        updateInvoiceItem(index, {
                          unitPrice: Number(event.target.value || 0),
                        })
                      }
                    />
                  </label>
                </div>
              </div>

              <div className={styles.internalCostToggle}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.costTracking?.enabled === true}
                    onChange={(event) => {
                      const enabled = event.target.checked;

                      updateInvoiceItem(index, {
                        itemType: enabled
                          ? "product"
                          : item.custom
                            ? "other"
                            : "service",

                        costTracking: enabled
                          ? {
                              enabled: true,

                              supplier: item.costTracking?.supplier || "",

                              unitCost: Number(
                                item.costTracking?.unitCost ?? 0,
                              ),

                              totalCost: Number(
                                item.costTracking?.totalCost ?? 0,
                              ),

                              supplierTaxLabel:
                                item.costTracking?.supplierTaxLabel || "HST",

                              supplierTaxRate: Number(
                                item.costTracking?.supplierTaxRate ?? 14,
                              ),

                              supplierTax: item.costTracking?.supplierTax ?? "",

                              totalPaid: Number(
                                item.costTracking?.totalPaid ?? 0,
                              ),

                              markupRate: Number(
                                item.costTracking?.markupRate ?? 0,
                              ),

                              grossProfit: Number(
                                item.costTracking?.grossProfit ?? 0,
                              ),
                            }
                          : {
                              enabled: false,
                              supplier: "",
                              unitCost: 0,
                              totalCost: 0,
                              supplierTaxLabel: "HST",
                              supplierTaxRate: 14,
                              supplierTax: 0,
                              totalPaid: 0,
                              markupRate: 0,
                              grossProfit: 0,
                            },
                      });
                    }}
                  />
                  Track supplier cost
                </label>
              </div>

              {item.costTracking?.enabled && (
                <div className={styles.costTrackingFields}>
                  <label>
                    Supplier
                    <input
                      type="text"
                      placeholder="VistaPrint"
                      value={item.costTracking.supplier || ""}
                      onChange={(event) =>
                        updateInvoiceItem(index, {
                          costTracking: {
                            supplier: event.target.value,
                          },
                        })
                      }
                    />
                  </label>

                  <label>
                    Unit Cost
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.costTracking.unitCost ?? ""}
                      onChange={(event) =>
                        updateInvoiceItem(index, {
                          costTracking: {
                            unitCost:
                              event.target.value === ""
                                ? ""
                                : Number(event.target.value),
                          },
                        })
                      }
                    />
                  </label>

                  <label>
                    Markup %
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.costTracking.markupRate ?? ""}
                      onChange={(event) => {
                        const markupRate = Number(event.target.value || 0);

                        const unitCost = Number(
                          item.costTracking.unitCost || 0,
                        );

                        const unitPrice = Number(
                          (unitCost * (1 + markupRate / 100)).toFixed(2),
                        );

                        updateInvoiceItem(index, {
                          unitPrice,

                          costTracking: {
                            markupRate,
                          },
                        });
                      }}
                    />
                  </label>

                  <label>
                    Supplier Tax
                    <select
                      value={item.costTracking.supplierTaxLabel || "HST"}
                      onChange={(event) =>
                        updateInvoiceItem(index, {
                          costTracking: {
                            supplierTaxLabel: event.target.value,
                          },
                        })
                      }
                    >
                      <option value="HST">HST</option>

                      <option value="GST">GST</option>

                      <option value="PST">PST</option>

                      <option value="Tax">Other tax</option>

                      <option value="None">No tax</option>
                    </select>
                  </label>

                  <label>
                    Supplier Tax Rate %
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.costTracking.supplierTaxRate ?? 14}
                      onChange={(event) =>
                        updateInvoiceItem(index, {
                          costTracking: {
                            supplierTaxRate: Number(event.target.value || 0),

                            /*
                        Clear the manually entered
                        supplier tax so it can be
                        recalculated from the new rate.
                      */
                            supplierTax: "",
                          },
                        })
                      }
                    />
                  </label>

                  <label>
                    Supplier Tax Amount
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.costTracking.supplierTax ?? ""}
                      placeholder={(
                        supplierSubtotal *
                        (Number(item.costTracking.supplierTaxRate ?? 14) / 100)
                      ).toFixed(2)}
                      onChange={(event) =>
                        updateInvoiceItem(index, {
                          costTracking: {
                            supplierTax:
                              event.target.value === ""
                                ? ""
                                : Number(event.target.value),
                          },
                        })
                      }
                    />
                  </label>

                  <div className={styles.internalValue}>
                    <span>Supplier subtotal</span>

                    <strong>${supplierSubtotal.toFixed(2)}</strong>
                  </div>

                  <div className={styles.internalValue}>
                    <span>Supplier tax</span>

                    <strong>${supplierTax.toFixed(2)}</strong>
                  </div>

                  <div className={styles.internalValue}>
                    <span>Supplier total paid</span>

                    <strong>${supplierTotalPaid.toFixed(2)}</strong>
                  </div>

                  <div className={styles.internalValue}>
                    <span>Gross profit</span>

                    <strong>${grossProfit.toFixed(2)}</strong>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.invoiceNotes}>
        <label>
          Notes
          <textarea
            placeholder="Payment terms, payment methods, or additional notes"
            value={invoiceMeta?.notes || ""}
            onChange={(event) =>
              setInvoiceMeta((current) => ({
                ...current,
                notes: event.target.value,
              }))
            }
          />
        </label>
      </div>
    </>
  );
};

export default CustomItem;
