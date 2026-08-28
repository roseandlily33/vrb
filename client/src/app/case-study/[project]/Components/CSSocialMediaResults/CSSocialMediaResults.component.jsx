"use client";
import React, { useState } from "react";
import styles from "./CSSocialMediaResults.module.css";

export default function CSSocialMediaResults({
  results = [],
  title = "Social Media Results",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!results.length) return null;

  const activeResult = results[activeIndex];

  const {
    date,
    topPost = {},
    visitsPercent,
    views,
    viewsChange = {},
    followersPercent,
    engagementPercent,
  } = activeResult;

  const {
    title: topPostTitle,
    views: topViews,
    changePercent: topChangePercent,
  } = topPost;

  const renderChange = (value, suffix = "%") => {
    if (value == null) return null;

    const positive = Number(value) >= 0;

    return (
      <span className={positive ? styles.up : styles.down}>
        {positive ? "+" : ""}
        {value}
        {suffix}
      </span>
    );
  };

  const formatNumber = (value) => {
    if (value == null) return "—";

    return new Intl.NumberFormat().format(value);
  };

  return (
   <section className={styles.section}>
  <div className={styles.sectionInner}>
    <div className={styles.headingRow}>
      <div className={styles.headingBlock}>
        <div className={styles.marker} aria-hidden="true">
          <span className={styles.markerLine} />
          <span className={styles.markerPixel} />
        </div>

        <span className={styles.eyebrow}>Performance</span>

        <h2 className={styles.heading}>{title}</h2>
      </div>

      {results.length > 1 && (
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Social media result periods"
        >
          {results.map((result, index) => (
            <button
              key={result.id || index}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              className={`${styles.tab} ${
                activeIndex === index ? styles.activeTab : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.tabIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>
                {result.label || result.date || `Period ${index + 1}`}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>

    <div className={styles.resultsPanel}>
      <div className={styles.feature}>
        <div className={styles.featureTop}>
          <span className={styles.featureLabel}>
            Top performing post
          </span>

          {date && <span className={styles.date}>{date}</span>}
        </div>

        <div className={styles.featureContent}>
          <h3 className={styles.topPostTitle}>
            {topPostTitle || "Top performing post"}
          </h3>

          <div className={styles.topPostStats}>
            {topViews != null && (
              <div className={styles.primaryStat}>
                <span className={styles.largeValue}>
                  {formatNumber(topViews)}
                </span>

                <span className={styles.largeLabel}>views</span>
              </div>
            )}

            {topChangePercent != null && (
              <div className={styles.featureChange}>
                {renderChange(topChangePercent)}

                <span>vs. previous period</span>
              </div>
            )}
          </div>
        </div>

        <span className={styles.featurePixel} aria-hidden="true" />
      </div>

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <div className={styles.metricHeader}>
            <span className={styles.metricNumber}>01</span>
            <span className={styles.label}>Views</span>
          </div>

          <div className={styles.metricValue}>
            {formatNumber(views)}
          </div>

          {(viewsChange.percent != null ||
            viewsChange.amount != null) && (
            <div className={styles.metricMeta}>
              {viewsChange.percent != null &&
                renderChange(viewsChange.percent)}

              {viewsChange.amount != null && (
                <span className={styles.sub}>
                  {viewsChange.amount >= 0 ? "+" : ""}
                  {formatNumber(viewsChange.amount)}
                </span>
              )}
            </div>
          )}

          <span className={styles.metricPixel} aria-hidden="true" />
        </div>

        <div className={styles.metric}>
          <div className={styles.metricHeader}>
            <span className={styles.metricNumber}>02</span>
            <span className={styles.label}>Visits</span>
          </div>

          <div className={styles.metricValue}>
            {visitsPercent != null ? `${visitsPercent}%` : "—"}
          </div>

          <span className={styles.metricCaption}>
            profile activity
          </span>

          <span className={styles.metricPixel} aria-hidden="true" />
        </div>

        <div className={styles.metric}>
          <div className={styles.metricHeader}>
            <span className={styles.metricNumber}>03</span>
            <span className={styles.label}>Followers</span>
          </div>

          <div className={styles.metricValue}>
            {followersPercent != null
              ? `${followersPercent}%`
              : "—"}
          </div>

          <span className={styles.metricCaption}>
            audience growth
          </span>

          <span className={styles.metricPixel} aria-hidden="true" />
        </div>

        <div className={styles.metric}>
          <div className={styles.metricHeader}>
            <span className={styles.metricNumber}>04</span>
            <span className={styles.label}>Engagement</span>
          </div>

          <div className={styles.metricValue}>
            {engagementPercent != null
              ? `${engagementPercent}%`
              : "—"}
          </div>

          <span className={styles.metricCaption}>
            audience interaction
          </span>

          <span className={styles.metricPixel} aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>
</section>
  );
}