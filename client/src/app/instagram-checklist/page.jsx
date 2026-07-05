"use client";
import React, { useEffect, useState } from 'react';
import styles from './instagram-checklist.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function InstagramChecklist() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', description: '', tag: 'photo' });

  const fetchItems = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_URL}/api/instagram-posts`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
      const j = await res.json();
      setItems(j.items || []);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  useEffect(()=>{ fetchItems(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_URL}/api/instagram-posts`, { method: 'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error('Create failed');
      setForm({ title:'', description:'', tag:'photo' });
      await fetchItems();
    } catch (err) { alert(err.message || 'Error'); }
  };

  const toggleDone = async (it) => {
    const token = localStorage.getItem('token');
    try {
      await fetch(`${API_URL}/api/instagram-posts/${it._id}`, { method: 'PUT', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ done: !it.done }) });
      await fetchItems();
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this item?')) return;
    const token = localStorage.getItem('token');
    try {
      await fetch(`${API_URL}/api/instagram-posts/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
      await fetchItems();
    } catch (err) { console.error(err); }
  };

  return (
    <main className={styles.wrap}>
      <h2>Instagram Checklist</h2>
      <form className={styles.form} onSubmit={handleCreate}>
        <input required placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
        <input placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
        <select value={form.tag} onChange={e=>setForm({...form, tag:e.target.value})}>
          <option value="photo">Photo</option>
          <option value="educational">Educational</option>
          <option value="about-me">About me</option>
        </select>
        <button className={styles.btnPrimary} type="submit">Add</button>
      </form>

      {loading ? <div>Loading...</div> : (
        <ul className={styles.list}>
          {items.map(it => (
            <li key={it._id} className={it.done ? styles.done : ''}>
              <label>
                <input type="checkbox" checked={!!it.done} onChange={()=>toggleDone(it)} />
                <span className={styles.title}>{it.title}</span>
                <span className={styles.tag}>{it.tag}</span>
              </label>
              <div className={styles.actions}>
                <button className={styles.btn} onClick={()=>navigator.clipboard?.writeText(it.description||'')}>Copy</button>
                <button className={styles.btnGhost} onClick={()=>handleDelete(it._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
