import React from "react";
import Link from "next/link";
import styles from "./CSTopMenu.module.css";

const CSTopMenu = ({ items = [], activeKey }) => {
  return (
    <nav className={styles.container} aria-label="Case study pages">
      <div className={styles.navHeader}>
        <div className={styles.navHeading}>
          <span className={styles.headerPixel} aria-hidden="true" />

          <span className={styles.navEyebrow}>Explore the Case Study</span>
        </div>

        <span className={styles.navCount}>
          {String(items.length).padStart(2, "0")} Pages
        </span>
      </div>

      <ul className={styles.list}>
        {items.map((it, index) => {
          const isActive = it.key === activeKey;

          const content = (
            <>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.content}>
                <strong className={styles.label}>{it.label}</strong>

                {it.description && (
                  <span className={styles.desc}>{it.description}</span>
                )}
              </span>

              <span className={styles.pixel} aria-hidden="true" />
            </>
          );

          return (
            <li
              key={it.key}
              className={`${styles.item} ${isActive ? styles.active : ""}`}
            >
              {it.href ? (
                <Link
                  href={it.href}
                  className={styles.link}
                  aria-current={isActive ? "page" : undefined}
                >
                  {content}
                </Link>
              ) : (
                <div
                  className={`${styles.link} ${styles.staticItem}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {content}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CSTopMenu;
