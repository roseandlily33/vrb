const LineItems = ({
  item,
  unitCost,
  styles,
  formatMoney,
  isEditing,
  index,
  updateLineItem,
  setEditable,
}) => {
  return (
    <>
      <div className={`${styles.lineDetails} ${styles.noPrint} `}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {item?.costTracking?.enabled === true && (
            <div className={styles.noPrint}>
              <div>
                <strong>Charging:</strong> {formatMoney(item?.unitPrice)} ×{" "}
                {item?.quantity} = {formatMoney(item?.total)}
              </div>
              <div>
                <strong>Taxable:</strong>{" "}
                {item?.itemType !== "reimbursable" ? "Yes" : "No"}
              </div>
            </div>
          )}

          <div className={styles.noPrint}>
            {/* <p>cost tracking</p> */}
            {item?.costTracking?.enabled === true && (
              !isEditing ? (
                <>
                  <div>
                    <strong>Supplier:</strong>{" "}
                    {item.costTracking.supplier || "—"}
                  </div>
                  <div>
                    <strong>Unit cost:</strong> {formatMoney(unitCost)}
                  </div>
                  <div>
                    <strong>Supplier subtotal:</strong>{" "}
                    {formatMoney(
                      item.costTracking.subtotalCost ??
                        item.costTracking.totalCost ??
                        0,
                    )}
                  </div>

                  <div>
                    <strong>Supplier tax:</strong>{" "}
                    {item.costTracking.supplierTaxLabel || "HST"} (
                    {item.costTracking.supplierTaxRate ?? "—"}%) {" — "}
                    {formatMoney(item.costTracking.supplierTax ?? 0)}
                  </div>

                  <div>
                    <strong>Total paid to supplier:</strong>{" "}
                    {formatMoney(item.costTracking.totalPaid ?? 0)}
                  </div>

                  <div>
                    <strong>Gross profit:</strong>{" "}
                    {formatMoney(item.costTracking.grossProfit ?? 0)}
                  </div>

                  <div>
                    <strong>Markup %:</strong>{" "}
                    {item.costTracking.markupRate ?? "—"}
                  </div>

                  <div>
                    <strong>Gross margin %:</strong>{" "}
                    {item.costTracking.grossMarginRate ?? "—"}
                  </div>
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={item.costTracking?.enabled === true}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.enabled",
                          e.target.checked,
                        )
                      }
                    />{" "}
                    Enable cost tracking
                  </label>
                  <div>
                    <label>Supplier</label>
                    <input
                      placeholder="Supplier"
                      value={item.costTracking?.supplier || ""}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.supplier",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label>Unit cost</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Unit cost"
                      value={item.costTracking?.unitCost ?? ""}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.unitCost",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label> Supplier Tax</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Supplier tax"
                      value={item.costTracking?.supplierTax ?? ""}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.supplierTax",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label> Supplier Tax Rate</label>

                    <input
                      type="number"
                      step="0.01"
                      placeholder="Supplier tax rate"
                      value={item.costTracking?.supplierTaxRate ?? 14}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.supplierTaxRate",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label> Supplier Tax </label>

                    <input
                      placeholder="Tax label"
                      value={item.costTracking?.supplierTaxLabel || "HST"}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.supplierTaxLabel",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label> Total Paid to Supplier</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Total paid to supplier"
                      value={item.costTracking?.totalPaid ?? ""}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.totalPaid",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label> Gross Profit</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Gross profit"
                      value={item.costTracking?.grossProfit ?? ""}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.grossProfit",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label> Markup Rate</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Markup rate      "
                      value={item.costTracking?.markupRate ?? ""}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.markupRate",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label> Gross Margin Rate</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Gross margin rate"
                      value={item.costTracking?.grossMarginRate ?? ""}
                      onChange={(e) =>
                        updateLineItem(
                          setEditable,
                          index,
                          "costTracking.grossMarginRate",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LineItems;
