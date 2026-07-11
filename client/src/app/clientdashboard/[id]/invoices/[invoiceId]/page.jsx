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
const [payments, setPayments] = useState([]);
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
  if (invoiceId) {
    fetchInvoice();
  }
}, [invoiceId]);

useEffect(() => {
  if (invoice && invoice.clientId) fetchPayments();
}, [invoice]);

const fetchInvoice = async () => {
  setLoading(true);

  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${API_URL}/api/invoices/${invoiceId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to load invoice");
    }

    const loadedInvoice = data.invoice;

    setInvoice(loadedInvoice);
    setEditable(null);
    setIsEditing(false);

    setPaymentForm((prev) => ({
      ...prev,
      amount: loadedInvoice.total || 0,
      currency: loadedInvoice.currency || "CAD",
    }));
  } catch (err) {
    console.error(err);
    alert(err.message || "Failed to load invoice");
  } finally {
    setLoading(false);
  }
};

const fetchPayments = async () => {
  if (!invoice || !invoice.clientId) return;
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${API_URL}/api/payments?clientId=${invoice.clientId._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const j = await res.json();
    if (!res.ok) throw new Error(j.error || 'Failed to load payments');

    const forInvoice = (j.payments || []).filter((p) => String(p.invoiceId) === String(invoice._id) && p.status === 'completed');
    setPayments(forInvoice);
  } catch (err) {
    console.error(err);
  }
};

const startEdit = () => {
  if (!invoice) return;

  const invoiceCopy = structuredClone
    ? structuredClone(invoice)
    : JSON.parse(JSON.stringify(invoice));

  setEditable({
    ...invoiceCopy,
    issuer: {
      name:
        invoiceCopy.issuer?.name ||
        "VRB Web Design and Development",
      address:
        invoiceCopy.issuer?.address ||
        "Halifax, Nova Scotia",
      email:
        invoiceCopy.issuer?.email ||
        "victoria@vrbwebdesignanddev.com",
      phone:
        invoiceCopy.issuer?.phone ||
        "(902) 817-1001",
      website:
        invoiceCopy.issuer?.website ||
        "www.vrbwebdesignanddev.com",
    },
    lineItems: (invoiceCopy.lineItems || []).map((item) => ({
      ...item,
      quantity: Number(item.quantity || 0),
      unitPrice: Number(item.unitPrice || 0),
      total:
        Number(item.total) ||
        Number(item.quantity || 0) * Number(item.unitPrice || 0),
    })),
  });

  setIsEditing(true);
};

const addLineItem = () => {
  setEditable((prev) => {
    if (!prev) return prev;

    const next = { ...(prev || {}) };
    next.lineItems = next.lineItems || [];
    next.lineItems.push({ description: '', quantity: 1, unitPrice: 0, total: 0, custom: true });
    return next;
  });

  setIsEditing(true);
};

const cancelEdit = () => {
  setEditable(null);
  setIsEditing(false);
};

const updateEditableField = (field, value) => {
  setEditable((prev) => {
    if (!prev) return prev;

    return {
      ...prev,
      [field]: value,
    };
  });
};

const updateIssuerField = (field, value) => {
  setEditable((prev) => {
    if (!prev) return prev;

    return {
      ...prev,
      issuer: {
        ...(prev.issuer || {}),
        [field]: value,
      },
    };
  });
};

const updateLineItem = (index, field, value) => {
  setEditable((prev) => {
    if (!prev) return prev;

    const nextLineItems = (prev.lineItems || []).map((item, itemIndex) => {
      if (itemIndex !== index) return item;

      const updatedItem = {
        ...item,
        [field]:
          field === "quantity" || field === "unitPrice"
            ? Number(value || 0)
            : value,
      };

      const quantity = Number(updatedItem.quantity || 0);
      const unitPrice = Number(updatedItem.unitPrice || 0);

      return {
        ...updatedItem,
        total: Number((quantity * unitPrice).toFixed(2)),
      };
    });

    const subtotal = nextLineItems.reduce(
      (sum, item) => sum + Number(item.total || 0),
      0
    );

    const tax = Number(prev.tax || 0);
    const total = subtotal + tax;

    return {
      ...prev,
      lineItems: nextLineItems,
      subtotal: Number(subtotal.toFixed(2)),
      total: Number(total.toFixed(2)),
    };
  });
};

const updateTax = (value) => {
  const tax = Number(value || 0);

  setEditable((prev) => {
    if (!prev) return prev;

    const subtotal = (prev.lineItems || []).reduce(
      (sum, item) => sum + Number(item.total || 0),
      0
    );

    return {
      ...prev,
      tax,
      subtotal: Number(subtotal.toFixed(2)),
      total: Number((subtotal + tax).toFixed(2)),
    };
  });
};

const saveEdit = async () => {
  if (!editable || !invoice?._id) return;

  const token = localStorage.getItem("token");

  try {
    const body = {
      currency: editable.currency,
      title: editable.title,
      description: editable.description,
      issuer: editable.issuer,
      terms: editable.terms,
      lineItems: (editable.lineItems || []).map((item) => ({
        description: item.description,
        serviceItemId: item.serviceItemId || undefined,
        quantity: Number(item.quantity || 0),
        unitPrice: Number(item.unitPrice || 0),
        custom: item.custom || false,
      })),
      tax: Number(editable.tax || 0),
      notes: editable.notes,
      dueDate: editable.dueDate || null,
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

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to update invoice");
    }

    setInvoice(data.invoice);
    setEditable(null);
    setIsEditing(false);
  } catch (err) {
    console.error(err);
    alert(err.message || "Save failed");
  }
};

const submitAndMarkPaid = async () => {
  if (!invoice) return;

  if (!invoice.issuedAt) {
    if (!confirm('Invoice has no issued date. Set issued date to today?')) return;
  }

  if (!invoice.dueDate) {
    if (!confirm('Invoice has no due date. Continue without due date?')) return;
  }

  const paidSoFar = payments.reduce((s, p) => s + Number(p.amount || 0), 0);
  const balance = Number((invoice.total || 0) - paidSoFar);
  const token = localStorage.getItem('token');

  try {
    if (balance > 0) {
      const payRes = await fetch(`${API_URL}/api/payments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ clientId: invoice.clientId._id, amount: balance, currency: invoice.currency || 'CAD', method: 'other', status: 'completed', date: new Date(), invoiceId: invoice._id }),
      });

      const pj = await payRes.json();
      if (!payRes.ok) throw new Error(pj.error || 'Failed to create payment');
    }

    const body = { status: 'paid' };
    if (!invoice.issuedAt) body.issuedAt = new Date();

    const res = await fetch(`${API_URL}/api/invoices/${invoice._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });

    const j = await res.json();
    if (!res.ok) throw new Error(j.error || 'Failed to update invoice');

    setInvoice(j.invoice);
    await fetchPayments();
    alert('Invoice marked as paid');
  } catch (err) {
    console.error(err);
    alert(err.message || 'Failed to submit');
  }
};

const deleteInvoice = async () => {
  const confirmed = window.confirm(
    "Delete this invoice? This action cannot be undone."
  );

  if (!confirmed) return;

  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${API_URL}/api/invoices/${invoice._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Delete failed");
    }

    router.push(`/clientdashboard/${id}/invoices`);
  } catch (err) {
    console.error(err);
    alert(err.message || "Delete failed");
  }
};

const printInvoice = () => {
  if (isEditing) {
    alert("Please save or cancel your changes before printing.");
    return;
  }

  window.print();
};

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

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to create payment");
    }

    setOpenPayment(false);
    router.push(`/clientdashboard/${id}/payments`);
  } catch (err) {
    console.error(err);
    alert(err.message || "Error creating payment");
  }
};

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const formatMoney = (value) => {
  return Number(value || 0).toLocaleString("en-CA", {
    style: "currency",
    currency: invoice?.currency || "CAD",
  });
};

if (loading) {
  return <div className={styles.wrap}>Loading...</div>;
}

if (!invoice) {
  return <div className={styles.wrap}>No invoice found.</div>;
}

const displayedInvoice =
  isEditing && editable
    ? editable
    : invoice;

  return (
  <main className={styles.wrap}>
    <div className={styles.header}>
      <button
        type="button"
        className={styles.back}
        onClick={() => router.push(`/clientdashboard/${id}/payments`)}
      >
        Back
      </button>

      <div className={styles.pageHeading}>
        <span className={styles.eyebrow}>Invoice Preview</span>
        <h1>Invoice — {invoice.invoiceId}</h1>
      </div>

      <div className={styles.headerActions}>
        {!isEditing ? (
          <>
            <button
              type="button"
              className={styles.create}
              onClick={() => setOpenPayment(true)}
            >
              Add Payment
            </button>

            <button
              type="button"
              className={styles.print}
              onClick={printInvoice}
            >
              Print / Download
            </button>

            <button
              type="button"
              className={styles.delete}
              onClick={deleteInvoice}
            >
              Delete Invoice
            </button>

            <button
              type="button"
              className={styles.create}
              onClick={submitAndMarkPaid}
            >
              Submit / Mark Paid
            </button>

            <button
              type="button"
              className={styles.view}
              onClick={startEdit}
            >
              Edit Invoice
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className={styles.create}
              onClick={addLineItem}
            >
              Add Item
            </button>

            <button
              type="button"
              className={styles.create}
              onClick={saveEdit}
            >
              Save
            </button>

            <button
              type="button"
              className={styles.create}
              onClick={submitAndMarkPaid}
            >
              Submit / Mark Paid
            </button>

            <button
              type="button"
              className={styles.delete}
              onClick={cancelEdit}
            >
              Cancel - here
            </button>
          </>
        )}
      </div>
    </div>

    <section
      className={styles.invoiceDocument}
      ref={docRef}
    >
      <div className={styles.invoiceTop}>
        <div className={styles.brandBlock}>
          <div className={styles.logoPlaceholder}>
            <img
              src="/VRBLogo.png"
              alt="VRB Web Design and Development"
            />
          </div>

          {!isEditing ? (
            <div className={styles.issuerDetails}>
              <h2>
                {invoice.issuer?.name ||
                  "VRB Web Design and Development"}
              </h2>

              <p>
                {invoice.issuer?.address ||
                  "Halifax, Nova Scotia"}
              </p>

              <p>
                {invoice.issuer?.email ||
                  "victoria@vrbwebdesignanddev.com"}
              </p>

              <p>
                {invoice.issuer?.phone ||
                  "(902) 817-1001"}
              </p>

              <p>
                {invoice.issuer?.website ||
                  "www.vrbwebdesignanddev.com"}
              </p>
            </div>
          ) : (
            <div className={styles.issuerForm}>
              <input
                type="text"
                placeholder="Your business name"
                value={editable?.issuer?.name || ""}
                onChange={(e) =>
                  updateIssuerField("name", e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Business address"
                value={editable?.issuer?.address || ""}
                onChange={(e) =>
                  updateIssuerField("address", e.target.value)
                }
              />

              <input
                type="email"
                placeholder="Email"
                value={editable?.issuer?.email || ""}
                onChange={(e) =>
                  updateIssuerField("email", e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Phone"
                value={editable?.issuer?.phone || ""}
                onChange={(e) =>
                  updateIssuerField("phone", e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Website"
                value={editable?.issuer?.website || ""}
                onChange={(e) =>
                  updateIssuerField("website", e.target.value)
                }
              />
            </div>
          )}
        </div>

        <div className={styles.invoiceMetaCard}>
          <h3>Invoice</h3>

          <div className={styles.metaRow}>
            <span>Invoice No.</span>
            <strong>{invoice.invoiceId || "INV-0000"}</strong>
          </div>

          <div className={styles.metaRow}>
            <span>Issued</span>
            <strong>{formatDate(invoice.issuedAt)}</strong>
          </div>

          <div className={styles.metaRow}>
            <span>Due</span>

            {!isEditing ? (
              <strong>
                {invoice.dueDate
                  ? formatDate(invoice.dueDate)
                  : "Due date"}
              </strong>
            ) : (
              <input
                type="date"
                value={
                  editable?.dueDate
                    ? String(editable.dueDate).split("T")[0]
                    : ""
                }
                onChange={(e) =>
                  updateEditableField("dueDate", e.target.value)
                }
              />
            )}
          </div>

          <div className={styles.metaRow}>
            <span>Status</span>

            {!isEditing ? (
              <strong className={styles.status}>
                {invoice.status || "Unpaid"}
              </strong>
            ) : (
              <select
                value={editable?.status || "unpaid"}
                onChange={(e) =>
                  updateEditableField("status", e.target.value)
                }
              >
                <option value="draft">Draft</option>
                <option value="unpaid">Unpaid</option>
                <option value="pending">Pending</option>
                <option value="partially_paid">
                  Partially Paid
                </option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
                <option value="cancelled">Cancelled</option>
              </select>
            )}
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
              value={editable?.title || ""}
              onChange={(e) =>
                updateEditableField("title", e.target.value)
              }
              placeholder="Invoice title"
            />

            <textarea
              className={styles.descInput}
              value={editable?.description || ""}
              onChange={(e) =>
                updateEditableField("description", e.target.value)
              }
              placeholder="Invoice description"
            />
          </div>
        )}
      </div>

      <div className={styles.billGrid}>
        <div className={styles.billCard}>
          <span className={styles.cardLabel}>Bill To</span>

          <h3>
            {invoice.clientId?.businessName ||
              invoice.clientId?.name ||
              "Client Name"}
          </h3>

          {invoice.clientId?.email && (
            <p>{invoice.clientId.email}</p>
          )}

          {invoice.clientId?.phone && (
            <p>{invoice.clientId.phone}</p>
          )}

          {invoice.clientId?.address?.street && (
            <p>{invoice.clientId.address.street}</p>
          )}

          {(invoice.clientId?.address?.city ||
            invoice.clientId?.address?.province ||
            invoice.clientId?.address?.postalCode) && (
            <p>
              {[
                invoice.clientId?.address?.city,
                invoice.clientId?.address?.province,
                invoice.clientId?.address?.postalCode,
              ]
                .filter(Boolean)
                .join(", ")}
            </p>
          )}
        </div>

        <div className={styles.billCard}>
          <span className={styles.cardLabel}>
            Payment Details
          </span>

          <p>
            <strong>Payment Method:</strong>{" "}
            E-transfer / Cheque / Cash
          </p>

          <p>
            <strong>Send Payment To:</strong>{" "}
            vrose834@gmail.com
          </p>

          <p>
            <strong>Currency:</strong>{" "}
            {displayedInvoice.currency || "CAD"}
          </p>
        </div>
      </div>

      <div className={styles.invoiceTable}>
        <div className={styles.invoiceTableHead}>
          <div>Description</div>
          <div>Qty</div>
          <div>Unit Price</div>
          <div>Total</div>
        </div>

        {(displayedInvoice.lineItems || []).map((item, index) => (
          <div
            key={item._id || `${item.description}-${index}`}
            className={styles.invoiceTableRow}
          >
            <div className={styles.descriptionColumn}>
              {isEditing ? (
                <input
                  type="text"
                  value={item.description || ""}
                  onChange={(e) =>
                    updateLineItem(
                      index,
                      "description",
                      e.target.value
                    )
                  }
                />
              ) : (
                item.description
              )}
            </div>

            <div>
              {isEditing ? (
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={item.quantity ?? 0}
                  onChange={(e) =>
                    updateLineItem(
                      index,
                      "quantity",
                      e.target.value
                    )
                  }
                />
              ) : (
                item.quantity
              )}
            </div>

            <div>
              {isEditing ? (
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.unitPrice ?? 0}
                  onChange={(e) =>
                    updateLineItem(
                      index,
                      "unitPrice",
                      e.target.value
                    )
                  }
                />
              ) : (
                formatMoney(item.unitPrice)
              )}
            </div>

            <div>{formatMoney(item.total)}</div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0.5rem 0', textAlign: 'right' }}>
          <button type="button" className={styles.create} onClick={addLineItem}>
            Add Item
          </button>
        </div>
      )}

      <div className={styles.invoiceBottom}>
        <div className={styles.invoiceNotesBlock}>
          <div className={styles.notesSection}>
            <h4>Notes</h4>

            {!isEditing ? (
              <p>
                {invoice.notes ||
                  "Thank you for choosing my services. Please reach out if you have any questions about this invoice."}
              </p>
            ) : (
              <textarea
                value={editable?.notes || ""}
                onChange={(e) =>
                  updateEditableField("notes", e.target.value)
                }
              />
            )}
          </div>

          <div className={styles.notesSection}>
            <h4>Terms</h4>

            {!isEditing ? (
              <p>
                {invoice.terms ||
                  "Payment is due by the listed due date. Late payments may be subject to additional fees."}
              </p>
            ) : (
              <textarea
                value={editable?.terms || ""}
                onChange={(e) =>
                  updateEditableField("terms", e.target.value)
                }
              />
            )}
          </div>
        </div>

        <div className={styles.invoiceTotalsCard}>
          <div>
            <span>Subtotal</span>
            <strong>
              {formatMoney(displayedInvoice.subtotal)}
            </strong>
          </div>

          <div>
            <span>Tax</span>

            {isEditing ? (
              <input
                type="number"
                min="0"
                step="0.01"
                value={editable?.tax ?? 0}
                onChange={(e) => updateTax(e.target.value)}
              />
            ) : (
              <strong>{formatMoney(invoice.tax)}</strong>
            )}
          </div>

          <div className={styles.grandTotal}>
            <span>Total Due</span>
            <strong>
              {formatMoney(displayedInvoice.total)}
            </strong>
          </div>
        </div>
      </div>

      <div className={styles.invoiceFooter}>
        <p>
          VRB Web Design &amp; Development
          <span>•</span>
          victoria@vrbwebdesignanddev.com
          <span>•</span>
          www.vrbwebdesignanddev.com
        </p>
      </div>
    </section>

    <Modal
      open={openPayment}
      title="Create Payment"
      onClose={() => setOpenPayment(false)}
    >
      <form
        onSubmit={handlePaymentCreate}
        className={styles.form}
      >
        <label>
          Amount
          <input
            required
            type="number"
            min="0"
            step="0.01"
            value={paymentForm.amount}
            onChange={(e) =>
              setPaymentForm((prev) => ({
                ...prev,
                amount: e.target.value,
              }))
            }
          />
        </label>

        <label>
          Currency
          <select
            value={paymentForm.currency}
            onChange={(e) =>
              setPaymentForm((prev) => ({
                ...prev,
                currency: e.target.value,
              }))
            }
          >
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
          </select>
        </label>

        <label>
          Method
          <select
            value={paymentForm.method}
            onChange={(e) =>
              setPaymentForm((prev) => ({
                ...prev,
                method: e.target.value,
              }))
            }
          >
            <option value="card">Card</option>
            <option value="bank_transfer">
              Bank transfer
            </option>
            <option value="cash">Cash</option>
            <option value="cheque">Cheque</option>
            <option value="etransfer">E-transfer</option>
          </select>
        </label>

        <label>
          Status
          <select
            value={paymentForm.status}
            onChange={(e) =>
              setPaymentForm((prev) => ({
                ...prev,
                status: e.target.value,
              }))
            }
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <label>
          Date
          <input
            type="date"
            value={paymentForm.date}
            onChange={(e) =>
              setPaymentForm((prev) => ({
                ...prev,
                date: e.target.value,
              }))
            }
          />
        </label>

        <label>
          Notes
          <textarea
            value={paymentForm.notes}
            onChange={(e) =>
              setPaymentForm((prev) => ({
                ...prev,
                notes: e.target.value,
              }))
            }
          />
        </label>

        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.create}
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  </main>

);
}
