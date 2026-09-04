"use client";
import React from "react";
import Image from "next/image";
import styles from "../../page.module.css";

const ReceiptTemplate = ({
  invoice,
  displayedInvoice,
  receipt,
  formatDate,
  formatMoney,
  docRef,
  payments,
}) => {
  // console.log("Invoice", invoice);
  // console.log("Receipt", receipt);
  // console.log("Payments", payments);

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
  // const lastPayment = (payments || []).slice(-1)[0];
  const displayNumber = receipt?.receiptNumber || invoice?.invoiceId || "";
  const displayIssuedAt = receipt?.issuedAt || invoice?.issuedAt;
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
                loading="lazy"
              />
            </div>

            <div className={styles.issuerDetails}>
              <h2>VRB Web Design and Development</h2>

              <p>Halifax, Nova Scotia</p>

              <p>victoria@vrbwebdesignanddev.com</p>

              <p>(902) 817-1001</p>

              <p>www.vrbwebdesignanddev.com</p>
              <p>HST# 77932 7972 RT0001</p>
            </div>
          </div>

          <div className={styles.invoiceMetaCard}>
            <h3>Receipt</h3>

            <div className={styles.metaRow}>
              <span>Receipt No.</span>
              <strong>{displayNumber || "RC-0000"}</strong>
            </div>

            <div className={styles.metaRow}>
              <span>Issued</span>
              <strong>{formatDate(displayIssuedAt)}</strong>
            </div>

            <div className={styles.metaRow}>
              <span>Paid On</span>
              <strong>
                {payments && payments.length > 0
                  ? formatDate(payments[payments.length - 1].date)
                  : "Not paid yet"}
              </strong>
            </div>

            <div className={styles.metaRow}>
              <span>Status</span>
              <strong className={styles.status}>
                {invoice?.status || "Unpaid"}
              </strong>
            </div>
          </div>
        </div>

        <div className={styles.invoiceIntro}>
          <>
            <h2 className={styles.invoiceTitle}>
              {displayedInvoice?.title || "Receipt for Services"}
            </h2>

            <p className={styles.invoiceDescription}>
              {displayedInvoice?.description ||
                "Thank you for your business. Please see the receipt details below."}
            </p>
          </>
        </div>

        <div className={styles.billGrid}>
          <div className={styles.billCard}>
            <span className={styles.cardLabel}>Bill To</span>

            <h3>
              {invoice?.clientId?.businessName ||
                invoice?.clientId?.name ||
                "Client Name"}
            </h3>

            {invoice?.clientId?.email && <p>{invoice.clientId.email}</p>}

            {invoice?.clientId?.phone && <p>{invoice.clientId.phone}</p>}

            {invoice?.clientId?.address?.street && (
              <p>{invoice?.clientId?.address?.street}</p>
            )}

            {(invoice?.clientId?.address?.city ||
              invoice?.clientId?.address?.province ||
              invoice?.clientId?.address?.postalCode) && (
              <p>
                {[
                  invoice?.clientId?.address?.city,
                  invoice?.clientId?.address?.province,
                  invoice?.clientId?.address?.postalCode,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            )}
          </div>

          <div className={styles.billCard}>
            <span className={styles.cardLabel}>Payment Details</span>

            <p>
              <strong>
                {payments?.length === 1
                  ? "Payment Method:"
                  : "Payment Methods:"}
              </strong>{" "}
              {payments?.map((p) => p?.method).join(", ") || "N/A"}
            </p>
            <p>
              <strong>Currency:</strong> {displayedInvoice?.currency || "CAD"}
            </p>
          </div>
        </div>

        <div className={styles.invoiceTable}>
          <div className={styles.invoiceTableHead}>
            <div>Description</div>
            <div></div>
            <div> </div>
            <div>Total</div>
          </div>

          <div className={styles.invoiceTableRow}>
            <div className={styles.descriptionColumn}>
              {invoice?.lineItems &&
                invoice.lineItems.length > 0 &&
                invoice.lineItems.map((item, index) => (
                  <div
                    key={index}
                    className={styles.lineItem}
                    style={{ marginBottom: "1rem" }}
                  >
                    <div className={styles.lineItemDescription}>
                      {item.description || "Service"}
                    </div>
                  </div>
                ))}
            </div>
            <div></div>
            <div> </div>
            <div className={styles.lineItemTotal}>
              {invoice?.lineItems &&
                invoice.lineItems.length > 0 &&
                invoice.lineItems.map((item, index) => (
                  <div
                    key={index}
                    className={styles.lineItemTotal}
                    style={{ marginBottom: "1rem" }}
                  >
                    {formatMoney(item.unitPrice * item.quantity || 0)}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.invoiceBottom}>
          <div className={styles.invoiceNotesBlock}>
            <div className={styles.notesSection}>
              <h4>Notes</h4>

              <p>{receipt?.notes || invoice?.notes || ""}</p>
            </div>

            <div className={styles.notesSection}>
              <h4>Thank You</h4>

              <p>
                Thank you for your business. If you have any questions, please
                reach out at any time: victoria@vrbwebdesignanddev.com
              </p>
            </div>
          </div>

          <div className={styles.invoiceTotalsCard}>
            <div>
              <span>Subtotal</span>
              <strong>{formatMoney(invoice?.subtotal)}</strong>
            </div>

            <div>
              <span>Tax</span>

              <strong>{formatMoney(invoice?.tax)}</strong>
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
              <strong>{formatMoney(invoice?.total - paidSoFar)}</strong>
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

export default ReceiptTemplate;
