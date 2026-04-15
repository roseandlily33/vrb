"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ProcessCircuit.module.css";

export default function ProcessCircuit({ activeStep = 1, steps = [], onStepClick }) {
    const wrapperRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = wrapperRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    // Node positions and labels
    const nodeData = [
        { cx: 160, cy: 90 },
        { cx: 470, cy: 135 },
        { cx: 820, cy: 70 },
        { cx: 1070, cy: 70 },
    ];

    return (
        <div
            ref={wrapperRef}
            className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}
            aria-hidden="false"
        >
            <svg
                className={styles.svg}
                viewBox="0 0 1200 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className={styles.path}
                    d="M40 90 H430
             C450 90, 460 90, 470 105
             C480 120, 490 135, 510 135
             H680
             C710 135, 730 135, 750 110
             C770 85, 790 70, 820 70
             H1160"
                />

                {nodeData.map((node, idx) => (
                    <g
                        key={idx}
                        className={`${styles.node} ${styles[`node${idx + 1}`]} ${activeStep === idx + 1 ? styles.active : ""}`}
                        style={{ cursor: onStepClick ? "pointer" : "default" }}
                        onClick={() => onStepClick && onStepClick(idx)}
                    >
                        <circle className={styles.outerCircle} cx={node.cx} cy={node.cy} r="26" />
                        <circle className={styles.innerCircle} cx={node.cx} cy={node.cy} r="14" />
                        {steps[idx] && (
                            <text
                                x={node.cx}
                                y={node.cy + 48}
                                textAnchor="middle"
                                fontSize="1.08rem"
                                fontWeight="600"
                                fill="#2676c7"
                                style={{ pointerEvents: "none", userSelect: "none" }}
                            >
                                {steps[idx].label}
                            </text>
                        )}
                    </g>
                ))}
            </svg>
        </div>
    );
}