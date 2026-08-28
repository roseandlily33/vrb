import styles from "./Steps.module.css";

const steps = [
  {
    title: "Discovery",
    description:
      "We start by understanding your goals, audience, and requirements. This phase includes research, project planning, and outlining the scope to ensure we’re aligned from the beginning.",
  },
  {
    title: "Design",
    description:
      "We create wireframes and high-fidelity mockups, focusing on user experience, branding, and visual appeal. You’ll review and provide feedback to ensure the design matches your vision.",
  },
  {
    title: "Development",
    description:
      "We turn the approved designs into a fully functional, responsive website or app. This includes coding, integrating features, and thorough testing for quality and performance.",
  },
  {
    title: "Launch",
    description:
      "We deploy your project, connect your domain, and ensure everything is live and secure. Post-launch, we provide support and training so you’re set up for success.",
  },
];

export default function Steps() {
  return (
    <section className={styles.stepsSection}>
      <div className={styles.stepsInner}>
        <div className={styles.stepsHeader}>
          <div className={styles.sectionMarker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <p className={styles.eyebrow}>The Process</p>

          <h2>
            From first idea
            <br />
            <span>to launch.</span>
          </h2>
        </div>

        <ol className={styles.stepsList}>
          {steps.map((step, idx) => (
            <li key={step.title} className={styles.stepItem}>
              <div className={styles.stepNumberWrap}>
                <span className={styles.stepNumber}>
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span className={styles.stepPixel} aria-hidden="true" />
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>

                <p className={styles.stepDesc}>{step.description}</p>
              </div>

              <div className={styles.stepArrow} aria-hidden="true">
                ↘
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
