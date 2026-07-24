"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./social-calendar.module.css";
import Modal from "../../Components/Modal/Modal";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function SocialCalendarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", caption: "", scheduledAt: "", tag: "", clientId: "" });
  const [editing, setEditing] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetchAll = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const [cRes, pRes] = await Promise.all([
        fetch(`${API_URL}/api/clients`, { headers: token ? { Authorization: `Bearer ${token}` } : {} }),
        fetch(`${API_URL}/api/social-posts`, { headers: token ? { Authorization: `Bearer ${token}` } : {} }),
      ]);
      const cJson = await cRes.json();
      const pJson = await pRes.json();
      setClients(cJson.clients || []);
      setPosts(pJson.posts || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load social posts");
    }
    setLoading(false);
  };

  useEffect(() => { fetchAll(); }, []);

  const startEdit = (p) => {
    setEditing(p);
    setForm({ title: p.title || "", caption: p.caption || "", scheduledAt: p.scheduledAt ? p.scheduledAt.split("T")[0] : "", tag: p.tag || "", clientId: p.clientId || "" });
    setShowEditModal(true);
  };

  const resetForm = () => { setEditing(null); setForm({ title: "", caption: "", scheduledAt: "", tag: "", clientId: "" }); setShowEditModal(false); setDeleteTarget(null); };

  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const body = { ...form };
      let res;
      if (editing) {
        res = await fetch(`${API_URL}/api/social-posts/${editing._id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) });
      } else {
        res = await fetch(`${API_URL}/api/social-posts`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) });
      }
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Save failed');
      await fetchAll();
      resetForm();
    } catch (err) { alert(err.message || 'Error'); }
  };

  const handleDelete = async (id) => {
    setDeleteTarget(id);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_URL}/api/social-posts/${deleteTarget}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Delete failed');
      await fetchAll();
      resetForm();
    } catch (err) { alert(err.message || 'Delete failed'); }
  };

  // group posts by client then by date
  const grouped = posts.reduce((acc, p) => {
    const clientKey = p.clientId ? (p.clientId._id || p.clientId) : (p.clientName || 'No Client');
    acc[clientKey] = acc[clientKey] || { clientName: p.clientName || (p.clientId && p.clientId.businessName) || 'No Client', posts: [] };
    acc[clientKey].posts.push(p);
    return acc;
  }, {});

  Object.values(grouped).forEach(g => g.posts.sort((a,b)=> new Date(a.scheduledAt) - new Date(b.scheduledAt)));

  return (
    <main className={styles.wrap}>
      <div className={styles.headerRow}>
        <h1>Social Calendar</h1>
        <div>
          <button onClick={() => router.push('/dashboard')} className={styles.btn}>Back</button>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSave}>
        <h3>{editing ? 'Edit Post' : 'Create Post'}</h3>
        <label>Client
          <select value={form.clientId} onChange={(e)=> setForm({...form, clientId: e.target.value})}>
            <option value="">(no client)</option>
            {clients.map(c => <option key={c._id} value={c._id}>{c.businessName || c.name}</option>)}
          </select>
        </label>
        <label>Title<input required value={form.title} onChange={(e)=> setForm({...form, title:e.target.value})} /></label>
        <label>Caption<textarea value={form.caption} onChange={(e)=> setForm({...form, caption:e.target.value})} /></label>
        <label>Scheduled At<input type="date" required value={form.scheduledAt} onChange={(e)=> setForm({...form, scheduledAt:e.target.value})} /></label>
        <label>Tag<input value={form.tag} onChange={(e)=> setForm({...form, tag:e.target.value})} /></label>
        <div className={styles.formActions}>
          <button type="submit" className={styles.btnPrimary}>{editing ? 'Save' : 'Create'}</button>
          {editing && <button type="button" className={styles.btnGhost} onClick={resetForm}>Cancel</button>}
        </div>
      </form>

      {loading ? <div>Loading...</div> : (
        <div className={styles.listWrap}>
          {Object.entries(grouped).length === 0 && <div>No posts</div>}
          {Object.entries(grouped).map(([key, g]) => (
            <section key={key} className={styles.clientGroup}>
              <h4>{g.clientName}</h4>
              <table className={styles.table}>
                <thead>
                  <tr><th>Date</th><th>Title</th><th>Tag</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {g.posts.map(p => (
                    <tr key={p._id}>
                      <td>{new Date(p.scheduledAt).toLocaleDateString()}</td>
                      <td>{p.title}</td>
                      <td>{p.tag}</td>
                      <td>{p.status}</td>
                      <td>
                        <button className={styles.btn} onClick={()=> startEdit(p)}>Edit</button>
                        <button className={styles.btn} onClick={()=> handleDelete(p._id)}>Delete</button>
                        {p.status !== 'posted' && <button className={styles.btnPrimary} onClick={async ()=> { const token=localStorage.getItem('token'); await fetch(`${API_URL}/api/social-posts/${p._id}`, { method:'PUT', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ status: 'posted', postedAt: new Date().toISOString() }) }); await fetchAll(); }}>Mark Posted</button>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <Modal title={editing ? 'Edit Post' : 'Create Post'} onClose={() => setShowEditModal(false)}>
          <form onSubmit={handleSave} className={styles.modalForm}>
            <label>Client
              <select value={form.clientId} onChange={(e)=> setForm({...form, clientId: e.target.value})}>
                <option value="">(no client)</option>
                {clients.map(c => <option key={c._id} value={c._id}>{c.businessName || c.name}</option>)}
              </select>
            </label>
            <label>Title<input required value={form.title} onChange={(e)=> setForm({...form, title:e.target.value})} /></label>
            <label>Caption<textarea value={form.caption} onChange={(e)=> setForm({...form, caption:e.target.value})} /></label>
            <label>Scheduled At<input type="date" required value={form.scheduledAt} onChange={(e)=> setForm({...form, scheduledAt:e.target.value})} /></label>
            <label>Tag<input value={form.tag} onChange={(e)=> setForm({...form, tag:e.target.value})} /></label>
            <div className={styles.formActions}>
              <button type="submit" className={styles.btnPrimary}>{editing ? 'Save' : 'Create'}</button>
              <button type="button" className={styles.btnGhost} onClick={() => setShowEditModal(false)}>Cancel</button>
            </div>
          </form>
        </Modal>
      )}

      {/* Delete confirmation modal */}
      {deleteTarget && (
        <Modal title="Confirm Delete" onClose={() => setDeleteTarget(null)}>
          <div style={{paddingBottom: '1rem'}}>Are you sure you want to delete this post?</div>
          <div style={{display:'flex', gap:8}}>
            <button className={styles.btnPrimary} onClick={confirmDelete}>Delete</button>
            <button className={styles.btnGhost} onClick={()=> setDeleteTarget(null)}>Cancel</button>
          </div>
        </Modal>
      )}
    </main>
  );
}
