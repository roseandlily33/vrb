"use client";
import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';
import styles from './service-items.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function ServiceItemsPage(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({ name: '', category: 'website', description: '', defaultPrice: '', deliverablesText: '' });

  const [editOpen, setEditOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [historyOpen, setHistoryOpen] = useState(false);
  const [historyEntries, setHistoryEntries] = useState([]);

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const headers = token ? { Authorization: `Bearer ${token}`, 'Content-Type':'application/json' } : { 'Content-Type':'application/json' };

  const load = async () => {
    setLoading(true); setMessage('');
    try {
      const res = await fetch(`${API_URL}/api/service-items`, { headers });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setItems(j.items || []);
    } catch (err) { setMessage(err.message); }
    finally { setLoading(false); }
  };

  useEffect(()=>{ load(); }, []);

  const createItem = async ()=>{
    setLoading(true); setMessage('');
    try{
      const payload = { ...form, defaultPrice: Number(form.defaultPrice||0), deliverables: form.deliverablesText ? form.deliverablesText.split(',').map(s=>s.trim()) : [] };
      const res = await fetch(`${API_URL}/api/service-items`, { method: 'POST', headers, body: JSON.stringify(payload) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setForm({ name: '', category: 'website', description: '', defaultPrice: '', deliverablesText: '' });
      await load();
    } catch (err){ setMessage(err.message); } finally { setLoading(false); }
  };

  const openEdit = (item)=>{ setEditing(item); setForm({ name: item.name||'', category: item.category||'website', description: item.description||'', defaultPrice: item.defaultPrice||0, deliverablesText: (item.deliverables||[]).join(', ') }); setEditOpen(true); };

  const saveEdit = async ()=>{
    if (!editing) return;
    setLoading(true); setMessage('');
    try{
      const payload = { name: form.name, category: form.category, description: form.description, defaultPrice: Number(form.defaultPrice||0), deliverables: form.deliverablesText ? form.deliverablesText.split(',').map(s=>s.trim()) : [] };
      const res = await fetch(`${API_URL}/api/service-items/${editing._id}`, { method: 'PUT', headers, body: JSON.stringify(payload) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setEditOpen(false); setEditing(null);
      await load();
    } catch (err){ setMessage(err.message); } finally { setLoading(false); }
  };

  const toggleArchive = async (item, unarchive=false)=>{
    setLoading(true); setMessage('');
    try{
      const url = `${API_URL}/api/service-items/${item._id}/${unarchive? 'unarchive' : 'archive'}`;
      const res = await fetch(url, { method: 'POST', headers });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      await load();
    } catch (err){ setMessage(err.message); } finally { setLoading(false); }
  };

  const viewHistory = async (item)=>{
    setHistoryEntries([]); setHistoryOpen(true);
    try{
      const res = await fetch(`${API_URL}/api/service-items/${item._id}/history`, { headers });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setHistoryEntries(j.history || []);
    } catch (err){ setHistoryEntries([{ error: err.message }]); }
  };

  return (
    <main className={styles.wrap}>
      <h1>Service Items</h1>
      {message && <div className={styles.message}>{message}</div>}
      <section className={styles.form}>
        <h3>Create Service Item</h3>
        <label>Name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></label>
        <label>Category<select value={form.category} onChange={e=>setForm({...form,category:e.target.value})}><option value="website">website</option><option value="design">design</option><option value="social_media">social_media</option><option value="email_marketing">email_marketing</option><option value="seo">seo</option><option value="add_on">add_on</option><option value="maintenance">maintenance</option><option value="custom">custom</option></select></label>
        <label>Default Price<input type="number" value={form.defaultPrice} onChange={e=>setForm({...form,defaultPrice:e.target.value})} /></label>
        <label>Deliverables (comma separated)<input value={form.deliverablesText} onChange={e=>setForm({...form,deliverablesText:e.target.value})} /></label>
        <div style={{marginTop:10}}><button onClick={createItem} disabled={loading}>Create</button></div>
      </section>

      <section className={styles.list}>
        <h3>Items</h3>
        {loading ? <div>Loading...</div> : (
          <ul>
            {items.map(it=> (
              <li key={it._id} className={it.archived ? styles.archived : ''}>
                <strong>{it.name}</strong> — {it.category} — ${it.defaultPrice}
                <div className={styles.row}>
                  <button onClick={()=>openEdit(it)}>Edit</button>
                  <button onClick={()=>toggleArchive(it, it.archived)}> {it.archived ? 'Unarchive' : 'Archive'}</button>
                  <button onClick={()=>viewHistory(it)}>History</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Modal open={editOpen} title={editing ? 'Edit Service Item' : 'Edit'} onClose={()=>{ setEditOpen(false); setEditing(null); }}>
        <label>Name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></label>
        <label>Category<select value={form.category} onChange={e=>setForm({...form,category:e.target.value})}><option value="website">website</option><option value="design">design</option><option value="social_media">social_media</option><option value="email_marketing">email_marketing</option><option value="seo">seo</option><option value="add_on">add_on</option><option value="maintenance">maintenance</option><option value="custom">custom</option></select></label>
        <label>Default Price<input type="number" value={form.defaultPrice} onChange={e=>setForm({...form,defaultPrice:e.target.value})} /></label>
        <label>Deliverables<textarea value={form.deliverablesText} onChange={e=>setForm({...form,deliverablesText:e.target.value})} /></label>
        <div style={{marginTop:10}}><button onClick={saveEdit} disabled={loading}>Save</button></div>
      </Modal>

      <Modal open={historyOpen} title="History" onClose={()=>setHistoryOpen(false)}>
        <div>
          {historyEntries.length===0 ? <div>No history</div> : (
            <ul>
              {historyEntries.map(h=> (
                <li key={h._id || (h.createdAt+Math.random())}>
                  <div><strong>{h.action}</strong> — {new Date(h.createdAt).toLocaleString()}</div>
                  {h.userId && <div>By: {h.userId}</div>}
                  <pre style={{whiteSpace:'pre-wrap',maxHeight:200,overflow:'auto'}}>{JSON.stringify({ before: h.before, after: h.after, changes: h.changes }, null, 2)}</pre>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Modal>
    </main>
  );
}
