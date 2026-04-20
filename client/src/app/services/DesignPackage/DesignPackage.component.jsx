"use client";
"use client";
import React, { useState } from "react";
import Card from "../../Components/Card/Card.component";
import MostPopular from '../../Components/MostPopular/MostPopular.component';
import TertiaryButton from "../../Components/TertiaryButton/TertiaryButton.component";
import { FaArrowRight } from "react-icons/fa";
import styles from "./DesignPackage.module.css";
import designPackages from './designPackage';

export default function DesignPackage() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [animating, setAnimating] = useState(false);

  // Show grid view
  if (selectedIdx === null) {
    return (
      <section className={styles.designSection}>
        <div className={styles.designIntro}>
          <div className={styles.introText}>
            <span className="eyebrowHeader">Design-Only Options</span>
            <h2 className={styles.heading}>Only need design?</h2>
            <p className={styles.meta}>
              If you’re not ready for development yet, these packages give you a
              strong visual and strategic foundation to move forward with
              confidence.
            </p>
          </div>
        </div>

        <div className={styles.designGrid}>
          {designPackages.map((pkg, idx) => (
            <Card
              key={pkg.title}
              className={`${styles.designCard} ${pkg.highlight ? styles.featuredCard : ""}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.cardTitle}>{pkg.title}</h3>
                    <div className={styles.bestFor}>
                      Best for <span>{pkg.bestFor}</span>
                    </div>
                  </div>
                  {pkg.highlight && <MostPopular>{pkg.highlight}</MostPopular>}
                </div>
                <div className={styles.cardPrice}>
                  Starting at {pkg.startingAt}
                </div>
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
          ))}
        </div>
      </section>
    );
  }

  // Detail view
  const pkg = designPackages[selectedIdx];
  return (
    <section className={styles.designSection}>
      <div className={styles.designIntro}>
        <div className={styles.introText}>
          <span className="eyebrowHeader">Design-Only Options</span>
          <h2 className={styles.heading}>{pkg.title}</h2>
          <p className={styles.meta}>{pkg.description}</p>
        </div>
      </div>
      <div className={styles.detailCard}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.cardTitle}>{pkg.title}</h3>
            <div className={styles.bestFor}>
              Best for <span>{pkg.bestFor}</span>
            </div>
          </div>
          {pkg.highlight && <MostPopular>{pkg.highlight}</MostPopular>}
        </div>
        <div className={styles.cardPrice}>Starting at {pkg.startingAt}</div>
        <div className={styles.cardMeta}>Approx. {pkg.timeline}</div>
        <ul className={styles.featuresList}>
          {pkg.features.map((feature) => (
            <li key={feature} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 24 }}>
          <TertiaryButton onClick={() => setSelectedIdx(null)}>
            Hide details
          </TertiaryButton>
        </div>
      </div>
    </section>
  );
}
