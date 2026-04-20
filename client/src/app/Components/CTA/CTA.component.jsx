"use client";
import styles from "./CTA.module.css";
import { useRouter } from "next/navigation";
import CTAButton from "@/app/Components/CTAButton/CTAButton.component";
import { FiSend } from "react-icons/fi";

export default function CTA() {
  const router = useRouter();
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaHeading}>
          Ready to build something that works beautifully?
        </h2>

        <p className={styles.ctaSubtext}>
          From strategy and design to development and launch, I create
          thoughtful digital experiences built around your goals.
        </p>

        <CTAButton onClick={() => router.push("/contact")}>
          Start Your Project
          <FiSend
            style={{ marginLeft: 8, verticalAlign: "middle" }}
            aria-hidden="true"
          />
        </CTAButton>

        <p className={styles.ctaMeta}>
          Currently booking 1–2 months in advance
        </p>
      </div>
    </section>
  );
}
