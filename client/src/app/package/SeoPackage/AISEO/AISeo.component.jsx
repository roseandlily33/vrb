import React from "react";
import styles from "./AISeo.module.css";

export default function AISeoCards() {
  const cards = [
    {
      title: "Clear Content & Entities",
      desc: "Establish who you are, what you offer, where you operate, and how your services relate.",
    },
    {
      title: "Structured Data",
      desc: "Use appropriate schema to give machines additional context about your website and content.",
    },
    {
      title: "Semantic Site Architecture",
      desc: "Connect services, supporting content, case studies, FAQs, and internal links into a coherent information structure.",
    },
  ];

  return (
    <section className={styles.container} aria-labelledby="ai-search-title">
      <h2 id="ai-search-title" className={styles.heading}>
        SEO is changing. Search isn't only Google anymore.
      </h2>

      <p className={styles.intro}>
        People are increasingly discovering businesses and information through
        AI-powered search experiences alongside traditional search engines. My
        approach considers both, focusing on clear site architecture, structured
        data, semantic content, entities, authority signals, and technically
        accessible pages that make it easier for search and AI systems to
        understand what your business does.
      </p>

      <div className={styles.grid}>
        {cards.map((c) => (
          <article key={c.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardDesc}>{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
