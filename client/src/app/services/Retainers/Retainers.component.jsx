
import React from "react";
import styles from "./Retainers.module.css";
import { Retainer } from "./retainerList";

export default function Retainers() {
    return (
        <section className={styles.retainersSection}>
            <h2 className={styles.heading}>Retainer Packages</h2>
            <div className={styles.retainersGrid}>
                {Retainer.map((item) => (
                    <div key={item.name} className={styles.retainerCard}>
                        <div className={styles.headerRow}>
                            <span className={styles.retainerName}>{item.name}</span>
                            <span className={styles.retainerBase}>{item.base}</span>
                        </div>
                        <div className={styles.price}>{item.price}</div>
                        <p className={styles.description}>{item.description}</p>
                        <ul className={styles.features}>
                            {item.features.map((feature, idx) => (
                                <li key={idx} className={styles.featureItem}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
