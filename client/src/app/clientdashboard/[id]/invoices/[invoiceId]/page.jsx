"use client";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Modal from "../../../../components/Modal/Modal";
import styles from './page.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function InvoicePreview() {
  const { id, invoiceId } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editable, setEditable] = useState(null);
  const [openPayment, setOpenPayment] = useState(false);
  const docRef = useRef(null);
  const [paymentForm, setPaymentForm] = useState({
    amount: "",
    currency: "CAD",
    method: "card",
    status: "pending",
    date: "",
    notes: "",
  });

  useEffect(() => {
    fetchInvoice();
  }, [invoiceId]);

  const fetchInvoice = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API_URL}/api/invoices/${invoiceId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      setInvoice(j.invoice);
      setEditable(j.invoice);
      setPaymentForm((prev) => ({
        ...prev,
        amount: j.invoice.total || 0,
        currency: j.invoice.currency || "CAD",
      }));
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to load");
    }
    setLoading(false);
  };

  const startEdit = () => {
    setEditable(JSON.parse(JSON.stringify(invoice)));
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setEditable(null);
    setIsEditing(false);
  };

  const saveEdit = async () => {
    const token = localStorage.getItem("token");
    try {
      // prepare payload
      const body = {
        currency: editable.currency,
        title: editable.title,
        description: editable.description,
        issuer: editable.issuer,
        terms: editable.terms,
        lineItems: editable.lineItems.map((li) => ({
          description: li.description,
          serviceItemId: li.serviceItemId,
          quantity: li.quantity,
          unitPrice: li.unitPrice,
          custom: li.custom || false,
        })),
        tax: Number(editable.tax || 0),
        notes: editable.notes,
        dueDate: editable.dueDate,
        status: editable.status,
      };

      const res = await fetch(`${API_URL}/api/invoices/${invoice._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed to update");
      setInvoice(j.invoice);
      setEditable(j.invoice);
      setIsEditing(false);
    } catch (err) {
      alert(err.message || "Save failed");
    }
  };

  const printInvoice = () => {
    if (!docRef.current) return window.print();
    const content = docRef.current.outerHTML;
    const cssLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map((n) => n.outerHTML)
      .join('\n');
    const win = window.open('', '_blank');
    if (!win) return alert('Please allow popups to print the invoice');
    win.document.open();
    win.document.write(`<!doctype html><html><head><meta charset="utf-8">${cssLinks}</head><body>${content}</body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => {
      try {
        win.print();
        win.close();
      } catch (e) {
        console.error(e);
      }
    }, 300);
  };

  // recompute editable totals when line items or tax change
  React.useEffect(() => {
    if (!isEditing || !editable) return;
    const subtotal = (editable.lineItems || []).reduce((s, it) => s + (Number(it.total || 0)), 0);
    const tax = Number(editable.tax || 0);
    const total = +(subtotal + tax);
    setEditable((prev) => ({ ...prev, subtotal, total }));
  }, [isEditing, editable && JSON.stringify(editable.lineItems), editable && editable.tax]);

  const handlePaymentCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const body = {
        ...paymentForm,
        clientId: id,
        amount: Number(paymentForm.amount),
        date: paymentForm.date || undefined,
        invoiceId: invoice._id,
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
      setOpenPayment(false);
      router.push(`/clientdashboard/${id}/payments`);
    } catch (err) {
      alert(err.message || "Error");
    }
  };

  if (loading) return <div className={styles.wrap}>Loading...</div>;
  if (!invoice) return <div className={styles.wrap}>No invoice</div>;

  return (
  <main className={styles.wrap}>
    <div className={styles.header}>
      <button
        className={styles.back}
        onClick={() => router.push(`/clientdashboard/${id}/payments`)}
      >
        Back
      </button>

      <div>
        <span className={styles.eyebrow}>Invoice Preview</span>
        <h1>Invoice — {invoice.invoiceId}</h1>
      </div>

      <div className={styles.headerActions}>
        {!isEditing ? (
          <>
            <button className={styles.create} onClick={() => setOpenPayment(true)}>
              Add Payment
            </button>
            <button className={styles.print} onClick={() => printInvoice()}>
              Print / Download
            </button>
            <button className={styles.delete} onClick={async ()=>{
              if(!confirm('Delete this invoice? This action cannot be undone.')) return;
              const token = localStorage.getItem('token');
              try {
                const res = await fetch(`${API_URL}/api/invoices/${invoice._id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
                const j = await res.json();
                if(!res.ok) throw new Error(j.error || 'Delete failed');
                router.push(`/clientdashboard/${id}/invoices`);
              } catch(err) { alert(err.message || 'Delete failed'); }
            }}>
              Delete Invoice
            </button>
            <button className={styles.view} onClick={startEdit}>
              Edit Invoice
            </button>
          </>
        ) : (
          <>
            <button className={styles.create} onClick={saveEdit}>
              Save
            </button>
            <button className={styles.delete} onClick={cancelEdit}>
              Cancel
            </button>
          </>
        )}
      </div>
    </div>

    <section className={styles.invoiceDocument}>
      <div className={styles.invoiceTop}>
        <div className={styles.brandBlock}>
          <div className={styles.logoPlaceholder}>
            <img src="/VRBLogo.png" alt="Logo" />
          </div>

          {!isEditing ? (
            <div>
              <h2>VRB Web Design and Development</h2>
              <p>Halifax, Nova Scotia</p>
              <p>victoria@vrbwebdesignanddev.com</p>
              <p>(902) 817-1001</p>
              <p>www.vrbwebdesignanddev.com</p>
            </div>
          ) : (
            <div className={styles.issuerForm}>
              <input
                placeholder="Your business name"
                value={editable.issuer?.name || ""}
                onChange={(e) =>
                  setEditable({
                    ...editable,
                    issuer: { ...(editable.issuer || {}), name: e.target.value },
                  })
                }
              />

              <input
                placeholder="Business address"
                value={editable.issuer?.address || ""}
                onChange={(e) =>
                  setEditable({
                    ...editable,
                    issuer: {
                      ...(editable.issuer || {}),
                      address: e.target.value,
                    },
                  })
                }
              />

              <input
                placeholder="Email"
                value={editable.issuer?.email || ""}
                onChange={(e) =>
                  setEditable({
                    ...editable,
                    issuer: { ...(editable.issuer || {}), email: e.target.value },
                  })
                }
              />

              <input
                placeholder="Phone"
                value={editable.issuer?.phone || ""}
                onChange={(e) =>
                  setEditable({
                    ...editable,
                    issuer: { ...(editable.issuer || {}), phone: e.target.value },
                  })
                }
              />

              <input
                placeholder="Website"
                value={editable.issuer?.website || ""}
                onChange={(e) =>
                  setEditable({
                    ...editable,
                    issuer: {
                      ...(editable.issuer || {}),
                      website: e.target.value,
                    },
                  })
                }
              />
            </div>
          )}
        </div>

        <div className={styles.invoiceMetaCard}>
          <h3>Invoice</h3>

          <div>
            <span>Invoice No.</span>
            <strong>{invoice.invoiceId || "INV-0000"}</strong>
          </div>

          <div>
            <span>Issued</span>
            <strong>{new Date(invoice.issuedAt).toLocaleDateString()}</strong>
          </div>

          <div>
            <span>Due</span>
            {!isEditing ? (
              <strong>
                {invoice.dueDate
                  ? new Date(invoice.dueDate).toLocaleDateString()
                  : "Due date"}
              </strong>
            ) : (
              <input
                type="date"
                value={editable?.dueDate ? editable.dueDate.split("T")[0] : ""}
                onChange={(e) =>
                  setEditable({ ...editable, dueDate: e.target.value })
                }
              />
            )}
          </div>

          <div>
            <span>Status</span>
            <strong>{invoice.status || "Unpaid"}</strong>
          </div>
        </div>
      </div>

      <div className={styles.invoiceIntro}>
        {!isEditing ? (
          <>
            <h2 className={styles.invoiceTitle}>
              {invoice.title || "Invoice for Services"}
            </h2>
            <p className={styles.invoiceDescription}>
              {invoice.description ||
                "Thank you for your business. Please see the invoice details below."}
            </p>
          </>
        ) : (
          <div className={styles.editTitleBlock}>
            <input
              className={styles.titleInput}
              value={editable.title || ""}
              onChange={(e) =>
                setEditable({ ...editable, title: e.target.value })
              }
              placeholder="Invoice title"
            />

            <textarea
              className={styles.descInput}
              value={editable.description || ""}
              onChange={(e) =>
                setEditable({ ...editable, description: e.target.value })
              }
              placeholder="Invoice description"
            />
          </div>
        )}
      </div>

      <div className={styles.billGrid}>
        <div className={styles.billCard}>
          <span className={styles.cardLabel}>Bill To</span>
          <h3>{invoice.clientId?.businessName || invoice.clientId?.name || "Client Name"}</h3>
          <p>{invoice.clientId?.email || "client@email.com"}</p>
          <p>{invoice.clientId?.phone || "Client phone number"}</p>
          <p>{invoice.clientId?.address?.street || "Client address"}</p>
          <p>{invoice.clientId?.address?.city || "Client city"}</p>
          <p>{invoice.clientId?.address?.postalCode || "Client postal code"}</p>
        </div>

        <div className={styles.billCard}>
          <span className={styles.cardLabel}>Payment Details</span>
          <p><strong>Payment Method:</strong> E-transfer / Cheque / Cash</p>
          <p><strong>Send Payment To:</strong> vrose834@gmail.com</p>
          {/* <p><strong>Currency:</strong> {invoice.currency || "CAD"}</p> */}
          {/* <p><strong>Tax:</strong> HST / GST placeholder</p> */}
        </div>
      </div>

      <div className={styles.invoiceTable}>
        <div className={styles.invoiceTableHead}>
          <div>Description</div>
          <div>Qty</div>
          <div>Unit Price</div>
          <div>Total</div>
        </div>

        {(isEditing ? editable?.lineItems || [] : invoice.lineItems).map(
          (li, idx) => (
            <div
              key={li._id || li.description || idx}
              className={styles.invoiceTableRow}
            >
              <div>
                {isEditing ? (
                  <input
                    value={li.description}
                    onChange={(e) => {
                      const v = e.target.value;
                      setEditable((prev) => ({
                        ...prev,
                        lineItems: prev.lineItems.map((it, i) =>
                          i === idx ? { ...it, description: v } : it
                        ),
                      }));
                    }}
                  />
                ) : (
                  li.description
                )}
              </div>

              <div>
                {isEditing ? (
                  <input
                    type="number"
                    value={li.quantity}
                    onChange={(e) => {
                      const q = Number(e.target.value || 0);
                      setEditable((prev) => ({
                        ...prev,
                        lineItems: prev.lineItems.map((it, i) =>
                          i === idx
                            ? {
                                ...it,
                                quantity: q,
                                total: +(q * (it.unitPrice || 0)),
                              }
                            : it
                        ),
                      }));
                    }}
                  />
                ) : (
                  li.quantity
                )}
              </div>

              <div>
                {isEditing ? (
                  <input
                    type="number"
                    value={li.unitPrice}
                    onChange={(e) => {
                      const u = Number(e.target.value || 0);
                      setEditable((prev) => ({
                        ...prev,
                        lineItems: prev.lineItems.map((it, i) =>
                          i === idx
                            ? {
                                ...it,
                                unitPrice: u,
                                total: +(u * (it.quantity || 1)),
                              }
                            : it
                        ),
                      }));
                    }}
                  />
                ) : (
                  `$${Number(li.unitPrice || 0).toFixed(2)}`
                )}
              </div>

              <div>
                ${Number(li.total || 0).toFixed(2)}
              </div>
            </div>
          )
        )}
      </div>

      <div className={styles.invoiceBottom}>
        <div className={styles.invoiceNotesBlock}>
          <h4>Notes</h4>
          {!isEditing ? (
            <p>
              {invoice.notes ||
                "Thank you for choosing my services. Please reach out if you have any questions about this invoice."}
            </p>
          ) : (
            <textarea
              value={editable.notes || ""}
              onChange={(e) =>
                setEditable({ ...editable, notes: e.target.value })
              }
            />
          )}

          <h4>Terms</h4>
          {!isEditing ? (
            <p>
              {invoice.terms ||
                "Payment is due by the listed due date. Late payments may be subject to additional fees."}
            </p>
          ) : (
            <textarea
              value={editable.terms || ""}
              onChange={(e) =>
                setEditable({ ...editable, terms: e.target.value })
              }
            />
          )}
        </div>

        <div className={styles.invoiceTotalsCard}>
          <div>
            <span>Subtotal</span>
            <strong>
              ${(isEditing ? editable.subtotal || 0 : invoice.subtotal || 0).toFixed(2)}
            </strong>
          </div>

          <div>
            <span>Tax</span>
            <strong>
              ${(isEditing ? editable.tax || 0 : invoice.tax || 0).toFixed(2)}
            </strong>
          </div>

          <div className={styles.grandTotal}>
            <span>Total Due</span>
            <strong>
              ${(isEditing ? editable.total || 0 : invoice.total || 0).toFixed(2)}
            </strong>
          </div>
        </div>
      </div>

      <div className={styles.invoiceFooter}>
        <p>Your Business Name • your@email.com • yourwebsite.com</p>
      </div>
    </section>

    <Modal
      open={openPayment}
      title="Create Payment"
      onClose={() => setOpenPayment(false)}
    >
      <form onSubmit={handlePaymentCreate} className={styles.form}>
        <label>
          Amount
          <input
            required
            value={paymentForm.amount}
            onChange={(e) =>
              setPaymentForm({ ...paymentForm, amount: e.target.value })
            }
            type="number"
            step="0.01"
          />
        </label>

        <label>
          Currency
          <select
            value={paymentForm.currency}
            onChange={(e) =>
              setPaymentForm({ ...paymentForm, currency: e.target.value })
            }
          >
            <option>CAD</option>
            <option>USD</option>
          </select>
        </label>

        <label>
          Method
          <select
            value={paymentForm.method}
            onChange={(e) =>
              setPaymentForm({ ...paymentForm, method: e.target.value })
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
            value={paymentForm.status}
            onChange={(e) =>
              setPaymentForm({ ...paymentForm, status: e.target.value })
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
            value={paymentForm.date}
            onChange={(e) =>
              setPaymentForm({ ...paymentForm, date: e.target.value })
            }
          />
        </label>

        <label>
          Notes
          <textarea
            value={paymentForm.notes}
            onChange={(e) =>
              setPaymentForm({ ...paymentForm, notes: e.target.value })
            }
          />
        </label>

        <div className={styles.actions}>
          <button type="submit" className={styles.create}>
            Create
          </button>
        </div>
      </form>
    </Modal>
  </main>
);
}
