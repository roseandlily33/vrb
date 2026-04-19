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
        <p className={styles.bottomText}>
          {features.map((feature, idx) => (
            <span key={feature} style={{ display: "block", marginBottom: 4 }}>
              <span style={{ color: "var(--blue-600)", fontWeight: 700, marginRight: 8 }}>✓</span>
              {feature}
            </span>
          ))}
        </p>
        <img src="/squares.png" alt="Square" className={styles.logo} />
      </div>
    </section>
  );
}
