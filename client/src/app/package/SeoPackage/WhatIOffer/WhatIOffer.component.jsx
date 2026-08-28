import React from "react";
import styles from "./WhatIOffer.module.css";

export default function WhatIOffer() {
  const items = [
    "Technical SEO",
    "Keyword research",
    "Metadata",
    "Sitemaps",
    "Core Web Vitals",
    "Structured data",
    "AI search optimization",
    "Content strategy",
    "Internal linking",
  ];

  return (
    <section className={styles.container} aria-labelledby="what-i-offer">
      <div className={styles.header}>
        <div className={styles.marker} aria-hidden="true">
          <span className={styles.markerLine} />
          <span className={styles.markerPixel} />
        </div>

        <div className={styles.headingGroup}>
          <h2 id="what-i-offer" className={styles.title}>
            What I Offer
          </h2>

          <h3 className={styles.subtitle}>
            A complete SEO foundation
          </h3>
        </div>

        <p className={styles.description}>
          Technical SEO, keyword research, metadata, sitemaps, Core Web Vitals,
          structured data, AI search optimization, content strategy, internal
          linking.
        </p>
      </div>

      <ul className={styles.list}>
        {items.map((it, index) => (
          <li key={it} className={styles.item}>
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className={styles.itemText}>{it}</span>

            <span className={styles.pixel} aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  );
}