"use client";
import { useRouter } from "next/navigation";
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
    <section
      className={styles.ctaSection}
      aria-labelledby="process-cta-heading"
    >
      <div className={styles.ctaWrapper}>
        {/* LEFT: CONTENT */}
        <div className={styles.ctaLeft}>
          <div className={styles.sectionMarker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <p className="eyebrowHeader">Next Project</p>

          <h2 id="process-cta-heading">
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p className={styles.ctaDescription}>
            If you&apos;re looking for a thoughtful, high-performing website
            built around your goals, I&apos;d love to hear what you&apos;re
            working on.
          </p>

          <div className={styles.ctaActions}>
            <CTAButton onClick={() => router.push("/services")}>
              Start Your Project
              <FiArrowRight
                style={{ marginLeft: 8, verticalAlign: "middle" }}
                aria-hidden="true"
              />
            </CTAButton>

            <SecondaryButton onClick={() => router.push("/contact")}>
              Send an Email
              <FiMail
                style={{ marginLeft: 8, verticalAlign: "middle" }}
                aria-hidden="true"
              />
            </SecondaryButton>
          </div>

          <span className={styles.ctaNote}>
            <span className={styles.notePixel} aria-hidden="true" />
            {getBookingWindow()}
          </span>
        </div>

        {/* RIGHT: ORBITAL ILLUSTRATION */}
        <div className={styles.ctaVisual} aria-hidden="true">
          <svg
            className={styles.orbitSvg}
            viewBox="0 0 600 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main orbit */}
            <ellipse
              cx="300"
              cy="260"
              rx="255"
              ry="118"
              transform="rotate(-28 300 260)"
              className={styles.orbitMain}
            />

            {/* Secondary orbit */}
            <ellipse
              cx="300"
              cy="260"
              rx="225"
              ry="85"
              transform="rotate(32 300 260)"
              className={styles.orbitSecondary}
            />

            {/* Inner orbit */}
            <ellipse
              cx="300"
              cy="260"
              rx="135"
              ry="135"
              className={styles.orbitInner}
            />

            {/* Connecting curve */}
            <path
              d="M 45 380 C 155 105, 425 115, 560 365"
              className={styles.orbitPath}
            />

            {/* Circular nodes */}
            <circle cx="300" cy="260" r="58" className={styles.centerCircle} />

            <circle cx="300" cy="260" r="35" className={styles.centerInner} />

            <circle cx="300" cy="260" r="9" className={styles.centerDot} />

            <circle cx="118" cy="175" r="13" className={styles.nodeOne} />

            <circle cx="478" cy="355" r="9" className={styles.nodeTwo} />

            <circle cx="420" cy="120" r="6" className={styles.nodeThree} />

            {/* Small square accents */}
            <rect
              x="85"
              y="350"
              width="20"
              height="20"
              className={styles.svgPixelOne}
            />

            <rect
              x="470"
              y="160"
              width="13"
              height="13"
              className={styles.svgPixelTwo}
            />

            <rect
              x="375"
              y="425"
              width="8"
              height="8"
              className={styles.svgPixelThree}
            />
          </svg>

          <div className={styles.visualPixels}>
            <span className={styles.pixelOne} />
            <span className={styles.pixelTwo} />
            <span className={styles.pixelThree} />
          </div>
        </div>
      </div>
    </section>
  );
}
