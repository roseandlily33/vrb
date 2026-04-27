import React from "react";
import styles from "./Retainers.module.css";
import { Retainer } from "./retainerList";
import MostPopular from "@/app/Components/MostPopular/MostPopular.component";

export default function Retainers() {
  return (
    <section className={styles.retainersSection} id="retainers">
      <span className="eyebrowHeader">Support</span>
      <h2 className="heading">Retainer Packages</h2>
      <p className="meta">
        Ongoing support for updates, improvements, and continued growth after
        launch.
      </p>

      <div className={styles.retainersGrid}>
        {Retainer.map((item, idx) => (
          <div
            key={item.name}
            className={`${styles.retainerCard} ${idx === 1 ? styles.featuredCard : ""}`}
          >
            <div className={styles.cardTop}>
              <div className={styles.headerRow}>
                <div>
                  <span className={styles.retainerName}>{item.name}</span>
                  <span className={styles.retainerBase}>{item.base}</span>
                </div>
                {idx === 1 && <MostPopular />}
              </div>

              <div className={styles.price}>{item.price}</div>
              <p className={styles.bestFor}>
                Best for <span>{item.bestFor}</span>
              </p>
              <p className={styles.description}>{item.description}</p>
            </div>

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
