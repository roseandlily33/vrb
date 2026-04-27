"use client";
import styles from "./CTA.module.css";
import { useRouter } from "next/navigation";
import CTAButton from "@/app/Components/CTAButton/CTAButton.component";
import { FiSend } from "react-icons/fi";

export default function CTA() {
  const router = useRouter();
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <p className="eyebrowHeader">Let’s work together</p>

        <h2 className={styles.ctaHeading}>
          Ready to build something that actually works?
        </h2>

        <p className={styles.ctaSubtext}>
          Whether you need a new website or want to improve what you have, I can
          help you create something clear, fast, and built to scale.
        </p>

        <div className={styles.ctaButtons}>
          <CTAButton onClick={() => router.push("/contact")}>
            Start Your Project
            <FiSend
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </CTAButton>

          <a href="/work" className={styles.secondaryBtn}>
            View My Work
          </a>
        </div>

        <p className={styles.ctaNote}>
          Currently booking projects 1–2 months in advance
        </p>
      </div>
    </section>
  );
}
