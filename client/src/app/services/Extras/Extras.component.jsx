"use client";
import React, { useState } from "react";
import styles from "./Extras.module.css";
import { extrasList } from "./extrasList";

export default function Extras() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 800;

  return (
    <section className={styles.extrasSection} id="extras">
      <span className="eyebrowHeader">Extras</span>
      <h2 className={styles.heading}>Extras & Add-Ons</h2>
      <p className={styles.subtext}>
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
