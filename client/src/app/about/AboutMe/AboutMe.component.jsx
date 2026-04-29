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
      <div className={styles.aboutIntro}>
        <p className="eyebrowHeader">About Me</p>
        <h2 className="header">A bit about me</h2>

        <p className={styles.lead}>
          I design and build websites that feel clear, polished, and easy to use
          — not just something that looks good in a screenshot.
        </p>

        <p className={styles.supporting}>
          I care about the small details — spacing, responsiveness, performance,
          and how everything comes together to create a smooth experience from
          start to finish.
        </p>
        <div className={styles.aboutMeBadges}>
          {items.map((item, idx) => (
            <PillButton key={idx}>{item}</PillButton>
          ))}
        </div>
      </div>

      <div className={styles.aboutCards}>
        <div className={styles.aboutCard}>
          <h4>Design</h4>
          <p>
            I think through layout, hierarchy, and user flow first — making sure
            everything feels intuitive before a single line of code is written.
          </p>
        </div>

        <div className={styles.aboutCard}>
          <h4>Development</h4>
          <p>
            I build responsive, maintainable applications with performance and
            structure in mind — so what gets launched works in the real world.
          </p>
        </div>
      </div>

      {/* 👇 moved here */}
    </section>
  );
};

export default AboutMe;
