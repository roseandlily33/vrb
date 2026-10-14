import Link from "next/link";
import styles from "./Links.module.css";
import { buildPackageTypeHref } from "../../package/packageRouting";

const sections = [
  { label: "Packages", path: buildPackageTypeHref("web") },
  { label: "Design", path: buildPackageTypeHref("design") },
  { label: "Retainers", path: buildPackageTypeHref("retainer") },
  { label: "Extras", path: buildPackageTypeHref("extras") },
  { label: "SEO", path: buildPackageTypeHref("seo") },
  { label: "Marketing", path: buildPackageTypeHref("marketing") },
];

export default function Links({ isPinned }) {
  return (
    <nav
      className={`${styles.linksBar} ${isPinned ? styles.linksBarPinned : ""}`}
      aria-label="Services navigation"
    >
      <div className={styles.inner}>
        {sections.map((section) => (
          <Link
            key={section.path}
            href={section.path}
            className={styles.linkBtn}
          >
            <span className={styles.linkLabel}>{section.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
