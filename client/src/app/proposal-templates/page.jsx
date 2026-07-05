"use client";
import React, { useEffect, useState } from 'react';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function ProposalTemplatesPage(){
  const [templates, setTemplates] = useState([]);
  useEffect(()=>{ (async ()=>{ const res = await fetch(`${API_URL}/api/proposal-templates`); const j = await res.json(); if (res.ok) setTemplates(j.templates || []); })(); }, []);
  return (
    <main style={{padding:20}}>
      <h1>Proposal Templates</h1>
      <ul>
        {templates.map(t=> <li key={t._id}>{t.name}</li>)}
      </ul>
    </main>
  );
}
