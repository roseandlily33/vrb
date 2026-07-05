"use client";
import React, { useEffect, useState } from 'react';
import styles from './proposals.module.css';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function ProposalsPage(){
  const [proposals, setProposals] = useState([]);
  useEffect(()=>{ (async ()=>{ const res = await fetch(`${API_URL}/api/proposals`); const j = await res.json(); if (res.ok) setProposals(j.proposals || []); })(); }, []);
  return (
    <main style={{padding:20}}>
      <h1>Proposals</h1>
      <ul>
        {proposals.map(p=> <li key={p._id}>{p.title} — {p.proposalNumber}</li>)}
      </ul>
    </main>
  );
}
