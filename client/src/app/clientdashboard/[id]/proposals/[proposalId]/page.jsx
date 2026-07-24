"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
// import Modal from '../../../../components/Modal/Modal';
import styles from './proposalDetail.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function ProposalDetail() {
  const { id, proposalId } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [proposal, setProposal] = useState(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title:'', status:'draft', overview:'', subtotal:0, discount:0, taxRate:0 });

  useEffect(()=>{ fetchData(); }, [proposalId]);

  const fetchData = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_URL}/api/proposals/${proposalId}`, { headers: { Authorization:`Bearer ${token}` } });
      if (!res.ok) throw new Error('Failed to load');
      const j = await res.json();
      setProposal(j.proposal);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const compute = (s,d,t)=>{
    const sub = Number(s||0); const disc = Number(d||0); const tax = Number(t||0);
    const taxAmount = ((sub - disc) * (tax/100));
    return { taxAmount, total: Math.max(0, sub - disc + taxAmount) };
  };

  const handleOpenEdit = () => {
    const p = proposal;
    setForm({ title: p.title||'', status: p.status||'draft', overview: p.overview||'', subtotal: p.pricing?.subtotal || 0, discount: p.pricing?.discount || 0, taxRate: p.pricing?.taxRate || 0 });
    setOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const { taxAmount, total } = compute(form.subtotal, form.discount, form.taxRate);
      const payload = { title: form.title, status: form.status, overview: form.overview, pricing: { subtotal: Number(form.subtotal||0), discount: Number(form.discount||0), taxRate: Number(form.taxRate||0), taxAmount, total } };
      const res = await fetch(`${API_URL}/api/proposals/${proposalId}`, { method: 'PUT', headers: { 'Content-Type':'application/json', Authorization:`Bearer ${token}` }, body: JSON.stringify(payload) });
      if (!res.ok) { const j = await res.json(); throw new Error(j.error || 'Failed'); }
      setOpen(false);
      await fetchData();
    } catch (err) { alert(err.message || 'Error'); }
  };

  const handleDelete = async () => {
    if (!confirm('Delete proposal?')) return;
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_URL}/api/proposals/${proposalId}`, { method: 'DELETE', headers: { Authorization:`Bearer ${token}` } });
      if (!res.ok) throw new Error('Failed');
      router.push(`/clientdashboard/${id}/proposals`);
    } catch (err) { alert(err.message || 'Delete failed'); }
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.back} onClick={()=>router.push(`/clientdashboard/${id}/proposals`)}>Back</button>
        <h1>Proposal</h1>
        <div style={{marginLeft:'auto'}}>
          <button className={styles.edit} onClick={handleOpenEdit}>Edit</button>
          <button className={styles.delete} onClick={handleDelete}>Delete</button>
        </div>
      </div>

      {loading ? <div>Loading...</div> : (
        <div>
          <h2>{proposal.title}</h2>
          <div>Number: {proposal.proposalNumber}</div>
          <div>Status: {proposal.status}</div>
          <div>Overview: {proposal.overview}</div>
          <h3>Pricing</h3>
          <div>Subtotal: {proposal.pricing?.subtotal || 0}</div>
          <div>Discount: {proposal.pricing?.discount || 0}</div>
          <div>Tax: {proposal.pricing?.taxAmount || 0}</div>
          <div>Total: {proposal.pricing?.total || 0}</div>

          <h3>Line Items</h3>
          <ul>{(proposal.lineItems||[]).map(li=> <li key={li._id}>{li.name} — {li.quantity} × {li.unitPrice} = {li.total}</li>)}</ul>

          <h3>Sections</h3>
          <ul>{(proposal.sections||[]).map(s=> <li key={s._id}><strong>{s.title}</strong><div>{s.content}</div></li>)}</ul>
        </div>
      )}

      {/* <Modal open={open} title="Edit Proposal" onClose={()=>setOpen(false)}>
        <form onSubmit={handleSave} className={styles.form}>
          <label>Title<input required value={form.title} onChange={e=>setForm({...form,title:e.target.value})} /></label>
          <label>Status<select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option value="draft">draft</option><option value="sent">sent</option><option value="viewed">viewed</option><option value="accepted">accepted</option><option value="declined">declined</option></select></label>
          <label>Overview<textarea value={form.overview} onChange={e=>setForm({...form,overview:e.target.value})} /></label>
          <label>Subtotal<input type="number" step="0.01" value={form.subtotal} onChange={e=>setForm({...form,subtotal:e.target.value})} /></label>
          <label>Discount<input type="number" step="0.01" value={form.discount} onChange={e=>setForm({...form,discount:e.target.value})} /></label>
          <label>Tax Rate (%)<input type="number" step="0.01" value={form.taxRate} onChange={e=>setForm({...form,taxRate:e.target.value})} /></label>
          <div className={styles.actions}><button type="submit">Save</button></div>
        </form>
      </Modal> */}
    </main>
  );
}
