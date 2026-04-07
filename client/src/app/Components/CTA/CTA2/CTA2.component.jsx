import styles from './CTA2.module.css';
import SecondaryButton from '@/app/Components/SecondaryButton/SecondaryButton.component';
import { FiMessageCircle } from 'react-icons/fi';

export default function CTA2() {
    return (
        <section className={styles.cta2Section}>
            <div className={styles.cta2Content}>
                <h2 className={styles.cta2Heading}>
                    Ready to <span className={styles.cta2Accent}>collaborate?</span>
                </h2>
                <p className={styles.cta2Subtext}>
                    Let’s connect and turn your ideas into reality. I’m excited to help you build something impactful.
                </p>
                <SecondaryButton className={styles.cta2Button}>
                    Contact Me <FiMessageCircle style={{ marginLeft: 8, verticalAlign: 'middle' }} aria-hidden="true" />
                </SecondaryButton>
            </div>
            <div className={styles.cta2Shapes} aria-hidden="true">
                <div className={styles.cta2Circle} />
                <div className={styles.cta2Triangle} />
            </div>
        </section>
    );
}
