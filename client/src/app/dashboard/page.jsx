"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import styles from './dashboard.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    clients: [],
    proposals: [],
    templates: [],
    serviceItems: [],
    users: [],
  });

  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    router.push('/login');
  };

  const fetchAll = async () => {
    setLoading(true);
    setError('');
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      const userJson = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
      const user = userJson ? JSON.parse(userJson) : null;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      // Build endpoint list; only request users if admin
      const endpoints = [
        fetch(`${API_URL}/api/clients`, { headers }),
        fetch(`${API_URL}/api/proposals`, { headers }),
        fetch(`${API_URL}/api/proposal-templates`, { headers }),
        fetch(`${API_URL}/api/service-items`, { headers }),
      ];

      if (user && user.role === 'admin') {
        endpoints.push(fetch(`${API_URL}/api/users`, { headers }));
      }

      const results = await Promise.all(endpoints.map(p => p.then(r => r.json().then(j => ({ ok: r.ok, body: j })) )));

      setData({
        clients: results[0]?.ok ? results[0].body.clients || [] : [],
        proposals: results[1]?.ok ? results[1].body.proposals || [] : [],
        templates: results[2]?.ok ? results[2].body.templates || [] : [],
        serviceItems: results[3]?.ok ? results[3].body.items || [] : [],
        users: user && user.role === 'admin' ? (results[4]?.ok ? results[4].body.users || [] : []) : [],
      });
    } catch (err) {
      console.error(err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      router.replace('/login');
      return;
    }

    fetchAll();
  }, []);

  return (
    <ProtectedRoute>
      <main className={styles.wrap}>
        <header className={styles.header}>
          <h1>Dashboard</h1>
          <div>
            <button onClick={() => router.push('/create')} className={styles.refresh} style={{ marginRight: 8 }}>Create</button>
            <button onClick={fetchAll} className={styles.refresh}>Refresh</button>
            <button onClick={handleLogout} style={{ marginLeft: 8 }} className={styles.refresh}>Logout</button>
          </div>
        </header>

        {error && <div className={styles.error}>{error}</div>}

        {loading ? (
          <div>Loading...</div>
        ) : (
          <section className={styles.grid}>
            <div className={styles.card}>
              <h3>Clients</h3>
              <p>{data.clients.length}</p>
              <ul>
                {data.clients.slice(0,5).map(c => <li key={c._id || c.id}><button className={styles.link} onClick={()=>router.push(`/clientdashboard/${c._id || c.id}`)}>{c.businessName || c.name || c.email}</button></li>)}
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Proposals</h3>
              <p>{data.proposals.length}</p>
              <ul>
                {data.proposals.slice(0,5).map(p => <li key={p._id || p.id}>{p.title || p.proposalNumber}</li>)}
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Templates</h3>
              <p>{data.templates.length}</p>
              <ul>
                {data.templates.slice(0,5).map(t => <li key={t._id || t.id}>{t.name}</li>)}
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Service Items</h3>
              <p>{data.serviceItems.length}</p>
              <ul>
                {data.serviceItems.slice(0,5).map(s => (
                  <li key={s._id || s.id}>
                    <button className={styles.link} onClick={()=>router.push(`/service-items/${s._id || s.id}`)}>{s.name}</button>
                  </li>
                ))}
              </ul>
              <div style={{marginTop:8}}><button className={styles.refresh} onClick={()=>router.push('/service-items')}>View all</button></div>
            </div>

            <div className={styles.card}>
              <h3>Users</h3>
              <p>{data.users.length}</p>
              <ul>
                {data.users.slice(0,5).map(u => <li key={u._id || u.id}>{u.name} — {u.email}</li>)}
              </ul>
            </div>
          </section>
        )}
      </main>
    </ProtectedRoute>
  );
}
