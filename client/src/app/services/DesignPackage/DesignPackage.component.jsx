"use client";
import React, { useState } from "react";
import Card from "../../Components/Card/Card.component";
import TertiaryButton from "../../Components/TertiaryButton/TertiaryButton.component";
import { FaArrowRight } from "react-icons/fa";
import styles from "./DesignPackage.module.css";
import designPackages from "./designPackage";
import SelectedDesignPackage from "./SelectedDesignPackage.component";
import MostPopular from "@/app/Components/MostPopular/MostPopular.component";

export default function DesignPackage() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Show grid view
  if (selectedIdx === null) {
    return (
      <section className={styles.designSection}>
            <span className="eyebrowHeader">Design-Only Options</span>
            <h2 className={styles.heading}>Only need design?</h2>
            <p className={styles.meta}>
              If you’re not ready for development yet, these packages give you a
              strong visual and strategic foundation to move forward with
              confidence.
            </p>
        <div className={styles.designGrid}>
          {designPackages.map((pkg, idx) => {
            return (
              <Card
                key={pkg.title}
                className={`${styles.designCard} ${pkg.highlight ? styles.featuredCard : ""}`}
              >
                {pkg.highlight && <MostPopular>Most Popular</MostPopular>}

                <div className={styles.cardTop}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.cardTitle}>{pkg.title}</h3>
                      <div className={styles.bestFor}>
                        <span>{pkg.bestFor}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardPrice}>{pkg.startingAt}</div>
                  <div className={styles.cardMeta}>Approx. {pkg.timeline}</div>
                  <p className={styles.cardDesc}>{pkg.description}</p>
                  <ul className={styles.featuresList}>
                    {pkg.features.slice(0, 3).map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <TertiaryButton onClick={() => setSelectedIdx(idx)}>
                  See what’s included
                  <FaArrowRight
                    style={{
                      marginLeft: "0.5em",
                      fontSize: "1em",
                      verticalAlign: "-2px",
                    }}
                  />
                </TertiaryButton>
              </Card>
            );
          })}
        </div>
      </section>
    );
  }

  // Detail view
  const pkg = designPackages[selectedIdx];
  // Palette icon for design packages

  return <SelectedDesignPackage pkg={pkg} setSelectedIdx={setSelectedIdx} />;
}
