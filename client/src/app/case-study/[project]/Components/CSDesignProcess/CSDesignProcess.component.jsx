import React from "react";
import styles from "./CSDesignProcess.module.css";

export default function CSDesignProcess({ title, description, steps }) {
  return (
    <section className={styles.csDesignProcessRoot}>
      <div className={styles.csDesignProcessInner}>
        {/* HEADER */}
        <div className={styles.csDesignProcessHeader}>
          <div className={styles.csDesignProcessMarker} aria-hidden="true">
            <span className={styles.csDesignProcessMarkerLine} />
            <span className={styles.csDesignProcessMarkerPixel} />
          </div>

          <div className={styles.csDesignProcessHeaderTop}>
            <span className={styles.csDesignProcessEyebrow}>
              Behind the Design
            </span>

            <span className={styles.csDesignProcessHeaderIndex}>
              PROCESS / {String(steps?.length || 0).padStart(2, "0")}
            </span>
          </div>

          <h2 className={styles.csDesignProcessTitle}>{title}</h2>

          {description && (
            <div className={styles.csDesignProcessDesc}>{description}</div>
          )}
        </div>

        {/* PROCESS ROADMAP */}
        <div className={styles.csDesignProcessList}>
          {steps?.map((step, idx) => (
            <div
              className={styles.csDesignProcessItem}
              key={`${step.url}-${step.sequence}`}
            >
              <div className={styles.csDesignProcessTimeline}>
                <span className={styles.csDesignProcessTimelineNode} />
              </div>

              <div className={styles.csDesignProcessSeq}>
                <span className={styles.csDesignProcessSeqLabel}>STEP</span>

                <span className={styles.csDesignProcessSeqNumber}>
                  {step.sequence}
                </span>
              </div>

              <div className={styles.csDesignProcessContent}>
                <div className={styles.csDesignProcessContentTop}>
                  <span className={styles.csDesignProcessItemIndex}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={styles.csDesignProcessPixel}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.csDesignProcessUrl}>{step.url}</div>

                <div className={styles.csDesignProcessItemDesc}>
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM DETAIL */}
        <div className={styles.csDesignProcessFooter}>
          <span className={styles.csDesignProcessFooterPixel} />

          <span>FROM PLANNING TO EXECUTION</span>

          <span className={styles.csDesignProcessFooterLine} />
        </div>
      </div>
    </section>
  );
}
