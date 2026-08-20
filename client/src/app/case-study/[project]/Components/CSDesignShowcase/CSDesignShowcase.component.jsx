"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./CSDesignShowcase.module.css";

export default function CSDesignShowcase({
  showcase = [],
  title = "Design Showcase",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!showcase.length) return null;

  const active = showcase[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? showcase.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === showcase.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div>
          <span className={styles.eyebrow}>Selected Work</span>
          <h2 className={styles.heading}>{title}</h2>
        </div>

        <div className={styles.counter}>
          <span className={styles.current}>
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <span className={styles.divider}>/</span>

          <span className={styles.total}>
            {String(showcase.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className={styles.showcase}>
        <div className={styles.visual}>
          {active.image && (
            <img
              src={active.image}
              alt={active.title || active.label || "Design showcase"}
              className={styles.image}
            />
          )}

          <div className={styles.visualLabel}>
            {active.label || active.title}
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detailsTop}>
            <span className={styles.slideLabel}>
              {active.label || "Design"}
            </span>

            <h3 className={styles.title}>{active.title}</h3>

            {active.description && (
              <p className={styles.description}>{active.description}</p>
            )}
          </div>

          {active.decisions?.length > 0 && (
            <div className={styles.decisions}>
              {active.decisions.map((decision, index) => (
                <div
                  key={`${decision.title}-${index}`}
                  className={styles.decision}
                >
                  <h4>{decision.title}</h4>
                  <p>{decision.text}</p>
                </div>
              ))}
            </div>
          )}

          <div className={styles.navigation}>
            <div className={styles.dots}>
              {showcase.map((item, index) => (
                <button
                  key={item.id || index}
                  type="button"
                  className={`${styles.dot} ${
                    index === activeIndex ? styles.activeDot : ""
                  }`}
                  aria-label={`Show ${item.label || item.title || `slide ${index + 1}`}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.control}
                onClick={previousSlide}
                aria-label="Previous design"
              >
                <FiArrowLeft />
              </button>

              <button
                type="button"
                className={styles.control}
                onClick={nextSlide}
                aria-label="Next design"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}