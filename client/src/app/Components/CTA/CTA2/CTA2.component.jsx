import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";
import { FiEye, FiMessageCircle } from "react-icons/fi";
import styles from "./CTA2.module.css";

export default function CTA2() {
  return (
    <section className={styles.cta2Section}>
      <div className={styles.cta2Content}>
        <h2 className={styles.cta2Heading}>Ready to get started?</h2>
        <p className={styles.cta2Subtext}>
          Let’s connect and turn your ideas into reality. I’m excited to help
          you build something impactful.
        </p>
        <div className={styles.cta2ButtonRow}>
          <PrimaryButton className={styles.cta2Button}>
            See My Work{" "}
            <FiEye
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </PrimaryButton>
          <SecondaryButton className={styles.cta2Button}>
            Contact Me{" "}
            <FiMessageCircle
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </SecondaryButton>
        </div>
        <div className={styles.cta2Booking}>
          Typically booking 2–4 weeks in advance
        </div>
      </div>
      <div className={styles.cta2Shapes} aria-hidden="true">
        <div className={styles.cta2Circle} />
        <div className={styles.cta2Triangle} />
      </div>
    </section>
  );
}
