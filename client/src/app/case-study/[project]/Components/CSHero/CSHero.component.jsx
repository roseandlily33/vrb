import styles from "./CSHero.module.css";
// import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";
import {
    FaCalendarAlt,
    FaCheckCircle,
    FaUserTie,
    FaBriefcase,
} from "react-icons/fa";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import { FiArrowRight, FiInfo } from "react-icons/fi";


function highlightText(text, words, className) {
    if (!words || words.length === 0) return text;
    // Escape regex special chars in words
    const escaped = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
        words.some(w => w.toLowerCase() === part.toLowerCase())
            ? <span key={i} className={className}>{part}</span>
            : part
    );
}

const CSHero = ({
    img,
    companyName,
    link,
    date,
    status,
    type,
    role,
    title,
    highlightWords = [],
    note,
}) => {
    return (
        <section className={styles.hero}>
            <div className={styles.left}>
                <h1>{highlightText(title, highlightWords, styles.highlighted)}</h1>
                <div className={styles.sideBySide}>
                    <img
                        src={img}
                        alt={`${companyName} Logo`}
                        className={styles.logo}
                    />
                    <h3 className={styles.heroTitle}>{companyName}</h3>
                </div>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.heroLink}
                    >
                        <TertiaryButton>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                                Visit Site <FiArrowRight style={{ marginLeft: 6 }} />
                            </span>
                        </TertiaryButton>
                    </a>
                )}
            </div>
            <div className={styles.right}>
                <table className={styles.metaTable}>
                    <tbody>
                        <tr>
                            <td className={`${styles.rightTitle} ${styles.metaLabel}`}><FaCalendarAlt /> Date</td>
                            <td className={styles.metaValue}>{date}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.rightTitle} ${styles.metaLabel}`}><FaCheckCircle /> Status</td>
                            <td className={styles.metaValue}>{status}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.rightTitle} ${styles.metaLabel}`}><FaBriefcase /> Type</td>
                            <td className={styles.metaValue}>{type}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.rightTitle} ${styles.metaLabel}`}><FaUserTie /> Role</td>
                            <td className={styles.metaValue}>{role}</td>
                        </tr>
                        {note && (
                            <tr>
                                <td className={`${styles.rightTitle} ${styles.metaLabel}`}><FiInfo /> Note</td>
                                <td className={styles.metaValue}>{note}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CSHero;
