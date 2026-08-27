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
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h3 className={styles.heading}>
            Can’t find what you’re looking for?
          </h3>
          <p className={styles.copy}>
            Get in touch and I can help you out — I’ll recommend the best
            package or a tailored plan to match your goals.
          </p>
        </div>

        <div className={styles.right}>
          <CTAButton onClick={() => router.push("/contact")}>
            Get in touch
            <FiArrowRight
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </CTAButton>

          <span className={styles.note}>
            Prefer email? I usually reply within 1–2 business days.
          </span>
        </div>
      </div>
    </section>
  );
}
