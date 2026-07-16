import React from "react";
import styles from "../invoices/[invoiceId]/page.module.css";

const ReceiptTemplate = ({ receipt, editable, isEditing, setEditable, formatMoney, formatDate, payments }) => {
  const paidFromPayments = (receipt.paymentIds || []).reduce((s, p) => s + Number(p.amount || 0), 0);
  const amount = Number(receipt.amount || 0);

  return (
    <section className={styles.invoiceDocument}>
      <div className={styles.invoiceTop}>
        <div className={styles.brandBlock}>
          <div className={styles.logoPlaceholder}>
            <img src="/VRBLogo.png" alt="VRB" />
          </div>
          <div className={styles.issuerDetails}>
            <h2>{receipt.issuer?.name || "VRB Web Design and Development"}</h2>
            <p>{receipt.issuer?.address || "Halifax, Nova Scotia"}</p>
            <p>{receipt.issuer?.email || "victoria@vrbwebdesignanddev.com"}</p>
            <p>{receipt.issuer?.phone || "(902) 817-1001"}</p>
            <p>{receipt.issuer?.website || "www.vrbwebdesignanddev.com"}</p>
          </div>
        </div>

        <div className={styles.invoiceMetaCard}>
          <h3>Receipt</h3>
          <div className={styles.metaRow}>
            <span>Receipt No.</span>
            <strong>{receipt.receiptNumber || "—"}</strong>
          </div>
          <div className={styles.metaRow}>
            <span>Issued</span>
            <strong>{formatDate(receipt.issuedAt)}</strong>
          </div>
          <div className={styles.metaRow}>
            <span>Amount</span>
            <strong>{formatMoney(amount)}</strong>
          </div>
        </div>
      </div>

      <div style={{ padding: 16 }}>
        <h4>Client</h4>
        <div>{receipt.clientId?.businessName || receipt.clientId?.name}</div>
        <div>{receipt.clientId?.email}</div>
      </div>

      <div style={{ padding: 16 }}>
        <h4>Payments Included</h4>
        {receipt.paymentIds && receipt.paymentIds.length ? (
          <ul>
            {receipt.paymentIds.map((p) => (
              <li key={p._id}>
                {p._id} — {formatMoney(p.amount)} — {new Date(p.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <div>No linked payments</div>
        )}
      </div>

      <div style={{ padding: 16 }}>
        <h4>Notes</h4>
        <div>{receipt.notes || ""}</div>
      </div>
    </section>
  );
};

export default ReceiptTemplate;
