"use client";
import styles from "./CTA.module.css";
import { useRouter } from "next/navigation";
import CTAButton from "@/app/Components/CTAButton/CTAButton.component";
import { FiSend } from "react-icons/fi";
import Link from "next/link";

export default function CTA() {
  const router = useRouter();
  return (
    <section className={styles.ctaSection} aria-labelledby="cta-heading">
      <div className={styles.ctaInner}>
        <div className={styles.ctaContent}>
          <p className={styles.ctaEyebrow}>
            <span className={styles.eyebrowPixel} aria-hidden="true" />
            Let's work together
          </p>

          <h2 id="cta-heading" className={styles.ctaHeading}>
            Have a website project <span>in mind?</span>
          </h2>

          <p className={styles.ctaSubtext}>
            Whether you're starting from scratch or looking to improve your
            current website, I'd love to hear what you're working on. Let's
            create something that looks great, works well, and makes sense for
            your business.
          </p>

          <div className={styles.ctaButtons}>
            <CTAButton onClick={() => router.push("/contact")}>
              Start Your Project
              <FiSend
                style={{ marginLeft: 8, verticalAlign: "middle" }}
                aria-hidden="true"
              />
            </CTAButton>

            <Link href="/work" className={styles.secondaryBtn}>
              View My Work
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <p className={styles.ctaNote}>
            Have questions? I'm happy to talk through your ideas.
          </p>
        </div>

        {/* VRB CIRCUIT + ORBIT COMPOSITION */}
        <div className={styles.ctaVisual} aria-hidden="true">
          <svg
            className={styles.ctaArtwork}
            viewBox="0 0 520 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer orbit */}
            <ellipse
              className={styles.orbitOuter}
              cx="260"
              cy="230"
              rx="224"
              ry="105"
              transform="rotate(-29 260 230)"
            />

            {/* Inner orbit */}
            <ellipse
              className={styles.orbitInner}
              cx="260"
              cy="230"
              rx="189"
              ry="82"
              transform="rotate(-29 260 230)"
            />

            {/* Circuit paths */}
            <path className={styles.circuitPath} d="M62 220H163L215 168H351" />

            <path className={styles.circuitPath} d="M62 253H226L265 214H386" />

            <path className={styles.circuitPath} d="M100 290H185L246 351H355" />

            {/* Circuit nodes */}
            <circle className={styles.circuitNode} cx="351" cy="168" r="7" />
            <circle className={styles.circuitNode} cx="386" cy="214" r="7" />
            <circle className={styles.circuitNode} cx="355" cy="351" r="7" />

            <circle className={styles.nodeCenter} cx="351" cy="168" r="2.5" />
            <circle className={styles.nodeCenter} cx="386" cy="214" r="2.5" />
            <circle className={styles.nodeCenter} cx="355" cy="351" r="2.5" />

            {/* Pixels */}
            <rect
              className={styles.pixelBlue}
              x="358"
              y="91"
              width="58"
              height="58"
            />

            <rect
              className={styles.pixelLight}
              x="419"
              y="152"
              width="32"
              height="32"
            />

            <rect
              className={styles.pixelYellow}
              x="413"
              y="86"
              width="16"
              height="16"
            />

            <rect
              className={styles.pixelBlueSmall}
              x="83"
              y="267"
              width="18"
              height="18"
            />

            <rect
              className={styles.pixelOutline}
              x="123"
              y="112"
              width="77"
              height="77"
            />

            <rect
              className={styles.pixelOutlineYellow}
              x="373"
              y="298"
              width="67"
              height="67"
            />

            <rect
              className={styles.pixelYellow}
              x="414"
              y="339"
              width="25"
              height="25"
            />

            <rect
              className={styles.pixelLight}
              x="202"
              y="385"
              width="11"
              height="11"
            />

            <rect
              className={styles.pixelBlueSmall}
              x="304"
              y="61"
              width="10"
              height="10"
            />
          </svg>

          <span className={styles.visualGlow} />
        </div>
      </div>
    </section>
  );
}
