"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Card from "../../Components/Card/Card.component";
import TertiaryButton from "../../Components/TertiaryButton/TertiaryButton.component";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import styles from "../Packages/Packages.module.css";
import designPackages from "./designPackage";
import MostPopular from "@/app/Components/MostPopular/MostPopular.component";

export default function DesignPackage() {
  const router = useRouter();
  const slugify = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/[\s-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  const handleSeeWhatsIncluded = (pkg) => {
    const slug = slugify(pkg.title);
    router.push(`/package/${slug}?type=design`);
  };
  return (
    <>
      <div className={styles.blueGradientDivider} />
      <section className={styles.packagesSection}>
        <span className="eyebrowHeader">Design-Only Options</span>
        <h2 className="heading" style={{ color: "var(--blue-800)" }}>
          Only need design?
        </h2>
        <p className="meta">
          Not ready for development yet? Start with a strong UX and design
          foundation.
        </p>
        <div className={styles.designGrid}>
          {designPackages.map((pkg) => {
            return (
              <Card
                bare={true}
                key={pkg.title}
                className={`${styles.packageCard} ${pkg.highlight ? styles.featuredCard : ""}`}
              >
                {pkg.highlight && <MostPopular>Most Popular</MostPopular>}
                <div className={styles.cardTop}>
                  <div className={styles.cardHeader}>
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
                  <ul className={styles.featuresList}>
                    {pkg.features.slice(0, 3).map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cardBottomButtonWrapper}>
                  <TertiaryButton onClick={() => handleSeeWhatsIncluded(pkg)}>
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
    </>
  );
}
