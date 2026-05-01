"use client";
import { useEffect, useState } from "react";
import styles from "./Links.module.css";

const sections = [
  { label: "Packages", target: "#packages" },
  { label: "Design", target: "#design" },
  { label: "Process", target: "#process" },
  { label: "Retainers", target: "#retainers" },
  { label: "Extras", target: "#extras" },
];

export default function Links({ onSectionClick }) {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPinned(window.scrollY > 220);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${styles.linksBar} ${isPinned ? styles.linksBarPinned : ""}`}
      aria-label="Section navigation"
    >
      {sections.map((section, idx) => (
        <div key={idx}>
          <button
            key={section.label}
            className={styles.linkBtn}
            onClick={() => {
              if (onSectionClick) onSectionClick(section.target);
              else {
                const el = document.querySelector(section.target);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            type="button"
          >
            {section.label}
          </button>
          {idx < sections.length - 1 && (
            <span className={styles.separator} aria-hidden="true"></span>
          )}
        </div>
      ))}
    </nav>
  );
}
