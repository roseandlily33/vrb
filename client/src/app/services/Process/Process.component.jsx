import React from "react";
import styles from "./Process.module.css";
import { processList } from "./processInfo";
import Timeline from "../../process/Timeline/Timeline.component";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Process() {
  return (
    <section
      className={styles.processSection}
      id="process"
      aria-labelledby="process-heading"
    >
      <div className={styles.processInner}>
        <div className={styles.processHeader}>
          <div className={styles.headerContent}>
            <div className={styles.sectionMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>
              My Web Design & Development Process
            </p>

            <h2 id="process-heading">
              From first conversation to{" "}
              <span className={styles.headingHighlight}>final launch.</span>
            </h2>
          </div>

          <p className={styles.meta}>
            Every project follows a thoughtful process, from understanding your
            goals and planning the experience to designing, developing, and
            launching your website.
          </p>
        </div>

        <Timeline />

        <div className={styles.processFooter}>
          <p className={styles.timelineNote}>
            Timelines vary depending on project scope, complexity, and
            requirements.
          </p>

          <Link href="/process" className={styles.processLink}>
            Explore the full process
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
