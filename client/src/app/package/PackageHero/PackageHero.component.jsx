import React from "react";
import styles from "./PackageHero.module.css";
import Breadcrumbs from "../../case-study/[project]/Components/Extras/Breadcrumbs/Breadcrumbs.component";

const contentMap = {
  web: {
    eyebrow: "Web Development Packages",
    title: "Custom Web Development for Scalable Platforms",
    description:
      "Built for businesses that need advanced functionality, tailored workflows, integrations, and scalable platform architecture.",
  },
  seo: {
    eyebrow: "SEO Packages",
    title: "Search Engine Optimization Packages",
    description:
      "Improve your organic visibility with technical SEO, content strategy, and performance optimizations tailored to your goals.",
  },
  design: {
    eyebrow: "Website Design Packages",
    title: "Website Design Packages\nBuilt Around Your Business",
    description:
      "Explore flexible website design packages focused on thoughtful UX, responsive layouts, accessibility, and a polished user experience.",
  },
  retainer: {
    eyebrow: "WEBSITE MAINTENANCE SERVICES",

    title: "Website Maintenance Services That Keep You Moving",

    description:
      "Ongoing website maintenance, support, and optimization to keep your site secure, reliable, and performing at its best.",
  },
  marketing: {
    eyebrow: "SOCIAL MEDIA MANAGEMENT SERVICES",

    title: "Social Media Management Services Built for Growth",

    description:
      "Strategic social media manage services designed to build your online presence, strengthen your brand, and connect with your audience.",
  },
  seo: {
    eyebrow: "SEO Services for Businesses Across Canada",
    title: "Improve your visibility. Strengthen your site. Get found.",
    description:
      " Strategic SEO services focused on improving how your website is found, understood, and experienced across traditional and AI-powered search.",
  },
};

export default function PackageHero({ type = "web" }) {
  const key = type in contentMap ? type : "web";
  const { eyebrow, title, description } = contentMap[key];

  return (
    <section
      className={styles.packagesHero}
      aria-labelledby="packages-hero-title"
    >
      <div className={styles.heroInner}>
        {/* BREADCRUMBS */}
        <div className={styles.breadcrumbWrapper}>
          <Breadcrumbs
            current={type + (type !== "seo" ? " Packages" : "")}
            first="Services"
            firstLink="/services"
          />
        </div>

        {/* MAIN CONTENT */}
        <div className={styles.packagesHeroContent}>
          <span className={styles.eyebrow}>{eyebrow}</span>

          <h1 id="packages-hero-title">{title}</h1>

          <p>{description}</p>
        </div>

        {/* DECORATIVE PIXELS */}
        <div className={styles.heroPixels} aria-hidden="true">
          <span className={styles.pixelOne} />
          <span className={styles.pixelTwo} />
          <span className={styles.pixelThree} />
          <span className={styles.pixelFour} />
        </div>

        {/* DECORATIVE ORBIT */}
        <div className={styles.heroOrbit} aria-hidden="true">
          <svg
            viewBox="0 0 500 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="250"
              cy="150"
              rx="225"
              ry="65"
              transform="rotate(-25 250 150)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <ellipse
              cx="250"
              cy="150"
              rx="190"
              ry="45"
              transform="rotate(25 250 150)"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 9"
            />
            <circle cx="380" cy="90" r="5" fill="#FFD21F" />
            <circle cx="110" cy="205" r="5" fill="#269BE6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
