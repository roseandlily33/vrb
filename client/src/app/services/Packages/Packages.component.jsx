"use client";
import { useState } from "react";
import { PackageInfo } from "./packageList";
import Card from '@/app/Components/Card/Card.component';
import PrimaryButton from '@/app/Components/PrimaryButton/PrimaryButton.component';
import styles from './Packages.module.css';

export default function Packages() {
    const [selectedIdx, setSelectedIdx] = useState(null);
    // Animation state for fade/slide
    const [animating, setAnimating] = useState(false);

    // Handle Learn More (animate to tab view)
    const handleLearnMore = (idx) => {
        setAnimating(true);
        setTimeout(() => {
            setSelectedIdx(idx);
            setAnimating(false);
        }, 250);
    };

    // Handle Hide Info (animate back to grid)
    const handleHideInfo = () => {
        setAnimating(true);
        setTimeout(() => {
            setSelectedIdx(null);
            setAnimating(false);
        }, 250);
    };

    // Card grid view
    if (selectedIdx === null) {
        return (
            <section className={styles.packagesSection}>
                <h2 className={styles.heading}>Project Packages</h2>
                <p className={styles.meta}>Transparent pricing, clear deliverables, and a process tailored to your needs.</p>
                <div className={`${styles.cardGrid} ${animating ? styles.fadeOut : styles.fadeIn}`}>
                    {PackageInfo.map((pkg, idx) => (
                        <Card key={pkg.title} className={styles.packageCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                                <span className={styles.cardPrice}>{pkg.startingAt}</span>
                            </div>
                            <div className={styles.cardMeta}>{pkg.timeline}</div>
                            <p className={styles.cardDesc}>{pkg.description}</p>
                            <PrimaryButton onClick={() => handleLearnMore(idx)}>
                                Learn More
                            </PrimaryButton>
                        </Card>
                    ))}
                </div>
            </section>
        );
    }

    // Tabbed detail view
    const pkg = PackageInfo[selectedIdx];
    return (
        <section className={styles.packagesSection}>
            <div className={`${styles.tabsWrapper} ${animating ? styles.fadeOut : styles.fadeIn}`}>
                <div className={styles.tabs}>
                    {PackageInfo.map((p, idx) => (
                        <button
                            key={p.title}
                            className={`${styles.tab} ${idx === selectedIdx ? styles.activeTab : ''}`}
                            onClick={() => setSelectedIdx(idx)}
                            disabled={idx === selectedIdx}
                        >
                            {p.title}
                        </button>
                    ))}
                </div>
                <Card className={styles.detailCard}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>{pkg.title}</h3>
                        <span className={styles.cardPrice}>{pkg.startingAt}</span>
                    </div>
                    <div className={styles.cardMeta}>{pkg.timeline}</div>
                    <p className={styles.cardDesc}>{pkg.description}</p>
                    <ul className={styles.featuresList}>
                        {pkg.features.map((feature) => (
                            <li key={feature} className={styles.featureItem}>{feature}</li>
                        ))}
                    </ul>
                    <PrimaryButton onClick={handleHideInfo}>
                        Hide Info
                    </PrimaryButton>
                </Card>
            </div>
        </section>
    );
}