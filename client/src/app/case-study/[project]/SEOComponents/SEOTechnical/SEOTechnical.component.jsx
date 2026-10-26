"use client";

import { useMemo, useState } from "react";
import styles from "./SEOTechnical.module.css";

const formatNumber = (value) => {
  if (!Number.isFinite(value)) return "Not recorded";
  return new Intl.NumberFormat("en-CA").format(value);
};

const formatDate = (value) => {
  if (!value) return "Date not recorded";

  const date = new Date(`${value}T12:00:00Z`);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

const formatStatus = (value) => {
  if (value === null || value === undefined || value === "") {
    return "Not recorded";
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (typeof value === "string") {
    return value
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  return String(value);
};

const getStatusClass = (value) => {
  if (typeof value !== "string") return "";

  const normalized = value.toLowerCase();

  if (
    ["good", "passed", "valid", "success", "submitted"].includes(normalized)
  ) {
    return styles.statusGood;
  }

  if (["poor", "failed", "error", "not submitted"].includes(normalized)) {
    return styles.statusError;
  }

  if (["needs improvement", "needs review", "warning"].includes(normalized)) {
    return styles.statusWarning;
  }

  return "";
};

const NoteList = ({ notes }) => {
  if (!Array.isArray(notes) || notes.length === 0) {
    return null;
  }

  return (
    <ul className={styles.noteList}>
      {notes.map((note, index) => (
        <li key={`${index}-${note}`}>{note}</li>
      ))}
    </ul>
  );
};

const SEOTechnical = ({ data = [] }) => {
  const [selectedId, setSelectedId] = useState(null);

  const checkpoints = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return [...data]
      .filter((item) => item && item.id)
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }, [data]);

  const selectedCheckpoint =
    checkpoints.find((item) => item.id === selectedId) || checkpoints[0];

  if (!selectedCheckpoint) return null;

  const {
    indexing = {},
    sitemap = {},
    coreWebVitals = {},
    issues = [],
  } = selectedCheckpoint;

  const metrics = [
    {
      label: "Indexed pages",
      value: formatNumber(indexing.indexedPages),
      description: "Pages reported as indexed",
    },
    {
      label: "Not indexed",
      value: formatNumber(indexing.notIndexedPages),
      description: "Pages reported as not indexed",
    },
    {
      label: "XML sitemap",
      value: sitemap.status
        ? formatStatus(sitemap.status)
        : sitemap.submitted === true
          ? "Submitted"
          : sitemap.submitted === false
            ? "Not submitted"
            : "Not recorded",
      description: "Sitemap reporting status",
      status: sitemap.status,
    },
    {
      label: "Mobile Core Web Vitals",
      value: formatStatus(coreWebVitals.mobile),
      description: "Mobile assessment",
      status: coreWebVitals.mobile,
    },
  ];

  const hasIndexingNotes =
    Array.isArray(indexing.notes) && indexing.notes.length > 0;

  const hasSitemapNotes =
    Array.isArray(sitemap.notes) && sitemap.notes.length > 0;

  const hasCWVNotes =
    Array.isArray(coreWebVitals.notes) && coreWebVitals.notes.length > 0;

  const hasNotes =
    hasIndexingNotes ||
    hasSitemapNotes ||
    hasCWVNotes ||
    (sitemap.discoveredPages !== null &&
      sitemap.discoveredPages !== undefined) ||
    (coreWebVitals.desktop !== null && coreWebVitals.desktop !== undefined);

  return (
    <section className={styles.section} aria-labelledby="seo-technical-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowPixel} />
            07 / TECHNICAL SEO
          </span>

          <h2 id="seo-technical-title" className={styles.title}>
            Behind the
            <br />
            search results<span>.</span>
          </h2>

          <p className={styles.description}>
            A closer look at indexing, sitemap configuration, performance
            checks, and technical issues throughout the project.
          </p>
        </div>

        <div className={styles.dashboard}>
          <div className={styles.dashboardHeader}>
            <div>
              <span className={styles.dashboardEyebrow}>
                TECHNICAL CHECKPOINT
              </span>

              <h3>Website health overview</h3>

              <p>Recorded {formatDate(selectedCheckpoint.date)}</p>
            </div>

            {checkpoints.length > 1 && (
              <div className={styles.checkpointControl}>
                <label htmlFor="seo-technical-checkpoint">
                  Select checkpoint
                </label>

                <select
                  id="seo-technical-checkpoint"
                  value={selectedCheckpoint.id}
                  onChange={(event) => setSelectedId(event.target.value)}
                >
                  {checkpoints.map((checkpoint) => (
                    <option key={checkpoint.id} value={checkpoint.id}>
                      {formatDate(checkpoint.date)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className={styles.metricsGrid}>
            {metrics.map((metric) => (
              <div className={styles.metricCard} key={metric.label}>
                <span className={styles.metricLabel}>{metric.label}</span>

                <strong
                  className={`${styles.metricValue} ${getStatusClass(
                    metric.status,
                  )}`}
                >
                  {metric.value}
                </strong>

                <span className={styles.metricDescription}>
                  {metric.description}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.dashboardFooter}>
            <span>Historical technical SEO checkpoint</span>

            <span>
              {checkpoints.length} recorded{" "}
              {checkpoints.length === 1 ? "checkpoint" : "checkpoints"}
            </span>
          </div>
        </div>

        {hasNotes && (
          <div className={styles.detailsGrid}>
            {(hasIndexingNotes ||
              (indexing.indexedPages !== null &&
                indexing.indexedPages !== undefined) ||
              (indexing.notIndexedPages !== null &&
                indexing.notIndexedPages !== undefined)) && (
              <article className={styles.detailCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>01</span>
                  <span className={styles.cardCategory}>SEARCH INDEX</span>
                </div>

                <h3>Indexing status</h3>

                <p className={styles.cardDescription}>
                  A record of how Google was indexing the website at this
                  checkpoint.
                </p>

                <NoteList notes={indexing.notes} />
              </article>
            )}

            {(hasSitemapNotes ||
              (sitemap.discoveredPages !== null &&
                sitemap.discoveredPages !== undefined)) && (
              <article className={styles.detailCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>02</span>
                  <span className={styles.cardCategory}>XML SITEMAP</span>
                </div>

                <h3>Sitemap configuration</h3>

                {Number.isFinite(sitemap.discoveredPages) && (
                  <div className={styles.inlineMetric}>
                    <strong>{formatNumber(sitemap.discoveredPages)}</strong>
                    <span>Discovered pages</span>
                  </div>
                )}

                <NoteList notes={sitemap.notes} />
              </article>
            )}

            {(hasCWVNotes ||
              (coreWebVitals.desktop !== null &&
                coreWebVitals.desktop !== undefined)) && (
              <article className={styles.detailCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>03</span>
                  <span className={styles.cardCategory}>PERFORMANCE</span>
                </div>

                <h3>Core Web Vitals</h3>

                {coreWebVitals.desktop !== null &&
                  coreWebVitals.desktop !== undefined && (
                    <div className={styles.inlineStatus}>
                      <span>Desktop assessment</span>
                      <strong className={getStatusClass(coreWebVitals.desktop)}>
                        {formatStatus(coreWebVitals.desktop)}
                      </strong>
                    </div>
                  )}

                <NoteList notes={coreWebVitals.notes} />
              </article>
            )}
          </div>
        )}

        {Array.isArray(issues) && issues.length > 0 && (
          <div className={styles.issuesSection}>
            <div className={styles.issuesHeader}>
              <div>
                <span className={styles.issuesEyebrow}>
                  TECHNICAL OBSERVATIONS
                </span>

                <h3>Issues and areas for review</h3>
              </div>

              <span className={styles.issueCount}>
                {issues.length} recorded
              </span>
            </div>

            <div className={styles.issuesList}>
              {issues.map((issue, index) => {
                const isString = typeof issue === "string";

                const title = isString ? issue : issue.title;

                const description = isString ? null : issue.description;

                const status = isString ? null : issue.status;

                if (!title) return null;

                return (
                  <div
                    className={styles.issueItem}
                    key={isString ? `${issue}-${index}` : issue.id || index}
                  >
                    <span className={styles.issueNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className={styles.issueContent}>
                      <h4>{title}</h4>

                      {description && <p>{description}</p>}
                    </div>

                    {status && (
                      <span
                        className={`${styles.issueStatus} ${getStatusClass(
                          status,
                        )}`}
                      >
                        {formatStatus(status)}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className={styles.bottomDetail}>
          <span>INDEXING / SITEMAPS / WEB VITALS</span>
          <span className={styles.detailLine} />
          <span>07</span>
        </div>
      </div>
    </section>
  );
};

export default SEOTechnical;
