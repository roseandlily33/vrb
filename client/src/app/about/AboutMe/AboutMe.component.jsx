import styles from "./AboutMe.module.css";
import PillButton from "@/app/Components/PillButton/PillButton.component";

const AboutMe = () => {
  const items = [
    "4+ Years Experience",
    "Full Stack Development",
    "Performance Optimization",
    "User-Centered Design",
  ];
  return (
    <section className={styles.aboutMeSection}>
      <p className="eyebrowHeader">About Me</p>
      <h2>A bit about me</h2>
      <div className={styles.aboutMeBadges}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.aboutMeBadge}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p className={styles.paragraph}>
        I build web applications that are fast, scalable, and designed with real
        users in mind. I enjoy taking complex ideas and turning them into clean,
        intuitive solutions that are easy to use and built to last.
      </p>
      <p className={styles.paragraph}>
        With experience across both design and development, I approach every
        project with a focus on performance, usability, and long-term
        maintainability — making sure what gets built not only looks good, but
        works reliably in the real world.
      </p>
    </section>
  );
};

export default AboutMe;
