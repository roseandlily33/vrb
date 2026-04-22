import { useState } from "react";
import styles from "./CSProcess.module.css";
import ProcessCircuit from "../Extras/ProcessBar/ProcessCircuit";

const STEPS = [
    { key: "discovery", label: "Discovery" },
    { key: "design", label: "Design" },
    { key: "development", label: "Development" },
    { key: "launch", label: "Launch" },
];

const CSProcess = (props) => {
    const [activeStep, setActiveStep] = useState(0);

    // Support both old (content object) and new (individual step props) usage
    let stepContent;
    if (props.content) {
        // Old usage: content is an object with keys
        stepContent = props.content[STEPS[activeStep].key];
    } else {
        // New usage: individual props for each step
        const key = STEPS[activeStep].key;
        stepContent = props[key];
    }

    return (
        <section className={styles.processTabs}>
            <p className="eyebrowHeader">Process</p>
            <h2>How this project came together</h2>
            <div className={styles.hideOnMobile}>
                <ProcessCircuit
                    activeStep={activeStep + 1}
                    steps={STEPS}
                    onStepClick={setActiveStep}
                />
            </div>
            <div className={styles.cardsContainer}>
                {STEPS.map((step, idx) => (
                    <div
                        key={step.key}
                        className={styles.processCard}
                        style={{ opacity: typeof window !== "undefined" && window.innerWidth <= 600 ? 1 : (activeStep === idx ? 1 : 0.6) }}
                    >
                        <div className={styles.cardLabel}>
                            <span className={styles.cardIndex}>{idx + 1}.</span> {step.label}
                        </div>
                        <div className={styles.cardContent}>
                            {props.content ? props.content[step.key] : props[step.key]}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CSProcess;
