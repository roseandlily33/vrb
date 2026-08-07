import React from "react";
import styles from "./CSSocialMediaPosts.module.css";

const CSSocialMediaPosts = ({ posts = [] }) => {
  const formatMonth = (date) => {
    try {
      const d = new Date(date);
      return d.toLocaleString(undefined, { month: "short", year: "numeric" });
    } catch {
      return "";
    }
  };

  return (
    <section className={styles.grid} aria-label="Social media posts">
      {posts.map((p) => (
        <article key={p.id} className={styles.card}>
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
  );
};

export default CSSocialMediaPosts;
