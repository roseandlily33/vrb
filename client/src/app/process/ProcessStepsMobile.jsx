import styles from "./page.module.css";

export default function ProcessStepsMobile({ steps }) {
    return (
        <div className={styles.mobileStepsWrapper}>
            {steps.map((step, idx) => (
                <div
                    className={
                        styles.mobileStep +
                        " " +
                        (idx % 2 === 0 ? styles.mobileStepLeft : styles.mobileStepRight)
                    }
                    key={step.label}
                >
                    <span className={styles.number}>{String(idx + 1).padStart(2, "0")}</span>
                    <div className={styles.descriptionText}>
                        <h3 style={{ color: "var(--blue-700)", fontWeight: 700 }}>{step.label}</h3>
                        <h5>{step.microHeading}</h5>
                        <p style={{ color: "var(--grey-500)", fontSize: "1.04rem", lineHeight: 1.5 }}>
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
