"use client";
import { useState } from "react";
import styles from "./CSProcess.module.css";
import ProcessCircuit from "../Extras/ProcessBar/ProcessCircuit";

const STEPS = [
  { key: "discovery", label: "Discovery" },
  { key: "design", label: "Design" },
  { key: "development", label: "Development" },
  { key: "launch", label: "Launch" },
];

const CSProcess = (props) => {
  const [activeStep, setActiveStep] = useState(0);

  // Support both old (content object) and new (individual step props) usage
  let stepContent;
  if (props.content) {
    // Old usage: content is an object with keys
    stepContent = props.content[STEPS[activeStep].key];
  } else {
    // New usage: individual props for each step
    const key = STEPS[activeStep].key;
    stepContent = props[key];
  }

  return (
    <section className={styles.processTabs} id="project-process">
      <div className={styles.processInner}>
        {/* SECTION HEADER */}
        <div className={styles.processHeader}>
          <div className={styles.processHeaderMeta}>
            <span className={styles.processSectionIndex}>
              PROCESS / PROJECT WORKFLOW
            </span>

            <div className={styles.marker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>
          </div>

          <p className="eyebrowHeader">Process</p>

          <div className={styles.processHeadingRow}>
            <h2>
              How this project
              <span className={styles.processHeadingAccent}>
                {" "}
                came together.
              </span>
            </h2>

            <p className={styles.processIntro}>
              From the initial planning stages to the finished experience,
              explore the steps behind the project.
            </p>
          </div>
        </div>

        {/* INTERACTIVE PROCESS CIRCUIT */}
        <div className={styles.hideOnMobile}>
          <div className={styles.circuitSectionHeader}>
            <span className={styles.circuitLabel}>INTERACTIVE PROCESS MAP</span>

            <span className={styles.circuitInstruction}>
              SELECT A STAGE TO EXPLORE
            </span>
          </div>

          <div className={styles.circuitWrap}>
            <ProcessCircuit
              activeStep={activeStep + 1}
              steps={STEPS}
              onStepClick={setActiveStep}
            />
          </div>
        </div>

        {/* PROCESS CARDS */}
        <div className={styles.cardsHeader}>
          <span>PROJECT STAGES</span>

          <span className={styles.cardsCount}>
            {String(STEPS.length).padStart(2, "0")} TOTAL
          </span>
        </div>

        <div className={styles.cardsContainer}>
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.key}
                className={`${styles.processCard} ${
                  isActive ? styles.processCardActive : ""
                }`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIndex}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.cardPixel} aria-hidden="true" />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardLabel}>{step.label}</h3>

                  <div className={styles.cardContent}>
                    {props.content ? props.content[step.key] : props[step.key]}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.cardFooterLabel}>
                    {isActive ? "CURRENT STAGE" : "PROCESS STAGE"}
                  </span>

                  <button
                    type="button"
                    className={styles.cardSelect}
                    onClick={() => setActiveStep(idx)}
                    aria-label={`Select ${step.label} stage`}
                    aria-pressed={isActive}
                  >
                    <span>{isActive ? "Selected" : "Select Stage"}</span>

                    <span className={styles.cardSelectArrow} aria-hidden="true">
                      ↗
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION FOOTER */}
        <div className={styles.processFooter} aria-hidden="true">
          <span className={styles.processFooterPixel} />
          <span>FROM CONCEPT TO COMPLETION</span>
          <span className={styles.processFooterLine} />
        </div>
      </div>
    </section>
  );
};

export default CSProcess;
