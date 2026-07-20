import React from "react";
import styles from "./page.module.css";

const AboutInvoice = ({ invoiceMeta, setInvoiceMeta }) => {
  return (
    <section
      style={{
        marginBottom: "2rem",
        borderBottom: "2px solid var(--blue-600)",
      }}
    >
      <h3 style={{ marginBottom: "2rem" }}>Invoice Details</h3>
      <div className={styles.invoiceMeta}>
        <label>Currency</label>
        <select
          value={invoiceMeta.currency}
          onChange={(event) =>
            setInvoiceMeta((current) => ({
              ...current,
              currency: event.target.value,
            }))
          }
        >
          <option value="CAD">CAD</option>
          <option value="USD">USD</option>
        </select>
      </div>
      <div className={styles.invoiceMeta}>
        <label>Due Date</label>
        <input
          type="date"
          value={invoiceMeta.dueDate}
          onChange={(event) =>
            setInvoiceMeta((current) => ({
              ...current,
              dueDate: event.target.value,
            }))
          }
        />
      </div>
      <div className={styles.invoiceMeta}>
        <label>Tax Rate %</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={invoiceMeta.taxRate}
          onChange={(event) =>
            setInvoiceMeta((current) => ({
              ...current,
              taxRate: Number(event.target.value || 0),
            }))
          }
        />
      </div>
      <div className={styles.invoiceMeta}>
        <label>Invoice Title</label>
        <input
          type="text"
          placeholder="Website design, print order, monthly services..."
          value={invoiceMeta.title}
          onChange={(event) =>
            setInvoiceMeta((current) => ({
              ...current,
              title: event.target.value,
            }))
          }
        />
      </div>
      <div className={styles.invoiceMeta}>
        <label>Description</label>
        <input
          placeholder="Optional invoice description"
          value={invoiceMeta.description}
          onChange={(event) =>
            setInvoiceMeta((current) => ({
              ...current,
              description: event.target.value,
            }))
          }
        />
      </div>
    </section>
  );
};

export default AboutInvoice;
