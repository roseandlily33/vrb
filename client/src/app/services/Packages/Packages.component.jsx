"use client";
import { useState } from "react";
import { PackageInfo } from "./packageList";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import Card from "@/app/Components/Card/Card.component";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import styles from "./Packages.module.css";
import SelectedPackage from "./SelectedPackage.component";
import MostPopular from "@/app/Components/MostPopular/MostPopular.component";

export default function Packages() {
  const [selectedIdx, setSelectedIdx] = useState(null);
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
          {websitePackages.map((pkg, idx) => {
            const Icon = pkg.icon;
            const isFeatured = pkg.highlight || idx === 1;
            return (
              <Card
                key={pkg.title + pkg.type}
                className={
                  styles.packageCard +
                  (isFeatured
                    ? " " + styles.featuredCard
                    : " " + styles.nonFeaturedCard)
                }
              >
                {pkg.highlight && (
                  <MostPopular
                  >Most Popular</MostPopular>
                )}
                <div className={styles.cardTop}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>{Icon && <Icon />}</span>
                    <div>
                      <h3 className={styles.cardTitle}>{pkg.title}</h3>
                      <div className={styles.bestFor}>{pkg.bestFor}</div>
                    </div>
                  </div>
                  <div className={styles.priceSection}>
                    <div className={styles.priceLabel}>STARTING AT</div>
                    <div className={styles.priceValue}>{pkg.startingAt}</div>
                    <div className={styles.timelineRow}>
                      <FaRegClock className={styles.clockIcon} />
                      <span className={styles.timelineText}>
                        Approx. {pkg.timeline}
                      </span>
                    </div>
                  </div>
                  <p className={styles.cardDesc}>{pkg.description}</p>
                </div>
                <div className={styles.cardBottomButtonWrapper}>
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
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    );
  }

  const pkg = PackageInfo[selectedIdx];
  return (
    <SelectedPackage
      pkg={pkg}
      selectedIdx={selectedIdx}
      setSelectedIdx={setSelectedIdx}
      animating={animating}
      handleHideInfo={handleHideInfo}
    />
  );
}
