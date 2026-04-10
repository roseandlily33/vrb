import { useState } from "react";
import styles from "../page.module.css";
import ProcessCircuit from "./Extras/ProcessBar/ProcessCircuit";

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
            <h2>Process</h2>
            <ProcessCircuit
                activeStep={activeStep + 1}
                steps={STEPS}
                onStepClick={setActiveStep}
            />
            <div style={{ marginTop: "2.2rem" }}>
                {stepContent}
            </div>
        </section>
    );
};

export default CSProcess;
