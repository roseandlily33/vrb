
"use client";
import React from "react";
import styles from "./ProcessFaq.module.css";

const faqQuestions = [
  {
    question: "How long does the web design process take?",
    answer:
      "Project timelines depend on the size, complexity, content, and functionality required. A timeline is established during the discovery phase so milestones and expectations are clear before work begins.",
  },
  {
    question: "Will I be involved in the design process?",
    answer:
      "Yes. Feedback is built into key project milestones, allowing us to refine the direction together while keeping the project moving forward.",
  },
  {
    question: "What happens after my website launches?",
    answer:
      "After launch, I can provide ongoing website maintenance and support for updates, improvements, and continued optimization.",
  },
];

export default function ProcessFaq() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqInner}>
        <div className={styles.faqHeader}>
          <div className={styles.headerMarker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <p className={styles.eyebrow}>Questions & Answers</p>

          <h2 className={styles.faqHeading}>
            Process — Frequently
            <br />
            <span>Asked Questions</span>
          </h2>
        </div>

        <div className={styles.faqList}>
          {faqQuestions.map((item, index) => (
            <details className={styles.faqItem} key={item.question}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqNumber}>
                  #{String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.faqQuestionText}>
                  {item.question}
                </span>

                <span className={styles.faqToggle} aria-hidden="true">
                  <span className={styles.toggleHorizontal} />
                  <span className={styles.toggleVertical} />
                </span>
              </summary>

              <div className={styles.faqAnswer}>
                <div className={styles.answerInner}>{item.answer}</div>
              </div>
            </details>
          ))}
        </div>

        <div className={styles.faqFooter} aria-hidden="true">
          <span className={styles.footerLine} />
          <span className={styles.footerPixel} />
        </div>
      </div>
    </section>
  );
}