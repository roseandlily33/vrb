"use client";
import { useRouter } from "next/navigation";
import SecondaryButton from "../../SecondaryButton/SecondaryButton.component";
// import { FiMessageCircle } from "react-icons/fi";
// import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "./CTA3.module.css";

export default function CTA3() {
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
      className={styles.cta3Section}
      aria-labelledby="explore-options-heading"
    >
      <div className={styles.cta3Inner}>
        <div className={styles.cta3Content}>
          <div className={styles.sectionMarker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <p className={styles.eyebrow}>Explore Your Options</p>

          <h2 id="explore-options-heading" className={styles.cta3Heading}>
            Looking for the
            <br />
            <span>right fit?</span>
          </h2>

          <p className={styles.cta3Subtext}>
            Explore the packages, process, and support options available to find
            the approach that makes the most sense for your goals.
          </p>

          <div className={styles.cta3ButtonRow}>
            <SecondaryButton onClick={() => router.push("/services")}>
              View Packages
              <FiArrowRight
                style={{ marginLeft: 8, verticalAlign: "middle" }}
                aria-hidden="true"
              />
            </SecondaryButton>
          </div>

          <div className={styles.cta3Booking}>
            <span className={styles.bookingPixel} aria-hidden="true" />
            {getBookingWindow()}
          </div>
        </div>

        <div className={styles.cta3Visual} aria-hidden="true">
          <svg
            className={styles.networkSvg}
            viewBox="0 0 520 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sweeping connections */}
            <path
              d="M 90 260 C 135 65, 330 50, 425 145"
              className={styles.connectionOne}
            />

            <path
              d="M 90 260 C 180 390, 355 365, 425 145"
              className={styles.connectionTwo}
            />

            <path
              d="M 90 260 C 200 180, 325 180, 425 145"
              className={styles.connectionThree}
            />

            {/* Orbit accents */}
            <ellipse
              cx="265"
              cy="205"
              rx="225"
              ry="90"
              transform="rotate(-25 265 205)"
              className={styles.networkOrbit}
            />

            {/* Left node */}
            <circle cx="90" cy="260" r="39" className={styles.nodeOuter} />
            <circle cx="90" cy="260" r="17" className={styles.nodeInner} />

            {/* Right node */}
            <circle cx="425" cy="145" r="52" className={styles.nodePrimary} />
            <circle
              cx="425"
              cy="145"
              r="22"
              className={styles.nodePrimaryInner}
            />

            {/* Bottom node */}
            <circle cx="290" cy="335" r="25" className={styles.nodeAccent} />

            {/* Small nodes */}
            <circle cx="205" cy="100" r="7" className={styles.smallNode} />
            <circle cx="365" cy="290" r="6" className={styles.smallNode} />

            {/* Signature pixels */}
            <rect
              x="145"
              y="75"
              width="14"
              height="14"
              className={styles.networkPixelBlue}
            />
            <rect
              x="370"
              y="345"
              width="18"
              height="18"
              className={styles.networkPixelYellow}
            />
            <rect
              x="55"
              y="130"
              width="8"
              height="8"
              className={styles.networkPixelBlue}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
