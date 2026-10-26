
"use client";

import { useMemo, useState } from "react";
import styles from "./SEOStrategy.module.css";

const CATEGORY_LABELS = {
  technical: "Technical SEO",
  "on-page": "On-page SEO",
  content: "Content",
  indexing: "Indexing",
  performance: "Performance",
  "internal-linking": "Internal Linking",
  structuredData: "Structured Data",
  other: "Other",
};

const formatCategory = (category) => {
  if (!category) return "Other";

  return (
    CATEGORY_LABELS[category] ||
    category
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
  );
};

const formatDate = (value) => {
  if (!value) return null;

  const date = new Date(`${value}T12:00:00Z`);

  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

const SEOStrategy = ({ data = [] }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const work = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data
      .filter((item) => item && item.title)
      .sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return b.date.localeCompare(a.date);
      });
  }, [data]);

  const categories = useMemo(() => {
    return [...new Set(work.map((item) => item.category || "other"))];
  }, [work]);

  const filteredWork = useMemo(() => {
    if (activeCategory === "all") return work;

    return work.filter(
      (item) => (item.category || "other") === activeCategory
    );
  }, [work, activeCategory]);

  if (work.length === 0) return null;

  return (
    <section
      className={styles.section}
      aria-labelledby="seo-strategy-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowPixel} />
              02 / SEO STRATEGY & IMPLEMENTATION
            </span>

            <h2 id="seo-strategy-title" className={styles.title}>
              The work behind
              <br />
              the results<span>.</span>
            </h2>

            <p className={styles.description}>
              A record of the technical improvements, content
              updates, and search optimization work completed
              throughout the project.
            </p>
          </div>

          <div className={styles.workCount}>
            <span className={styles.countNumber}>
              {String(work.length).padStart(2, "0")}
            </span>

            <span className={styles.countLabel}>
              RECORDED
              <br />
              IMPROVEMENTS
            </span>
          </div>
        </div>

        {categories.length > 1 && (
          <div
            className={styles.filters}
            role="group"
            aria-label="Filter SEO improvements"
          >
            <button
              type="button"
              className={`${styles.filterButton} ${
                activeCategory === "all" ? styles.filterActive : ""
              }`}
              onClick={() => setActiveCategory("all")}
              aria-pressed={activeCategory === "all"}
            >
              All work
              <span>{work.length}</span>
            </button>

            {categories.map((category) => {
              const count = work.filter(
                (item) => (item.category || "other") === category
              ).length;

              return (
                <button
                  key={category}
                  type="button"
                  className={`${styles.filterButton} ${
                    activeCategory === category
                      ? styles.filterActive
                      : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {formatCategory(category)}
                  <span>{count}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className={styles.workGrid}>
          {filteredWork.map((item, index) => {
            const {
              id,
              date,
              category,
              title,
              description,
              affectedPages = [],
              outcome,
            } = item;

            const hasDetails =
              (Array.isArray(affectedPages) &&
                affectedPages.length > 0) ||
              Boolean(outcome);

            return (
              <article
                className={styles.workCard}
                key={id || `${title}-${index}`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.category}>
                    {formatCategory(category)}
                  </span>

                  {date && (
                    <time
                      className={styles.date}
                      dateTime={date}
                    >
                      {formatDate(date)}
                    </time>
                  )}
                </div>

                <div className={styles.cardContent}>
                  <h3>{title}</h3>

                  {description && <p>{description}</p>}
                </div>

                {hasDetails && (
                  <details className={styles.details}>
                    <summary className={styles.detailsToggle}>
                      <span>Implementation details</span>

                      <span
                        className={styles.toggleIcon}
                        aria-hidden="true"
                      />
                    </summary>

                    <div className={styles.detailsContent}>
                      {Array.isArray(affectedPages) &&
                        affectedPages.length > 0 && (
                          <div className={styles.detailGroup}>
                            <h4>Pages affected</h4>

                            <ul>
                              {affectedPages.map((page, pageIndex) => (
                                <li key={`${page}-${pageIndex}`}>
                                  {page}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {outcome && (
                        <div className={styles.detailGroup}>
                          <h4>Observed outcome</h4>
                          <p>{outcome}</p>
                        </div>
                      )}
                    </div>
                  </details>
                )}

                <div
                  className={styles.cardAccent}
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.bottomDetail}>
          <span>TECHNICAL / CONTENT / OPTIMIZATION</span>
          <span className={styles.detailLine} />
          <span>02</span>
        </div>
      </div>
    </section>
  );
};

export default SEOStrategy;
