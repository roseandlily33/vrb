import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";
import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
import { FiPhone } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import styles from "./CTA5.module.css";

export default function CTA5() {
  return (
    <section className={styles.cta5Section}>
      <div className={styles.cta5Content}>
        <h2 className={styles.cta5Heading}>
          <span className={styles.cta5Accent}>Let’s launch</span> your next big
          idea
        </h2>
        <p className={styles.cta5Subtext}>
          Whether you’re ready to start or just want to chat, I’m here to help
          you move forward. Let’s connect!
        </p>
        <div className={styles.cta5ButtonRow}>
          <PrimaryButton>
            Launch Project
            <FaRocket
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </PrimaryButton>
          <SecondaryButton>
            Book a Call
            <FiPhone
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </SecondaryButton>
        </div>
        <div className={styles.cta5Booking}>Spots available for May & June</div>
      </div>
      <div className={styles.cta5Shapes} aria-hidden="true">
        <div className={styles.cta5Wave} />
        <div className={styles.cta5Star} />
        <div className={styles.cta5Circle} />
      </div>
    </section>
  );
}
