import Link from "next/link";
import styles from "./Packages.module.css";
import { FaCode, FaPalette, FaSyncAlt, FaPlus, FaSearch } from "react-icons/fa";

const packageGroups = [
  {
    icon: FaCode,
    eyebrow: "Web Projects",
    title: "Project Packages",
    description:
      "Custom websites and platforms for businesses that need a polished, scalable online presence.",
    meta: "Website Essentials · Professional Website · Custom Platform",
    href: "/package?type=web",
  },
  {
    icon: FaPalette,
    eyebrow: "UI/UX Design",
    title: "Design Packages",
    description:
      "Interface design, mockups, design systems, and visual direction for websites and digital products.",
    meta: "Design Essentials · Design Foundation · Design Signature",
    href: "/package?type=design",
  },
  {
    icon: FaSyncAlt,
    eyebrow: "Social Media & Marketing",
    title: "Marketing Packages",
    description:
      "Social media management, content creation, and marketing support to grow your online presence.",
    meta: "Social Media Essentials · Marketing Strategy · Content Creation",
    href: "/package?type=marketing",
  },
  {
    icon: FaSearch,
    eyebrow: "Search Optimization",
    title: "SEO Packages",
    description:
      "Technical SEO, content strategy, audits, and performance optimizations to help your site rank and convert.",
    meta: "Technical SEO · Content Strategy · Site Audits",
    href: "/package?type=seo",
  },
  {
    icon: FaSyncAlt,
    eyebrow: "Ongoing Support",
    title: "Retainer Packages",
    description:
      "Monthly support for updates, improvements, optimization, and continued design or development help.",
    meta: "Mini · Boost · Momentum",
    href: "/package?type=retainer",
  },
  {
    icon: FaPlus,
    eyebrow: "Flexible Extras",
    title: "Extras & Add-Ons",
    description:
      "Add focused support like SEO, audits, animations, booking systems, content updates, or integrations.",
    meta: "Audits · SEO · Integrations · Maintenance",
    href: "/package?type=extras",
  },
];

export default function ExplorePackages() {
  return (
<section className={styles.section}>
  <div className={styles.sectionInner}>
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.sectionMarker} aria-hidden="true">
          <span className={styles.markerLine} />
          <span className={styles.markerPixel} />
        </div>

        <p className={styles.eyebrow}>Services & Packages</p>

        <h2>Choose the right starting point</h2>
      </div>

      <div className={styles.headerDescription}>
        <p>
          Explore web design and development services based on the support you
          need, from custom websites and UI/UX design to ongoing retainers and
          add-ons.
        </p>

        <div className={styles.headerPixels} aria-hidden="true">
          <span className={styles.pixelOne} />
          <span className={styles.pixelTwo} />
          <span className={styles.pixelThree} />
        </div>
      </div>
    </div>

    <div className={styles.grid}>
      {packageGroups.map((item) => {
        const Icon = item.icon;

        return (
          <Link href={item.href} className={styles.card} key={item.title}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon />
              </div>

              <span className={styles.cardArrow} aria-hidden="true">
                ↗
              </span>
            </div>

            <div className={styles.cardContent}>
              <span className={styles.cardEyebrow}>{item.eyebrow}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>

            <small>{item.meta}</small>

            <span className={styles.cardAccent} aria-hidden="true" />
          </Link>
        );
      })}
    </div>

    <div className={styles.ctaRow}>
      <Link href="/package" className={styles.primaryLink}>
        <span>View all packages</span>
        <span className={styles.ctaArrow} aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  </div>
</section>
  );
}
