"use client";
import React, { useState } from "react";
import styles from "./Faq.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqQuestions } from "./faqQuestions";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className={styles.faqSection}>
      <h3 className={styles.faqHeading}>Questions you might have</h3>
      <ul className={styles.faqList}>
        {faqQuestions?.map((item, idx) => (
          <li className={styles.faqItem} key={item.question}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggle(idx)}
              aria-expanded={openIdx === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span>{item.question}</span>
              {openIdx === idx ? (
                <FiChevronUp className={styles.chevron} />
              ) : (
                <FiChevronDown className={styles.chevron} />
              )}
            </button>
            <div
              id={`faq-answer-${idx}`}
              className={`${styles.faqAnswer} ${openIdx === idx ? styles.open : ""}`}
              hidden={openIdx !== idx}
            >
              {item.answer}
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.stillHaveQuestions}>
        <p>Still have questions?</p>
        <a href="/contact" className={styles.getInTouchLink}>Get in touch</a>
      </div>
    </section>
  );
}