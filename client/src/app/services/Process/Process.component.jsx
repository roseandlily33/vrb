"use client";
import React, { useRef, useEffect, useState } from 'react';
import styles from './Process.module.css';
import { processList } from './processInfo';

export default function Process() {
    const stepRefs = useRef([]);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        setVisible(Array(processList.length).fill(false));
    }, []);

    useEffect(() => {
        if (!stepRefs.current.length) return;
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number(entry.target.getAttribute('data-idx'));
                        setVisible((prev) => {
                            if (prev[idx]) return prev;
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );
        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.processSection}>
            <h2 className={styles.heading}>My Process</h2>
            <div className={styles.stepsWrapper}>
                {processList.map((step, idx) => (
                    <div
                        key={step.title}
                        ref={el => stepRefs.current[idx] = el}
                        data-idx={idx}
                        className={
                            `${styles.stepCard} ${styles.animated} ${visible[idx] ? styles.visible : ''}`
                        }
                        style={{
                            animationDelay: `${0.15 + idx * 0.15}s`,
                        }}
                    >
                        <div className={styles.stepLabel}>{`${step.step}`}</div>
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
