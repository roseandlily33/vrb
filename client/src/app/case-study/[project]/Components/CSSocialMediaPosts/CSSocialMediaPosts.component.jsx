import React, { useState, useEffect } from "react";
import styles from "./CSSocialMediaPosts.module.css";

const CSSocialMediaPosts = ({ posts = [] }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };

    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const formatMonth = (date) => {
    try {
      const d = new Date(date);
      return d.toLocaleString(undefined, { month: "short", year: "numeric" });
    } catch {
      return "";
    }
  };

  return (
    <>
      <section className={styles.grid} aria-label="Social media posts">
        {posts.map((p) => (
          <article
            key={p.id}
            className={styles.card}
            onClick={() => setActive(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setActive(p);
            }}
          >
            {p.image && (
              <div className={styles.imageWrap}>
                <img src={p.image} alt={p.title || "post image"} />
              </div>
            )}

            <div className={styles.content}>
              <div className={styles.header}>
                <h3 className={styles.title}>{p.title}</h3>
                <time className={styles.month}>{formatMonth(p.date)}</time>
              </div>
              <p className={styles.description}>{p.description}</p>
              {p.objective && <p>Objective: {p.objective}</p>}
              {p.highlight && <p>Highlight: {p.highlight}</p>}
            </div>
          </article>
        ))}
      </section>

      {active && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className={styles.modal}>
            <button
              className={styles.closeButton}
              onClick={() => setActive(null)}
              aria-label="Close post"
            >
              ×
            </button>

            {active.image && (
              <div className={styles.modalImage}>
                <img src={active.image} alt={active.title || "post image"} />
              </div>
            )}

            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>{active.title}</h2>
              <time className={styles.modalMonth}>
                {formatMonth(active.date)}
              </time>
              <p className={styles.modalDescription}>{active.description}</p>
              {active.objective && (
                <p>
                  <strong>Objective:</strong> {active.objective}
                </p>
              )}
              {active.highlight && (
                <p>
                  <strong>Highlight:</strong> {active.highlight}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CSSocialMediaPosts;
