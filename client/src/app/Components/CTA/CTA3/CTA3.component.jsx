import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
import { FiMessageCircle } from "react-icons/fi";
import Link from "next/link";
import styles from "./CTA3.module.css";

export default function CTA3() {
  function getBookingWindow() {
    const now = new Date();

    const start = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 2, 1);

    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    });

    return `Currently booking ${formatter.format(start)}–${formatter.format(end)}`;
  }
  return (
    <section className={styles.cta3Section}>
      <div className={styles.cta3Content}>
        <span className={styles.eyebrow}>Next Step</span>

        <h2 className={styles.cta3Heading}>
          Looking for the right fit for your project?
        </h2>

        <p className={styles.cta3Subtext}>
          Explore the packages, process, and support options available to find
          the approach that makes the most sense for your goals.
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

        <div className={styles.cta3Booking}>{getBookingWindow()}</div>
      </div>
    </section>
  );
}
