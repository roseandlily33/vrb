"use client";
import React from "react";
import styles from "./Faq.module.css";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqQuestions } from "./faqQuestions";

export default function Faq() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqInner}>
        {/* =========================================
        FAQ INTRODUCTION
    ========================================= */}

        <div className={styles.faqHeader}>
          <div className={styles.faqHeaderContent}>
            <div className={styles.faqEyebrow}>
              <div className={styles.faqHeaderMarker} aria-hidden="true">
                <span />
                <span />
              </div>

              <span>Frequently Asked Questions</span>
            </div>

            <h2 className={styles.faqHeading}>Questions you might have.</h2>

            <p className={styles.faqDescription}>
              A few answers to common questions about getting started, working
              together, and what to expect.
            </p>
          </div>

          <div className={styles.faqHeaderDecoration} aria-hidden="true">
            <span className={styles.decorationNumber}>FAQ</span>
            <span className={styles.decorationPixel} />
          </div>
        </div>

        {/* =========================================
        FAQ CONTENT
    ========================================= */}

        <div className={styles.faqContent}>
          <div className={styles.faqList}>
            {faqQuestions.map((item, index) => (
              <details className={styles.faqItem} key={item.question}>
                <summary className={styles.faqQuestion}>
                  <span className={styles.faqNumber}>
                    {String(index + 1).padStart(2, "0")}
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

          {/* =========================================
          CONTACT CTA
      ========================================= */}

          <div className={styles.stillHaveQuestions}>
            <div className={styles.questionPrompt}>
              <span className={styles.promptPixel} aria-hidden="true" />

              <div className={styles.promptContent}>
                <p>Still have questions?</p>

                <span>I'm happy to help you figure out the next step.</span>
              </div>
            </div>

            <a href="/contact" className={styles.getInTouchLink}>
              <span>Get in touch</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
