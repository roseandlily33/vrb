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
        {/* SECTION HEADER */}
        <div className={styles.headingRow}>
          <div className={styles.headingBlock}>
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <span className={styles.eyebrow}>Performance / The Results</span>

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

                  <span className={styles.tabText}>
                    {result.label || result.date || `Period ${index + 1}`}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RESULTS DASHBOARD */}
        <div className={styles.resultsPanel}>
          {/* FEATURED RESULT */}
          <div className={styles.feature}>
            <div className={styles.featureTop}>
              <div className={styles.featureEyebrow}>
                <span className={styles.featureIndicator} aria-hidden="true" />
                <span>Top Performing Post</span>
              </div>

              {date && <span className={styles.date}>{date}</span>}
            </div>

            <div className={styles.featureContent}>
              <div className={styles.featureMain}>
                <span className={styles.featureSmallLabel}>
                  FEATURED PERFORMANCE
                </span>

                <h3 className={styles.topPostTitle}>
                  {topPostTitle || "Top performing post"}
                </h3>
              </div>

              <div className={styles.topPostStats}>
                {topViews != null && (
                  <div className={styles.primaryStat}>
                    <span className={styles.largeValue}>
                      {formatNumber(topViews)}
                    </span>

                    <span className={styles.largeLabel}>Total Views</span>
                  </div>
                )}

                {topChangePercent != null && (
                  <div className={styles.featureChange}>
                    <div className={styles.featureChangeValue}>
                      {renderChange(topChangePercent)}
                    </div>

                    <span className={styles.featureChangeLabel}>
                      vs. previous period
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.featureDecoration} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>

            <span className={styles.featurePixel} aria-hidden="true" />
          </div>

          {/* SUPPORTING METRICS */}
          <div className={styles.metrics}>
            {/* VIEWS */}
            <div className={styles.metric}>
              <div className={styles.metricHeader}>
                <span className={styles.metricNumber}>01</span>
                <span className={styles.metricTopPixel} aria-hidden="true" />
              </div>

              <div className={styles.metricBody}>
                <span className={styles.label}>Views</span>

                <div className={styles.metricValue}>{formatNumber(views)}</div>

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
              </div>

              <span className={styles.metricPixel} aria-hidden="true" />
            </div>

            {/* VISITS */}
            <div className={styles.metric}>
              <div className={styles.metricHeader}>
                <span className={styles.metricNumber}>02</span>
                <span className={styles.metricTopPixel} aria-hidden="true" />
              </div>

              <div className={styles.metricBody}>
                <span className={styles.label}>Visits</span>

                <div className={styles.metricValue}>
                  {visitsPercent != null ? `${visitsPercent}%` : "—"}
                </div>

                <span className={styles.metricCaption}>Profile Activity</span>
              </div>

              <span className={styles.metricPixel} aria-hidden="true" />
            </div>

            {/* FOLLOWERS */}
            <div className={styles.metric}>
              <div className={styles.metricHeader}>
                <span className={styles.metricNumber}>03</span>
                <span className={styles.metricTopPixel} aria-hidden="true" />
              </div>

              <div className={styles.metricBody}>
                <span className={styles.label}>Followers</span>

                <div className={styles.metricValue}>
                  {followersPercent != null ? `${followersPercent}%` : "—"}
                </div>

                <span className={styles.metricCaption}>Audience Growth</span>
              </div>

              <span className={styles.metricPixel} aria-hidden="true" />
            </div>

            {/* ENGAGEMENT */}
            <div className={styles.metric}>
              <div className={styles.metricHeader}>
                <span className={styles.metricNumber}>04</span>
                <span className={styles.metricTopPixel} aria-hidden="true" />
              </div>

              <div className={styles.metricBody}>
                <span className={styles.label}>Engagement</span>

                <div className={styles.metricValue}>
                  {engagementPercent != null ? `${engagementPercent}%` : "—"}
                </div>

                <span className={styles.metricCaption}>
                  Audience Interaction
                </span>
              </div>

              <span className={styles.metricPixel} aria-hidden="true" />
            </div>
          </div>

          {/* BOTTOM DETAIL */}
          <div className={styles.dashboardFooter}>
            <span className={styles.footerLine} aria-hidden="true" />

            <span className={styles.footerText}>SOCIAL MEDIA PERFORMANCE</span>

            <span className={styles.footerPixel} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
