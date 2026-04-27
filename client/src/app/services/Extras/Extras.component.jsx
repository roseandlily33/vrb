"use client";
import React, { useState, useEffect } from "react";
import styles from "./Extras.module.css";
import { extrasList } from "./extrasList";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    setMatches(media.matches);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
}

export default function Extras() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Responsive: update on resize
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <section className={styles.extrasSection} id="extras">
      <span className="eyebrowHeader">Extras</span>
      <h2 className="heading">Extras & Add-Ons</h2>
      <p className="meta">
        Enhance your project with optional features and services—choose what fits your needs.
      </p>

      <div className={styles.splitLayout}>
        {/* Mobile: Dropdown Selector */}
        {isMobile ? (
          <div style={{ width: '100%' }}>
            <select
              value={selectedIdx}
              onChange={e => setSelectedIdx(Number(e.target.value))}
              className={styles.extrasSelect}
            >
              {extrasList.map((item, idx) => (
                <option value={idx} key={item.title}>{item.title}</option>
              ))}
            </select>
            <div className={styles.extraDetail}>
              {extrasList[selectedIdx].icon && React.createElement(extrasList[selectedIdx].icon, { className: styles.extraIcon })}
              <h3 className={styles.extraTitle}>{extrasList[selectedIdx].title}</h3>
              <p className={styles.extraDesc}>{extrasList[selectedIdx].description}</p>
            </div>
          </div>
        ) : (
          // Desktop: Original split layout
          <>
            <ul className={styles.extrasList}>
              {extrasList.map((item, idx) => (
                <li
                  key={item.title}
                  className={`${styles.listItem} ${idx === selectedIdx ? styles.selected : ""}`}
                  onClick={() => setSelectedIdx(idx)}
                  tabIndex={0}
                >
                  {item.icon && <item.icon className={styles.icon} />}
                  {item.title}
                </li>
              ))}
            </ul>
            <div className={styles.extraDetail}>
              {extrasList[selectedIdx].icon && React.createElement(extrasList[selectedIdx].icon, { className: styles.extraIcon })}
              <h3 className={styles.extraTitle}>{extrasList[selectedIdx].title}</h3>
              <p className={styles.extraDesc}>{extrasList[selectedIdx].description}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
