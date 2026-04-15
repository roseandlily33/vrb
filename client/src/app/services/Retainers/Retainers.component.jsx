import React from "react";
import styles from "./Retainers.module.css";
import { Retainer } from "./retainerList";
import MostPopular from "@/app/Components/MostPopular/MostPopular.component";

export default function Retainers() {
  return (
    <section className={styles.retainersSection} id="retainers">
      <h2 className={styles.heading}>Retainer Packages</h2>
      <div className={styles.retainersGrid}>
        {Retainer.map((item, idx) => (
          <div
            key={item.name}
            className={
              styles.retainerCard + (idx === 1 ? " " + styles.featuredCard : "")
            }
          >
            <div className={styles.headerRow}>
              <span className={styles.retainerName}>{item.name}</span>
              <span className={styles.retainerBase}>{item.base}</span>
            </div>
            {idx === 1 && <MostPopular />}
            <div className={styles.price}>{item.price}</div>
            <p className={styles.bestFor}>Best for {item.bestFor}</p>
            <p className={styles.description}>{item.description}</p>
            <ul className={styles.features}>
              {item.features.map((feature, fidx) => (
                <li key={fidx} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
