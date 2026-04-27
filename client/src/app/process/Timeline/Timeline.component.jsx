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
            <div className={styles.timelineRowsWrapper}>
                <div className={styles.timelineRow}>
                    {[0, 1].map(idx => (
                        <div className={styles.timelineStep} key={steps[idx].label}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{steps[idx].icon}</span>
                            </div>
                            <div className={styles.labelTimeWrapper}>
                                <div className={styles.label}>{steps[idx].label}</div>
                                <div className={styles.time}>{steps[idx].weeks}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.timelineRow}>
                    {[2, 3].map(idx => (
                        <div className={styles.timelineStep} key={steps[idx].label}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{steps[idx].icon}</span>
                            </div>
                            <div className={styles.labelTimeWrapper}>
                                <div className={styles.label}>{steps[idx].label}</div>
                                <div className={styles.time}>{steps[idx].weeks}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
