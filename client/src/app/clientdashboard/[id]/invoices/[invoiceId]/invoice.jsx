import React from "react";
import styles from "./page.module.css";
import LineItems from "./lineItems";
import Image from "next/image";
// import Modal from "../../../../components/Modal/Modal";

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

  const toDateInputValue = (val) => {
    if (!val) return "";
    if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}$/.test(val)) return val;
    const d = new Date(val);
    if (isNaN(d.getTime())) return "";
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };
  return (
    <>
      <section className={styles.invoiceDocument} ref={docRef}>
        {(invoice?.status === "paid" || remaining <= 0) && (
          <div className={styles.paidWatermark} aria-hidden>
            PAID
          </div>
        )}
        <div className={styles.invoiceTop}>
          <div className={styles.brandBlock}>
            <div className={styles.logoPlaceholder}>
              <Image
                src="/VRBLogo.png"
                alt="VRB Web Design and Development"
                width={200}
                height={200}
              />
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
                  value={toDateInputValue(editable?.issuedAt)}
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
                  value={toDateInputValue(editable?.dueDate)}
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
            const key = item?._id || index;
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
                  <LineItems
                    item={item}
                    unitCost={unitCost}
                    styles={styles}
                    formatMoney={formatMoney}
                    isEditing={isEditing}
                    index={index}
                    updateLineItem={updateLineItem}
                    setEditable={setEditable}
                  />
                  {item?.costTracking?.enabled === true && (
                    <div
                      style={{ textAlign: "right" }}
                      className={styles.noPrint}
                    >
                      <div className={styles.noPrint}>
                        <strong>Profit:</strong>{" "}
                        {formatMoney(Number(lineProfit))}
                      </div>
                      <div
                        style={{ color: "var(--grey-600)" }}
                        className={styles.noPrint}
                      >
                        <small>Gross = charge − cost</small>
                      </div>
                    </div>
                  )}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  alignSelf: "flex-end",
                  alignContent: "flex-end",
                  gap: "1rem",
                  textAlign: "right",
                }}
              >
                {(payments || []).map((p, i) => (
                  <div key={p?._id || i}>
                    <span style={{ color: "var(--grey1)", fontWeight: "bold" }}>
                      - {formatMoney(p?.amount || 0)}
                    </span>
                    <br />
                    <span>
                      {p?.date ? formatDate(p.date) : ""}
                      {p?.method ? ` - (${p.method})` : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span>Paid</span>
              <strong>{formatMoney(paidSoFar)}</strong>
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
