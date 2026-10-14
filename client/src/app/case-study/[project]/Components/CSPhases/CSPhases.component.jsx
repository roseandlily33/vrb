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
    <section className={styles.phasesSection} id="project-phases">
      <div className={styles.phasesInner}>
        {/* SECTION HEADER */}
        <div className={styles.phasesHeader}>
          <div className={styles.phasesHeaderTop}>
            <span className={styles.sectionIndex}>04 / PROJECT EVOLUTION</span>

            <div className={styles.marker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>
          </div>

          <p className="eyebrowHeader">Phases</p>

          <div className={styles.phasesHeadingRow}>
            <h2>
              How the project
              <span className={styles.headingAccent}> progressed.</span>
            </h2>

            <p className={styles.phasesIntro}>
              A closer look at the stages, decisions, and developments that
              shaped the finished project.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className={styles.stackedPhases}>
          {phasesDescriptions.map((phase, idx) => {
            const isOpen = openIdx === idx;
            const images = phaseImages?.[phase.phase] || [];
            const hasImages = images.length > 0;

            return (
              <article
                className={`${styles.eachPhase} ${
                  isOpen ? styles.eachPhaseOpen : ""
                }`}
                key={phase.phase}
              >
                <div className={styles.phaseRow}>
                  {/* NUMBER COLUMN */}
                  <div className={styles.phaseIndexColumn}>
                    <span className={styles.phaseNumber}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={styles.phaseTimelinePixel}
                      aria-hidden="true"
                    />
                  </div>

                  {/* MAIN CONTENT */}
                  <div className={styles.stackedPhaseCard}>
                    <div className={styles.phaseMain}>
                      <div className={styles.phaseHeader}>
                        <div className={styles.phaseHeading}>
                          <span className={styles.phaseOverline}>
                            PROJECT STAGE {String(idx + 1).padStart(2, "0")}
                          </span>

                          <h3 className={styles.phaseTitle}>{phase.phase}</h3>
                        </div>

                        {hasImages && (
                          <button
                            type="button"
                            className={styles.phaseToggle}
                            onClick={() => setOpenIdx(isOpen ? null : idx)}
                            aria-expanded={isOpen}
                            aria-controls={`phase-details-${idx}`}
                            aria-label={
                              isOpen
                                ? `Hide details for ${phase.phase}`
                                : `View details for ${phase.phase}`
                            }
                          >
                            <span className={styles.toggleLabel}>
                              {isOpen ? "Close Details" : "Explore Phase"}
                            </span>

                            <span
                              className={styles.toggleIcon}
                              aria-hidden="true"
                            >
                              <span />
                              <span />
                            </span>
                          </button>
                        )}
                      </div>

                      <div className={styles.phaseDesc}>
                        {phase.description}
                      </div>
                    </div>

                    {/* EXPANDED DOCUMENTATION */}
                    {hasImages && isOpen && (
                      <div
                        id={`phase-details-${idx}`}
                        className={styles.phaseExpanded}
                      >
                        {phase.points?.length > 0 && (
                          <div className={styles.phasePointsWrap}>
                            <span className={styles.expandedLabel}>
                              KEY DEVELOPMENTS
                            </span>

                            <ul className={styles.phasePoints}>
                              {phase.points.map((pt, pointIdx) => (
                                <li
                                  key={`${pt}-${pointIdx}`}
                                  className={styles.phasePoint}
                                >
                                  <span
                                    className={styles.pointPixel}
                                    aria-hidden="true"
                                  />

                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className={styles.phaseMore}>
                          <div className={styles.phaseGalleryHeader}>
                            <span className={styles.expandedLabel}>
                              VISUAL DOCUMENTATION
                            </span>

                            <span className={styles.galleryCount}>
                              {String(images.length).padStart(2, "0")}{" "}
                              {images.length === 1 ? "IMAGE" : "IMAGES"}
                            </span>
                          </div>

                          <div className={styles.phaseCarouselWrap}>
                            <Carousel slides={images} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* DECORATIVE PIXEL */}
                  <span className={styles.phasePixel} aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.phasesFooter} aria-hidden="true">
          <span className={styles.phasesFooterLine} />
          <span className={styles.phasesFooterPixel} />
          <span className={styles.phasesFooterText}>
            END OF PROJECT TIMELINE
          </span>
        </div>
      </div>
    </section>
  );
}
