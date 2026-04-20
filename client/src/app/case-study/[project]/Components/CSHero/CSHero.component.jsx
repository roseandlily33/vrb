import styles from "./CSHero.module.css";
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";
import {
    FaCalendarAlt,
    FaCheckCircle,
    FaUserTie,
    FaBriefcase,
} from "react-icons/fa";


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
                        <PrimaryButton>{"Visit Site"}</PrimaryButton>
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
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CSHero;
