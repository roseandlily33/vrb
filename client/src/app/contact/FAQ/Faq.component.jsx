"use client";
import React from "react";
import styles from "./Faq.module.css";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqQuestions } from "./faqQuestions";

export default function Faq() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqInner}>
        <div className={styles.faqHeader}>
          <div className={styles.faqHeaderMarker} aria-hidden="true">
            <span />
            <span />
          </div>

          <h2 className={styles.faqHeading}>Questions you might have</h2>
        </div>

        <div className={styles.faqList}>
          {faqQuestions.map((item, index) => (
            <details className={styles.faqItem} key={item.question}>
              <summary className={styles.faqQuestion}>
                <span className={styles.faqNumber}>
                  #{String(index + 1).padStart(2, "0")}
                </span>

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

        <div className={styles.stillHaveQuestions}>
          <div className={styles.questionPrompt}>
            <span className={styles.promptPixel} aria-hidden="true" />

            <p>Still have questions?</p>
          </div>

          <a href="/contact" className={styles.getInTouchLink}>
            Get in touch
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
