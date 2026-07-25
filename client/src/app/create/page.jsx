"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './create.module.css';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function CreatePage() {
  const router = useRouter();
  const [tab, setTab] = useState('client');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [clients, setClients] = useState([]);

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const headers = token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };

  useEffect(() => {
    // load clients for select inputs
    (async () => {
      try {
        const res = await fetch(`${API_URL}/api/clients`, { headers });
        if (res.ok) {
          const j = await res.json();
          setClients(j.clients || []);
        }
      } catch (e) {}
    })();
  }, []);

  // form states
  const [clientForm, setClientForm] = useState({ businessName: '', contactName: '', email: '', phone: '', website: '', industry: '', notes: '', status: 'lead', address: { street: '', city: '', province: '', postalCode: '', country: 'Canada' } });

  const [proposalForm, setProposalForm] = useState({ clientId: '', proposalNumber: '', title: '', projectType: 'website', status: 'draft', overview: '' });

  const [templateForm, setTemplateForm] = useState({ name: '', type: 'custom', sectionsText: '' });

  const [serviceForm, setServiceForm] = useState({ name: '', category: 'website', description: '', defaultPrice: '', minPrice: '', maxPrice: '', pricingType: 'fixed', estimatedTimeline: '', deliverablesText: '', isActive: true });

  const [userForm, setUserForm] = useState({ name: '', email: '', password: '', role: 'user' });

  const createClient = async () => {
    setLoading(true); setMessage('');
    try {
      const res = await fetch(`${API_URL}/api/clients`, { method: 'POST', headers, body: JSON.stringify(clientForm) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setMessage('Client created');
      setClientForm({ businessName: '', contactName: '', email: '', phone: '', website: '', industry: '', notes: '', status: 'lead', address: { street: '', city: '', province: '', postalCode: '', country: 'Canada' } });
    } catch (err) {
      setMessage(err.message);
    } finally { setLoading(false); }
  };

  const createProposal = async () => {
    setLoading(true); setMessage('');
    try {
      const res = await fetch(`${API_URL}/api/proposals`, { method: 'POST', headers, body: JSON.stringify(proposalForm) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setMessage('Proposal created');
      setProposalForm({ clientId: '', proposalNumber: '', title: '', projectType: 'website', status: 'draft', overview: '' });
    } catch (err) {
      setMessage(err.message);
    } finally { setLoading(false); }
  };

  const createTemplate = async () => {
    setLoading(true); setMessage('');
    try {
      const sections = templateForm.sectionsText ? [{ title: 'Content', content: templateForm.sectionsText }] : [];
      const payload = { name: templateForm.name, type: templateForm.type, sections };
      const res = await fetch(`${API_URL}/api/proposal-templates`, { method: 'POST', headers, body: JSON.stringify(payload) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setMessage('Template created');
      setTemplateForm({ name: '', type: 'custom', sectionsText: '' });
    } catch (err) {
      setMessage(err.message);
    } finally { setLoading(false); }
  };

  const createService = async () => {
    setLoading(true); setMessage('');
    try {
      const payload = { ...serviceForm, defaultPrice: Number(serviceForm.defaultPrice || 0), minPrice: Number(serviceForm.minPrice || 0), maxPrice: Number(serviceForm.maxPrice || 0), deliverables: serviceForm.deliverablesText ? serviceForm.deliverablesText.split(',').map(s=>s.trim()) : [] };
      const res = await fetch(`${API_URL}/api/service-items`, { method: 'POST', headers, body: JSON.stringify(payload) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setMessage('Service item created');
      setServiceForm({ name: '', category: 'website', description: '', defaultPrice: '', minPrice: '', maxPrice: '', pricingType: 'fixed', estimatedTimeline: '', deliverablesText: '', isActive: true });
    } catch (err) {
      setMessage(err.message);
    } finally { setLoading(false); }
  };

  const createUser = async () => {
    setLoading(true); setMessage('');
    try {
      const res = await fetch(`${API_URL}/api/users`, { method: 'POST', headers, body: JSON.stringify(userForm) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setMessage('User created');
      setUserForm({ name: '', email: '', password: '', role: 'user' });
    } catch (err) {
      setMessage(err.message);
    } finally { setLoading(false); }
  };

  return (
    <main className={styles.wrap}>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Dashboard', href: '/dashboard' }, { label: 'Create' }]} />

      <div className={styles.header}>
        <h1>Create</h1>
        <div className={styles.tabs}>
          <button className={tab==='client'?styles.active:''} onClick={()=>setTab('client')}>Client</button>
          <button className={tab==='proposal'?styles.active:''} onClick={()=>setTab('proposal')}>Proposal</button>
          <button className={tab==='template'?styles.active:''} onClick={()=>setTab('template')}>Template</button>
          <button className={tab==='service'?styles.active:''} onClick={()=>setTab('service')}>Service Item</button>
          <button className={tab==='user'?styles.active:''} onClick={()=>setTab('user')}>User</button>
        </div>
      </div>

      <div className={styles.formWrap}>
        {message && <div className={styles.message}>{message}</div>}

        {tab === 'client' && (
          <section>
            <label>Business Name<input value={clientForm.businessName} onChange={e=>setClientForm({...clientForm,businessName:e.target.value})} /></label>
            <label>Contact Name<input value={clientForm.contactName} onChange={e=>setClientForm({...clientForm,contactName:e.target.value})} /></label>
            <label>Email<input value={clientForm.email} onChange={e=>setClientForm({...clientForm,email:e.target.value})} /></label>
            <label>Phone<input value={clientForm.phone} onChange={e=>setClientForm({...clientForm,phone:e.target.value})} /></label>
            <label>Website<input value={clientForm.website} onChange={e=>setClientForm({...clientForm,website:e.target.value})} /></label>
            <label>Industry<input value={clientForm.industry} onChange={e=>setClientForm({...clientForm,industry:e.target.value})} /></label>
            <label>Status<select value={clientForm.status} onChange={e=>setClientForm({...clientForm,status:e.target.value})}><option>lead</option><option>active</option><option>past</option><option>archived</option></select></label>
            <label>Notes<textarea value={clientForm.notes} onChange={e=>setClientForm({...clientForm,notes:e.target.value})} /></label>
            <div className={styles.actions}><button onClick={createClient} disabled={loading}>Create Client</button></div>
          </section>
        )}

        {tab === 'proposal' && (
          <section>
            <label>Client<select value={proposalForm.clientId} onChange={e=>setProposalForm({...proposalForm,clientId:e.target.value})}><option value="">Select</option>{clients.map(c=><option key={c._id} value={c._id}>{c.businessName||c.name}</option>)}</select></label>
            <label>Proposal Number<input value={proposalForm.proposalNumber} onChange={e=>setProposalForm({...proposalForm,proposalNumber:e.target.value})} /></label>
            <label>Title<input value={proposalForm.title} onChange={e=>setProposalForm({...proposalForm,title:e.target.value})} /></label>
            <label>Project Type<select value={proposalForm.projectType} onChange={e=>setProposalForm({...proposalForm,projectType:e.target.value})}><option value="website">website</option><option value="design">design</option><option value="social_media">social_media</option><option value="email_marketing">email_marketing</option><option value="maintenance">maintenance</option><option value="custom">custom</option></select></label>
            <label>Status<select value={proposalForm.status} onChange={e=>setProposalForm({...proposalForm,status:e.target.value})}><option>draft</option><option>sent</option><option>viewed</option><option>accepted</option><option>declined</option><option>archived</option></select></label>
            <label>Overview<textarea value={proposalForm.overview} onChange={e=>setProposalForm({...proposalForm,overview:e.target.value})} /></label>
            <div className={styles.actions}><button onClick={createProposal} disabled={loading}>Create Proposal</button></div>
          </section>
        )}

        {tab === 'template' && (
          <section>
            <label>Name<input value={templateForm.name} onChange={e=>setTemplateForm({...templateForm,name:e.target.value})} /></label>
            <label>Type<select value={templateForm.type} onChange={e=>setTemplateForm({...templateForm,type:e.target.value})}><option value="website">website</option><option value="design">design</option><option value="social_media">social_media</option><option value="email_marketing">email_marketing</option><option value="custom">custom</option></select></label>
            <label>Content<textarea value={templateForm.sectionsText} onChange={e=>setTemplateForm({...templateForm,sectionsText:e.target.value})} placeholder="Section content"/></label>
            <div className={styles.actions}><button onClick={createTemplate} disabled={loading}>Create Template</button></div>
          </section>
        )}

        {tab === 'service' && (
          <section>
            <label>Name<input value={serviceForm.name} onChange={e=>setServiceForm({...serviceForm,name:e.target.value})} /></label>
            <label>Category<select value={serviceForm.category} onChange={e=>setServiceForm({...serviceForm,category:e.target.value})}><option value="website">website</option><option value="design">design</option><option value="social_media">social_media</option><option value="email_marketing">email_marketing</option><option value="seo">seo</option><option value="add_on">add_on</option><option value="maintenance">maintenance</option><option value="custom">custom</option></select></label>
            <label>Description<textarea value={serviceForm.description} onChange={e=>setServiceForm({...serviceForm,description:e.target.value})} /></label>
            <label>Default Price<input type="number" value={serviceForm.defaultPrice} onChange={e=>setServiceForm({...serviceForm,defaultPrice:e.target.value})} /></label>
            <label>Deliverables (comma separated)<input value={serviceForm.deliverablesText} onChange={e=>setServiceForm({...serviceForm,deliverablesText:e.target.value})} /></label>
            <div className={styles.actions}><button onClick={createService} disabled={loading}>Create Service Item</button></div>
          </section>
        )}

        {tab === 'user' && (
          <section>
            <label>Name<input value={userForm.name} onChange={e=>setUserForm({...userForm,name:e.target.value})} /></label>
            <label>Email<input value={userForm.email} onChange={e=>setUserForm({...userForm,email:e.target.value})} /></label>
            <label>Password<input type="password" value={userForm.password} onChange={e=>setUserForm({...userForm,password:e.target.value})} /></label>
            <label>Role<select value={userForm.role} onChange={e=>setUserForm({...userForm,role:e.target.value})}><option value="user">user</option><option value="admin">admin</option></select></label>
            <div className={styles.actions}><button onClick={createUser} disabled={loading}>Create User</button></div>
          </section>
        )}
      </div>

    </main>
  );
}
