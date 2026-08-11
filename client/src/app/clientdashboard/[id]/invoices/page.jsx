"use client";
import React, { useEffect, useState } from "react";
import { formatDate } from "./[invoiceId]/helpers/formatDate";
import { useParams, useRouter } from "next/navigation";
import styles from "../payments/payments.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function InvoicesList() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, [id]);

  const fetchInvoices = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API_URL}/api/invoices?clientId=${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed to load invoices");
      setInvoices(j.invoices || []);
    } catch (err) {
      console.error(err);
      setInvoices([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => router.push(`/clientdashboard/${id}/payments`)}>
          Back
        </button>
        <div>
          <span className={styles.eyebrow}>Invoices</span>
          <h1>Invoices — {invoices.length}</h1>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.create} onClick={() => router.push(`/clientdashboard/${id}/invoices/create`)}>
            Create Invoice
          </button>
        </div>
      </div>

      {loading ? (
        <div className={styles.emptyState}>Loading...</div>
      ) : invoices.length === 0 ? (
        <div className={styles.emptyState}>No invoices</div>
      ) : (
        <section className={styles.list}>
          <div className={styles.listHeader}><h2>All Invoices</h2></div>

          <div className={styles.paymentTable}>
            <div className={styles.tableHead}>
              <div>Invoice</div>
              <div>Date</div>
              <div>Subtotal</div>
              <div>Tax</div>
              <div>Total</div>
              <div>Action</div>
            </div>

            {invoices.map((inv) => (
              <div key={inv._id} className={styles.row}>
                <div>
                  <button className={styles.link} onClick={() => router.push(`/clientdashboard/${id}/invoices/${inv._id}`)}>
                    {inv.invoiceId || inv._id}
                  </button>
                </div>
                <div>{formatDate(inv.issuedAt || inv.createdAt)}</div>
                <div>${(inv.subtotal || 0).toFixed(2)}</div>
                <div>${(inv.tax || 0).toFixed(2)}</div>
                <div>${(inv.total || 0).toFixed(2)}</div>
                <div>
                  <button className={styles.view} onClick={() => router.push(`/clientdashboard/${id}/invoices/${inv._id}`)}>
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
