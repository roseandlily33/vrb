"use client";
import React from "react";
import styles from "./WhatCanBeAdded.module.css";
import { packageAddOns as PackageAddOns } from "./packageAddOns";
import TertiaryButton from "../../Components/TertiaryButton/TertiaryButton.component";

export default function WhatCanBeAdded({ type }) {
  const items = PackageAddOns[type] || [];

  if (!items || items.length === 0) return null;

  return (
    <section className={styles.wrap} aria-labelledby="addons-title">
      <h3 id="addons-title" className={styles.heading}>
        What can be added
      </h3>

      <div className={styles.grid}>
        {items.map((it) => (
          <div key={it?.title} className={styles.card}>
            <div className={styles.cardBody}>
              <h4 className={styles.title}>{it.title}</h4>
              <p className={styles.desc}>{it.description}</p>
            </div>

            {it?.link ? (
              <div className={styles.actions}>
                <TertiaryButton
                  onClick={() => window.open(it.link, "_blank")}
                  aria-label={`Learn more about ${it.title}`}
                >
                  <span>Learn more</span>
                </TertiaryButton>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
