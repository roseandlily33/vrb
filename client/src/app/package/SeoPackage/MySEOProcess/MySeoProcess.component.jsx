import React from "react";
import styles from "./MySeoProcess.module.css";

const steps = [
  {
    title: "Audit & Discovery",
    desc: "Understand the business, website, audience, current search performance, competitors, and existing technical issues.",
  },
  {
    title: "Research & Strategy",
    desc: "Identify keyword opportunities, search intent, page targeting, content gaps, and technical priorities.",
  },
  {
    title: "Optimization",
    desc: "Implement on-page, technical, performance, content, structured data, and internal-linking improvements.",
  },
  {
    title: "Monitor & Refine",
    desc: "Track indexing, impressions, rankings, clicks, traffic, and emerging opportunities to guide future improvements.",
  },
];

export default function MySeoProcess() {
  return (
    <section className={styles.processSection} id="my-seo-process">
      <h2 className="heading">My SEO process</h2>
      <p className="meta">01 Audit & Discovery → 02 Research & Strategy → 03 Optimization → 04 Monitor & Refine</p>

      <div className={styles.stepsWrapper}>
        {steps.map((s, i) => (
          <div
            key={s.title}
            className={`${styles.stepCard} ${i % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.stepNumber}>{String(i + 1).padStart(2, "0")}</div>

            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>{`${String(i + 1).padStart(2, "0")} ${s.title}`}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
