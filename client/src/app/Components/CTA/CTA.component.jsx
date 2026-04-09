import styles from './CTA.module.css';
// import PrimaryButton from '@/app/Components/PrimaryButton/PrimaryButton.component';
import CTAButton from '@/app/Components/CTAButton/CTAButton.component';
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
                <CTAButton>
                    Start Your Project <FiSend style={{ marginLeft: 8, verticalAlign: 'middle' }} aria-hidden="true" />
                </CTAButton>
            </div>
        </section>
    );
}
