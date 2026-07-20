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
                title: event?.target.value,
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
            checked={customItem.costTracking?.enabled || false}
            onChange={(event) => {
              const enabled = event.target.checked;
              setCustomItem((current) => ({
                ...current,
                costTracking: {
                  ...current.costTracking,
                  enabled,
                  unitCost: enabled ? current.costTracking?.unitCost || "" : "",
                  markupRate: enabled
                    ? current.costTracking?.markupRate || ""
                    : "",
                  supplier: enabled ? current.costTracking?.supplier || "" : "",
                },
              }));
            }}
          />
        </div>

        {customItem.costTracking?.enabled && (
          <div className={styles.costTrackingFields}>
            <div className={styles.invoiceMeta}>
              <label>Supplier</label>{" "}
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
                value={customItem.costTracking.unitCost || ""}
                onChange={(event) =>
                  setCustomItem((current) => {
                    const unitCost = event.target.value;
                    const markup = Number(current.costTracking.markupRate || 0);
                    const unitPriceFromMarkup = markup
                      ? Number(
                          (Number(unitCost || 0) * (1 + markup / 100)).toFixed(
                            2,
                          ),
                        )
                      : current.unitPrice;

                    return {
                      ...current,
                      unitPrice: current.unitPrice || unitPriceFromMarkup,
                      costTracking: {
                        ...current.costTracking,
                        unitCost,
                        totalCost: Number(
                          (
                            (current.quantity || 1) * Number(unitCost || 0)
                          ).toFixed(2),
                        ),
                      },
                    };
                  })
                }
              />
            </div>
            <div className={styles.invoiceMeta}>
              <label>Markup</label>
              <input
                placeholder="Markup %"
                type="number"
                min="0"
                step="0.01"
                value={customItem.costTracking.markupRate || ""}
                onChange={(event) => {
                  const markupRate = event.target.value;
                  setCustomItem((current) => {
                    const unitCost = Number(current.costTracking.unitCost || 0);
                    const unitPrice = Number(
                      (unitCost * (1 + Number(markupRate || 0) / 100)).toFixed(
                        2,
                      ),
                    );

                    return {
                      ...current,
                      unitPrice,
                      costTracking: {
                        ...current.costTracking,
                        markupRate,
                        totalCost: Number(
                          ((current.quantity || 1) * unitCost).toFixed(2),
                        ),
                      },
                    };
                  });
                }}
              />
            </div>
            <div className={styles.internalValue}>
              <span>Total supplier cost</span>
              <strong>
                ${Number(customItem.costTracking.totalCost || 0).toFixed(2)}
              </strong>
            </div>

            <div className={styles.internalValue}>
              <span>Gross margin</span>
              <strong>
                $
                {Number(
                  Number(customItem.unitPrice || 0) -
                    Number(customItem.costTracking.totalCost || 0),
                ).toFixed(2)}
              </strong>
            </div>
          </div>
        )}

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
