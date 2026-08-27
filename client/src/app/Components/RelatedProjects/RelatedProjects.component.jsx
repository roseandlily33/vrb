import React from 'react';
import Link from 'next/link';
import styles from './RelatedProjects.module.css';
import { projects } from '../projectList.jsx';

export default function RelatedProjects({ pkg, limit = 4 }) {
  if (!pkg) return null;

  const filtered = projects.filter((p) => Array.isArray(p.pkgs) && p.pkgs.includes(pkg));
  const items = filtered.slice(0, limit);

  if (items.length === 0) return null;

  return (
    <section className={styles.wrap} aria-labelledby="related-projects-title">
      <h3 id="related-projects-title" className={styles.title}>{pkg} Related projects</h3>

      <div className={styles.grid}>
        {items.map((p) => (
          <article key={p.name} className={styles.card}>
            <Link href={p.link} className={styles.cardLink} aria-label={`Open case study: ${p.name}`}>
              <div className={styles.imageWrap}>
                <img src={p.image} alt={p.name} className={styles.image} />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <span className={styles.badge}>{p.badge}</span>
                  <span className={styles.tech}>{p.tech?.slice(0,2).join(' · ')}</span>
                </div>

                <h4 className={styles.name}>{p.name}</h4>
                <p className={styles.desc}>{p.description}</p>
              </div>
            </Link>

            <div className={styles.actions}>
              <Link href={p.link} className={styles.pkgLink} aria-label={`View project: ${p.name}`}>
                View project
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
