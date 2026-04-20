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
    return (
      <section className={styles.packagesSection} id="packages">
        <span className="eyebrowHeader">Packages</span>
        <h2 className={styles.heading}>Project Packages</h2>
        <p className={styles.meta}>
          Transparent pricing, clear deliverables, and a process tailored to
          your needs.
        </p>

        <div
          className={`${styles.cardGrid} ${animating ? styles.fadeOut : styles.fadeIn}`}
        >
          {websitePackages.map((pkg, idx) => (
            <Card
              key={pkg.title + pkg.type}
              className={`${styles.packageCard} ${
                pkg.highlight || idx === 1 ? styles.featuredCard : ""
              }`}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{pkg.title}</h3>
                  {pkg.highlight && <MostPopular>{pkg.highlight}</MostPopular>}
                </div>

                <div className={styles.bestFor}>
                  Best for <span>{pkg.bestFor}</span>
                </div>

                <span className={styles.cardPrice}>
                  Starting at {pkg.startingAt}
                </span>
                <div className={styles.cardMeta}>Approx. {pkg.timeline}</div>

                <p className={styles.cardDesc}>{pkg.description}</p>
              </div>

              <TertiaryButton
                onClick={() => handleLearnMore(PackageInfo.indexOf(pkg))}
              >
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
              <span className={styles.tabTitle}>{p.title}</span>
              <span className={styles.tabType}>
                {p.type === "design" ? "Design" : "Website"}
              </span>
            </button>
          ))}
        </div>

        <Card className={styles.detailCard}>
          <div className={styles.detailTop}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <div className={styles.bestFor}>
                  Best for <span>{pkg.bestFor}</span>
                </div>
              </div>

              {pkg.highlight && <MostPopular>{pkg.highlight}</MostPopular>}
            </div>

            <div className={styles.detailMetaRow}>
              <span className={styles.cardPrice}>
                Starting at {pkg.startingAt}
              </span>
              <span className={styles.detailDivider}>•</span>
              <span className={styles.cardMeta}>Approx. {pkg.timeline}</span>
            </div>

            <p className={styles.cardDesc}>{pkg.description}</p>
          </div>

          <div className={styles.detailBody}>
            <h4 className={styles.includesTitle}>What’s included</h4>
            <ul className={styles.featuresList}>
              {pkg.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.detailActions}>
            <TertiaryButton onClick={handleHideInfo}>
              Hide details
            </TertiaryButton>
          </div>
        </Card>
      </div>
    </section>
  );
}
