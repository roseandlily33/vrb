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

export default function Links() {

  return (
    <nav
      className={styles.linksBar}
      aria-label="Services navigation"
    >
      <div className={styles.inner}>
        {sections.map((section, idx) => (
          <div key={section.label} className={styles.linkGroup}>
            <Link href={section.path} className={styles.linkBtn}>
              <span className={styles.linkNumber} aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <span className={styles.linkLabel}>{section.label}</span>
            </Link>

            {idx < sections.length - 1 && (
              <span className={styles.separator} aria-hidden="true">
                <span className={styles.separatorLine} />
                <span className={styles.separatorPixel} />
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}