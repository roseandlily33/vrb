"use client";
import Link from 'next/link';
import styles from './breadcrumbs.module.css';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {items.map((it, idx) => (
        <span key={idx} className={styles.item}>
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span>{it.label}</span>}
          {idx < items.length - 1 && <span className={styles.sep}>/</span>}
        </span>
      ))}
    </nav>
  );
}
