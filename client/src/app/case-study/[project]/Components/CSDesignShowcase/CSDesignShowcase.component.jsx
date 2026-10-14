"use client";
import Image from "next/image";
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
  <div className={styles.sectionInner}>
    {/* HEADER */}
    <div className={styles.sectionHeader}>
      <div className={styles.headerContent}>
        <div className={styles.headerMarker} aria-hidden="true">
          <span className={styles.markerLine} />
          <span className={styles.markerPixel} />
        </div>

        <span className={styles.eyebrow}>Selected Work</span>

        <h2 className={styles.heading}>{title}</h2>

        <p className={styles.headerDescription}>
          A closer look at the visual decisions, details, and
          thinking behind the finished experience.
        </p>
      </div>

      <div className={styles.counter} aria-label="Current showcase slide">
        <span className={styles.counterLabel}>PROJECT VIEW</span>

        <div className={styles.counterNumbers}>
          <span className={styles.current}>
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <span className={styles.divider}>/</span>

          <span className={styles.total}>
            {String(showcase.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>

    {/* SHOWCASE */}
    <div className={styles.showcase}>
      {/* IMAGE PANEL */}
      <div className={styles.visual}>
        <div className={styles.visualGrid} aria-hidden="true" />

        <div className={styles.visualTopBar}>
          <span className={styles.visualTopLabel}>
            DESIGN EXPLORATION
          </span>

          <span className={styles.visualTopIndex}>
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <div className={styles.imageFrame}>
          {active.image && (
            <Image
              src={active.image}
              alt={active.title || active.label || "Design showcase"}
              className={styles.image}
              width={800}
              height={600}
            />
          )}
        </div>

        <div className={styles.visualBottomBar}>
          <div className={styles.visualLabel}>
            <span className={styles.labelPixel} aria-hidden="true" />
            {active.label || active.title}
          </div>

          <span className={styles.visualBottomDetail}>
            VRB / CASE STUDY
          </span>
        </div>
      </div>

      {/* DETAILS PANEL */}
      <div className={styles.details}>
        <div className={styles.detailsTop}>
          <div className={styles.detailsEyebrowRow}>
            <span className={styles.slideLabel}>
              {active.label || "Design"}
            </span>

            <span className={styles.detailsPixel} aria-hidden="true" />
          </div>

          <h3 className={styles.title}>{active.title}</h3>

          {active.description && (
            <p className={styles.description}>
              {active.description}
            </p>
          )}
        </div>

        {/* DESIGN DECISIONS */}
        {active.decisions?.length > 0 && (
          <div className={styles.decisions}>
            <div className={styles.decisionsHeading}>
              <span>DESIGN DECISIONS</span>
              <span>{String(active.decisions.length).padStart(2, "0")}</span>
            </div>

            {active.decisions.map((decision, index) => (
              <div
                key={`${decision.title}-${index}`}
                className={styles.decision}
              >
                <div className={styles.decisionNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className={styles.decisionContent}>
                  <h4>{decision.title}</h4>
                  <p>{decision.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NAVIGATION */}
        <div className={styles.navigation}>
          <div className={styles.dots} aria-label="Choose design">
            {showcase.map((item, index) => (
              <button
                key={item.id || index}
                type="button"
                className={`${styles.dot} ${
                  index === activeIndex ? styles.activeDot : ""
                }`}
                aria-label={`Show ${
                  item.label || item.title || `slide ${index + 1}`
                }`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
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
              className={`${styles.control} ${styles.nextControl}`}
              onClick={nextSlide}
              aria-label="Next design"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.sectionFooter} aria-hidden="true">
      <span>VISUAL EXPLORATION</span>
      <span className={styles.sectionFooterLine} />
      <span className={styles.sectionFooterPixel} />
    </div>
  </div>
</section>

  );
}