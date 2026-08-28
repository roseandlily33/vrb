import React from "react";
import styles from "./CSDesignProcess.module.css";

export default function CSDesignProcess({ title, description, steps }) {
  return (
  <section className={styles.csDesignProcessRoot}>
  <div className={styles.csDesignProcessHeader}>
    <div className={styles.csDesignProcessMarker} aria-hidden="true">
      <span className={styles.csDesignProcessMarkerLine} />
      <span className={styles.csDesignProcessMarkerPixel} />
    </div>

    <h2 className={styles.csDesignProcessTitle}>{title}</h2>

    {description && (
      <div className={styles.csDesignProcessDesc}>{description}</div>
    )}
  </div>

  <div className={styles.csDesignProcessList}>
    {steps?.map((step, idx) => (
      <div
        className={styles.csDesignProcessItem}
        key={step.url + step.sequence}
      >
        <div className={styles.csDesignProcessSeq}>
          {step.sequence}
        </div>

        <div className={styles.csDesignProcessContent}>
          <div className={styles.csDesignProcessUrl}>
            {step.url}
          </div>

          <div className={styles.csDesignProcessItemDesc}>
            {step.description}
          </div>
        </div>

        <span
          className={styles.csDesignProcessPixel}
          aria-hidden="true"
        />
      </div>
    ))}
  </div>
</section>
  );
}
