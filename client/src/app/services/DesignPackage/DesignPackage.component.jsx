"use client";
import designPackages from './designPackage';
import styles from './DesignPackage.module.css';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default function DesignPackage() {
    const [selectedIdx, setSelectedIdx] = useState(null);
    const [animating, setAnimating] = useState(false);

    // Handle See More (animate to tab view)
    const handleSeeMore = (idx) => {
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
            <section className={styles.designSection} id="design">
                <h2 className={styles.heading}>Design Packages</h2>
                <div className={styles.subtext} style={{ marginTop: '2.2rem' }}>Only need design? These packages are for you.</div>
                <div className={`${styles.packagesGrid} ${animating ? styles.fadeOut : styles.fadeIn}`}>
                    {designPackages.map((pkg, idx) => (
                        <div
                            key={pkg.title}
                            className={
                                styles.packageBox +
                                (pkg.highlight ? ' ' + styles.featuredCard : '')
                            }
                            style={{ height: '100%', minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
                        >
                            <div className={styles.headerRow}>
                                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                            </div>
                            <div className={styles.bestFor}>Best for <span>{pkg.bestFor}</span></div>
                            <span className={styles.price}>Starting at {pkg.startingAt}</span>
                            <div className={styles.timeline}>{pkg.timeline}</div>
                            <p className={styles.desc}>{pkg.description}</p>
                            {/* Hide checkmarks in grid view */}
                            <ul className={styles.featuresList} style={{ display: 'none' }}>
                                {pkg.features.map((feature) => (
                                    <li key={feature} className={styles.featureItem}>
                                        <FaCheckCircle className={styles.icon} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={styles.seeMoreBtn}
                                onClick={() => handleSeeMore(idx)}
                            >
                                See More{' '}
                                <FaArrowRight style={{ marginLeft: '0.5em', fontSize: '1em', verticalAlign: '-2px' }} />
                            </button>
                            {pkg.highlight && (
                                <span className={styles.popularBadge}>{pkg.highlight}</span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // Tabbed detail view
    const pkg = designPackages[selectedIdx];
    return (
        <section className={styles.designSection}>
            <div className={`${styles.tabsWrapper} ${animating ? styles.fadeOut : styles.fadeIn}`}>
                <div className={styles.tabs}>
                    {designPackages.map((p, idx) => (
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
                <div className={styles.detailCard}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.packageTitle}>{pkg.title}</h3>
                        <span className={styles.price}>{pkg.startingAt}</span>
                    </div>
                    <div className={styles.timeline}>{pkg.timeline}</div>
                    <p className={styles.desc}>{pkg.description}</p>
                    <ul className={styles.featuresList}>
                        {pkg.features.map((feature) => (
                            <li key={feature} className={styles.featureItem}>
                                <FaCheckCircle className={styles.icon} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className={styles.seeMoreBtn} onClick={handleHideInfo}>
                        Hide Info
                    </button>
                </div>
            </div>
        </section>
    );
}
