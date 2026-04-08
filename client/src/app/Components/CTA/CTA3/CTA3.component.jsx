
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";
import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
import { FiSend, FiMessageCircle } from "react-icons/fi";
import styles from "./CTA3.module.css";

export default function CTA3() {
    return (
        <section className={styles.cta3Section}>
            <div className={styles.cta3Content}>
                <h2 className={styles.cta3Heading}>
                    <span className={styles.cta3Accent}>Let’s work</span> together on your next project
                </h2>
                <p className={styles.cta3Subtext}>
                    Ready to elevate your brand or website? Let’s chat about how I can help you achieve your goals.
                </p>
                <div className={styles.cta3ButtonRow}>
                    <PrimaryButton>
                        Start Your Project
                        <FiSend style={{ marginLeft: 8, verticalAlign: "middle" }} aria-hidden="true" />
                    </PrimaryButton>
                    <SecondaryButton>
                        Contact Me
                        <FiMessageCircle style={{ marginLeft: 8, verticalAlign: "middle" }} aria-hidden="true" />
                    </SecondaryButton>
                </div>
                <div className={styles.cta3Booking}>Currently booking 2–4 weeks in advance</div>
            </div>
            <div className={styles.cta3Shapes} aria-hidden="true">
                <div className={styles.cta3Circle} />
                <div className={styles.cta3Square} />
                <div className={styles.cta3Triangle} />
            </div>
        </section>
    );
}
