"use client";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { formatMoney } from "./helpers/formatMoney";
import { updateIssuerField } from "./helpers/updateIssuerField";
import { updateEditableField } from "./helpers/updateEditableField";
import { formatDate } from "./helpers/formatDate";
import { deleteInvoice } from "./helpers/deleteInvoice";
import { saveEdit } from "./helpers/saveEdit";
import InvoiceTemplate from "./invoice";
import { printInvoice } from "./helpers/printInvoice";
import { addLineItem } from "./helpers/addLineItem";
import { submitAndMarkPaid } from "./helpers/submitAndMarkPaid";
import { startEdit } from "./helpers/startEdit";
import { fetchPayments } from "./helpers/fetchPayments";
import { cancelEdit } from "./helpers/cancelEdit";
import AddAPayment from "./addAPayment";
import { updateLineItem } from "./helpers/updateLineItem";
import { updateTax } from "./helpers/updateTax";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function InvoicePreview() {
  const { id, invoiceId } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editable, setEditable] = useState(null);
  const [openPayment, setOpenPayment] = useState(false);
  const [payments, setPayments] = useState([]);
  const docRef = useRef(null);

  const [paymentForm, setPaymentForm] = useState({
    amount: "",
    currency: "CAD",
    method: "card",
    status: "pending",
    date: "",
    notes: "",
  });

  useEffect(() => {
    if (invoiceId) {
      fetchInvoice();
    }
  }, [invoiceId]);

  const createReceipt = async () => {
    if (!invoice) return;
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const body = {
        clientId: invoice.clientId?._id || invoice.clientId,
        invoiceId: invoice._id,
        amount: Number(
          displayedInvoice.total ?? displayedInvoice.subtotal ?? 0,
        ),
        currency: displayedInvoice.currency || "CAD",
        receiptNumber: `RC-${displayedInvoice.invoiceId || displayedInvoice._id}`,
        issuedAt: new Date(),
        notes: `Receipt for invoice ${displayedInvoice.invoiceId || displayedInvoice._id}`,
      };

      const res = await fetch(`${API_URL}/api/receipts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Create receipt failed");
      const r = data.receipt;
      router.push(
        `/clientdashboard/${id}/invoices/${displayedInvoice._id}/receipts/${r._id}`,
      );
    } catch (err) {
      console.error(err);
      alert(err.message || "Create receipt failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (invoice && invoice.clientId)
      fetchPayments(invoice, setPayments, API_URL);
  }, [invoice]);

  const fetchInvoice = async () => {
    setLoading(true);

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${API_URL}/api/invoices/${invoiceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to load invoice");
      }

      const loadedInvoice = data.invoice;

      // Normalize date fields to local YYYY-MM-DD strings so the
      // client UI doesn't shift dates due to timezone conversions.
      const toDateInputValue = (val) => {
        if (!val) return null;
        if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}$/.test(val)) return val;
        const d = new Date(val);
        if (isNaN(d.getTime())) return null;
        // Use UTC components when the server stored UTC midnight values
        // so the date input reflects the DB date instead of local shift.
        const y = d.getUTCFullYear();
        const m = String(d.getUTCMonth() + 1).padStart(2, "0");
        const day = String(d.getUTCDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
      };

      if (loadedInvoice.issuedAt) {
        loadedInvoice.issuedAt = toDateInputValue(loadedInvoice.issuedAt);
      }
      if (loadedInvoice.dueDate) {
        loadedInvoice.dueDate = toDateInputValue(loadedInvoice.dueDate);
      }

      setInvoice(loadedInvoice);
      setEditable(null);
      setIsEditing(false);

      setPaymentForm((prev) => ({
        ...prev,
        amount: loadedInvoice.total || 0,
        currency: loadedInvoice.currency || "CAD",
      }));
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to load invoice");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.wrap}>Loading...</div>;
  }

  if (!invoice) {
    return <div className={styles.wrap}>No invoice found.</div>;
  }

  const displayedInvoice = isEditing && editable ? editable : invoice;

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.back}
          onClick={() => router.push(`/clientdashboard/${id}/payments`)}
        >
          Back
        </button>

        <div className={styles.pageHeading}>
          <span className={styles.eyebrow}>Invoice Preview</span>
          <h1>Invoice — {invoice.invoiceId}</h1>
        </div>

        <div className={styles.headerActions}>
          {!isEditing ? (
            <>
              <button
                type="button"
                className={styles.print}
                onClick={() => printInvoice({ isEditing })}
              >
                Print / Download
              </button>
              <button
                type="button"
                className={styles.print}
                onClick={() => setOpenPayment(true)}
              >
                Add Payment
              </button>
              <button
                type="button"
                className={styles.delete}
                onClick={() =>
                  deleteInvoice({
                    invoice: displayedInvoice,
                    id,
                    API_URL,
                    router,
                  })
                }
              >
                Delete Invoice
              </button>

              <button
                type="button"
                className={styles.create}
                onClick={() =>
                  submitAndMarkPaid(displayedInvoice._id, router, API_URL)
                }
              >
                Submit / Mark Paid
              </button>
              <button
                type="button"
                className={styles.view}
                onClick={createReceipt}
              >
                Make Receipt
              </button>
              <button
                type="button"
                className={styles.view}
                onClick={() =>
                  startEdit({
                    invoice: displayedInvoice,
                    setEditable,
                    setIsEditing,
                  })
                }
              >
                Edit Invoice
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className={styles.print}
                onClick={() => addLineItem({ setEditable, setIsEditing })}
              >
                Add Item
              </button>

              <button
                type="button"
                className={styles.print}
                onClick={() =>
                  saveEdit({
                    editable,
                    invoice: displayedInvoice,
                    setInvoice,
                    setEditable,
                    setIsEditing,
                    API_URL: API_URL,
                  })
                }
              >
                Save
              </button>

              <button
                type="button"
                className={styles.delete}
                onClick={() => cancelEdit({ setEditable, setIsEditing })}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      <InvoiceTemplate
        invoice={invoice}
        displayedInvoice={displayedInvoice}
        payments={payments}
        setPayments={setPayments}
        editable={editable}
        isEditing={isEditing}
        updateIssuerField={updateIssuerField}
        updateEditableField={updateEditableField}
        formatDate={formatDate}
        formatMoney={formatMoney}
        docRef={docRef}
        setEditable={setEditable}
        updateLineItem={updateLineItem}
        updateTax={updateTax}
      />

      <AddAPayment
        open={openPayment}
        onClose={() => setOpenPayment(false)}
        invoice={invoice}
        apiUrl={API_URL}
        onCreated={() => fetchPayments(invoice, setPayments, API_URL)}
      />
    </main>
  );
}
