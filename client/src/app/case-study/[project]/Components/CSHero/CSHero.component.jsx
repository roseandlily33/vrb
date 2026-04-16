import styles from "./CSHero.module.css";
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
