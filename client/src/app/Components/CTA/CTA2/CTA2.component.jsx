"use client";
import { useRouter } from "next/navigation";
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
    <section
      className={styles.cta2Section}
      aria-labelledby="services-cta-heading"
    >
      <div className={styles.cta2Inner}>
        {/* MAIN CONTENT */}
        <div className={styles.cta2Content}>
          <div className={styles.cta2Eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowPixel} aria-hidden="true" />

            <span className="eyebrowHeader">Let’s Work Together</span>
          </div>

          <h2 id="services-cta-heading" className={styles.cta2Heading}>
            Ready to move your project forward?
          </h2>

          <p className={styles.cta2Subtext}>
            Whether you need a strategic website, a custom build, or a clearer
            starting point, I can help you shape the right solution.
          </p>

          <div className={styles.cta2ButtonRow}>
            <CTAButton onClick={() => router.push("/work")}>
              See My Work
              <FiEye
                style={{ marginLeft: 8, verticalAlign: "middle" }}
                aria-hidden="true"
              />
            </CTAButton>

            <SecondaryButton onClick={() => router.push("/contact")}>
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

        {/* DECORATIVE VISUAL */}
        <div className={styles.cta2Visual} aria-hidden="true">
          <svg
            className={styles.orbit}
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="250"
              cy="250"
              rx="225"
              ry="115"
              transform="rotate(-35 250 250)"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <ellipse
              cx="250"
              cy="250"
              rx="190"
              ry="80"
              transform="rotate(35 250 250)"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 9"
            />

            <path
              d="M35 390H135L175 350H325L365 390H465"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <circle cx="175" cy="350" r="5" fill="#269BE6" />
            <circle cx="365" cy="390" r="5" fill="#FFD21F" />
          </svg>

          <span className={`${styles.pixel} ${styles.pixelOne}`} />
          <span className={`${styles.pixel} ${styles.pixelTwo}`} />
          <span className={`${styles.pixel} ${styles.pixelThree}`} />
          <span className={`${styles.pixel} ${styles.pixelFour}`} />

          <span className={`${styles.pixelOutline} ${styles.outlineOne}`} />
          <span className={`${styles.pixelOutline} ${styles.outlineTwo}`} />

          <span className={styles.visualGlow} />
        </div>
      </div>
    </section>
  );
}
