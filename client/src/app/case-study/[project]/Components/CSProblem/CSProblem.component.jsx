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
      <div style={{ flex: 2 }}>
        <p className="eyebrowHeader">Problem</p>
        <h2>The challenge we needed to solve</h2>
        <p className={styles.prob}>{problemDescription}</p>
      </div>
      {homeSrc && (
        <div className={styles.imgContainer}>
          <Image
            src={homeSrc}
            alt="home page screenshot"
            className={styles.homeImg}
            style={{ cursor: "pointer" }}
            onClick={() => setModalOpen(true)}
            tabIndex={0}
            aria-label="Expand image"
            width={800}
            height={600}
          />
        </div>
      )}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
          onClick={() => setModalOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <Image
            src={homeSrc}
            alt="Full screen home page screenshot"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 12,
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              background: "#fff",
            }}
            onClick={(e) => e.stopPropagation()}
            width={800}
            height={600}
          />
        </div>
      )}
    </section>
  );
};

export default CSProblem;
