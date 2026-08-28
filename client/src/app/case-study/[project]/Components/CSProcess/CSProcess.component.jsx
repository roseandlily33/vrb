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
    <section className={styles.processTabs}>
      <div className={styles.processInner}>
        <div className={styles.processHeader}>
          <div className={styles.marker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <p className="eyebrowHeader">Process</p>

          <h2>How this project came together</h2>
        </div>

        <div className={styles.hideOnMobile}>
          <div className={styles.circuitWrap}>
            <ProcessCircuit
              activeStep={activeStep + 1}
              steps={STEPS}
              onStepClick={setActiveStep}
            />
          </div>
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

                <div className={styles.cardLabel}>{step.label}</div>

                <div className={styles.cardContent}>
                  {props.content ? props.content[step.key] : props[step.key]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CSProcess;
