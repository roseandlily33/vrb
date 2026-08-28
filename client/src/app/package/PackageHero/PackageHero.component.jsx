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
  <section className={styles.packagesHero}>
  <div style={{ padding: "0 var(--section-lg)" }}>
    <Breadcrumbs
      current={type + (type !== "seo" ? " Packages" : "")}
      first="Services"
      firstLink="/services"
    />
  </div>

  <div className={styles.packagesHeroContent}>
    <span className={styles.eyebrow}>{eyebrow}</span>

    <h1>{title}</h1>

    <p>{description}</p>
  </div>
</section>
  );
}
