
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
            <h2 className={styles.faqHeading}>Process — Frequently Asked Questions</h2>

            <div className={styles.faqList}>
                {faqQuestions.map((item) => (
                    <details className={styles.faqItem} key={item.question}>
                        <summary className={styles.faqQuestion}>
                            <span className={styles.faqQuestionText}>{item.question}</span>
                        </summary>

                        <div className={styles.faqAnswer}>{item.answer}</div>
                    </details>
                ))}
            </div>
        </section>
    );
}