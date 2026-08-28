import Link from "next/link";
import styles from "./Links.module.css";

const sections = [
  { label: "Packages", path: "/package?type=web" },
  { label: "Design", path: "/package?type=design" },
  { label: "Retainers", path: "/package?type=retainer" },
  { label: "Extras", path: "/package?type=extras" },
  { label: "SEO", path: "/package?type=seo" },
  { label: "Marketing", path: "/package?type=marketing" },
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