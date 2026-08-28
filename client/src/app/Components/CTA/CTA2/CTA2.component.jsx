"use client";
import {useRouter} from 'next/navigation';
import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
// import TertiaryButton from "../../TertiaryButton/TertiaryButton.component";
import CTAButton from "../../CTAButton/CTAButton.component";
import { FiEye, FiMessageCircle } from "react-icons/fi";
import styles from "./CTA2.module.css";

export default function CTA2() {
  const router = useRouter();
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
<section className={styles.cta2Section}>
  <div className={styles.cta2Inner}>
    {/* <div className={styles.cta2Marker} aria-hidden="true"> */}
      {/* <span className={styles.cta2Number}>02</span>
      <span className={styles.cta2Line} /> */}
    {/* </div> */}

    <div className={styles.cta2Content}>
      <span className="eyebrowHeader">Let’s Work Together</span>

      <h2 className={styles.cta2Heading}>
        Ready to move your project forward?
      </h2>

      <p className={styles.cta2Subtext}>
        Whether you need a strategic website, a custom build, or a clearer
        starting point, I can help you shape the right solution.
      </p>

      <div className={styles.cta2ButtonRow}>
        <CTAButton onClick={() => router.push('/work')}>
          See My Work
          <FiEye
            style={{ marginLeft: 8, verticalAlign: "middle" }}
            aria-hidden="true"
          />
        </CTAButton>

        <SecondaryButton onClick={() => router.push('/contact')}>
          Contact Me
          <FiMessageCircle
            style={{ marginLeft: 8, verticalAlign: "middle" }}
            aria-hidden="true"
          />
        </SecondaryButton>
      </div>

      <div className={styles.cta2Booking}>
        <span className={styles.bookingPixel} aria-hidden="true" />
        {getBookingWindow()}
      </div>
    </div>

    <div className={styles.cta2Visual} aria-hidden="true">
      <span className={`${styles.pixel} ${styles.pixelOne}`} />
      <span className={`${styles.pixel} ${styles.pixelTwo}`} />
      <span className={`${styles.pixel} ${styles.pixelThree}`} />
      <span className={`${styles.pixel} ${styles.pixelFour}`} />

      <span className={`${styles.pixelOutline} ${styles.outlineOne}`} />
      <span className={`${styles.pixelOutline} ${styles.outlineTwo}`} />
    </div>
  </div>
</section>
  );
}
