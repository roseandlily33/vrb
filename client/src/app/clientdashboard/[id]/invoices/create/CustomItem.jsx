import styles from "./page.module.css";
import React from "react";
const CustomItem = ({
  invoiceItems = [],
  updateInvoiceItem,
  invoiceMeta,
  setInvoiceMeta,
}) => {
  return (
    <>
      <h3 style={{ marginBottom: "2rem" }}>Invoice Items</h3>

      <div className={styles.invoiceItems}>
        {!invoiceItems?.length && <p>No invoice items have been added yet.</p>}

        {invoiceItems?.map((item, index) => (
          <div key={item.localId} className={styles.invoiceItemWrap}>
            <p style={{ color: "var(--blue-600)", fontWeight: "900" }}>
              {index + 1}
            </p>

            <div className={styles.itemTotal}>
              <span>Total</span>
              <strong>${Number(item.total || 0).toFixed(2)}</strong>
            </div>

            <div>
              <button
                type="button"
                onClick={() => updateInvoiceItem(index, { _delete: true })}
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
                    value={item.title}
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
                    value={item.quantity}
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
                    value={item.unitPrice}
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
                  checked={item.costTracking?.enabled || false}
                  onChange={(event) => {
                    const enabled = event.target.checked;

                    updateInvoiceItem(index, {
                      itemType: enabled
                        ? "product"
                        : item.custom
                          ? "other"
                          : "service",

                      costTracking: {
                        enabled,
                        supplier: enabled
                          ? item.costTracking?.supplier || ""
                          : "",
                        unitCost: enabled
                          ? Number(item.costTracking?.unitCost || 0)
                          : 0,
                        totalCost: 0,
                        markupRate: enabled
                          ? Number(item.costTracking?.markupRate || 0)
                          : 0,
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
                    value={item.costTracking.unitCost || ""}
                    onChange={(event) =>
                      updateInvoiceItem(index, {
                        costTracking: {
                          unitCost: Number(event.target.value || 0),
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
                    value={item.costTracking.markupRate || ""}
                    onChange={(event) => {
                      const markupRate = Number(event.target.value || 0);

                      const unitCost = Number(item.costTracking.unitCost || 0);

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

                <div className={styles.internalValue}>
                  <span>Total supplier cost</span>
                  <strong>
                    ${Number(item.costTracking.totalCost || 0).toFixed(2)}
                  </strong>
                </div>

                <div className={styles.internalValue}>
                  <span>Gross margin</span>
                  <strong>
                    $
                    {Number(
                      Number(item.total || 0) -
                        Number(item.costTracking.totalCost || 0),
                    ).toFixed(2)}
                  </strong>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.invoiceNotes}>
        <label>
          Notes
          <textarea
            placeholder="Payment terms, payment methods, or additional notes"
            value={invoiceMeta?.notes}
            onChange={(event) =>
              setInvoiceMeta((current) => ({
                ...current,
                notes: event?.target?.value,
              }))
            }
          />
        </label>
      </div>
    </>
  );
};

export default CustomItem;
