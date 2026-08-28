import React from "react";
import Link from "next/link";
import styles from "./CSTopMenu.module.css";

const CSTopMenu = ({ items = [], activeKey }) => {
  return (
<nav className={styles.container} aria-label="Case study pages">
  <ul className={styles.list}>
    {items.map((it, index) => {
      const isActive = it.key === activeKey;

      return (
        <li
          key={it.key}
          className={`${styles.item} ${
            isActive ? styles.active : ""
          }`}
        >
          {it.href ? (
            <Link
              href={it.href}
              className={styles.link}
              aria-current={isActive ? "page" : undefined}
            >
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.content}>
                <strong className={styles.label}>
                  {it.label}
                </strong>

                <span className={styles.desc}>
                  {it.description}
                </span>
              </span>

              <span
                className={styles.pixel}
                aria-hidden="true"
              />
            </Link>
          ) : (
            <div className={styles.link}>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.content}>
                <strong className={styles.label}>
                  {it.label}
                </strong>

                <span className={styles.desc}>
                  {it.description}
                </span>
              </span>

              <span
                className={styles.pixel}
                aria-hidden="true"
              />
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
