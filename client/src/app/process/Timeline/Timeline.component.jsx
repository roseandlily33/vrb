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
    <section
      className={styles.timelineSection}
      aria-label="Project development stages"
    >
      <div className={styles.timelineRow}>
        {steps.map((step, index) => (
          <div className={styles.timelineStep} key={step.label}>
            {/* CONNECTED TIMELINE TRACK */}
            <div className={styles.stepTrack} aria-hidden="true">
              <span className={styles.trackNode} />
              <span className={styles.trackLine} />
            </div>

            {/* STEP NUMBER */}
            <div className={styles.stepTop}>
              <span className={styles.stepNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* ICON */}
            <div className={styles.iconWrapper} aria-hidden="true">
              <span className={styles.icon}>{step.icon}</span>
            </div>

            {/* CONTENT */}
            <div className={styles.labelTimeWrapper}>
              <h3 className={styles.label}>{step.label}</h3>

              <p className={styles.time}>{step.weeks}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
