"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from '../../invoices/[invoiceId]/page.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function CreateReceipt() {
  const { id } = useParams();
  const router = useRouter();
  const [client, setClient] = useState(null);
  const [payments, setPayments] = useState([]);
  const [form, setForm] = useState({ receiptNumber: "", amount: "", currency: "CAD", issuedAt: "", notes: "", paymentIds: [] });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const [cRes, pRes] = await Promise.all([
        fetch(`${API_URL}/api/clients/${id}`, { headers }),
        fetch(`${API_URL}/api/payments?clientId=${id}`, { headers }),
      ]);
      if (cRes.ok) {
        const cJson = await cRes.json();
        setClient(cJson.client);
      }
      if (pRes.ok) {
        const pJson = await pRes.json();
        setPayments(pJson.payments || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const togglePayment = (pid) => {
    setForm((f) => ({ ...f, paymentIds: f.paymentIds.includes(pid) ? f.paymentIds.filter((x) => x !== pid) : [...f.paymentIds, pid] }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const body = {
        clientId: id,
        receiptNumber: form.receiptNumber || undefined,
        amount: Number(form.amount || 0),
        currency: form.currency,
        issuedAt: form.issuedAt || undefined,
        notes: form.notes || undefined,
        paymentIds: form.paymentIds,
      };
      const res = await fetch(`${API_URL}/api/receipts`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Create failed");
      router.push(`/clientdashboard/${id}/receipts/${data.receipt._id}`);
    } catch (err) {
      console.error(err);
      alert(err.message || "Create failed");
    }
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => router.push(`/clientdashboard/${id}/payments`)}>Back</button>
        <div>
          <span className={styles.eyebrow}>Create Receipt</span>
          <h1>Create Receipt</h1>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleCreate} style={{ padding: 16 }}>
        <label>
          Receipt Number
          <input value={form.receiptNumber} onChange={(e) => setForm({ ...form, receiptNumber: e.target.value })} />
        </label>

        <label>
          Amount
          <input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
        </label>

        <label>
          Issued At
          <input type="date" value={form.issuedAt} onChange={(e) => setForm({ ...form, issuedAt: e.target.value })} />
        </label>

        <label>
          Notes
          <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
        </label>

        <div>
          <h4>Select Payments to attach</h4>
          {payments.map((p) => (
            <label key={p._id} style={{ display: 'block' }}>
              <input type="checkbox" checked={form.paymentIds.includes(p._id)} onChange={() => togglePayment(p._id)} /> {p._id} — {p.amount}
            </label>
          ))}
        </div>

        <div style={{ marginTop: 12 }}>
          <button className={styles.create} type="submit">Create Receipt</button>
        </div>
      </form>
    </main>
  );
}
