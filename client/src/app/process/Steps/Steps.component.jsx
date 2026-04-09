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
      <ul className={styles.stepsList}>
        {steps.map((step) => (
          <li key={step.title} className={styles.stepItem}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
