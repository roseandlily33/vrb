"use client";
import React from "react";
import styles from "./CSSocialMediaOverview.module.css";

export default function CSSocialMediaOverview({ overview = [] }) {
  const data = Array.isArray(overview) ? overview[0] : overview;

  if (!data) return null;

  const {
    title = "Social Media Management",
    summary,
    timeframe,
    role,
    platforms = [],
    contentVolume,
    responsibilities = [],
    deliverables = [],
  } = data;

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.headingBlock}>
          <span className={styles.kicker}>Project Overview</span>

          <h2 className={styles.title}>{title}</h2>
        </div>

        {summary && (
          <div className={styles.summaryWrap}>
            <p className={styles.summary}>{summary}</p>
          </div>
        )}
      </div>

      <div className={styles.metaBar}>
        {role && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{role}</span>
          </div>
        )}

        {platforms.length > 0 && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Platforms</span>

            <div className={styles.platforms}>
              {platforms.map((platform) => (
                <span key={platform} className={styles.platform}>
                  {platform}
                </span>
              ))}
            </div>
          </div>
        )}

        {contentVolume && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Content</span>
            <span className={styles.metaValue}>{contentVolume}</span>
          </div>
        )}

        {timeframe && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Timeframe</span>
            <span className={styles.metaValue}>{timeframe}</span>
          </div>
        )}
      </div>

      {(responsibilities.length > 0 || deliverables.length > 0) && (
        <div className={styles.scope}>
          {responsibilities.length > 0 && (
            <article className={styles.scopeCard}>
              <div className={styles.scopeHeader}>
                <span className={styles.scopeLabel}>What I Did</span>
                <h3 className={styles.scopeTitle}>Responsibilities</h3>
              </div>

              <div className={styles.list}>
                {responsibilities.map((item, index) => (
                  <div key={`${item}-${index}`} className={styles.listItem}>
                    <span className={styles.marker} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          )}

          {deliverables.length > 0 && (
            <article className={`${styles.scopeCard} ${styles.deliverableCard}`}>
              <div className={styles.scopeHeader}>
                <span className={styles.scopeLabel}>What I Created</span>
                <h3 className={styles.scopeTitle}>Deliverables</h3>
              </div>

              <div className={styles.list}>
                {deliverables.map((item, index) => (
                  <div key={`${item}-${index}`} className={styles.listItem}>
                    <span className={styles.marker} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      )}
    </section>
  );
}