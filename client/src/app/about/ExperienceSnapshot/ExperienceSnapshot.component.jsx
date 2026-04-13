

import { FaCode, FaCubes, FaPalette } from "react-icons/fa";
import styles from "./ExperienceSnapshot.module.css";

const experience = [
    {
        text: "4+ years of hands-on development experience",
        icon: <FaCode />,
    },
    {
        text: "Experience building full-stack applications from scratch",
        icon: <FaCubes />,
    },
    {
        text: "Worked on platforms, marketing sites, and UX-focused redesigns",
        icon: <FaPalette />,
    },
];

const ExperienceSnapshot = () => {
    return (
        <section className={styles.experienceSection}>
            <h3>Experience Snapshot</h3>
            <ul className={styles.experienceList}>
                {experience.map((item, index) => (
                    <li key={index} className={styles.experienceItem}>
                        <span className={styles.experienceIcon}>{item.icon}</span>
                        <span className={styles.experienceText}>{item.text}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ExperienceSnapshot;
