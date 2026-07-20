import React from "react";
import styles from "./page.module.css";

import Modal from "../../../../components/Modal/Modal";

const InvoiceTemplate = ({
  invoice,
  displayedInvoice,
  editable,
  isEditing,
  updateIssuerField,
  updateEditableField,
  formatDate,
  formatMoney,
  docRef,
  setEditable,
  updateLineItem,
  updateTax,
  payments,
}) => {
  console.log("Invoice", invoice);
  const paidSoFar = (payments || []).reduce(
    (s, p) => s + Number(p.amount || 0),
    0,
  );

  const subtotal = Number(displayedInvoice?.subtotal || 0);
  const taxAmount = Number(
    (displayedInvoice?.tax ??
      Number(
        ((subtotal * (displayedInvoice?.taxRate || 0)) / 100).toFixed(2),
      )) ||
      0,
  );
  const invoiceTotal = Number(
    displayedInvoice?.total ?? Number((subtotal + taxAmount).toFixed(2)),
  );
  const remaining = Number((invoiceTotal - paidSoFar).toFixed(2));
  return (
    <>
      <section className={styles.invoiceDocument} ref={docRef}>
        <div className={styles.invoiceTop}>
          <div className={styles.brandBlock}>
            <div className={styles.logoPlaceholder}>
              <img src="/VRBLogo.png" alt="VRB Web Design and Development" />
            </div>

            {!isEditing ? (
              <div className={styles.issuerDetails}>
                <h2>VRB Web Design and Development</h2>

                <p>Halifax, Nova Scotia</p>

                <p>victoria@vrbwebdesignanddev.com</p>

                <p>(902) 817-1001</p>

                <p>www.vrbwebdesignanddev.com</p>
                <p>HST# 77932 7972 RT0001</p>
              </div>
            ) : (
              <div className={styles.issuerForm}>
                <input
                  type="text"
                  placeholder="Your business name"
                  value={editable?.issuer?.name || ""}
                  onChange={(e) =>
                    updateIssuerField(setEditable, "name", e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="Business address"
                  value={editable?.issuer?.address || ""}
                  onChange={(e) =>
                    updateIssuerField(setEditable, "address", e.target.value)
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={editable?.issuer?.email || ""}
                  onChange={(e) =>
                    updateIssuerField(setEditable, "email", e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="Phone"
                  value={editable?.issuer?.phone || ""}
                  onChange={(e) =>
                    updateIssuerField(setEditable, "phone", e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="Website"
                  value={editable?.issuer?.website || ""}
                  onChange={(e) =>
                    updateIssuerField(setEditable, "website", e.target.value)
                  }
                />
              </div>
            )}
          </div>

          <div className={styles.invoiceMetaCard}>
            <h3>Invoice</h3>

            <div className={styles.metaRow}>
              <span>Invoice No.</span>
              <strong>{invoice.invoiceId || "INV-0000"}</strong>
            </div>

            <div className={styles.metaRow}>
              <span>Issued</span>
              {!isEditing ? (
                <strong>{formatDate(invoice.issuedAt)}</strong>
              ) : (
                <input
                  type="date"
                  value={
                    editable?.issuedAt
                      ? String(editable.issuedAt).split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    updateEditableField(setEditable, "issuedAt", e.target.value)
                  }
                />
              )}
            </div>

            <div className={styles.metaRow}>
              <span>Due</span>

              {!isEditing ? (
                <strong>
                  {invoice.dueDate ? formatDate(invoice.dueDate) : "Due date"}
                </strong>
              ) : (
                <input
                  type="date"
                  value={
                    editable?.dueDate
                      ? String(editable.dueDate).split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    updateEditableField(setEditable, "dueDate", e.target.value)
                  }
                />
              )}
            </div>

            <div className={styles.metaRow}>
              <span>Status</span>

              {!isEditing ? (
                <strong className={styles.status}>
                  {invoice.status || "Unpaid"}
                </strong>
              ) : (
                <select
                  value={editable?.status || "unpaid"}
                  onChange={(e) =>
                    updateEditableField(setEditable, "status", e.target.value)
                  }
                >
                  <option value="draft">Draft</option>
                  <option value="unpaid">Unpaid</option>
                  <option value="pending">Pending</option>
                  <option value="partially_paid">Partially Paid</option>
                  <option value="paid">Paid</option>
                  <option value="overdue">Overdue</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              )}
            </div>
          </div>
        </div>

        <div className={styles.invoiceIntro}>
          {!isEditing ? (
            <>
              <h2 className={styles.invoiceTitle}>
                {invoice.title || "Invoice for Services"}
              </h2>

              <p className={styles.invoiceDescription}>
                {invoice.description ||
                  "Thank you for your business. Please see the invoice details below."}
              </p>
            </>
          ) : (
            <div className={styles.editTitleBlock}>
              <input
                className={styles.titleInput}
                value={editable?.title || ""}
                onChange={(e) =>
                  updateEditableField(setEditable, "title", e.target.value)
                }
                placeholder="Invoice title"
              />

              <textarea
                className={styles.descInput}
                value={editable?.description || ""}
                onChange={(e) =>
                  updateEditableField(
                    setEditable,
                    "description",
                    e.target.value,
                  )
                }
                placeholder="Invoice description"
              />
            </div>
          )}
        </div>

        <div className={styles.billGrid}>
          <div className={styles.billCard}>
            <span className={styles.cardLabel}>Bill To</span>

            <h3>
              {invoice.clientId?.businessName ||
                invoice.clientId?.name ||
                "Client Name"}
            </h3>

            {invoice.clientId?.email && <p>{invoice.clientId.email}</p>}

            {invoice.clientId?.phone && <p>{invoice.clientId.phone}</p>}

            {invoice.clientId?.address?.street && (
              <p>{invoice.clientId.address.street}</p>
            )}

            {(invoice.clientId?.address?.city ||
              invoice.clientId?.address?.province ||
              invoice.clientId?.address?.postalCode) && (
              <p>
                {[
                  invoice.clientId?.address?.city,
                  invoice.clientId?.address?.province,
                  invoice.clientId?.address?.postalCode,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            )}
          </div>

          <div className={styles.billCard}>
            <span className={styles.cardLabel}>Payment Details</span>

            <p>
              <strong>Payment Method:</strong> E-transfer / Cheque / Cash
            </p>

            <p>
              <strong>Send Payment To:</strong> vrose834@gmail.com
            </p>

            <p>
              <strong>Currency:</strong> {displayedInvoice?.currency || "CAD"}
            </p>
          </div>
        </div>

        <div className={styles.invoiceTable}>
          <div className={styles.invoiceTableHead}>
            <div>Description</div>
            <div>Qty</div>
            <div>Unit Price</div>
            <div>Total</div>
          </div>

          {(displayedInvoice?.lineItems || [])?.map((item, index) => {
            const key = item?._id || `${item?.description}-${index}`;
            const unitCost = item?.costTracking?.unitCost || 0;
            const totalCost = item?.costTracking?.totalCost || 0;
            const lineProfit = Number(
              (item?.total || 0) - (totalCost || 0),
            ).toFixed(2);

            return (
              <React.Fragment key={key}>
                <div className={styles.invoiceTableRow}>
                  <div className={styles.descriptionColumn}>
                    {isEditing ? (
                      <input
                        type="text"
                        value={item?.description || ""}
                        onChange={(e) =>
                          updateLineItem(
                            setEditable,
                            index,
                            "description",
                            e.target.value,
                          )
                        }
                      />
                    ) : (
                      item?.description
                    )}
                  </div>

                  <div>
                    {isEditing ? (
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={item?.quantity ?? 0}
                        onChange={(e) =>
                          updateLineItem(
                            setEditable,
                            index,
                            "quantity",
                            e.target.value,
                          )
                        }
                      />
                    ) : (
                      item?.quantity
                    )}
                  </div>

                  <div>
                    {isEditing ? (
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item?.unitPrice ?? 0}
                        onChange={(e) =>
                          updateLineItem(
                            setEditable,
                            index,
                            "unitPrice",
                            e.target.value,
                          )
                        }
                      />
                    ) : (
                      formatMoney(item?.unitPrice)
                    )}
                  </div>

                  <div>{formatMoney(item?.total)}</div>
                </div>
                <div
                  // ${styles.noPrint}
                  className={`${styles.lineDetails} `}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <div>
                        <strong>Charging:</strong>{" "}
                        {formatMoney(item?.unitPrice)} × {item?.quantity} ={" "}
                        {formatMoney(item?.total)}
                      </div>
                      <div>
                        <strong>Taxable:</strong>{" "}
                        {item?.itemType !== "reimbursable" ? "Yes" : "No"}
                      </div>
                    </div>

                    <div>
                      {/* <p>cost tracking</p> */}
                      {item?.costTracking?.enabled === true ? (
                        <>
                          <div>
                            <strong>Supplier:</strong>{" "}
                            {item.costTracking.supplier || "—"}
                          </div>
                          <div>
                            <strong>Unit cost:</strong> {formatMoney(unitCost)}
                          </div>
                          <div>
                            <strong>Total cost:</strong>{" "}
                            {formatMoney(totalCost)}
                          </div>
                          <div>
                            <strong>Markup %:</strong>{" "}
                            {item.costTracking.markupRate ?? "—"}
                          </div>
                        </>
                      ) : (
                        <div>
                          <em>No cost tracking for this line</em>
                        </div>
                      )}
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <div>
                        <strong>Profit:</strong>{" "}
                        {formatMoney(Number(lineProfit))}
                      </div>
                      <div style={{ color: "var(--grey-600)" }}>
                        <small>Gross = charge − cost</small>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className={styles.invoiceBottom}>
          <div className={styles.invoiceNotesBlock}>
            <div className={styles.notesSection}>
              <h4>Notes</h4>

              {!isEditing ? (
                <p>
                  {invoice.notes ||
                    "Thank you for choosing my services. Please reach out if you have any questions about this invoice."}
                </p>
              ) : (
                <textarea
                  value={editable?.notes || ""}
                  onChange={(e) =>
                    updateEditableField(setEditable, "notes", e.target.value)
                  }
                />
              )}
            </div>

            <div className={styles.notesSection}>
              <h4>Terms</h4>

              {!isEditing ? (
                <p>
                  {invoice.terms ||
                    "Payment is due by the listed due date. Late payments may be subject to additional fees."}
                </p>
              ) : (
                <textarea
                  value={editable?.terms || ""}
                  onChange={(e) =>
                    updateEditableField(setEditable, "terms", e.target.value)
                  }
                />
              )}
            </div>
          </div>

          <div className={styles.invoiceTotalsCard}>
            <div>
              <span>Subtotal</span>
              <strong>{formatMoney(displayedInvoice.subtotal)}</strong>
            </div>

            <div>
              <span>Tax</span>

              {isEditing ? (
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={editable?.tax ?? 0}
                  onChange={(e) => updateTax(setEditable, e.target.value)}
                />
              ) : (
                <strong>{formatMoney(taxAmount)}</strong>
              )}
            </div>

            <div>
              <span>Payments</span>
              <strong>-{formatMoney(paidSoFar)}</strong>
            </div>

            <div className={styles.grandTotal}>
              <span>Total Due</span>
              <strong>{formatMoney(remaining)}</strong>
            </div>
          </div>
        </div>

        <div className={styles.invoiceFooter}>
          <p>
            VRB Web Design &amp; Development
            <span>•</span>
            victoria@vrbwebdesignanddev.com
            <span>•</span>
            www.vrbwebdesignanddev.com
          </p>
        </div>
      </section>
    </>
  );
};

export default InvoiceTemplate;
