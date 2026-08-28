"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CTAButton from "../../CTAButton/CTAButton.component";
import { FiArrowRight } from "react-icons/fi";
import styles from "./CTA5.module.css";

export default function CTA5() {
  const router = useRouter();

  return (
   <section className={styles.ctaSection}>
  <div className={styles.ctaInner}>
    <div className={styles.ctaContent}>
      <span className="eyebrowHeader">Let&apos;s find the right fit</span>

      <h3 className={styles.ctaHeading}>
        Can’t find what you’re looking for?
      </h3>

      <p className={styles.ctaSubtext}>
        Get in touch and I can help you out — I’ll recommend the best package
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
      <span className={`${styles.pixel} ${styles.pixelOne}`} />
      <span className={`${styles.pixel} ${styles.pixelTwo}`} />
      <span className={`${styles.pixel} ${styles.pixelThree}`} />
      <span className={`${styles.pixel} ${styles.pixelFour}`} />
      <span className={`${styles.pixel} ${styles.pixelFive}`} />

      <span
        className={`${styles.pixelOutline} ${styles.outlineOne}`}
      />

      <span
        className={`${styles.pixelOutline} ${styles.outlineTwo}`}
      />
    </div>
  </div>
</section>
  );
}
