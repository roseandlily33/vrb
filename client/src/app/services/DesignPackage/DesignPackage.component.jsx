import designPackage from './designPackage';
import styles from './DesignPackage.module.css';
import { FaCheckCircle } from 'react-icons/fa';

export default function DesignPackage() {
    const pkg = designPackage[0];
    return (
        <section className={styles.designSection}>
            <div className={styles.packageBox}>
                <div className={styles.headerRow}>
                    <h2 className={styles.heading}>{pkg.title}</h2>
                    <div className={styles.subtext}>Only need design? This package is for you.</div>
                    <div className={styles.metaRow}>
                        <span className={styles.price}>{pkg.startingAt}</span>
                        <span className={styles.timeline}>{pkg.timeline}</span>
                    </div>
                </div>
                <p className={styles.desc}>{pkg.description}</p>
                <ul className={styles.featuresList}>
                    {pkg.features.map((feature) => (
                        <li key={feature} className={styles.featureItem}>
                            <FaCheckCircle className={styles.icon} />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
