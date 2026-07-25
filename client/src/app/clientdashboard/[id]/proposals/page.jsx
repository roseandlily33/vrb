"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
// import Modal from '../../../components/Modal/Modal';
import styles from './proposalDetail.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function ProposalsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [proposals, setProposals] = useState([]);
  const [client, setClient] = useState(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ proposalNumber:'', title:'', projectType:'website', status:'draft', overview:'', subtotal:0, discount:0, taxRate:0 });

  useEffect(()=>{ fetchData(); }, [id]);

  const fetchData = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const [cRes, pRes] = await Promise.all([
        fetch(`${API_URL}/api/clients/${id}`, { headers }),
        fetch(`${API_URL}/api/proposals?clientId=${id}`, { headers })
      ]);
      if (!cRes.ok) throw new Error('Failed to load client');
      const cJson = await cRes.json();
      const pJson = await pRes.json();
      setClient(cJson.client);
      setProposals(pJson.proposals || []);
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  const total = proposals.reduce((s,p)=> s + ((p.pricing && p.pricing.total) || 0), 0);
  const count = proposals.length;

  const computeTotal = ({ subtotal, discount, taxRate }) => {
    const sub = Number(subtotal || 0);
    const disc = Number(discount || 0);
    const tax = Number(taxRate || 0);
    const taxAmount = ((sub - disc) * (tax/100));
    const total = Math.max(0, sub - disc + taxAmount);
    return { taxAmount, total };
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const { taxAmount, total: computedTotal } = computeTotal(form);
      const payload = {
        clientId: id,
        proposalNumber: form.proposalNumber,
        title: form.title,
        projectType: form.projectType,
        status: form.status,
        overview: form.overview,
        pricing: { subtotal: Number(form.subtotal||0), discount: Number(form.discount||0), taxRate: Number(form.taxRate||0), taxAmount, total: computedTotal }
      };

      const res = await fetch(`${API_URL}/api/proposals`, { method: 'POST', headers: { 'Content-Type':'application/json', Authorization:`Bearer ${token}` }, body: JSON.stringify(payload) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setOpen(false);
      setForm({ proposalNumber:'', title:'', projectType:'website', status:'draft', overview:'', subtotal:0, discount:0, taxRate:0 });
      await fetchData();
    } catch (err) { console.error(err); alert(err.message || 'Error'); } finally { setLoading(false); }
  };

  const handleDelete = async (pid) => {
    if (!confirm('Delete proposal? This cannot be undone.')) return;
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_URL}/api/proposals/${pid}`, { method: 'DELETE', headers: { Authorization:`Bearer ${token}` } });
      if (!res.ok) throw new Error('Failed');
      await fetchData();
    } catch (err) { alert(err.message || 'Delete failed'); }
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.back} onClick={()=>router.push(`/clientdashboard/${id}`)}>Back</button>
        <h1>Proposals — {client?.businessName || client?.name}</h1>
        <div style={{marginLeft:'auto'}}>
          <button onClick={()=>setOpen(true)} className={styles.create}>Create Proposal</button>
        </div>
      </div>

      {loading ? <div>Loading...</div> : (
        <div>
          <section className={styles.summary}>
            <div>Count: {count}</div>
            <div>Total Value: {total}</div>
          </section>

          <section className={styles.list}>
            {proposals.map(p=> (
              <div key={p._id} className={styles.row}>
                <div>{p.proposalNumber}</div>
                <div>{p.title}</div>
                <div>{p.pricing?.total || 0}</div>
                <div>{p.status}</div>
                <div><button className={styles.view} onClick={()=>router.push(`/clientdashboard/${id}/proposals/${p._id}`)}>View</button></div>
                <div><button className={styles.delete} onClick={()=>handleDelete(p._id)}>Delete</button></div>
              </div>
            ))}
          </section>
        </div>
      )}

      {/* <Modal open={open} title="Create Proposal" onClose={()=>setOpen(false)}>
        <form onSubmit={handleCreate} className={styles.form}>
          <label>Proposal Number<input required value={form.proposalNumber} onChange={e=>setForm({...form,proposalNumber:e.target.value})} /></label>
          <label>Title<input required value={form.title} onChange={e=>setForm({...form,title:e.target.value})} /></label>
          <label>Project Type<select value={form.projectType} onChange={e=>setForm({...form,projectType:e.target.value})}><option value="website">website</option><option value="design">design</option><option value="social_media">social_media</option><option value="email_marketing">email_marketing</option><option value="maintenance">maintenance</option><option value="custom">custom</option></select></label>
          <label>Status<select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option value="draft">draft</option><option value="sent">sent</option><option value="viewed">viewed</option><option value="accepted">accepted</option><option value="declined">declined</option></select></label>
          <label>Overview<textarea value={form.overview} onChange={e=>setForm({...form,overview:e.target.value})} /></label>
          <label>Subtotal<input type="number" step="0.01" value={form.subtotal} onChange={e=>setForm({...form,subtotal:e.target.value})} /></label>
          <label>Discount<input type="number" step="0.01" value={form.discount} onChange={e=>setForm({...form,discount:e.target.value})} /></label>
          <label>Tax Rate (%)<input type="number" step="0.01" value={form.taxRate} onChange={e=>setForm({...form,taxRate:e.target.value})} /></label>
          <div className={styles.actions}><button type="submit">Create</button></div>
        </form>
      </Modal> */}
    </main>
  );
}
