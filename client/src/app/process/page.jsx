"use client";
import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
import { useState } from "react";
import Expect from "./Expect/Expect.component";
import ProcessCircuit from "../case-study/[project]/Components/Extras/ProcessBar/ProcessCircuit";
import { PROCESS_STEPS } from "./processSteps";
import Tools from "./Tools/Tools.component";
import CTA3 from "../Components/CTA/CTA3/CTA3.component";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <main>
      <Hero
        topMeta="Process"
        title="From idea to launch, here's how I build high performing web applications"
        highlight="high performing"
        subText="Every project follows a structured approach focused on performance, usability, and real results"
      />
      <section className={styles.processTabs}>
        <h2>Timeline</h2>
        <p>
          Most projects are completed within 2–8 weeks depending on scope and
          complexity.
        </p>
        <ProcessCircuit
          activeStep={activeStep + 1}
          steps={PROCESS_STEPS}
          onStepClick={setActiveStep}
        />
        <div
          style={{
            marginTop: "2.2rem",
            minHeight: 120,
            display: "flex",
            flexDirection: 'row',
            gap: "2.5rem",
            alignItems: 'flex-start',
          }}
        >
          <span
            style={{
              fontSize: '6.5rem',
              fontWeight: 800,
              background: 'linear-gradient(90deg, var(--blue-700), var(--blue-400))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-2px',
              lineHeight: 1,
              minWidth: '7.5rem',
              display: 'block',
              marginTop: '0.1em',
            }}
          >
            {String(activeStep + 1).padStart(2, '0')}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
      </section>
      <Expect />
      <Tools />
      <CTA3 />
    </main>
  );
}
