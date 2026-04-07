import styles from './CTA.module.css';
import PrimaryButton from '@/app/Components/PrimaryButton/PrimaryButton.component';
import { FiSend } from 'react-icons/fi';

export default function CTA() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
                <h2 className={styles.ctaHeading}>
                    <span className={styles.ctaAccent}>Let’s build</span> something great together
                </h2>
                <p className={styles.ctaSubtext}>
                    Let’s talk about your project and how I can help you bring your vision to life.
                </p>
                <PrimaryButton className={styles.ctaButton}>
                    Start Your Project <FiSend style={{ marginLeft: 8, verticalAlign: 'middle' }} aria-hidden="true" />
                </PrimaryButton>
            </div>
            <div className={styles.ctaShapes} aria-hidden="true">
                <div className={styles.ctaCircle} />
                <div className={styles.ctaSquare} />
            </div>
        </section>
    );
}
