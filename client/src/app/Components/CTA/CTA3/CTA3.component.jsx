import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
import { FiMessageCircle } from "react-icons/fi";
import Link from "next/link";
import styles from "./CTA3.module.css";

export default function CTA3() {
    return (
        <section className={styles.cta3Section}>
            <div className={styles.cta3Content}>
                <h2 className={styles.cta3Heading}>
                   Let’s work together on your
                    next project
                </h2>
                <p className={styles.cta3Subtext}>
                    Ready to elevate your brand or website? Let’s chat about how I can
                    help you achieve your goals.
                </p>
                <div className={styles.cta3ButtonRow}>
                    <Link href="/services" passHref>
                        <SecondaryButton as="a">
                            View Packages
                            <FiMessageCircle
                                style={{ marginLeft: 8, verticalAlign: "middle" }}
                                aria-hidden="true"
                            />
                        </SecondaryButton>
                    </Link>
                </div>
                <div className={styles.cta3Booking}>
                    Currently booking 2–4 weeks in advance
                </div>
            </div>
        </section>
    );
}
