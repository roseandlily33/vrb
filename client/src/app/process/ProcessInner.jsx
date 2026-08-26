"use client";
import React, { useState } from "react";
import ProcessCircuit from "../case-study/[project]/Components/Extras/ProcessBar/ProcessCircuit";
import { PROCESS_STEPS } from "./processSteps";
import ProcessStepsMobile from "./ProcessStepsMobile";
import Expect from "./Expect/Expect.component";
import Tools from "./Tools/Tools.component";
import CTA4 from "../Components/CTA/CTA4/CTA4.component";
import ProcessFaq from "./Faq/ProcessFaq.component";
import styles from "./page.module.css";

const ProcessInner = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <section className={styles.processTabs}>
        <div className={styles.desktopOnly}>
          <ProcessCircuit
            activeStep={activeStep + 1}
            steps={PROCESS_STEPS}
            onStepClick={setActiveStep}
          />
          <div className={styles.description}>
            <span className={styles.number}>
              {String(activeStep + 1).padStart(2, "0")}
            </span>
            <div className={styles.descriptionText}>
              <h3
                style={{
                  color: "var(--blue-700)",
                  fontWeight: 700,
                }}
              >
                {PROCESS_STEPS[activeStep].label}
              </h3>
              <h5>{PROCESS_STEPS[activeStep].microHeading}</h5>
              <p
                style={{
                  color: "var(--grey-500)",
                  fontSize: "1.04rem",
                  lineHeight: 1.5,
                }}
              >
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.mobileOnly}>
          <ProcessStepsMobile steps={PROCESS_STEPS} />
        </div>
      </section>
      <Expect />
      <ProcessFaq />
      <Tools />
      <CTA4 />
    </>
  );
};

export default ProcessInner;
