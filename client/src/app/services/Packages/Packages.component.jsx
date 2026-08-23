import Link from "next/link";
import styles from "./Packages.module.css";
import { FaCode, FaPalette, FaSyncAlt, FaPlus } from "react-icons/fa";

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
      <div className={styles.header}>
        {/* <span className={styles.eyebrow}>Packages</span> */}
        <h2>Choose the right starting point</h2>
        <p>
          Explore web design and development services based on the support you
          need, from custom websites and UI/UX design to ongoing retainers and
          add-ons.
        </p>
      </div>

      <div className={styles.grid}>
        {packageGroups.map((item) => {
          const Icon = item.icon;

          return (
            <Link href={item.href} className={styles.card} key={item.title}>
              <div className={styles.iconWrap}>
                <Icon />
              </div>

              <div>
                <span className={styles.cardEyebrow}>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <small>{item.meta}</small>
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.ctaRow}>
        <Link href="/package" className={styles.primaryLink}>
          View all packages
        </Link>
      </div>
    </section>
  );
}
