import React from "react";
import styles from "./WhatYouRecieve.module.css";

export default function WhatYouRecieve() {
  const items = [
    "Keyword strategy & page mapping",
    "Technical SEO audit",
    "On-page optimization",
    "Metadata optimization",
    "Internal linking strategy",
    "Search Console review/setup",
    "Google Analytics review/setup",
    "Core Web Vitals analysis",
    "Structured data/schema",
    "Indexing & crawlability review",
    "Competitor analysis",
    "Content recommendations",
    "AI search optimization",
    "Performance recommendations",
    "SEO reporting",
  ];

  return (
    <section className={styles.container} aria-labelledby="what-you-receive">
      <h2 id="what-you-receive" className={styles.title}>
        What your SEO project can include
      </h2>

      <div className={styles.intro}>
        A tailored mix of technical, content, performance and measurement work
        designed to improve visibility, indexing, and long-term organic growth.
      </div>

      <ul className={styles.grid}>
        {items.map((it) => (
          <li key={it} className={styles.item}>
            <span className={styles.bullet} aria-hidden>
              •
            </span>
            <span className={styles.label}>{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
