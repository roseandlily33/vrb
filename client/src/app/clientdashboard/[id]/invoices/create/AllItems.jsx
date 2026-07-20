import React from "react";
import styles from "./InvoicePreview.module.css";

const AllItems = ({
  taxRate,
  total,
  handleCreate,
  invoiceMeta,
  invoiceItems = [],
  subtotal,
  tax,
  loading,
  trackedCosts,
  grossMarginAfterTrackedCosts,
}) => {
  return (
    <>
      <div className={styles.invoicePanel}>
        <h4>Invoice Preview</h4>

        <div className={styles.miniInvoice}>
          <div className={styles.miniHeader}>
            <strong>{invoiceMeta.title || "Invoice Preview Title"}</strong>
          </div>

          <div className={styles.miniItems}>
            {invoiceItems.map((it) => (
              <div key={it.localId} className={styles.miniItem}>
                <div className={styles.miniDesc}>{it?.title}</div>
                <div className={styles.miniQty}>{it?.quantity} ×</div>
                <div className={styles.miniPrice}>
                  {Number(it?.unitPrice || 0).toFixed(2)}
                </div>
                <div className={styles.miniTotal}>
                  ${Number(it?.total || 0).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.miniTotals}>
            <div>
              <span>Subtotal</span>
              <strong>${subtotal?.toFixed(2)}</strong>
            </div>

            <div>
              <span>HST ({taxRate}%)</span>
              <strong>${tax?.toFixed(2)}</strong>
            </div>

            <div className={styles.grandTotal}>
              <span>Total</span>
              <strong>${total?.toFixed(2)}</strong>
            </div>
          </div>

          <div className={styles.createWrapper}>
            <button
              type="button"
              disabled={loading || !invoiceItems.length}
              onClick={handleCreate}
              className={styles.create}
            >
              {loading ? "Creating Invoice..." : "Create Invoice"}
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.invoicePanel} ${styles.noPrint}`}>
        <h4>Internal Cost Summary</h4>

        <p>
          This information is for your records and should not appear on the
          client-facing invoice.
        </p>

        <div className={styles.previewSummary}>
          <div>
            <span>Tracked supplier costs</span>
            <strong>${trackedCosts?.toFixed(2)}</strong>
          </div>

          <div>
            <span>Sales before HST</span>
            <strong>${subtotal?.toFixed(2)}</strong>
          </div>

          <div>
            <span>Margin after tracked costs</span>
            <strong>${grossMarginAfterTrackedCosts?.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllItems;
