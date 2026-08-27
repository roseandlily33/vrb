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
      <h2 id="what-i-offer" className={styles.title}>
        What I Offer
      </h2>

      <h3 className={styles.subtitle}>A complete SEO foundation</h3>

      <p className={styles.description}>
        Technical SEO, keyword research, metadata, sitemaps, Core Web Vitals,
        structured data, AI search optimization, content strategy, internal
        linking.
      </p>

      <ul className={styles.list}>
        {items.map((it) => (
          <li key={it} className={styles.item}>
            <span className={styles.bullet} aria-hidden>
              •
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
