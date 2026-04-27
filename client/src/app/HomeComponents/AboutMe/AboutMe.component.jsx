import styles from "./AbouteMe.module.css";

export default function AboutMe() {
  const features = [
    "Fast, performance-focused builds",
    "Clean, scalable architecture",
    "Thoughtful UX/UI decisions",
  ];
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.topText}>
        <h1 className={styles.introLine}>
          I build <span className={styles.blue}>web experiences</span> that are fast, intuitive, and designed with
          real users in mind.
        </h1>
      </div>
      <div className={styles.bottomAboutMe}>
        <div className={styles.bottomText}>
          {features.map((feature, idx) => (
            <span key={feature} className={styles.featureRow}>
              <span className={styles.iconContainer}>✓</span>
              {feature}
            </span>
          ))}
        </div>
        <img src="/squares.png" alt="Square" className={styles.logo} />
      </div>
    </section>
  );
}
