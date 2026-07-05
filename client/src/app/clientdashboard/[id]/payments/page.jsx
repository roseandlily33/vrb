"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
// Modal removed: invoice creation will be an inline form
import { useMemo } from "react";
import styles from "./payments.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function PaymentsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState([]);
  const [client, setClient] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [creatingInvoice, setCreatingInvoice] = useState(false);
  const [serviceItems, setServiceItems] = useState([]);

  const [invoiceItems, setInvoiceItems] = useState([]);
  const [invoiceMeta, setInvoiceMeta] = useState({
    currency: "CAD",
    notes: "",
    dueDate: "",
  });
  const [form, setForm] = useState({
    amount: "",
    currency: "CAD",
    method: "card",
    status: "pending",
    date: "",
    invoiceId: "",
    notes: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const [cRes, pRes] = await Promise.all([
        fetch(`${API_URL}/api/clients/${id}`, { headers }),
        fetch(`${API_URL}/api/payments?clientId=${id}`, { headers }),
      ]);
      if (!cRes.ok) throw new Error("Failed to load client");
      const cJson = await cRes.json();
      const pJson = await pRes.json();
      setClient(cJson.client);
      setPayments(pJson.payments || []);
      // prefetch service items for invoice creation
      try {
        const siRes = await fetch(`${API_URL}/api/service-items`, { headers });
        if (siRes.ok) {
          const siJson = await siRes.json();
          setServiceItems(siJson.items || []);
        }
      } catch (err) {
        /* ignore */
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const total = payments.reduce((s, p) => s + (p.amount || 0), 0);
  const paid = payments
    .filter((p) => p.status === "completed")
    .reduce((s, p) => s + (p.amount || 0), 0);
  const unpaid = Math.max(0, total - paid);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const body = {
        ...form,
        clientId: id,
        amount: Number(form.amount),
        date: form.date || undefined,
      };
      const res = await fetch(`${API_URL}/api/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      setShowForm(false);
      setForm({
        amount: "",
        currency: "CAD",
        method: "card",
        status: "pending",
        date: "",
        invoiceId: "",
        notes: "",
      });
      await fetchData();
    } catch (err) {
      console.error(err);
      alert(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (pid) => {
    if (!confirm("Delete payment? This cannot be undone.")) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API_URL}/api/payments/${pid}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed");
      await fetchData();
    } catch (err) {
      alert(err.message || "Delete failed");
    }
  };

  const subtotal = useMemo(
    () => invoiceItems.reduce((s, i) => s + (i.total || 0), 0),
    [invoiceItems],
  );
  const computedTax = useMemo(() => +(subtotal * 0.14), [subtotal]);
  const computedTotal = useMemo(
    () => +(subtotal + computedTax),
    [subtotal, computedTax],
  );
  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button
          className={styles.back}
          onClick={() => router.push(`/clientdashboard/${id}`)}
        >
          Back
        </button>

        <div>
          <span className={styles.eyebrow}>Invoices & Payments</span>
          <h1>Payments — {client?.businessName || client?.name}</h1>
        </div>

        <div className={styles.headerActions}>
          <button
            onClick={() => {
              setCreatingInvoice(true);
              setShowForm(true);
            }}
            className={styles.create}
          >
            Create Invoice
          </button>

          <button
            onClick={() => {
              setCreatingInvoice(false);
              setShowForm(true);
            }}
            className={styles.createSecondary}
          >
            Create Payment
          </button>
        </div>
      </div>

      {loading ? (
        <div className={styles.emptyState}>Loading...</div>
      ) : (
        <div>
          <section className={styles.summary}>
            <article>
              <span>Total</span>
              <strong>${total}</strong>
            </article>

            <article>
              <span>Paid</span>
              <strong>${paid}</strong>
            </article>

            <article>
              <span>Unpaid</span>
              <strong>${unpaid}</strong>
            </article>
          </section>

          <section className={styles.list}>
            <div className={styles.listHeader}>
              <h2>Payment History</h2>
            </div>

            {payments.length === 0 ? (
              <div className={styles.emptyState}>No payments yet</div>
            ) : (
              <div className={styles.paymentTable}>
                <div className={styles.tableHead}>
                  <div>Invoice</div>
                  <div>Amount</div>
                  <div>Method</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Action</div>
                </div>

                {payments.map((p) => (
                  <div key={p._id} className={styles.row}>
                    <div>
                      {p.invoiceId ? (
                        <button
                          className={styles.link}
                          onClick={() =>
                            router.push(`/clientdashboard/${id}/invoices/${p.invoiceId}`)
                          }
                        >
                          {p.invoiceId}
                        </button>
                      ) : (
                        "—"
                      )}
                    </div>
                    <div>
                      {p.amount} {p.currency}
                    </div>
                    <div>{p.method}</div>
                    <div>{new Date(p.date).toLocaleDateString()}</div>
                    <div>
                      <span
                        className={`${styles.statusBadge} ${styles[p.status]}`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div>
                      <button
                        className={styles.delete}
                        onClick={() => handleDelete(p._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {showForm && (
        <section className={styles.inlineForm}>
          <div className={styles.formHeader}>
            <div>
              <span className={styles.eyebrow}>
                {creatingInvoice ? "Invoice Builder" : "Payment Entry"}
              </span>
              <h2>{creatingInvoice ? "Create Invoice" : "Create Payment"}</h2>
            </div>

            <button
              className={styles.back}
              onClick={() => {
                setShowForm(false);
                setCreatingInvoice(false);
              }}
            >
              Close
            </button>
          </div>

          {creatingInvoice ? (
            <div className={styles.invoiceBuilder}>
              <div className={styles.invoiceMeta}>
                <label>
                  Currency
                  <select
                    value={invoiceMeta.currency}
                    onChange={(e) =>
                      setInvoiceMeta({
                        ...invoiceMeta,
                        currency: e.target.value,
                      })
                    }
                  >
                    <option>CAD</option>
                    <option>USD</option>
                  </select>
                </label>

                <label>
                  Due Date
                  <input
                    type="date"
                    value={invoiceMeta.dueDate}
                    onChange={(e) =>
                      setInvoiceMeta({
                        ...invoiceMeta,
                        dueDate: e.target.value,
                      })
                    }
                  />
                </label>

                <div className={styles.taxPill}>
                  Tax 14% NS: <strong>${computedTax.toFixed(2)}</strong>
                </div>
              </div>

              <div className={styles.invoiceGrid}>
                <div className={styles.invoicePanel}>
                  <h4>Services</h4>

                  <div className={styles.serviceList}>
                    {serviceItems.map((si) => (
                      <div key={si._id} className={styles.serviceItem}>
                        <div>
                          <strong>{si.name || si.title}</strong>
                          <span>
                            {si.category} — ${si.defaultPrice ?? si.price ?? 0}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            const price = si.defaultPrice ?? si.price ?? 0;
                            setInvoiceItems((prev) => [
                              ...prev,
                              {
                                // editable fields for title and description
                                title: si.name || si.title,
                                description: si.description || "",
                                serviceItemId: si._id,
                                quantity: 1,
                                unitPrice: price,
                                total: price,
                                custom: false,
                              },
                            ]);
                          }}
                          className={styles.createSmall}
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className={styles.customItem}>
                    <h4>Custom Item</h4>

                    <div className={styles.customGrid}>
                      <input placeholder="Title" id="customTitle" />

                      <input
                        placeholder="Unit price"
                        id="customPrice"
                        type="number"
                      />

                      <button
                        onClick={() => {
                          const title =
                            document.getElementById("customTitle").value;
                          const price = Number(
                            document.getElementById("customPrice").value || 0,
                          );

                          if (!title) return alert("Add title");

                          setInvoiceItems((prev) => [
                            ...prev,
                            {
                              title,
                              description: "",
                              quantity: 1,
                              unitPrice: price,
                              total: price,
                              custom: true,
                            },
                          ]);

                          document.getElementById("customTitle").value = "";
                          document.getElementById("customPrice").value = "";
                        }}
                        className={styles.createSmall}
                      >
                        Add Custom
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.invoicePanel}>
                  <h4>Invoice Items</h4>

                  {invoiceItems.length === 0 ? (
                    <div className={styles.emptyState}>
                      Add services or custom items to build the invoice.
                    </div>
                  ) : (
                    <div className={styles.invoiceItems}>
                      {invoiceItems.map((it, idx) => (
                        <div key={idx} className={styles.invoiceItem}>
                          <input
                            className={styles.itemDescription}
                            value={it.title || it.description}
                            onChange={(e) => {
                              const v = e.target.value;

                              setInvoiceItems((prev) =>
                                prev.map((p, i) =>
                                  i === idx ? { ...p, title: v } : p,
                                ),
                              );
                            }}
                          />

                          <input
                            className={styles.itemDescription}
                            value={it.description}
                            placeholder="Description"
                            onChange={(e) => {
                              const v = e.target.value;
                              setInvoiceItems((prev) =>
                                prev.map((p, i) =>
                                  i === idx ? { ...p, description: v } : p,
                                ),
                              );
                            }}
                          />

                          <input
                            className={styles.itemQty}
                            type="number"
                            value={it.quantity}
                            onChange={(e) => {
                              const q = Number(e.target.value || 0);

                              setInvoiceItems((prev) =>
                                prev.map((p, i) =>
                                  i === idx
                                    ? {
                                        ...p,
                                        quantity: q,
                                        total: +(q * (p.unitPrice || 0)),
                                      }
                                    : p,
                                ),
                              );
                            }}
                          />

                          <input
                            className={styles.itemPrice}
                            type="number"
                            value={it.unitPrice}
                            onChange={(e) => {
                              const u = Number(e.target.value || 0);

                              setInvoiceItems((prev) =>
                                prev.map((p, i) =>
                                  i === idx
                                    ? {
                                        ...p,
                                        unitPrice: u,
                                        total: +(u * (p.quantity || 1)),
                                      }
                                    : p,
                                ),
                              );
                            }}
                          />

                          <div className={styles.itemTotal}>
                            ${it.total.toFixed(2)}
                          </div>

                          <button
                            onClick={() =>
                              setInvoiceItems((prev) =>
                                prev.filter((_, i) => i !== idx),
                              )
                            }
                            className={styles.delete}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={styles.invoiceTotals}>
                    <div>
                      <span>Subtotal</span>
                      <strong>${subtotal.toFixed(2)}</strong>
                    </div>

                    <div>
                      <span>Tax 14%</span>
                      <strong>${computedTax.toFixed(2)}</strong>
                    </div>

                    <div className={styles.grandTotal}>
                      <span>Total</span>
                      <strong>${computedTotal.toFixed(2)}</strong>
                    </div>
                  </div>

                  <label className={styles.notesField}>
                    Notes
                    <textarea
                      placeholder="Notes"
                      value={invoiceMeta.notes}
                      onChange={(e) =>
                        setInvoiceMeta({
                          ...invoiceMeta,
                          notes: e.target.value,
                        })
                      }
                    />
                  </label>

                  <div className={styles.formActions}>
                    <button
                      className={styles.create}
                      onClick={async () => {
                        const token = localStorage.getItem("token");

                        if (invoiceItems.length === 0) {
                          return alert("Add at least one item");
                        }

                        const body = {
                          clientId: id,
                          currency: invoiceMeta.currency,
                          lineItems: invoiceItems.map((it) => ({
                            // send a concise description (title + optional notes)
                            description: `${it.title || it.description}${it.description ? ` — ${it.description}` : ""}`,
                            serviceItemId: it.serviceItemId,
                            quantity: it.quantity,
                            unitPrice: it.unitPrice,
                          })),
                          tax: computedTax,
                          notes: invoiceMeta.notes,
                          dueDate: invoiceMeta.dueDate,
                        };

                        try {
                          const res = await fetch(`${API_URL}/api/invoices`, {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${token}`,
                            },
                            body: JSON.stringify(body),
                          });

                          const j = await res.json();

                          if (!res.ok) throw new Error(j.error || "Failed");

                          const invId = j.invoice._id;

                          setShowForm(false);
                          setCreatingInvoice(false);

                          router.push(
                            `/clientdashboard/${id}/invoices/${invId}`,
                          );
                        } catch (err) {
                          alert(err.message || "Save failed");
                        }
                      }}
                    >
                      Save Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCreate} className={styles.form}>
              <label>
                Amount
                <input
                  required
                  value={form.amount}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      amount: e.target.value,
                    })
                  }
                  type="number"
                  step="0.01"
                />
              </label>

              <label>
                Currency
                <select
                  value={form.currency}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      currency: e.target.value,
                    })
                  }
                >
                  <option>CAD</option>
                  <option>USD</option>
                </select>
              </label>

              <label>
                Method
                <select
                  value={form.method}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      method: e.target.value,
                    })
                  }
                >
                  <option value="card">card</option>
                  <option value="bank_transfer">bank_transfer</option>
                  <option value="cash">cash</option>
                </select>
              </label>

              <label>
                Status
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="pending">pending</option>
                  <option value="completed">completed</option>
                </select>
              </label>

              <label>
                Date
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      date: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                Invoice ID
                <input
                  value={form.invoiceId}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      invoiceId: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                Notes
                <textarea
                  value={form.notes}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      notes: e.target.value,
                    })
                  }
                />
              </label>

              <div className={styles.actions}>
                <button type="submit" className={styles.create}>
                  Create
                </button>
              </div>
            </form>
          )}
        </section>
      )}
    </main>
  );
}
