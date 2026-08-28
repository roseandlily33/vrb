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
      <div className={styles.header}>
        <div className={styles.marker} aria-hidden="true">
          <span className={styles.markerLine} />
          <span className={styles.markerPixel} />
        </div>

        <h2 id="what-you-receive" className={styles.title}>
          What your SEO project can include
        </h2>

        <div className={styles.intro}>
          A tailored mix of technical, content, performance and measurement work
          designed to improve visibility, indexing, and long-term organic growth.
        </div>
      </div>

      <ul className={styles.grid}>
        {items.map((it, index) => (
          <li key={it} className={styles.item}>
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className={styles.label}>{it}</span>

            <span className={styles.pixel} aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  );
}