import styles from "./CSPhases.module.css";
import Carousel from "../Extras/Carousel/Carousel";
import { useState } from "react";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";

export default function CSPhases({ phaseImages = {}, phasesDescriptions = [] }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className={styles.phasesSection}>
      <p className="eyebrowHeader">Phases</p>
      <h2>How the project progressed</h2>
      <div className={styles.stackedPhases}>
        {phasesDescriptions.map((phase, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div className={styles.eachPhase} key={phase.phase}>
              <div className={styles.phaseRow}>
                <div className={styles.phaseSidebar}>
                  <span
                    className={
                      isOpen
                        ? `${styles.phaseCircle} ${styles.phaseCircleOpen}`
                        : styles.phaseCircle
                    }
                  >
                    <span className={styles.phaseCircleInner}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </span>
                </div>
                <div className={styles.stackedPhaseCard} key={phase.phase}>
                  <div className={styles.phaseMain}>
                    <div className={styles.sideBySide}>
                      <span className={styles.phaseTitle}>{phase.phase}</span>
                      {phaseImages[phase.phase] && phaseImages[phase.phase].length > 0 && (
                        isOpen ? (
                          <TertiaryButton
                            onClick={() => setOpenIdx(null)}
                            aria-expanded={isOpen}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4em",
                              }}
                            >
                              <span
                                style={{ fontSize: "1.1em", lineHeight: 1 }}
                                aria-hidden="true"
                              >
                                ✕
                              </span>{" "}
                              Hide Details
                            </span>
                          </TertiaryButton>
                        ) : (
                          <TertiaryButton
                            onClick={() => setOpenIdx(idx)}
                            aria-expanded={isOpen}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4em",
                              }}
                            >
                              <span
                                style={{ fontSize: "1.1em", lineHeight: 1 }}
                                aria-hidden="true"
                              >
                                ▼
                              </span>{" "}
                              View Details
                            </span>
                          </TertiaryButton>
                        )
                      )}
                    </div>
                    <div className={styles.phaseDesc}>{phase.description}</div>
                    {isOpen && phase.points && (
                      <ul className={styles.phasePoints}>
                        {phase.points.map((pt) => (
                          <li key={pt} className={styles.phasePoint}>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {isOpen && (
                    <div className={styles.phaseMore}>
                      {phaseImages[phase.phase] &&
                        phaseImages[phase.phase].length > 0 && (
                          <div className={styles.phaseCarouselWrap}>
                            <Carousel slides={phaseImages[phase.phase]} />
                          </div>
                        )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
