import React from "react";
import Link from "next/link";
import styles from "./CSTopMenu.module.css";

const CSTopMenu = ({ items = [], activeKey }) => {
  return (
    <nav className={styles.container} aria-label="Case study pages">
      <ul className={styles.list}>
        {items.map((it) => (
          <li
            key={it.key}
            className={
              it.key === activeKey ? `${styles.item} ${styles.active}` : styles.item
            }
          >
            {it.href ? (
              <Link href={it.href} className={styles.link}>
                <strong className={styles.label}>{it.label}</strong>
                <span className={styles.desc}>{it.description}</span>
              </Link>
            ) : (
              <div className={styles.link}>
                <strong className={styles.label}>{it.label}</strong>
                <span className={styles.desc}>{it.description}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CSTopMenu;
