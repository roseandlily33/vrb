import { useState } from "react";
import styles from "../page.module.css";
import ProcessCircuit from "./Extras/ProcessBar/ProcessCircuit";

const STEPS = [
    { key: "discovery", label: "Discovery" },
    { key: "design", label: "Design" },
    { key: "development", label: "Development" },
    { key: "launch", label: "Launch" },
];

const CSProcess = ({ content }) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className={styles.processTabs}>
            <h2>Process</h2>
            <ProcessCircuit
                activeStep={activeStep + 1}
                steps={STEPS}
                onStepClick={setActiveStep}
            />
            <div style={{ marginTop: "2.2rem" }}>
                {content && content[STEPS[activeStep].key]}
            </div>
        </section>
    );
};

export default CSProcess;
