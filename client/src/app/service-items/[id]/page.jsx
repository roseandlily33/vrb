"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Modal from "../../components/Modal/Modal";
import styles from "./service-item.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function ServiceItemDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editOpen, setEditOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "website",
    description: "",
    defaultPrice: 0,
    deliverablesText: "",
  });
  const [historyEntries, setHistoryEntries] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    setLoading(true);
    setError("");
    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const res = await fetch(`${API_URL}/api/service-items/${id}`, {
        headers,
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      setItem(j.item);
      // fetch history for detail view
      fetchHistory(j.item._id);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistory = async (itemId = id) => {
    setHistoryLoading(true);
    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const res = await fetch(
        `${API_URL}/api/service-items/${itemId}/history`,
        { headers },
      );
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed to fetch history");
      setHistoryEntries(j.history || []);
    } catch (err) {
      setHistoryEntries([{ error: err.message }]);
    } finally {
      setHistoryLoading(false);
    }
  };

  const openEdit = () => {
    if (!item) return;
    setForm({
      name: item.name || "",
      category: item.category || "website",
      description: item.description || "",
      defaultPrice: item.defaultPrice || 0,
      deliverablesText: (item.deliverables || []).join(", "),
    });
    setEditOpen(true);
  };

  const save = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const payload = {
        name: form.name,
        category: form.category,
        description: form.description,
        defaultPrice: Number(form.defaultPrice || 0),
        deliverables: form.deliverablesText
          ? form.deliverablesText.split(",").map((s) => s.trim())
          : [],
      };
      const res = await fetch(`${API_URL}/api/service-items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      setEditOpen(false);
      await fetchItem();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleArchive = async (unarchive = false) => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const url = `${API_URL}/api/service-items/${id}/${unarchive ? "unarchive" : "archive"}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      await fetchItem();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const remove = async () => {
    if (!confirm("Archive this service item?")) return;
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/api/service-items/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      router.push("/service-items");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className={styles.wrap}>Loading...</div>;

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <button
          className={styles.back}
          onClick={() => router.push("/service-items")}
        >
          Back
        </button>
        <h1>Service Item</h1>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {item ? (
        <>
          <section className={styles.card}>
            <h2>{item.name}</h2>
            <div className={styles.meta}>
              <strong>Category:</strong> {item.category}
            </div>
            <div className={styles.meta}>
              <strong>Price:</strong> ${item.defaultPrice}
            </div>
            <div className={styles.meta}>
              <strong>Active:</strong> {item.isActive ? "Yes" : "No"}
            </div>
            <p className={styles.description}>{item.description}</p>
            <h4>Deliverables</h4>
            <ul>
              {(item.deliverables || []).map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <div className={styles.actions}>
              <button onClick={openEdit} className={styles.btn}>
                Edit
              </button>
              <button
                onClick={() => toggleArchive(item.archived)}
                className={styles.btn}
              >
                {item.archived ? "Unarchive" : "Archive"}
              </button>
              <button onClick={remove} className={styles.btnDanger}>
                Delete
              </button>
            </div>
          </section>
          <section className={styles.history}>
            <h3>History</h3>
            {historyLoading ? (
              <div>Loading history...</div>
            ) : historyEntries.length === 0 ? (
              <div>No history</div>
            ) : (
              <ul>
                {historyEntries.map((h) => (
                  <li key={h._id || h.createdAt} className={styles.historyItem}>
                    <div>
                      <strong>{h.action}</strong> —{" "}
                      {new Date(h.createdAt).toLocaleString()}
                    </div>
                    {h.userId && (
                      <div className={styles.meta}>
                        By:{" "}
                        {typeof h.userId === "string"
                          ? h.userId
                          : h.userId.name || h.userId._id}
                      </div>
                    )}
                    <pre className={styles.diff}>
                      {JSON.stringify(
                        {
                          before: h.before,
                          after: h.after,
                          changes: h.changes,
                        },
                        null,
                        2,
                      )}
                    </pre>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      ) : (
        <div>No item found</div>
      )}

      <Modal
        open={editOpen}
        title="Edit Service Item"
        onClose={() => setEditOpen(false)}
      >
        <label>
          Name
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <label>
          Category
          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
        </label>
        <label>
          Default Price
          <input
            type="number"
            value={form.defaultPrice}
            onChange={(e) => setForm({ ...form, defaultPrice: e.target.value })}
          />
        </label>
        <label>
          Deliverables (comma separated)
          <input
            value={form.deliverablesText}
            onChange={(e) =>
              setForm({ ...form, deliverablesText: e.target.value })
            }
          />
        </label>
        <label>
          Description
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </label>
        <div style={{ marginTop: 10 }}>
          <button onClick={save} className={styles.btn}>
            Save
          </button>
        </div>
      </Modal>
    </main>
  );
}
