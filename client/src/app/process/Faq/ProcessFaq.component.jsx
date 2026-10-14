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
    <section
      className={styles.faqSection}
      aria-labelledby="process-faq-heading"
    >
      <div className={styles.faqInner}>
        {/* SECTION HEADER */}
        <div className={styles.faqHeader}>
          <div className={styles.headerMarker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <p className={styles.eyebrow}>Questions & Answers</p>

          <h2 id="process-faq-heading" className={styles.faqHeading}>
            Process — Frequently
            <br />
            <span>Asked Questions</span>
          </h2>
        </div>

        {/* DECORATIVE ORBIT */}
        <div className={styles.faqOrbit} aria-hidden="true">
          <svg
            viewBox="0 0 600 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="300"
              cy="210"
              rx="270"
              ry="105"
              transform="rotate(-28 300 210)"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <ellipse
              cx="300"
              cy="210"
              rx="220"
              ry="70"
              transform="rotate(24 300 210)"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="6 10"
            />

            <circle cx="90" cy="125" r="5" fill="#FFD21F" />
            <circle cx="500" cy="300" r="5" fill="#269BE6" />
          </svg>
        </div>

        {/* FAQ ACCORDION */}
        <div className={styles.faqList}>
          {faqQuestions.map((item) => (
            <details className={styles.faqItem} key={item.question}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionText}>{item.question}</span>

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
          <span className={styles.footerDot} />
          <span className={styles.footerPixel} />
        </div>
      </div>
    </section>
  );
}
