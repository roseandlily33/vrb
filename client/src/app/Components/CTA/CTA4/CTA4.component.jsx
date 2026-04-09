import CTAButton from "../../CTAButton/CTAButton.component";
import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
import { FiArrowRight, FiMail } from "react-icons/fi";
import styles from "./CTA4.module.css";

export default function CTA4() {
    return (
        <section className={styles.cta4Section}>
            <div className={styles.cta4Content}>
                <h2 className={styles.cta4Heading}>
                    <span className={styles.cta4Accent}>Let’s make it happen.</span> Your
                project, my expertise.
            </h2>
            <p className={styles.cta4Subtext}>
                Interested in collaborating or have a question? Reach out and let’s
                start something amazing together.
            </p>
            <div className={styles.cta4ButtonRow}>
                <CTAButton>
                    Get Started
                    <FiArrowRight
                        style={{ marginLeft: 8, verticalAlign: "middle" }}
                        aria-hidden="true"
                    />
                </CTAButton>
                <SecondaryButton>
                    Email Me
                    <FiMail
                        style={{ marginLeft: 8, verticalAlign: "middle" }}
                        aria-hidden="true"
                    />
                </SecondaryButton>
            </div>
            <div className={styles.cta4Booking}>
                Now booking for late April & May
            </div>
        </div>
    </section>
);
}
