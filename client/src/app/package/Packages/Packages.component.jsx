"use client";
import { useRouter } from "next/navigation";
import { PackageInfo } from "./packageList";
import designPackages from "../DesignPackage/designPackage";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import Card from "@/app/Components/Card/Card.component";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import styles from "./Packages.module.css";
// import Retainers from "../../services/Retainers/Retainers.component";
// import Extras from "../../services/Extras/Extras.component";
import { Retainer } from "../../services/Retainers/retainerList.jsx";
import { extrasList } from "../../services/Extras/extrasList.jsx";
import { socialMediaList } from "../../services/SocialMedia/socialMedia.jsx";
import MostPopular from "@/app/Components/MostPopular/MostPopular.component";
import { slugify } from "../../../lib/slugify";

export default function Packages({ type = "web" }) {
  const router = useRouter();
  const list =
    type === "design"
      ? designPackages
      : type === "marketing"
        ? socialMediaList
        : type === "retainer"
          ? Retainer
          : type === "extras"
            ? extrasList
            : PackageInfo;

  const handleSeeWhatsIncluded = (pkg) => {
    const slug = slugify(pkg.title || pkg.name || "");
    router.push(`/package/${slug}?type=${type}`);
  };

  const heading =
    type === "design"
      ? "Design Packages"
      : type === "marketing"
        ? "Marketing Packages"
        : type === "retainer"
          ? "Retainer Packages"
          : type === "extras"
            ? "Extras & Add-Ons"
            : "Project Packages";

  return (
    <section className={styles.packagesSection} id="packages">
      <span className="eyebrowHeader">Packages</span>
      <h2 className="heading">{heading}</h2>
      <p className="meta">
        Transparent pricing, clear deliverables, and a process tailored to your
        needs.
      </p>
      <div className={`${styles.cardGrid} `}>
        {list?.map((pkg, idx) => {
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
