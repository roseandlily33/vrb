"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Links.module.css";

const sections = [
  { label: "Packages", path: "/package?type=web" },
  { label: "Design", path: "/package?type=design" },
  { label: "Process", path: "/process" },
  { label: "Retainers", path: "/package?type=retainer" },
  { label: "Extras", path: "/package?type=extras" },
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
      aria-label="Services navigation"
    >
      <div className={styles.inner}>
        {sections.map((section, idx) => (
          <div key={section.label} className={styles.linkGroup}>
            <Link href={section.path} className={styles.linkBtn}>
              {section.label}
            </Link>
            {idx < sections.length - 1 && (
              <span className={styles.separator} aria-hidden="true"></span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
