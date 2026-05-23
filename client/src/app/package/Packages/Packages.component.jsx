"use client";

import { useRouter } from "next/navigation";
import { PackageInfo } from "./packageList";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import Card from "@/app/Components/Card/Card.component";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import styles from "./Packages.module.css";
import MostPopular from "@/app/Components/MostPopular/MostPopular.component";

export default function Packages() {
  const router = useRouter();
  const handleSeeWhatsIncluded = (pkg) => {
    const slug = pkg.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/package/${slug}?type=web`);
  };
  return (
    <section className={styles.packagesSection} id="packages">
      <span className="eyebrowHeader">Packages</span>
      <h2 className="heading">Project Packages</h2>
      <p className="meta">
        Transparent pricing, clear deliverables, and a process tailored to your
        needs.
      </p>
      <div className={`${styles.cardGrid} `}>
        {PackageInfo?.map((pkg, idx) => {
          const isFeatured = pkg.highlight || idx === 1;
          return (
            <Card
              key={pkg.title + pkg.type}
              bare={true}
              className={
                styles.packageCard +
                (isFeatured
                  ? " " + styles.featuredCard
                  : " " + styles.nonFeaturedCard)
              }
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
  );
}
