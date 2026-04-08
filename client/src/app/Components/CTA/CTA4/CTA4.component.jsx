
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";
import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
import { FiArrowRight, FiMail } from "react-icons/fi";
import styles from "./CTA4.module.css";

export default function CTA4() {
    return (
        <section className={styles.cta4Section}>
            <div className={styles.cta4Content}>
                <h2 className={styles.cta4Heading}>
                    <span className={styles.cta4Accent}>Let’s make it happen.</span> Your project, my expertise.
                </h2>
                <p className={styles.cta4Subtext}>
                    Interested in collaborating or have a question? Reach out and let’s start something amazing together.
                </p>
                <div className={styles.cta4ButtonRow}>
                    <PrimaryButton className={styles.cta4Button}>
                        Get Started
                        <FiArrowRight style={{ marginLeft: 8, verticalAlign: "middle" }} aria-hidden="true" />
                    </PrimaryButton>
                    <SecondaryButton className={styles.cta4Button}>
                        Email Me
                        <FiMail style={{ marginLeft: 8, verticalAlign: "middle" }} aria-hidden="true" />
                    </SecondaryButton>
                </div>
                <div className={styles.cta4Booking}>Now booking for late April & May</div>
            </div>
            <div className={styles.cta4Shapes} aria-hidden="true">
                <div className={styles.cta4Blob} />
                <div className={styles.cta4Diamond} />
                <div className={styles.cta4Dots} />
            </div>
        </section>
    );
}
