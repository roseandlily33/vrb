import React from "react";
import Link from "next/link";
import styles from "./RelatedProjects.module.css";
import { projects } from "../projectList.jsx";

export default function RelatedProjects({ pkg, limit = 4 }) {
  if (!pkg) return null;

  const filtered = projects.filter(
    (p) => Array.isArray(p.pkgs) && p.pkgs.includes(pkg),
  );
  const items = filtered.slice(0, limit);

  if (items.length === 0) return null;

  return (
    <section className={styles.wrap} aria-labelledby="related-projects-title">
      <div className={styles.inner}>
        {/* SECTION HEADER */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <h2 id="related-projects-title" className={styles.title}>
              {pkg} Related projects
            </h2>
          </div>

          <p className={styles.headerDescription}>
            Explore examples of projects I've designed and developed, from
            thoughtful user experiences to custom website solutions.
          </p>
        </div>

        {/* HORIZONTAL PROJECTS */}
        <div
          className={styles.grid}
          aria-label={`${pkg} related projects`}
          role="region"
          tabIndex={0}
        >
          {items.map((p) => (
            <article key={p.name} className={styles.card}>
              <Link
                href={p.link}
                className={styles.cardLink}
                aria-label={`Open case study: ${p.name}`}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.badge}>{p.badge}</span>

                    <span className={styles.tech}>
                      {p.tech?.slice(0, 2).join(" · ")}
                    </span>
                  </div>

                  <h3 className={styles.name}>{p.name}</h3>

                  <p className={styles.desc}>{p.description}</p>

                  <span className={styles.cardAction} aria-hidden="true">
                    View project
                    <span>→</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollLine} />
          Scroll to explore projects
          <span className={styles.scrollArrow}>→</span>
        </div>
      </div>
    </section>
  );
}
