"use client";
import React from "react";
import styles from "./Faq.module.css";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqQuestions } from "./faqQuestions";

export default function Faq() {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqHeading}>Questions you might have</h2>

      <div className={styles.faqList}>
        {faqQuestions.map((item) => (
          <details className={styles.faqItem} key={item.question}>
            <summary className={styles.faqQuestion}>
              <span className={styles.faqQuestionText}>
                {item.icon && (
                  <item.icon className={styles.faqIcon} aria-hidden="true" />
                )}

                {item.question}
              </span>
            </summary>

            <div className={styles.faqAnswer}>{item.answer}</div>
          </details>
        ))}
      </div>

      <div className={styles.stillHaveQuestions}>
        <p>Still have questions?</p>
        <a href="/contact" className={styles.getInTouchLink}>
          Get in touch
        </a>
      </div>
    </section>
  );
}
