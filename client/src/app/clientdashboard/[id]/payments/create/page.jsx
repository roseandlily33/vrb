"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../payments.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function PaymentCreate() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    amount: "",
    currency: "CAD",
    method: "card",
    status: "pending",
    date: "",
    invoiceId: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

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
      router.push(`/clientdashboard/${id}/payments`);
    } catch (err) {
      alert(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => router.back()}>
          Back
        </button>
        <div>
          <span className={styles.eyebrow}>Create Payment</span>
          <h1>New Payment</h1>
        </div>
        <div style={{ minWidth: 220 }} />
      </div>

      <section className={styles.inlineForm}>
        <form onSubmit={handleCreate} className={styles.form}>
          <label>
            Amount
            <input
              required
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              type="number"
              step="0.01"
            />
          </label>

          <label>
            Currency
            <select
              value={form.currency}
              onChange={(e) => setForm({ ...form, currency: e.target.value })}
            >
              <option>CAD</option>
              <option>USD</option>
            </select>
          </label>

          <label>
            Method
            <select
              value={form.method}
              onChange={(e) => setForm({ ...form, method: e.target.value })}
            >
              <option value="card">card</option>
              <option value="bank_transfer">bank_transfer</option>
              <option value="cash">cash</option>
            </select>
          </label>

          <label>
            Status
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </label>

          <label>
            Date
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </label>

          <label>
            Invoice ID (optional)
            <input
              value={form.invoiceId}
              onChange={(e) => setForm({ ...form, invoiceId: e.target.value })}
            />
          </label>

          <label>
            Notes
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </label>

          <div className={styles.formActions}>
            <button type="submit" className={styles.create} disabled={loading}>
              Create Payment
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
