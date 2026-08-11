"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { formatDate } from "./invoices/[invoiceId]/helpers/formatDate";
import styles from "../page.module.css";
import Modal from "../../Components/Modal/Modal";
import { EditableField } from "./editableField";
// modal state for todos and meetings
const emptyTodo = {
  title: "",
  description: "",
  assignedTo: "",
  status: "todo",
  priority: "medium",
  dueDate: "",
};
const emptyMeeting = { title: "", date: "", attendeesText: "", notes: "" };

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function ClientDashboard() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [client, setClient] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [payments, setPayments] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [todos, setTodos] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [todoOpen, setTodoOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [todoForm, setTodoForm] = useState(emptyTodo);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    status: "lead",
    address_street: "",
    address_city: "",
    address_province: "",
    address_postalCode: "",
    address_country: "Canada",
    notes: "",
  });

  const [meetingOpen, setMeetingOpen] = useState(false);
  const [contactEditing, setContactEditing] = useState(false);
  const [editingMeeting, setEditingMeeting] = useState(null);
  const [meetingForm, setMeetingForm] = useState(emptyMeeting);

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      router.replace("/login");
      return;
    }
    const headers = { Authorization: `Bearer ${token}` };

    const fetchAll = async () => {
      setLoading(true);
      setError("");
      try {
        const [cRes, pRes, payRes, iRes, tRes, mRes] = await Promise.all([
          fetch(`${API_URL}/api/clients/${id}`, { headers }),
          fetch(`${API_URL}/api/proposals?clientId=${id}`, { headers }),
          fetch(`${API_URL}/api/payments?clientId=${id}`, { headers }),
          fetch(`${API_URL}/api/invoices?clientId=${id}`, { headers }),
          fetch(`${API_URL}/api/todos?clientId=${id}`, { headers }),
          fetch(`${API_URL}/api/meeting-notes?clientId=${id}`, { headers }),
        ]);

        if (!cRes.ok) throw new Error("Failed to load client");
        const cJson = await cRes.json();
        const pJson = await pRes.json();
        const payJson = await payRes.json();
        const iJson = iRes.ok ? await iRes.json() : { invoices: [] };
        const tJson = await tRes.json();
        const mJson = await mRes.json();

        setClient(cJson.client);
        setProposals(pJson.proposals || []);
        setPayments(payJson.payments || []);
        setInvoices(iJson.invoices || []);
        setTodos(tJson.todos || []);
        setMeetings(mJson.meetings || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [id]);

  const totalProposals = proposals.reduce(
    (s, p) => s + ((p.pricing && p.pricing.total) || 0),
    0,
  );
  const totalPayments = payments.reduce((s, p) => s + Number(p.amount || 0), 0);
  const outstanding = Math.max(0, totalProposals - totalPayments);
  const totalInvoices = invoices.reduce(
    (s, inv) => s + (inv.total || inv.subtotal || 0),
    0,
  );
  const paidInvoices = totalPayments; // sum of completed payments
  const unpaidInvoices = Math.max(0, totalInvoices - paidInvoices);

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button
          className={styles.back}
          onClick={() => router.push("/dashboard")}
        >
          Back
        </button>
      </div>

      {loading ? (
        <div className={styles.emptyState}>Loading...</div>
      ) : (
        <div>
          {error && <div className={styles.error}>{error}</div>}

          {client && (
            <>
              <section
                style={{
                  marginBottom: 16,
                  background: "#fff",
                  padding: 16,
                  borderRadius: 12,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                >
                  <div>
                    <div className={styles.eyebrow}>Client Dashboard</div>
                    <h1 style={{ marginTop: 6 }}>
                      {client.businessName || client.name || "Client"}
                    </h1>
                    <div className={styles.clientInfoGrid}>
                      <EditableField
                        label="Business Name"
                        value={
                          contactEditing
                            ? contactForm.businessName
                            : client.businessName
                        }
                        editing={contactEditing}
                        field="businessName"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Contact Name"
                        value={
                          contactEditing
                            ? contactForm.contactName
                            : client.contactName
                        }
                        editing={contactEditing}
                        field="contactName"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Email"
                        value={
                          contactEditing ? contactForm.email : client.email
                        }
                        editing={contactEditing}
                        field="email"
                        type="email"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Phone"
                        value={
                          contactEditing ? contactForm.phone : client.phone
                        }
                        editing={contactEditing}
                        field="phone"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Website"
                        value={
                          contactEditing ? contactForm.website : client.website
                        }
                        editing={contactEditing}
                        field="website"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Industry"
                        value={
                          contactEditing
                            ? contactForm.industry
                            : client.industry
                        }
                        editing={contactEditing}
                        field="industry"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Status"
                        value={
                          contactEditing ? contactForm.status : client.status
                        }
                        editing={contactEditing}
                        field="status"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Street"
                        value={
                          contactEditing
                            ? contactForm.address_street
                            : client.address?.street
                        }
                        editing={contactEditing}
                        field="address_street"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="City"
                        value={
                          contactEditing
                            ? contactForm.address_city
                            : client.address?.city
                        }
                        editing={contactEditing}
                        field="address_city"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Province"
                        value={
                          contactEditing
                            ? contactForm.address_province
                            : client.address?.province
                        }
                        editing={contactEditing}
                        field="address_province"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Postal Code"
                        value={
                          contactEditing
                            ? contactForm.address_postalCode
                            : client.address?.postalCode
                        }
                        editing={contactEditing}
                        field="address_postalCode"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Country"
                        value={
                          contactEditing
                            ? contactForm.address_country
                            : client.address?.country
                        }
                        editing={contactEditing}
                        field="address_country"
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />

                      <EditableField
                        label="Notes"
                        value={
                          contactEditing ? contactForm.notes : client.notes
                        }
                        editing={contactEditing}
                        field="notes"
                        textarea
                        onChange={(field, value) =>
                          setContactForm({ ...contactForm, [field]: value })
                        }
                      />
                    </div>
                  </div>
                  <div style={{ minWidth: 220, textAlign: "right" }}>
                    <div style={{ marginBottom: 8 }}>
                      Invoices total: <strong>${totalInvoices}</strong>
                    </div>
                    <div>
                      Paid: <strong>${paidInvoices}</strong>
                    </div>
                    <div>
                      Unpaid: <strong>${unpaidInvoices}</strong>
                    </div>
                    <div style={{ marginTop: 8 }}>
                      {!contactEditing ? (
                        <button
                          onClick={() => {
                            setContactForm({
                              businessName: client.businessName || "",
                              contactName: client.contactName || "",
                              email: client.email || "",
                              phone: client.phone || "",
                              website: client.website || "",
                              industry: client.industry || "",
                              status: client.status || "lead",
                              address_street:
                                (client.address && client.address.street) || "",
                              address_city:
                                (client.address && client.address.city) || "",
                              address_province:
                                (client.address && client.address.province) ||
                                "",
                              address_postalCode:
                                (client.address && client.address.postalCode) ||
                                "",
                              address_country:
                                (client.address && client.address.country) ||
                                "Canada",
                              notes: client.notes || "",
                            });
                            setContactEditing(true);
                          }}
                          aria-label="Edit contact"
                          style={{
                            background: "transparent",
                            border: "none",
                            fontSize: 18,
                            cursor: "pointer",
                          }}
                        >
                          ✏️
                        </button>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            gap: 8,
                            justifyContent: "flex-end",
                          }}
                        >
                          <button
                            className={styles.saveButton}
                            onClick={async () => {
                              const token = localStorage.getItem("token");
                              try {
                                const payload = {
                                  businessName: contactForm.businessName,
                                  contactName: contactForm.contactName,
                                  email: contactForm.email,
                                  phone: contactForm.phone,
                                  website: contactForm.website,
                                  industry: contactForm.industry,
                                  status: contactForm.status,
                                  address: {
                                    street: contactForm.address_street,
                                    city: contactForm.address_city,
                                    province: contactForm.address_province,
                                    postalCode: contactForm.address_postalCode,
                                    country: contactForm.address_country,
                                  },
                                  notes: contactForm.notes,
                                };
                                const res = await fetch(
                                  `${API_URL}/api/clients/${id}`,
                                  {
                                    method: "PUT",
                                    headers: {
                                      "Content-Type": "application/json",
                                      Authorization: `Bearer ${token}`,
                                    },
                                    body: JSON.stringify(payload),
                                  },
                                );
                                const j = await res.json();
                                if (!res.ok)
                                  throw new Error(j.error || "Save failed");
                                setClient(j.client || null);
                                setContactEditing(false);
                              } catch (err) {
                                alert(err.message || "Error");
                              }
                            }}
                          >
                            Save
                          </button>
                          <button
                            className={styles.createSmall}
                            onClick={() => setContactEditing(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.lists}>
                <div className={styles.column}>
                  <h4>Proposals</h4>

                  {proposals.length === 0 ? (
                    <div className={styles.emptyState}>
                      <div>No proposals</div>

                      <button
                        className={styles.createSmall}
                        onClick={() =>
                          router.push(`/clientdashboard/${id}/proposals`)
                        }
                      >
                        Create Proposal
                      </button>
                    </div>
                  ) : (
                    <ul>
                      {proposals.map((p) => (
                        <li key={p._id}>
                          <strong>{p.title}</strong>
                          <div>
                            ${p.pricing?.total || 0} — {p.status}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className={styles.column}>
                  <h4>
                    <a href={`/clientdashboard/${id}/payments`}>Payments</a> &{" "}
                    <a href={`/clientdashboard/${id}/invoices`}>Invoices</a>
                  </h4>

                  {payments.length === 0 ? (
                    <div className={styles.emptyState}>
                      <div>No payments</div>

                      <button
                        className={styles.createSmall}
                        onClick={() =>
                          router.push(`/clientdashboard/${id}/payments`)
                        }
                      >
                        Create Payment
                      </button>
                    </div>
                  ) : (
                    <ul>
                      {payments.map((px) => (
                        <li key={px._id}>
                          <button
                            className={styles.link}
                            onClick={() =>
                              router.push(`/clientdashboard/${id}/payments`)
                            }
                          >
                            {px.amount} {px.currency} — {px.status} —{" "}
                            {formatDate(px.date)}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Invoices (show a short list) */}
                  <div style={{ marginTop: 12 }}>
                    <h5 style={{ margin: "8px 0" }}>Recent invoices</h5>

                    {invoices && invoices.length > 0 ? (
                      <ul>
                        {invoices.slice(0, 5).map((inv) => (
                          <li key={inv._id}>
                            <button
                              className={styles.link}
                              onClick={() =>
                                router.push(`/clientdashboard/${id}/invoices`)
                              }
                            >
                              {inv.invoiceId || "—"} —{" "}
                              {inv.total || inv.subtotal || 0}{" "}
                              {inv.currency || "CAD"}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div style={{ color: "#666", fontSize: 14 }}>
                        No invoices
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.column}>
                  <div className={styles.sectionTop}>
                    <h4>Todos</h4>

                    <button
                      className={styles.createSmall}
                      onClick={() => {
                        setEditingTodo(null);
                        setTodoForm(emptyTodo);
                        setTodoOpen(true);
                      }}
                    >
                      Add
                    </button>
                  </div>

                  {todos.length === 0 ? (
                    <div className={styles.emptyState}>No todos</div>
                  ) : (
                    <ul>
                      {todos.map((t) => {
                        const done = t.status === "done";
                        const prio = t.priority || "medium";
                        return (
                          <li
                            key={t._id}
                            className={done ? styles.todoDone : ""}
                          >
                            <div className={styles.todoItem}>
                              <button
                                className={styles.todoToggle}
                                aria-label={
                                  done ? "Mark as not done" : "Mark as done"
                                }
                                onClick={async (e) => {
                                  e.stopPropagation();
                                  const token = localStorage.getItem("token");
                                  try {
                                    const body = {
                                      status: done ? "todo" : "done",
                                      completedAt: done
                                        ? null
                                        : new Date().toISOString(),
                                    };
                                    const res = await fetch(
                                      `${API_URL}/api/todos/${t._id}`,
                                      {
                                        method: "PUT",
                                        headers: {
                                          "Content-Type": "application/json",
                                          Authorization: `Bearer ${token}`,
                                        },
                                        body: JSON.stringify(body),
                                      },
                                    );
                                    const j = await res.json();
                                    if (!res.ok)
                                      throw new Error(j.error || "Failed");
                                    // update local list
                                    setTodos((prev) =>
                                      prev.map((it) =>
                                        it._id === t._id
                                          ? j.todo || { ...it, ...body }
                                          : it,
                                      ),
                                    );
                                  } catch (err) {
                                    alert(err.message || "Error");
                                  }
                                }}
                              >
                                {done ? "✔️" : "○"}
                              </button>

                              <div
                                className={`${styles.priorityDot} ${styles[`prio_${prio}`]}`}
                              />

                              <button
                                className={styles.link}
                                style={{ display: "block", width: "100%" }}
                                onClick={() => {
                                  setEditingTodo(t);
                                  setTodoForm({
                                    title: t.title || "",
                                    description: t.description || "",
                                    assignedTo: t.assignedTo || "",
                                    status: t.status || "todo",
                                    priority: t.priority || "medium",
                                    dueDate: t.dueDate
                                      ? new Date(t.dueDate)
                                          .toISOString()
                                          .slice(0, 10)
                                      : "",
                                  });
                                  setTodoOpen(true);
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  <span style={{ fontWeight: 700 }}>
                                    {t.title}
                                  </span>
                                  {t.description && (
                                    <span
                                      style={{
                                        fontSize: 12,
                                        color: "#666",
                                        marginTop: 6,
                                      }}
                                    >
                                      {String(t.description).slice(0, 80)}
                                      {String(t.description).length > 80
                                        ? "…"
                                        : ""}
                                    </span>
                                  )}
                                </div>
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                <div className={styles.column}>
                  <div className={styles.sectionTop}>
                    <h4>Meetings</h4>

                    <button
                      className={styles.createSmall}
                      onClick={() => {
                        setEditingMeeting(null);
                        setMeetingForm(emptyMeeting);
                        setMeetingOpen(true);
                      }}
                    >
                      Add
                    </button>
                  </div>

                  {meetings.length === 0 ? (
                    <div className={styles.emptyState}>No meetings</div>
                  ) : (
                    <ul>
                      {meetings.map((m) => (
                        <li key={m._id}>
                          <button
                            className={styles.link}
                            onClick={() => {
                              setEditingMeeting(m);
                              setMeetingForm({
                                title: m.title || "",
                                date: m.date
                                  ? new Date(m.date).toISOString().slice(0, 10)
                                  : "",
                                attendeesText: (m.attendees || []).join(", "),
                                notes: m.notes || "",
                              });
                              setMeetingOpen(true);
                            }}
                          >
                            {m.title} — {formatDate(m.date)}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              <Modal
                open={todoOpen}
                title={editingTodo ? "Edit Todo" : "Create Todo"}
                onClose={() => setTodoOpen(false)}
              >
                <form
                  className={styles.modalForm}
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const token = localStorage.getItem("token");

                    try {
                      const payload = { ...todoForm, clientId: id };
                      const method = editingTodo ? "PUT" : "POST";

                      const url = editingTodo
                        ? `${API_URL}/api/todos/${editingTodo._id}`
                        : `${API_URL}/api/todos`;

                      const res = await fetch(url, {
                        method,
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(payload),
                      });

                      const j = await res.json();

                      if (!res.ok) throw new Error(j.error || "Failed");

                      setTodoOpen(false);

                      const tRes = await fetch(
                        `${API_URL}/api/todos?clientId=${id}`,
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        },
                      );

                      const tJson = await tRes.json();
                      setTodos(tJson.todos || []);
                    } catch (err) {
                      alert(err.message || "Error");
                    }
                  }}
                >
                  <label>
                    Title
                    <input
                      required
                      value={todoForm.title}
                      onChange={(e) =>
                        setTodoForm({
                          ...todoForm,
                          title: e.target.value,
                        })
                      }
                    />
                  </label>

                  <label>
                    Description
                    <textarea
                      value={todoForm.description}
                      onChange={(e) =>
                        setTodoForm({
                          ...todoForm,
                          description: e.target.value,
                        })
                      }
                    />
                  </label>

                  <label>
                    Status
                    <select
                      value={todoForm.status}
                      onChange={(e) =>
                        setTodoForm({
                          ...todoForm,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="todo">todo</option>
                      <option value="in_progress">in_progress</option>
                      <option value="done">done</option>
                      <option value="blocked">blocked</option>
                    </select>
                  </label>

                  <label>
                    Priority
                    <select
                      value={todoForm.priority}
                      onChange={(e) =>
                        setTodoForm({
                          ...todoForm,
                          priority: e.target.value,
                        })
                      }
                    >
                      <option value="low">low</option>
                      <option value="medium">medium</option>
                      <option value="high">high</option>
                    </select>
                  </label>

                  <label>
                    Due Date
                    <input
                      type="date"
                      value={todoForm.dueDate}
                      onChange={(e) =>
                        setTodoForm({
                          ...todoForm,
                          dueDate: e.target.value,
                        })
                      }
                    />
                  </label>

                  <div className={styles.formActions}>
                    <button type="submit" className={styles.saveButton}>
                      Save
                    </button>
                  </div>
                </form>
              </Modal>

              {/* Inline contact edit replaces modal */}

              <Modal
                open={meetingOpen}
                title={editingMeeting ? "Edit Meeting" : "Create Meeting"}
                onClose={() => setMeetingOpen(false)}
              >
                <form
                  className={styles.modalForm}
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const token = localStorage.getItem("token");

                    try {
                      const payload = {
                        clientId: id,
                        title: meetingForm.title,
                        date: meetingForm.date || undefined,
                        attendees: meetingForm.attendeesText
                          ? meetingForm.attendeesText
                              .split(",")
                              .map((s) => s.trim())
                          : [],
                        notes: meetingForm.notes,
                      };

                      const method = editingMeeting ? "PUT" : "POST";

                      const url = editingMeeting
                        ? `${API_URL}/api/meeting-notes/${editingMeeting._id}`
                        : `${API_URL}/api/meeting-notes`;

                      const res = await fetch(url, {
                        method,
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(payload),
                      });

                      const j = await res.json();

                      if (!res.ok) throw new Error(j.error || "Failed");

                      setMeetingOpen(false);

                      const mRes = await fetch(
                        `${API_URL}/api/meeting-notes?clientId=${id}`,
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        },
                      );

                      const mJson = await mRes.json();
                      setMeetings(mJson.meetings || []);
                    } catch (err) {
                      alert(err.message || "Error");
                    }
                  }}
                >
                  <label>
                    Title
                    <input
                      required
                      value={meetingForm.title}
                      onChange={(e) =>
                        setMeetingForm({
                          ...meetingForm,
                          title: e.target.value,
                        })
                      }
                    />
                  </label>

                  <label>
                    Date
                    <input
                      type="date"
                      value={meetingForm.date}
                      onChange={(e) =>
                        setMeetingForm({
                          ...meetingForm,
                          date: e.target.value,
                        })
                      }
                    />
                  </label>

                  <label>
                    Attendees
                    <input
                      value={meetingForm.attendeesText}
                      placeholder="Comma separated"
                      onChange={(e) =>
                        setMeetingForm({
                          ...meetingForm,
                          attendeesText: e.target.value,
                        })
                      }
                    />
                  </label>

                  <label>
                    Notes
                    <textarea
                      value={meetingForm.notes}
                      onChange={(e) =>
                        setMeetingForm({
                          ...meetingForm,
                          notes: e.target.value,
                        })
                      }
                    />
                  </label>

                  <div className={styles.formActions}>
                    <button type="submit" className={styles.saveButton}>
                      Save
                    </button>
                  </div>
                </form>
              </Modal>
            </>
          )}
        </div>
      )}
    </main>
  );
}
