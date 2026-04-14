"use client";
import designPackages from './designPackage';
import styles from '../Packages/Packages.module.css';
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
            <section className={styles.packagesSection} id="design">
                <h2 className={styles.heading}>Design Packages</h2>
                <p className={styles.meta}>Only need design? These packages are for you.</p>
                <div className={`${styles.cardGrid} ${animating ? styles.fadeOut : styles.fadeIn}`}>
                    {designPackages.map((pkg, idx) => (
                        <div
                            key={pkg.title}
                            className={
                                styles.packageCard +
                                (pkg.highlight || idx === 1 ? ' ' + styles.featuredCard : '')
                            }
                        >
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                                <span className={styles.cardPrice}>Starting at {pkg.startingAt}</span>
                            </div>
                            <div className={styles.bestFor}>Best for <span>{pkg.bestFor}</span></div>
                            <div className={styles.cardMeta}>{pkg.timeline}</div>
                            <p className={styles.cardDesc}>{pkg.description}</p>
                            <button
                                className={styles.hideBtn}
                                style={{ marginTop: '1.2rem', background: 'var(--blue-100)', color: 'var(--blue-700)', fontWeight: 700, fontSize: '1.08rem', border: 'none', borderRadius: '1.2em', padding: '0.7em 1.7em', cursor: 'pointer', boxShadow: '0 1px 4px 0 rgba(38, 155, 230, 0.07)' }}
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
        <section className={styles.packagesSection}>
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
                        <h3 className={styles.cardTitle}>{pkg.title}</h3>
                        <span className={styles.cardPrice}>{pkg.startingAt}</span>
                    </div>
                    <div className={styles.cardMeta}>{pkg.timeline}</div>
                    <p className={styles.cardDesc}>{pkg.description}</p>
                    <ul className={styles.featuresList}>
                        {pkg.features.map((feature) => (
                            <li key={feature} className={styles.featureItem}>
                                <FaCheckCircle style={{ color: 'var(--blue-400)', marginRight: '0.5em', fontSize: '1em', verticalAlign: '-2px' }} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button className={styles.hideBtn} onClick={handleHideInfo}>
                        Hide Info
                    </button>
                </div>
            </div>
        </section>
    );
}
