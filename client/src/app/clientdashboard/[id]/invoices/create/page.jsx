"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../payments/payments.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function InvoiceCreate() {
  const { id } = useParams();
  const router = useRouter();
  const [serviceItems, setServiceItems] = useState([]);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [invoiceMeta, setInvoiceMeta] = useState({ currency: "CAD", dueDate: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${API_URL}/api/service-items`, { headers: token ? { Authorization: `Bearer ${token}` } : {} })
      .then((r) => r.json())
      .then((j) => { if (j.items) setServiceItems(j.items); })
      .catch(() => {});
  }, []);

  const subtotal = invoiceItems.reduce((s, i) => s + (i.total || 0), 0);
  const tax = +(subtotal * 0.14);
  const total = +(subtotal + tax);

  const handleCreate = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const body = {
        clientId: id,
        currency: invoiceMeta.currency,
        dueDate: invoiceMeta.dueDate || undefined,
        lineItems: invoiceItems.map((it) => ({ description: it.title || it.description, quantity: it.quantity || 1, unitPrice: it.unitPrice || 0, total: it.total || 0 })),
        subtotal,
        tax,
        total,
      };

      const res = await fetch(`${API_URL}/api/invoices`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      router.push(`/clientdashboard/${id}/invoices/${j.invoice._id}`);
    } catch (err) {
      alert(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => router.back()}>
          Back
        </button>
        <div>
          <span className={styles.eyebrow}>Create Invoice</span>
          <h1>New Invoice</h1>
        </div>
        <div style={{ minWidth: 220 }} />
      </div>

      <section className={styles.inlineForm}>
        <div className={styles.invoiceMeta}>
          <label>
            Currency
            <select value={invoiceMeta.currency} onChange={(e)=> setInvoiceMeta({...invoiceMeta, currency: e.target.value})}>
              <option>CAD</option>
              <option>USD</option>
            </select>
          </label>

          <label>
            Due Date
            <input type="date" value={invoiceMeta.dueDate} onChange={(e)=> setInvoiceMeta({...invoiceMeta, dueDate: e.target.value})} />
          </label>

          <div className={styles.taxPill}>Tax 14%: <strong>${tax.toFixed(2)}</strong></div>
        </div>

        <div className={styles.invoiceGrid}>
          <div className={styles.invoicePanel}>
            <h4>Services</h4>

            <div className={styles.serviceList}>
              {serviceItems.map((si)=> (
                <div key={si._id} className={styles.serviceItem}>
                  <div>
                    <strong>{si.name || si.title}</strong>
                    <span>{si.category} — ${si.defaultPrice ?? si.price ?? 0}</span>
                  </div>
                  <button onClick={()=>{
                    const price = si.defaultPrice ?? si.price ?? 0;
                    setInvoiceItems(prev=> [...prev, { title: si.name||si.title, description: si.description||'', quantity:1, unitPrice: price, total: price }]);
                  }} className={styles.createSmall}>Add</button>
                </div>
              ))}
            </div>

            <div className={styles.customItem}>
              <h4>Custom Item</h4>
              <div className={styles.customGrid}>
                <input placeholder="Title" id="customTitle" />
                <input placeholder="Unit price" id="customPrice" type="number" />
                <button onClick={()=>{
                  const title = document.getElementById('customTitle').value;
                  const price = Number(document.getElementById('customPrice').value || 0);
                  if(!title) return alert('Add title');
                  setInvoiceItems(prev=> [...prev, { title, description:'', quantity:1, unitPrice: price, total: price }]);
                  document.getElementById('customTitle').value = '';
                  document.getElementById('customPrice').value = '';
                }} className={styles.createSmall}>Add Custom</button>
              </div>
            </div>

            <div className={styles.customItem}>
              <h4>Invoice Items</h4>
              <div className={styles.invoiceItems}>
                {invoiceItems.map((it, idx)=> (
                  <div key={idx} className={styles.invoiceItem}>
                    <div className={styles.itemDescription}><input value={it.title} onChange={(e)=>{ const v = e.target.value; setInvoiceItems(prev=> prev.map((p,i)=> i===idx ? {...p, title:v} : p)); }} /></div>
                    <div className={styles.itemQty}><input type="number" value={it.quantity} onChange={(e)=>{ const q = Number(e.target.value||0); setInvoiceItems(prev=> prev.map((p,i)=> i===idx ? {...p, quantity:q, total: +(q*(p.unitPrice||0)) } : p)); }} /></div>
                    <div className={styles.itemPrice}><input type="number" value={it.unitPrice} onChange={(e)=>{ const u = Number(e.target.value||0); setInvoiceItems(prev=> prev.map((p,i)=> i===idx ? {...p, unitPrice:u, total: +(u*(p.quantity||1)) } : p)); }} /></div>
                    <div className={styles.itemTotal}>${it.total||0}</div>
                    <div><button onClick={()=> setInvoiceItems(prev=> prev.filter((p,ii)=> ii!==idx)) } className={styles.delete}>Remove</button></div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.invoiceTotals}>
              <div><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
              <div><span>Tax (14%)</span><strong>${tax.toFixed(2)}</strong></div>
              <div className={styles.grandTotal}><span>Total</span><strong>${total.toFixed(2)}</strong></div>
            </div>

            <div className={styles.actions}><button disabled={loading} onClick={handleCreate} className={styles.create}>Create Invoice</button></div>
          </div>

          <div>
            {/* right column could show preview or notes */}
            <div className={styles.invoicePanel}>
              <h4>Preview</h4>
              <div>Items: {invoiceItems.length}</div>
              <div>Subtotal: ${subtotal.toFixed(2)}</div>
              <div>Tax: ${tax.toFixed(2)}</div>
              <div>Total: ${total.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
