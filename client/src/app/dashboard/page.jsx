"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Modal from "../components/Modal/Modal";
import styles from "./dashboard.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    clients: [],
    proposals: [],
    templates: [],
    serviceItems: [],
    users: [],
    todos: [],
    payments: [],
    socialPosts: [],
  });

  const [leftView, setLeftView] = useState("clients"); // 'clients' or 'users'
  const [todoOpen, setTodoOpen] = useState(false);
  const [todoForm, setTodoForm] = useState({
    clientId: "",
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
    dueDate: "",
  });

  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    router.push("/login");
  };

  const fetchAll = async () => {
    setLoading(true);
    setError("");
    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const userJson =
        typeof window !== "undefined" ? localStorage.getItem("user") : null;
      const user = userJson ? JSON.parse(userJson) : null;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const endpoints = [
        fetch(`${API_URL}/api/clients`, { headers }),
        fetch(`${API_URL}/api/proposals`, { headers }),
        fetch(`${API_URL}/api/proposal-templates`, { headers }),
        fetch(`${API_URL}/api/service-items`, { headers }),
        fetch(`${API_URL}/api/todos`, { headers }),
        fetch(`${API_URL}/api/payments`, { headers }),
        fetch(`${API_URL}/api/social-posts`, { headers }),
      ];

      if (user && user.role === "admin")
        endpoints.push(fetch(`${API_URL}/api/users`, { headers }));

      const results = await Promise.all(
        endpoints.map((p) =>
          p.then((r) => r.json().then((j) => ({ ok: r.ok, body: j }))),
        ),
      );

      setData({
        clients: results[0]?.ok ? results[0].body.clients || [] : [],
        proposals: results[1]?.ok ? results[1].body.proposals || [] : [],
        templates: results[2]?.ok ? results[2].body.templates || [] : [],
        serviceItems: results[3]?.ok ? results[3].body.items || [] : [],
        todos: results[4]?.ok ? results[4].body.todos || [] : [],
        payments: results[5]?.ok ? results[5].body.payments || [] : [],
        socialPosts: results[6]?.ok ? results[6].body.posts || [] : [],
        users:
          user && user.role === "admin"
            ? results[6]?.ok
              ? results[6].body.users || []
              : []
            : [],
      });
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      router.replace("/login");
      return;
    }

    fetchAll();
  }, []);

  // Calendar state and helpers
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  const startOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
  const endOfMonth = (d) => new Date(d.getFullYear(), d.getMonth() + 1, 0);

  const buildCalendar = (d) => {
    const start = startOfMonth(d);
    const end = endOfMonth(d);
    const startWeekday = start.getDay();
    const days = [];
    // fill blanks
    for (let i = 0; i < startWeekday; i++) days.push(null);
    for (let day = 1; day <= end.getDate(); day++) {
      days.push(new Date(d.getFullYear(), d.getMonth(), day));
    }
    return days;
  };

  const postsByDate = (data.socialPosts || []).reduce((acc, p) => {
    const key = new Date(p.scheduledAt).toISOString().slice(0, 10);
    acc[key] = acc[key] || [];
    acc[key].push(p);
    return acc;
  }, {});

  const markPostPosted = async (postId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API_URL}/api/social-posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: "posted",
          postedAt: new Date().toISOString(),
        }),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      await fetchAll();
    } catch (err) {
      alert(err.message || "Error");
    }
  };

  return (
    <ProtectedRoute>
      <main className={styles.wrap}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Admin Dashboard</span>
            <h1>Dashboard</h1>
            <p>
              Manage clients, todos, proposals, templates, and service items.
            </p>
          </div>

          <div className={styles.headerActions}>
            <button
              onClick={() => router.push("/service-items")}
              className={styles.btnSecondary}
            >
              Services
            </button>
            <button
              onClick={() => router.push("/instagram-checklist")}
              className={styles.btnSecondary}
            >
              Instagram Checklist
            </button>
            <button
              onClick={() => router.push("/create")}
              className={styles.btnSecondary}
            >
              Add Client
            </button>

            <button
              onClick={() => router.push("/proposals")}
              className={styles.btnSecondary}
            >
              Proposals
            </button>

            <button
              onClick={() => router.push("/proposal-templates")}
              className={styles.btnSecondary}
            >
              Templates
            </button>

            <button
              onClick={() => router.push("/social-calendar")}
              className={styles.btnSecondary}
            >
              Social Calendar
            </button>

            <button onClick={fetchAll} className={styles.btnPrimary}>
              Refresh
            </button>

            <button onClick={handleLogout} className={styles.btnGhost}>
              Logout
            </button>
          </div>
        </header>

        {error && <div className={styles.error}>{error}</div>}

        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <>
            <section className={styles.statsGrid}>
              <article className={styles.statCard}>
                <span>Total Clients</span>
                <strong>{data.clients.length}</strong>
              </article>

              <article className={styles.statCard}>
                <span>Open Todos</span>
                <strong>
                  {data.todos.filter((t) => t.status !== "done").length}
                </strong>
              </article>

              <article className={styles.statCard}>
                <span>Proposals</span>
                <strong>{data.proposals.length}</strong>
              </article>

              <article className={styles.statCard}>
                <span>Payments</span>
                <strong>{data.payments.length}</strong>
              </article>
            </section>

            <div className={styles.dashboardGrid}>
              <aside className={styles.leftCol}>
                <div className={styles.leftHeader}>
                  <button
                    className={
                      leftView === "clients" ? styles.tabActive : styles.tab
                    }
                    onClick={() => setLeftView("clients")}
                  >
                    Clients
                  </button>

                  <button
                    className={
                      leftView === "users" ? styles.tabActive : styles.tab
                    }
                    onClick={() => setLeftView("users")}
                  >
                    Users
                  </button>
                </div>

                <div className={styles.summaryCard}>
                  <h4>Overview</h4>

                  <div>
                    <span>Total clients</span>
                    <strong>{data.clients.length}</strong>
                  </div>

                  <div>
                    <span>Open todos</span>
                    <strong>
                      {data.todos.filter((t) => t.status !== "done").length}
                    </strong>
                  </div>

                  <div>
                    <span>Outstanding balance</span>
                    <strong>
                      $
                      {Math.max(
                        0,
                        data.proposals.reduce(
                          (s, p) => s + (p.pricing?.total || 0),
                          0,
                        ) -
                          data.payments
                            .filter((px) => px.status === "completed")
                            .reduce((s, p) => s + (p.amount || 0), 0),
                      )}
                    </strong>
                  </div>
                </div>

                <div className={styles.leftList}>
                  {leftView === "clients" ? (
                    <ul>
                      {data.clients.map((c) => (
                        <li key={c._id || c.id} className={styles.leftItem}>
                          <button
                            className={styles.link}
                            onClick={() =>
                              router.push(`/clientdashboard/${c._id || c.id}`)
                            }
                          >
                            {c.businessName || c.name || c.email}
                          </button>

                          <span className={styles.count}>
                            {data.todos.filter(
                              (t) => String(t.clientId) === String(c._id),
                            ).length || 0}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul>
                      {data.users.map((u) => (
                        <li key={u._id || u.id} className={styles.leftItem}>
                          <div>
                            <strong>{u.name}</strong>
                            <div className={styles.todoMeta}>{u.email}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </aside>

              <main className={styles.mainCol}>
                <div className={styles.mainHeader}>
                  <h2>Todos</h2>

                  <button
                    className={styles.btnPrimary}
                    onClick={() => setTodoOpen(true)}
                  >
                    Create Todo
                  </button>
                </div>

                <section className={styles.todoList}>
                  {data.todos.length === 0 ? (
                    <div className={styles.emptyState}>No todos</div>
                  ) : (
                    <ul>
                      {data.todos.map((td) => {
                        const todoClient = data.clients.find(
                          (c) => String(c._id) === String(td.clientId),
                        );

                        return (
                          <li key={td._id} className={styles.todoItem}>
                            <div className={styles.todoTop}>
                              <div>
                                <strong>{td.title}</strong>

                                <div className={styles.todoMeta}>
                                  {todoClient?.businessName ||
                                    todoClient?.name ||
                                    "No client"}{" "}
                                  • {td.priority}
                                </div>
                              </div>

                              <span
                                className={`${styles.statusBadge} ${
                                  styles[td.status]
                                }`}
                              >
                                {td.status}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </section>

                <section className={styles.calendarWrap}>
                  <div className={styles.calendarHeader}>
                    <button
                      onClick={() =>
                        setCalendarMonth(
                          new Date(
                            calendarMonth.getFullYear(),
                            calendarMonth.getMonth() - 1,
                            1,
                          ),
                        )
                      }
                    >
                      {"<"}
                    </button>
                    <strong>
                      {calendarMonth.toLocaleString(undefined, {
                        month: "long",
                        year: "numeric",
                      })}
                    </strong>
                    <button
                      onClick={() =>
                        setCalendarMonth(
                          new Date(
                            calendarMonth.getFullYear(),
                            calendarMonth.getMonth() + 1,
                            1,
                          ),
                        )
                      }
                    >
                      {">"}
                    </button>
                  </div>
                  <div className={styles.calendarGrid}>
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (d) => (
                        <div key={d} className={styles.calendarWeekday}>
                          {d}
                        </div>
                      ),
                    )}
                    {buildCalendar(calendarMonth).map((day, idx) => {
                      const key = day
                        ? day.toISOString().slice(0, 10)
                        : `empty-${idx}`;
                      const posts = day ? postsByDate[key] || [] : [];
                      return (
                        <div key={key} className={styles.calendarCell}>
                          {day && (
                            <div className={styles.calendarDay}>
                              {day.getDate()}
                            </div>
                          )}
                          {posts.map((p) => (
                            <div
                              key={p._id}
                              className={
                                styles.postItem +
                                (p.status === "posted"
                                  ? " " + styles.posted
                                  : "")
                              }
                              onClick={() => {
                                if (p.status !== "posted")
                                  markPostPosted(p._id);
                              }}
                            >
                              <small>{p.clientName || ""}</small>
                              <div>{p.title}</div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </section>
              </main>
            </div>
          </>
        )}

        {todoOpen && (
          <Modal
            open={todoOpen}
            title="Create Todo"
            onClose={() => setTodoOpen(false)}
          >
            <form
              className={styles.todoForm}
              onSubmit={async (e) => {
                e.preventDefault();

                const token = localStorage.getItem("token");

                try {
                  const payload = { ...todoForm };

                  const res = await fetch(`${API_URL}/api/todos`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(payload),
                  });

                  const j = await res.json();

                  if (!res.ok) throw new Error(j.error || "Failed");

                  setTodoOpen(false);

                  setTodoForm({
                    clientId: "",
                    title: "",
                    description: "",
                    status: "todo",
                    priority: "medium",
                    dueDate: "",
                  });

                  await fetchAll();
                } catch (err) {
                  alert(err.message);
                }
              }}
            >
              <label>
                Client
                <select
                  required
                  value={todoForm.clientId}
                  onChange={(e) =>
                    setTodoForm({ ...todoForm, clientId: e.target.value })
                  }
                >
                  <option value="">Select client</option>

                  {data.clients.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.businessName || c.name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Title
                <input
                  required
                  value={todoForm.title}
                  onChange={(e) =>
                    setTodoForm({ ...todoForm, title: e.target.value })
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
                    setTodoForm({ ...todoForm, status: e.target.value })
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
                    setTodoForm({ ...todoForm, priority: e.target.value })
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
                    setTodoForm({ ...todoForm, dueDate: e.target.value })
                  }
                />
              </label>

              <div className={styles.formActions}>
                <button type="submit" className={styles.btnPrimary}>
                  Create
                </button>
              </div>
            </form>
          </Modal>
        )}
      </main>
    </ProtectedRoute>
  );
}
