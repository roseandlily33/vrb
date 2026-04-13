import React from "react";
import styles from "./Process.module.css";
import { processList } from "./processInfo";
import Timeline from "../../process/Timeline/Timeline.component";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Process() {
  return (
    <section className={styles.processSection}>
      <div className={styles.sideBySide}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // gap: "0.5rem",
          }}
        >
          <h3 className={styles.heading}>My Process</h3>
          <span style={{ marginBottom: "1rem", color: "var(--grey-400)" }}>
            Timelines may vary based on your project’s scope and
            requirements{" "}
          </span>
        </div>
        <Link href="/process" passHref>
          <TertiaryButton as="a">
            See more about the full process
            <FiArrowRight
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            />
          </TertiaryButton>
        </Link>
      </div>
      <Timeline />
    </section>
  );
}
