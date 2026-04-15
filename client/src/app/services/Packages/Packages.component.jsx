"use client";
import { useState } from "react";
import { PackageInfo } from "./packageList";
import { FaArrowRight } from "react-icons/fa";
import MostPopular from "@/app/Components/MostPopular/MostPopular.component";
import Card from "@/app/Components/Card/Card.component";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import styles from "./Packages.module.css";

export default function Packages() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  // Animation state for fade/slide
  const [animating, setAnimating] = useState(false);

  // Handle Learn More (animate to tab view)
  const handleLearnMore = (idx) => {
    setAnimating(true);
    setTimeout(() => {
      setSelectedIdx(idx);
      setAnimating(false);
    }, 250);
  };

  // Handle Hide Info (animate back to grid)
  const handleHideInfo = () => {
    setAnimating(true);
    setTimeout(() => {
      setSelectedIdx(null);
      setAnimating(false);
    }, 250);
  };

  // Card grid view
  if (selectedIdx === null) {
    // Split packages by type
    const websitePackages = PackageInfo.filter((pkg) => pkg.type === "website");
    const designPackages = PackageInfo.filter((pkg) => pkg.type === "design");
    return (
      <section className={styles.packagesSection} id="packages">
        {/* Website Packages Header */}
        <h2 className={styles.heading}>Project Packages</h2>
        <p className={styles.meta}>
          Transparent pricing, clear deliverables, and a process tailored to
          your needs.
        </p>
        {/* Website Packages Row */}
        <div
          className={`${styles.cardGrid} ${animating ? styles.fadeOut : styles.fadeIn}`}
          style={{ marginBottom: "2.5rem", flexWrap: "wrap" }}
        >
          {websitePackages.map((pkg, idx) => (
            <Card
              key={pkg.title + pkg.type}
              className={
                styles.packageCard +
                (pkg.highlight || idx === 1 ? " " + styles.featuredCard : "")
              }
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                {pkg.highlight && (
                  <div style={{ marginBottom: "0.5em" }}>
                    <MostPopular>{pkg.highlight}</MostPopular>
                  </div>
                )}
              </div>
              <div className={styles.bestFor}>
                Best for <span>{pkg.bestFor}</span>
              </div>
              <span className={styles.cardPrice}>
                Starting at {pkg.startingAt}
              </span>
              <div className={styles.cardMeta}>Approx. {pkg.timeline}</div>
              <p className={styles.cardDesc}>{pkg.description}</p>
              <TertiaryButton
                onClick={() => handleLearnMore(PackageInfo.indexOf(pkg))}
              >
                Learn More{" "}
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
        {/* Subheader for Design Packages */}
        <h3
          style={{
            margin: "0 0 1.2rem 0",
            color: "var(--blue-900)",
            fontWeight: 700,
            fontSize: "1.25rem",
          }}
        >
          Only need design?
        </h3>
        {/* Design Packages Row */}
        <div className={styles.cardGrid}>
          {designPackages.map((pkg, idx) => (
            <Card
              key={pkg.title + pkg.type}
              className={
                styles.packageCard +
                (pkg.highlight ? " " + styles.featuredCard : "")
              }
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                {pkg.highlight && (
                  <div style={{ marginBottom: "0.5em" }}>
                    <MostPopular>{pkg.highlight}</MostPopular>
                  </div>
                )}
              </div>
              <div className={styles.bestFor}>
                Best for <span>{pkg.bestFor}</span>
              </div>
              <span className={styles.cardPrice}>
                Starting at {pkg.startingAt}
              </span>
              <div className={styles.cardMeta}>Approx. {pkg.timeline}</div>
              <p className={styles.cardDesc}>{pkg.description}</p>
              <TertiaryButton
                onClick={() => handleLearnMore(PackageInfo.indexOf(pkg))}
              >
                Learn More{" "}
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

  // Tabbed detail view
  const pkg = PackageInfo[selectedIdx];
  return (
    <section className={styles.packagesSection}>
      <div
        className={`${styles.tabsWrapper} ${animating ? styles.fadeOut : styles.fadeIn}`}
      >
        <div className={styles.tabs}>
          {PackageInfo.map((p, idx) => (
            <button
              key={p.title + p.type}
              className={`${styles.tab} ${idx === selectedIdx ? styles.activeTab : ""}`}
              onClick={() => setSelectedIdx(idx)}
              disabled={idx === selectedIdx}
            >
              {p.title}{" "}
              <span
                style={{ fontSize: "0.85em", color: "#888", fontWeight: 400 }}
              >
                ({p.type === "design" ? "Design" : "Website"})
              </span>
            </button>
          ))}
        </div>
        <Card className={styles.detailCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>{pkg.title}</h3>
            <span className={styles.cardPrice}>{pkg.startingAt}</span>
          </div>
          <div className={styles.cardMeta}>{pkg.timeline}</div>
          <p className={styles.cardDesc}>{pkg.description}</p>
          <ul className={styles.featuresList}>
            {pkg.features.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
          <TertiaryButton onClick={handleHideInfo}>Hide Info</TertiaryButton>
        </Card>
      </div>
    </section>
  );
}
