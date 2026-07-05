"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Modal from '../../../../components/Modal/Modal';
import styles from './payments.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function PaymentsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState([]);
  const [client, setClient] = useState(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ amount:'', currency:'CAD', method:'card', status:'pending', date:'', invoiceId:'', notes:'' });

  useEffect(()=>{ fetchData(); }, [id]);

  const fetchData = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const [cRes, pRes] = await Promise.all([
        fetch(`${API_URL}/api/clients/${id}`, { headers }),
        fetch(`${API_URL}/api/payments?clientId=${id}`, { headers })
      ]);
      if (!cRes.ok) throw new Error('Failed to load client');
      const cJson = await cRes.json();
      const pJson = await pRes.json();
      setClient(cJson.client);
      setPayments(pJson.payments || []);
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  const total = payments.reduce((s,p)=> s + (p.amount||0), 0);
  const paid = payments.filter(p=>p.status==='completed').reduce((s,p)=> s + (p.amount||0), 0);
  const unpaid = Math.max(0, total - paid);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const body = { ...form, clientId: id, amount: Number(form.amount), date: form.date || undefined };
      const res = await fetch(`${API_URL}/api/payments`, { method: 'POST', headers: { 'Content-Type':'application/json', Authorization:`Bearer ${token}` }, body: JSON.stringify(body) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setOpen(false); setForm({ amount:'', currency:'CAD', method:'card', status:'pending', date:'', invoiceId:'', notes:'' });
      await fetchData();
    } catch (err) { console.error(err); alert(err.message || 'Error'); } finally { setLoading(false); }
  };

  const handleDelete = async (pid) => {
    if (!confirm('Delete payment? This cannot be undone.')) return;
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_URL}/api/payments/${pid}`, { method: 'DELETE', headers: { Authorization:`Bearer ${token}` } });
      if (!res.ok) throw new Error('Failed');
      await fetchData();
    } catch (err) { alert(err.message || 'Delete failed'); }
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.back} onClick={()=>router.push(`/clientdashboard/${id}`)}>Back</button>
        <h1>Payments — {client?.businessName || client?.name}</h1>
        <div style={{marginLeft:'auto'}}>
          <button onClick={()=>setOpen(true)} className={styles.create}>Create Invoice</button>
        </div>
      </div>

      {loading ? <div>Loading...</div> : (
        <div>
          <section className={styles.summary}>
            <div>Total: {total}</div>
            <div>Paid: {paid}</div>
            <div>Unpaid: {unpaid}</div>
          </section>

          <section className={styles.list}>
            {payments.map(p=> (
              <div key={p._id} className={styles.row}>
                <div>{p.invoiceId || '—'}</div>
                <div>{p.amount} {p.currency}</div>
                <div>{p.method}</div>
                <div>{new Date(p.date).toLocaleDateString()}</div>
                <div>{p.status}</div>
                <div><button className={styles.delete} onClick={()=>handleDelete(p._id)}>Delete</button></div>
              </div>
            ))}
          </section>
        </div>
      )}

      <Modal open={open} title="Create Payment" onClose={()=>setOpen(false)}>
        <form onSubmit={handleCreate} className={styles.form}>
          <label>Amount<input required value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} type="number" step="0.01"/></label>
          <label>Currency<select value={form.currency} onChange={e=>setForm({...form,currency:e.target.value})}><option>CAD</option><option>USD</option></select></label>
          <label>Method<select value={form.method} onChange={e=>setForm({...form,method:e.target.value})}><option value="card">card</option><option value="bank_transfer">bank_transfer</option><option value="cash">cash</option></select></label>
          <label>Status<select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option value="pending">pending</option><option value="completed">completed</option></select></label>
          <label>Date<input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} /></label>
          <label>Invoice ID<input value={form.invoiceId} onChange={e=>setForm({...form,invoiceId:e.target.value})} /></label>
          <label>Notes<textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} /></label>
          <div className={styles.actions}><button type="submit">Create</button></div>
        </form>
      </Modal>
    </main>
  );
}
