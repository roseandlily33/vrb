"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
// Modal removed: invoice creation will be an inline form
import { useMemo } from "react";
import styles from "./payments.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function PaymentsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState([]);
  const [client, setClient] = useState(null);
  const [serviceItems, setServiceItems] = useState([]);
  const [form, setForm] = useState({
    amount: "",
    currency: "CAD",
    method: "card",
    status: "pending",
    date: "",
    invoiceId: "",
    notes: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const [cRes, pRes] = await Promise.all([
        fetch(`${API_URL}/api/clients/${id}`, { headers }),
        fetch(`${API_URL}/api/payments?clientId=${id}`, { headers }),
      ]);
      if (!cRes.ok) throw new Error("Failed to load client");
      const cJson = await cRes.json();
      const pJson = await pRes.json();
      setClient(cJson.client);
      setPayments(pJson.payments || []);
      // prefetch service items for invoice creation
      try {
        const siRes = await fetch(`${API_URL}/api/service-items`, { headers });
        if (siRes.ok) {
          const siJson = await siRes.json();
          setServiceItems(siJson.items || []);
        }
      } catch (err) {
        /* ignore */
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const total = payments.reduce((s, p) => s + (p.amount || 0), 0);
  const paid = payments
    .filter((p) => p.status === "completed")
    .reduce((s, p) => s + (p.amount || 0), 0);
  const unpaid = Math.max(0, total - paid);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const body = {
        ...form,
        clientId: id,
        amount: Number(form.amount),
        date: form.date || undefined,
      };
      const res = await fetch(`${API_URL}/api/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      setForm({
        amount: "",
        currency: "CAD",
        method: "card",
        status: "pending",
        date: "",
        invoiceId: "",
        notes: "",
      });
      await fetchData();
    } catch (err) {
      console.error(err);
      alert(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (pid) => {
    if (!confirm("Delete payment? This cannot be undone.")) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API_URL}/api/payments/${pid}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed");
      await fetchData();
    } catch (err) {
      alert(err.message || "Delete failed");
    }
  };

  
  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button
          className={styles.back}
          onClick={() => router.push(`/clientdashboard/${id}`)}
        >
          Back
        </button>

        <div>
          <span className={styles.eyebrow}>Invoices & Payments</span>
          <h1>Payments — {client?.businessName || client?.name}</h1>
        </div>

        <div className={styles.headerActions}>
          <button
            onClick={() => router.push(`/clientdashboard/${id}/invoices/create`)}
            className={styles.create}
          >
            Create Invoice
          </button>

          <button
            onClick={() => router.push(`/clientdashboard/${id}/payments/create`)}
            className={styles.createSecondary}
          >
            Create Payment
          </button>
        </div>
      </div>

      {loading ? (
        <div className={styles.emptyState}>Loading...</div>
      ) : (
        <div>
          <section className={styles.summary}>
            <article>
              <span>Total</span>
              <strong>${total}</strong>
            </article>

            <article>
              <span>Paid</span>
              <strong>${paid}</strong>
            </article>

            <article>
              <span>Unpaid</span>
              <strong>${unpaid}</strong>
            </article>
          </section>

          <section className={styles.list}>
            <div className={styles.listHeader}>
              <h2>Payment History</h2>
            </div>

            {payments.length === 0 ? (
              <div className={styles.emptyState}>No payments yet</div>
            ) : (
              <div className={styles.paymentTable}>
                <div className={styles.tableHead}>
                  <div>Invoice</div>
                  <div>Amount</div>
                  <div>Method</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Action</div>
                </div>

                {payments.map((p) => (
                  <div key={p._id} className={styles.row}>
                    <div>
                      {p.invoiceId ? (
                        <button
                          className={styles.link}
                          onClick={() =>
                            router.push(`/clientdashboard/${id}/invoices/${p.invoiceId}`)
                          }
                        >
                          {p.invoiceId}
                        </button>
                      ) : (
                        "—"
                      )}
                    </div>
                    <div>
                      {p.amount} {p.currency}
                    </div>
                    <div>{p.method}</div>
                    <div>{new Date(p.date).toLocaleDateString()}</div>
                    <div>
                      <span
                        className={`${styles.statusBadge} ${styles[p.status]}`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div>
                      <button
                        className={styles.delete}
                        onClick={() => handleDelete(p._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {/* Creation moved to dedicated pages */}
    </main>
  );
}
