import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
import TertiaryButton from "../../TertiaryButton/TertiaryButton.component";
import CTAButton from "../../CTAButton/CTAButton.component";
import { FiEye, FiMessageCircle } from "react-icons/fi";
import styles from "./CTA2.module.css";

export default function CTA2() {
  return (
    <section className={styles.cta2Section}>
      <div className={styles.cta2Content}>
        <h2 className={styles.cta2Heading}>Here&apos;s how I can help</h2>
        <p className={styles.cta2Subtext}>
          Let’s connect and turn your ideas into reality. I&apos;m excited to
          help you build something impactful.
        </p>
        <div className={styles.cta2ButtonRow}>
          <CTAButton>
            See My Work{" "}
            <FiEye
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </CTAButton>
          <SecondaryButton>
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
    </section>
  );
}
