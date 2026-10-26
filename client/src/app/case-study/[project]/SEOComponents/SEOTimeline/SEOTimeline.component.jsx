
"use client";

import { useMemo, useState } from "react";
import styles from "./SEOTimeline.module.css";

const TYPE_LABELS = {
  implementation: "Implementation",
  technical: "Technical SEO",
  fix: "Technical fix",
  indexing: "Indexing",
  content: "Content",
  performance: "Performance",
  observation: "Observation",
  milestone: "Milestone",
  other: "Other",
};

const formatType = (type) => {
  if (!type) return "Milestone";

  return (
    TYPE_LABELS[type] ||
    type
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

const SEOTimeline = ({ data = [] }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const milestones = useMemo(() => {
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
    return [
      ...new Set(
        milestones.map((item) => item.type || "milestone")
      ),
    ];
  }, [milestones]);

  const filteredMilestones = useMemo(() => {
    if (activeFilter === "all") return milestones;

    return milestones.filter(
      (item) =>
        (item.type || "milestone") === activeFilter
    );
  }, [milestones, activeFilter]);

  const visibleMilestones = showAll
    ? filteredMilestones
    : filteredMilestones.slice(0, 5);

  const hasMore = filteredMilestones.length > 5;

  if (milestones.length === 0) return null;

  return (
    <section
      className={styles.section}
      aria-labelledby="seo-timeline-title"
    >
      <div className={styles.gridBackground} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowPixel} />
              06 / PROJECT TIMELINE
            </span>

            <h2
              id="seo-timeline-title"
              className={styles.title}
            >
              Tracking the
              <br />
              journey<span>.</span>
            </h2>

            <p className={styles.description}>
              A chronological record of meaningful SEO
              changes, technical milestones, and search
              performance observations throughout the project.
            </p>
          </div>

          <div className={styles.timelineCount}>
            <strong>
              {String(milestones.length).padStart(2, "0")}
            </strong>
            <span>
              RECORDED
              <br />
              MILESTONES
            </span>
          </div>
        </div>

        {categories.length > 1 && (
          <div
            className={styles.filters}
            role="group"
            aria-label="Filter project milestones"
          >
            <button
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === "all" ? styles.filterActive : ""
              }`}
              onClick={() => {
                setActiveFilter("all");
                setShowAll(false);
              }}
              aria-pressed={activeFilter === "all"}
            >
              All milestones
            </button>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.filterButton} ${
                  activeFilter === category
                    ? styles.filterActive
                    : ""
                }`}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false);
                }}
                aria-pressed={activeFilter === category}
              >
                {formatType(category)}
              </button>
            ))}
          </div>
        )}

        <div className={styles.timeline}>
          {visibleMilestones.map((milestone, index) => {
            const {
              id,
              date,
              type,
              title,
              description,
              relatedWorkIds = [],
            } = milestone;

            const isObservation =
              type === "observation" ||
              type === "performance";

            return (
              <article
                className={styles.timelineItem}
                key={id || `${title}-${index}`}
              >
                <div className={styles.timelineRail}>
                  <span
                    className={`${styles.timelineNode} ${
                      isObservation ? styles.observationNode : ""
                    }`}
                  />
                </div>

                <div className={styles.timelineContent}>
                  <div className={styles.itemMeta}>
                    {date && (
                      <time
                        dateTime={date}
                        className={styles.date}
                      >
                        {formatDate(date)}
                      </time>
                    )}

                    <span
                      className={`${styles.typeBadge} ${
                        isObservation
                          ? styles.observationBadge
                          : ""
                      }`}
                    >
                      {formatType(type)}
                    </span>
                  </div>

                  <h3>{title}</h3>

                  {description && <p>{description}</p>}

                  {relatedWorkIds.length > 0 && (
                    <span className={styles.relatedWork}>
                      {relatedWorkIds.length} related SEO{" "}
                      {relatedWorkIds.length === 1
                        ? "task"
                        : "tasks"}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {hasMore && (
          <div className={styles.showMoreWrapper}>
            <button
              type="button"
              className={styles.showMoreButton}
              onClick={() => setShowAll((current) => !current)}
            >
              {showAll
                ? "Show fewer milestones"
                : `View all ${filteredMilestones.length} milestones`}

              <span aria-hidden="true">
                {showAll ? "↑" : "↓"}
              </span>
            </button>
          </div>
        )}

        <div className={styles.bottomDetail}>
          <span>IMPLEMENTATION / PROGRESS / OBSERVATIONS</span>
          <span className={styles.detailLine} />
          <span>06</span>
        </div>
      </div>
    </section>
  );
};

export default SEOTimeline;
