import React from "react";
import styles from "./page.module.css";

const AddItem = ({
  servicesLoading,
  addServiceItem,
  serviceItems = [],
  customItem,
  setCustomItem,
  addCustomItem,
}) => {
  return (
    <>
      <div className={styles.serviceSection}>
        <h3>Add Services</h3>
        {servicesLoading ? (
          <p>Loading services...</p>
        ) : (
          <div className={styles.serviceList}>
            {serviceItems.map((serviceItem) => (
              <div key={serviceItem._id} className={styles.serviceItem}>
                <div>
                  <h6>{serviceItem.name || serviceItem.title}</h6>

                  <span>
                    {serviceItem.category || "Service"} · $
                    {Number(
                      serviceItem.defaultPrice ?? serviceItem.price ?? 0,
                    ).toFixed(2)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => addServiceItem(serviceItem)}
                  className={styles.createSmall}
                >
                  Add
                </button>
              </div>
            ))}

            {!serviceItems.length && <p>No saved service items found.</p>}
          </div>
        )}
      </div>
      <div className={styles.customItem}>
        <h4 style={{ marginBlock: "2rem" }}>Custom Item</h4>

        <div className={styles.invoiceMeta}>
          <label>Title</label>

          <input
            placeholder="Title"
            value={customItem.title}
            onChange={(event) =>
              setCustomItem((current) => ({
                ...current,
                title: event.target.value,
              }))
            }
          />
        </div>

        <div className={styles.invoiceMeta}>
          <label>Description</label>

          <input
            placeholder="Description"
            value={customItem.description}
            onChange={(event) =>
              setCustomItem((current) => ({
                ...current,
                description: event.target.value,
              }))
            }
          />
        </div>

        <div className={styles.invoiceMeta}>
          <label>Unit Price</label>

          <input
            placeholder="Unit price"
            type="number"
            min="0"
            step="0.01"
            value={customItem.unitPrice}
            onChange={(event) =>
              setCustomItem((current) => ({
                ...current,
                unitPrice: event.target.value,
              }))
            }
          />
        </div>

        <div className={styles.invoiceMeta}>
          <label>Track Supplier Costs?</label>

          <input
            type="checkbox"
            checked={customItem.costTracking?.enabled === true}
            onChange={(event) => {
              const enabled = event.target.checked;

              setCustomItem((current) => ({
                ...current,

                costTracking: enabled
                  ? {
                      ...current.costTracking,
                      enabled: true,

                      supplier: current.costTracking?.supplier || "",

                      unitCost: current.costTracking?.unitCost || "",

                      totalCost: Number(current.costTracking?.totalCost || 0),

                      supplierTaxLabel:
                        current.costTracking?.supplierTaxLabel || "HST",

                      supplierTaxRate: Number(
                        current.costTracking?.supplierTaxRate ?? 14,
                      ),

                      supplierTax: current.costTracking?.supplierTax ?? "",

                      totalPaid: Number(current.costTracking?.totalPaid || 0),

                      markupRate: current.costTracking?.markupRate || "",

                      grossProfit: Number(
                        current.costTracking?.grossProfit || 0,
                      ),
                    }
                  : {
                      enabled: false,
                      supplier: "",
                      unitCost: "",
                      totalCost: 0,
                      supplierTaxLabel: "HST",
                      supplierTaxRate: 14,
                      supplierTax: "",
                      totalPaid: 0,
                      markupRate: "",
                      grossProfit: 0,
                    },
              }));
            }}
          />
        </div>

        {customItem.costTracking?.enabled &&
          (() => {
            const unitCost = Number(customItem.costTracking.unitCost || 0);

            const totalCost = Number(customItem.costTracking.totalCost || 0);

            const supplierTaxRate = Number(
              customItem.costTracking.supplierTaxRate ?? 14,
            );

            const supplierTaxValue =
              customItem.costTracking.supplierTax !== "" &&
              customItem.costTracking.supplierTax !== undefined &&
              customItem.costTracking.supplierTax !== null
                ? Number(customItem.costTracking.supplierTax || 0)
                : Number((totalCost * (supplierTaxRate / 100)).toFixed(2));

            const supplierTotalPaid = Number(
              (totalCost + supplierTaxValue).toFixed(2),
            );

            const grossProfit = Number(
              (Number(customItem.unitPrice || 0) - totalCost).toFixed(2),
            );

            return (
              <div className={styles.costTrackingFields}>
                <div className={styles.invoiceMeta}>
                  <label>Supplier</label>

                  <input
                    placeholder="Supplier"
                    value={customItem.costTracking.supplier || ""}
                    onChange={(event) =>
                      setCustomItem((current) => ({
                        ...current,

                        costTracking: {
                          ...current.costTracking,
                          supplier: event.target.value,
                        },
                      }))
                    }
                  />
                </div>

                <div className={styles.invoiceMeta}>
                  <label>Unit Cost</label>

                  <input
                    placeholder="Unit cost"
                    type="number"
                    min="0"
                    step="0.01"
                    value={customItem.costTracking.unitCost ?? ""}
                    onChange={(event) =>
                      setCustomItem((current) => {
                        const unitCostValue = event.target.value;

                        const safeUnitCost = Number(unitCostValue || 0);

                        const markupRate = Number(
                          current.costTracking.markupRate || 0,
                        );

                        const totalCostValue = Number(
                          (
                            safeUnitCost * Number(current.quantity || 1)
                          ).toFixed(2),
                        );

                        const supplierTaxRateValue = Number(
                          current.costTracking.supplierTaxRate ?? 14,
                        );

                        const supplierTaxValue =
                          current.costTracking.supplierTax !== "" &&
                          current.costTracking.supplierTax !== undefined &&
                          current.costTracking.supplierTax !== null
                            ? Number(current.costTracking.supplierTax || 0)
                            : Number(
                                (
                                  totalCostValue *
                                  (supplierTaxRateValue / 100)
                                ).toFixed(2),
                              );

                        const totalPaidValue = Number(
                          (totalCostValue + supplierTaxValue).toFixed(2),
                        );

                        const calculatedUnitPrice =
                          markupRate > 0
                            ? Number(
                                (safeUnitCost * (1 + markupRate / 100)).toFixed(
                                  2,
                                ),
                              )
                            : current.unitPrice;

                        const grossProfitValue = Number(
                          (
                            Number(calculatedUnitPrice || 0) - totalCostValue
                          ).toFixed(2),
                        );

                        return {
                          ...current,

                          unitPrice: current.unitPrice || calculatedUnitPrice,

                          costTracking: {
                            ...current.costTracking,

                            unitCost: unitCostValue,
                            totalCost: totalCostValue,
                            supplierTax: supplierTaxValue,
                            totalPaid: totalPaidValue,
                            grossProfit: grossProfitValue,
                          },
                        };
                      })
                    }
                  />
                </div>

                <div className={styles.invoiceMeta}>
                  <label>Markup %</label>

                  <input
                    placeholder="Markup %"
                    type="number"
                    min="0"
                    step="0.01"
                    value={customItem.costTracking.markupRate ?? ""}
                    onChange={(event) => {
                      const markupRateValue = event.target.value;

                      setCustomItem((current) => {
                        const unitCostValue = Number(
                          current.costTracking.unitCost || 0,
                        );

                        const unitPriceValue = Number(
                          (
                            unitCostValue *
                            (1 + Number(markupRateValue || 0) / 100)
                          ).toFixed(2),
                        );

                        const totalCostValue = Number(
                          (
                            unitCostValue * Number(current.quantity || 1)
                          ).toFixed(2),
                        );

                        const grossProfitValue = Number(
                          (unitPriceValue - totalCostValue).toFixed(2),
                        );

                        return {
                          ...current,

                          unitPrice: unitPriceValue,

                          costTracking: {
                            ...current.costTracking,

                            markupRate: markupRateValue,
                            totalCost: totalCostValue,
                            grossProfit: grossProfitValue,
                          },
                        };
                      });
                    }}
                  />
                </div>

                <div className={styles.invoiceMeta}>
                  <label>Supplier Tax</label>

                  <select
                    value={customItem.costTracking.supplierTaxLabel || "HST"}
                    onChange={(event) =>
                      setCustomItem((current) => ({
                        ...current,

                        costTracking: {
                          ...current.costTracking,
                          supplierTaxLabel: event.target.value,
                        },
                      }))
                    }
                  >
                    <option value="HST">HST</option>
                    <option value="GST">GST</option>
                    <option value="PST">PST</option>
                    <option value="Tax">Other tax</option>
                    <option value="None">No tax</option>
                  </select>
                </div>

                <div className={styles.invoiceMeta}>
                  <label>Supplier Tax Rate %</label>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={customItem.costTracking.supplierTaxRate ?? 14}
                    onChange={(event) =>
                      setCustomItem((current) => {
                        const supplierTaxRateValue = Number(
                          event.target.value || 0,
                        );

                        const totalCostValue = Number(
                          current.costTracking.totalCost || 0,
                        );

                        const supplierTaxValue = Number(
                          (
                            totalCostValue *
                            (supplierTaxRateValue / 100)
                          ).toFixed(2),
                        );

                        return {
                          ...current,

                          costTracking: {
                            ...current.costTracking,

                            supplierTaxRate: supplierTaxRateValue,

                            supplierTax: supplierTaxValue,

                            totalPaid: Number(
                              (totalCostValue + supplierTaxValue).toFixed(2),
                            ),
                          },
                        };
                      })
                    }
                  />
                </div>

                <div className={styles.invoiceMeta}>
                  <label>Supplier Tax Amount</label>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder={(totalCost * (supplierTaxRate / 100)).toFixed(
                      2,
                    )}
                    value={customItem.costTracking.supplierTax ?? ""}
                    onChange={(event) =>
                      setCustomItem((current) => {
                        const supplierTaxValue = event.target.value;

                        const safeSupplierTax = Number(supplierTaxValue || 0);

                        const totalCostValue = Number(
                          current.costTracking.totalCost || 0,
                        );

                        return {
                          ...current,

                          costTracking: {
                            ...current.costTracking,

                            supplierTax: supplierTaxValue,

                            totalPaid: Number(
                              (totalCostValue + safeSupplierTax).toFixed(2),
                            ),
                          },
                        };
                      })
                    }
                  />
                </div>

                <div className={styles.internalValue}>
                  <span>Supplier subtotal</span>

                  <strong>${totalCost.toFixed(2)}</strong>
                </div>

                <div className={styles.internalValue}>
                  <span>Supplier tax</span>

                  <strong>${supplierTaxValue.toFixed(2)}</strong>
                </div>

                <div className={styles.internalValue}>
                  <span>Total paid to supplier</span>

                  <strong>${supplierTotalPaid.toFixed(2)}</strong>
                </div>

                <div className={styles.internalValue}>
                  <span>Gross profit</span>

                  <strong>${grossProfit.toFixed(2)}</strong>
                </div>
              </div>
            );
          })()}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBlock: "1.5rem",
          }}
        >
          <button
            type="button"
            onClick={addCustomItem}
            className={styles.createSmall}
          >
            Add Custom
          </button>
        </div>
      </div>
    </>
  );
};

export default AddItem;
