import React from "react";
import styles from "./ServicesIncluded.module.css";

export default function ServicesIncluded() {
  return (
<section className={styles.container} aria-labelledby="services-included">
  <div className={styles.header}>
    <div className={styles.headerMarker} aria-hidden="true">
      <span className={styles.markerLine} />
      <span className={styles.markerPixel} />
    </div>

    <h2 id="services-included" className={styles.title}>
      Services Included
    </h2>

    <h3 className={styles.subtitle}>Everything that's included</h3>

    <div className={styles.description}>
      Keyword research, competitor analysis, technical audits, metadata
      optimization, image optimization, schema markup, Search Console setup,
      analytics, AI SEO optimization.
    </div>
  </div>

  <div className={styles.sectionGrid}>
    <article className={styles.section}>
      <div className={styles.sectionMeta}>
        <span className={styles.number}>01</span>
        <span className={styles.pixel} aria-hidden="true" />
      </div>

      <h4 className={styles.sectionTitle}>Keyword Research</h4>

      <p className={styles.sectionDesc}>
        Search intent, keyword opportunities, competitor research, and
        page-to-keyword mapping based on your business and audience.
      </p>
    </article>

    <article className={styles.section}>
      <div className={styles.sectionMeta}>
        <span className={styles.number}>02</span>
        <span className={styles.pixel} aria-hidden="true" />
      </div>

      <h4 className={styles.sectionTitle}>On-Page SEO</h4>

      <p className={styles.sectionDesc}>
        Page titles, meta descriptions, headings, content structure,
        internal linking, image optimization, and semantic content
        improvements.
      </p>
    </article>

    <article className={styles.section}>
      <div className={styles.sectionMeta}>
        <span className={styles.number}>03</span>
        <span className={styles.pixel} aria-hidden="true" />
      </div>

      <h4 className={styles.sectionTitle}>Technical SEO</h4>

      <p className={styles.sectionDesc}>
        Crawlability, indexing, sitemaps, robots directives, structured
        data, redirects, canonical tags, and other technical foundations.
      </p>
    </article>

    <article className={styles.section}>
      <div className={styles.sectionMeta}>
        <span className={styles.number}>04</span>
        <span className={styles.pixel} aria-hidden="true" />
      </div>

      <h4 className={styles.sectionTitle}>Performance Optimization</h4>

      <p className={styles.sectionDesc}>
        Core Web Vitals, page speed, responsive performance, image
        delivery, and front-end improvements that support search and
        usability.
      </p>
    </article>

    <article className={styles.section}>
      <div className={styles.sectionMeta}>
        <span className={styles.number}>05</span>
        <span className={styles.pixel} aria-hidden="true" />
      </div>

      <h4 className={styles.sectionTitle}>AI Search Optimization</h4>

      <p className={styles.sectionDesc}>
        Content structure, entities, schema, semantic relationships, and
        site architecture designed to make your business easier for
        AI-powered search systems to understand.
      </p>
    </article>

    <article className={styles.section}>
      <div className={styles.sectionMeta}>
        <span className={styles.number}>06</span>
        <span className={styles.pixel} aria-hidden="true" />
      </div>

      <h4 className={styles.sectionTitle}>Reporting &amp; Monitoring</h4>

      <p className={styles.sectionDesc}>
        Search Console and analytics monitoring to track impressions,
        clicks, rankings, indexing, traffic, and opportunities over time.
      </p>
    </article>
  </div>
</section>
  );
}
