import styles from "../page.module.css";
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";
import {
    FaCalendarAlt,
    FaCheckCircle,
    FaUserTie,
    FaBriefcase,
} from "react-icons/fa";

const CSHero = ({
    img,
    companyName,
    link,
    date,
    status,
    type,
    role,
    title,
}) => {
    return (
        <section className={styles.hero}>
            <div className={styles.left}>
                <h1>{title}</h1>
                <div className={styles.sideBySide}>
                    <img
                        src={img}
                        alt={`${companyName} Hero Image`}
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
                <div className={styles.metaRow}>
                    <div className={`${styles.rightTitle} ${styles.metaLabel}`}>
                        <FaCalendarAlt /> Date
                    </div>
                    <div className={styles.metaValue}><p>{date}</p></div>
                </div>
                <div className={styles.metaRow}>
                    <div className={`${styles.rightTitle} ${styles.metaLabel}`}>
                        <FaCheckCircle /> Status
                    </div>
                    <div className={styles.metaValue}><p>{status}</p></div>
                </div>
                <div className={styles.metaRow}>
                    <div className={`${styles.rightTitle} ${styles.metaLabel}`}>
                        <FaBriefcase /> Type
                    </div>
                    <div className={styles.metaValue}><p>{type}</p></div>
                </div>
                <div className={styles.metaRow}>
                    <div className={`${styles.rightTitle} ${styles.metaLabel}`}>
                        <FaUserTie /> Role
                    </div>
                    <div className={styles.metaValue}><p>{role}</p></div>
                </div>
            </div>
        </section>
    );
};

export default CSHero;
