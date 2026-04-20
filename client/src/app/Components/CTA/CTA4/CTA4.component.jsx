"use client";
import {useRouter} from 'next/navigation';
import CTAButton from "../../CTAButton/CTAButton.component";
import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
import { FiArrowRight, FiMail } from "react-icons/fi";
import styles from "./CTA4.module.css";

export default function CTA4() {
    const router = useRouter();
  function getBookingWindow() {
    const now = new Date();

    const start = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 2, 1);

    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    });

    return `Now booking ${formatter.format(start)}–${formatter.format(end)}`;
  }
  return (
    <section className={styles.cta4Section}>
      <div className={styles.cta4Content}>
        <span className="eyebrowHeader">Next Project</span>

        <h2 className={styles.cta4Heading}>
          Have a project like this in mind?
        </h2>

        <p className={styles.cta4Subtext}>
          If you’re looking for a thoughtful, high-performing website built
          around your goals, I’d love to hear what you’re working on.
        </p>

        <div className={styles.cta4ButtonRow}>
          <CTAButton onClick={() => router.push('/services')}>
            Start Your Project
            <FiArrowRight
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </CTAButton>

          <SecondaryButton onClick={() => router.push('/contact')}>
            Send an Email
            <FiMail
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </SecondaryButton>
        </div>

        <div className={styles.cta4Booking}>{getBookingWindow()}</div>
      </div>
    </section>
  );
}
