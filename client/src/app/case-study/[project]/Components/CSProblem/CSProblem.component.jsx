"use client";
import React, { useState, useCallback, useEffect } from "react";
import styles from "./CSProblem.module.css";
import Image from "next/image";

const CSProblem = ({ problemDescription, homeSrc }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Close modal on ESC
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setModalOpen(false);
  }, []);
  useEffect(() => {
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalOpen, handleKeyDown]);

  return (
    <section className={styles.problem}>
  <div className={styles.problemInner}>
    <div className={styles.problemContent}>
      <div className={styles.marker} aria-hidden="true">
        <span className={styles.markerLine} />
        <span className={styles.markerPixel} />
      </div>

      <p className="eyebrowHeader">Problem</p>

      <h2>The challenge we needed to solve</h2>

      <p className={styles.prob}>{problemDescription}</p>
    </div>

    {homeSrc && (
      <div className={styles.imgContainer}>
        <button
          type="button"
          className={styles.imageButton}
          onClick={() => setModalOpen(true)}
          aria-label="Expand image"
        >
          <span className={styles.imageIndex} aria-hidden="true">
            01
          </span>

          <Image
            src={homeSrc}
            alt="home page screenshot"
            className={styles.homeImg}
            width={800}
            height={600}
          />

          <span className={styles.expandLabel} aria-hidden="true">
            View larger
          </span>

          <span className={styles.imagePixel} aria-hidden="true" />
        </button>
      </div>
    )}
  </div>

  {modalOpen && (
    <div
      className={styles.modal}
      onClick={() => setModalOpen(false)}
      aria-modal="true"
      role="dialog"
    >
      <button
        type="button"
        className={styles.modalClose}
        onClick={() => setModalOpen(false)}
        aria-label="Close image"
      >
        ×
      </button>

      <div
        className={styles.modalImageWrap}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={homeSrc}
          alt="Full screen home page screenshot"
          className={styles.modalImage}
          width={1200}
          height={900}
        />
      </div>
    </div>
  )}
</section>
  );
};

export default CSProblem;
