"use client";
import styles from "./Timelines.module.css";
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    label: "Discovery",
    icon: <FaSearch />,
    weeks: "1 week",
  },
  {
    label: "Design",
    icon: <FaPencilRuler />,
    weeks: "2–3 weeks",
  },
  {
    label: "Development",
    icon: <FaCode />,
    weeks: "2–4 weeks",
  },
  {
    label: "Launch",
    icon: <FaRocket />,
    weeks: "<1 week",
  },
];

export default function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.timelineRow}>
        {steps.map((step, index) => (
          <div className={styles.timelineStep} key={step.label}>
            <div className={styles.stepTop}>
              <span className={styles.stepNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.stepPixel} aria-hidden="true" />
            </div>

            <div className={styles.iconWrapper} aria-hidden="true">
              <span className={styles.icon}>{step.icon}</span>
            </div>

            <div className={styles.labelTimeWrapper}>
              <div className={styles.label}>{step.label}</div>
              <div className={styles.time}>{step.weeks}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}