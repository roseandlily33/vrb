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
      <span className={styles.eyebrow}>Process</span>
      <h2 className={styles.heading}>My Process</h2>
      <p className={styles.subtext}>
        Timelines may vary depending on your project’s scope, complexity, and
        requirements.
      </p>

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
    </section>
  );
}
