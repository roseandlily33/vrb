
import styles from "./ExperienceSnapshot.module.css";

const ExperienceSnapshot = () => {
  const experience = [
    "4+ years of hands-on development experience",
    "Experience building full-stack applications from scratch",
    "Worked on platforms, marketing sites, and UX-focused redesigns",
  ];
  return (
    <section className={styles.experienceSection}>
      <h2>Experience Snapshot</h2>
      <ul className={styles.experienceList}>
        {experience.map((item, index) => (
          <li key={index} className={styles.experienceItem}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSnapshot;
