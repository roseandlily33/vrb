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
    <section className={styles.problem} id="challenge">
      <div className={styles.problemInner}>
        {/* SECTION CONTENT */}
        <div className={styles.problemContent}>
          <div className={styles.problemSectionMeta}>
            <span className={styles.problemSectionNumber}>
              01 / THE CHALLENGE
            </span>

            <div className={styles.marker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>
          </div>

          <p className="eyebrowHeader">Problem</p>

          <h2>
            The challenge
            <span className={styles.problemHeadingAccent}>
              {" "}
              we needed to solve.
            </span>
          </h2>

          <div className={styles.problemDescriptionBlock}>
            <span
              className={styles.problemDescriptionLine}
              aria-hidden="true"
            />

            <p className={styles.prob}>{problemDescription}</p>
          </div>

          <div className={styles.problemBottomDetail} aria-hidden="true">
            <span className={styles.problemBottomLine} />
            <span className={styles.problemBottomSquare} />
          </div>
        </div>

        {/* PROJECT SCREENSHOT */}
        {homeSrc && (
          <div className={styles.imgContainer}>
            <div className={styles.imageFrame}>
              <div className={styles.imageFrameHeader}>
                <span className={styles.imageFrameLabel}>PROJECT PREVIEW</span>

                <span className={styles.imageFrameCount}>FIG. 01</span>
              </div>

              <button
                type="button"
                className={styles.imageButton}
                onClick={() => setModalOpen(true)}
                aria-label="Expand project screenshot"
                aria-haspopup="dialog"
              >
                <Image
                  src={homeSrc}
                  alt="Screenshot of the project interface"
                  className={styles.homeImg}
                  width={800}
                  height={600}
                />

                <span className={styles.imageOverlay} aria-hidden="true">
                  <span className={styles.expandIcon}>↗</span>
                  <span className={styles.expandLabel}>View larger</span>
                </span>
              </button>

              <div className={styles.imageFrameFooter}>
                <span>Interface overview</span>
                <span className={styles.imageFooterPixels} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      {modalOpen && homeSrc && (
        <div
          className={styles.modal}
          onClick={() => setModalOpen(false)}
          aria-modal="true"
          role="dialog"
          aria-label="Expanded project screenshot"
        >
          <button
            type="button"
            className={styles.modalClose}
            onClick={() => setModalOpen(false)}
            aria-label="Close image"
          >
            <span aria-hidden="true">×</span>
          </button>

          <div
            className={styles.modalImageWrap}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={homeSrc}
              alt="Expanded screenshot of the project interface"
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
