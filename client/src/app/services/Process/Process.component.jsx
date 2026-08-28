import React from "react";
import styles from "./Process.module.css";
import { processList } from "./processInfo";
import Timeline from "../../process/Timeline/Timeline.component";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Process() {
  return (
    <section className={styles.processSection} id="process">
      <div className={styles.processInner}>
        <div className={styles.processHeader}>
          <div className={styles.headerContent}>
            <div className={styles.sectionMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>Process</p>

            <h2>My Web Design & Development Process</h2>
          </div>

          <p className={styles.meta}>
            Timelines may vary depending on your project’s scope, complexity,
            and requirements.
          </p>
        </div>

        <Timeline />

        <div className={styles.processCta}>
          <Link href="/process" passHref>
            <TertiaryButton as="a" style={{ fontSize: "0.85rem" }}>
              See more about the full process
              <FiArrowRight
                style={{ marginLeft: 8, verticalAlign: "middle" }}
                aria-hidden="true"
              />
            </TertiaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
