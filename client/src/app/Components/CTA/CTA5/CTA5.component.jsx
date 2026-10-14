"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CTAButton from "../../CTAButton/CTAButton.component";
import { FiArrowRight } from "react-icons/fi";
import styles from "./CTA5.module.css";

export default function CTA5() {
  const router = useRouter();

  return (
    <section
      className={styles.ctaSection}
      aria-labelledby="package-cta-heading"
    >
      <div className={styles.ctaInner}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaEyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowPixel} aria-hidden="true" />

            <span className="eyebrowHeader">Let&apos;s find the right fit</span>
          </div>

          <h2 id="package-cta-heading" className={styles.ctaHeading}>
            Can’t find what you’re looking for?
          </h2>

          <p className={styles.ctaSubtext}>
            Get in touch and I can help you out. I’ll recommend the best package
            or a tailored plan to match your goals.
          </p>

          <div className={styles.ctaButtons}>
            <CTAButton onClick={() => router.push("/contact")}>
              Get in touch
              <FiArrowRight
                style={{
                  marginLeft: 8,
                  verticalAlign: "middle",
                }}
                aria-hidden="true"
              />
            </CTAButton>
          </div>

          <p className={styles.ctaNote}>
            Prefer email? I usually reply within 1–2 business days.
          </p>
        </div>

        <div className={styles.ctaVisual} aria-hidden="true">
          <svg
            className={styles.orbit}
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="200"
              cy="200"
              rx="180"
              ry="82"
              transform="rotate(-35 200 200)"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <ellipse
              cx="200"
              cy="200"
              rx="160"
              ry="60"
              transform="rotate(35 200 200)"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 9"
            />

            <path
              d="M20 320H110L145 285H265L300 320H380"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <circle cx="145" cy="285" r="4" fill="#269BE6" />
            <circle cx="300" cy="320" r="4" fill="#FFD21F" />
          </svg>

          <span className={`${styles.pixel} ${styles.pixelOne}`} />
          <span className={`${styles.pixel} ${styles.pixelTwo}`} />
          <span className={`${styles.pixel} ${styles.pixelThree}`} />
          <span className={`${styles.pixel} ${styles.pixelFour}`} />
          <span className={`${styles.pixel} ${styles.pixelFive}`} />

          <span className={`${styles.pixelOutline} ${styles.outlineOne}`} />

          <span className={`${styles.pixelOutline} ${styles.outlineTwo}`} />
        </div>
      </div>
    </section>
  );
}
