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
            <div className={styles.timelineWrapper}>
                {steps.map((step, idx) => (
                    <div className={styles.timelineStep} key={step.label}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>{step.icon}</span>
                        </div>
                        <div className={styles.label}>{step.label}</div>
                        <div className={styles.time}>{step.weeks}</div>
                        {idx < steps.length - 1 && (
                            <div className={styles.arrow}>
                                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12h34m0 0l-6-6m6 6l-6 6" stroke="var(--blue-400)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
