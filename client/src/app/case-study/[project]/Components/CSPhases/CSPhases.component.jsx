"use client";
import styles from "./CSPhases.module.css";
import Carousel from "../Extras/Carousel/Carousel";
import React, { useState } from "react";
// import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";

export default function CSPhases({
  phaseImages = {},
  phasesDescriptions = [],
}) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className={styles.phasesSection}>
      <div className={styles.phasesHeader}>
        <div className={styles.marker} aria-hidden="true">
          <span className={styles.markerLine} />
          <span className={styles.markerPixel} />
        </div>

        <p className="eyebrowHeader">Phases</p>

        <h2>How the project progressed</h2>
      </div>

      <div className={styles.stackedPhases}>
        {phasesDescriptions.map((phase, idx) => {
          const isOpen = openIdx === idx;
          const hasImages =
            phaseImages[phase.phase] && phaseImages[phase.phase].length > 0;

          return (
            <div
              className={`${styles.eachPhase} ${
                isOpen ? styles.eachPhaseOpen : ""
              }`}
              key={phase.phase}
            >
              <div className={styles.phaseRow}>
                <div className={styles.phaseNumber}>
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className={styles.stackedPhaseCard}>
                  <div className={styles.phaseMain}>
                    <div className={styles.phaseHeader}>
                      <span className={styles.phaseTitle}>{phase.phase}</span>

                      {hasImages && (
                        <button
                          type="button"
                          className={styles.phaseToggle}
                          onClick={() => setOpenIdx(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          aria-label={
                            isOpen
                              ? `Hide details for ${phase.phase}`
                              : `View details for ${phase.phase}`
                          }
                        >
                          <span
                            className={styles.toggleIcon}
                            aria-hidden="true"
                          >
                            <span />
                            <span />
                          </span>

                          <span className={styles.toggleLabel}>
                            {isOpen ? "Hide Details" : "View Details"}
                          </span>
                        </button>
                      )}
                    </div>

                    <div className={styles.phaseDesc}>{phase.description}</div>

                    {isOpen && phase.points && (
                      <ul className={styles.phasePoints}>
                        {phase.points.map((pt) => (
                          <li key={pt} className={styles.phasePoint}>
                            <span
                              className={styles.pointPixel}
                              aria-hidden="true"
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {isOpen && hasImages && (
                    <div className={styles.phaseMore}>
                      <div className={styles.phaseCarouselWrap}>
                        <Carousel slides={phaseImages[phase.phase]} />
                      </div>
                    </div>
                  )}
                </div>

                <span className={styles.phasePixel} aria-hidden="true" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
