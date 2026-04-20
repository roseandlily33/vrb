"use client";
import React, { useState } from "react";
import styles from "./Extras.module.css";
import { extrasList } from "./extrasList";

export default function Extras() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = extrasList[selectedIdx];

  return (
<section className={styles.extrasSection} id="extras">
  <span className="eyebrowHeader">Extras</span>
  <h2 className={styles.heading}>Extras & Add-Ons</h2>
  <p className={styles.subtext}>
    Enhance your project with optional features and services—choose what fits your needs.
  </p>

  <div className={styles.splitLayout}>
    <ul className={styles.extrasList}>
      {extrasList.map((item, idx) => (
        <li
          key={item.title}
          className={`${styles.listItem} ${
            idx === selectedIdx ? styles.selected : ""
          }`}
          onClick={() => setSelectedIdx(idx)}
          tabIndex={0}
        >
          {item.icon && <item.icon className={styles.icon} />}
          {item.title}
        </li>
      ))}
    </ul>

    <div className={styles.extraDetail}>
      {selected.icon && <selected.icon className={styles.extraIcon} />}
      <h3 className={styles.extraTitle}>{selected.title}</h3>
      <p className={styles.extraDesc}>{selected.description}</p>
    </div>
  </div>
</section>
  );
}
