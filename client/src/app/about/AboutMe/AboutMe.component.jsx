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
        <div className={styles.sectionMarker} aria-hidden="true">
          <span className={styles.markerLine} />
          <span className={styles.markerPixel} />
        </div>

        <p className="eyebrowHeader">About Me</p>

        <h2 className="header">A bit about me</h2>

        <p className={styles.lead}>
          As a freelance web designer and developer in Canada, I create custom
          websites and web applications that balance thoughtful design with
          reliable development. My work spans website design, UX/UI, responsive
          development and full-stack applications, with a focus on making
          digital experiences intuitive for the people using them.
        </p>

        <p className={styles.supporting}>
          I approach each project by looking at both the business goal and the
          user experience behind it. That might mean simplifying an existing
          website, designing a clearer interface, improving performance, or
          building a custom application from the ground up. I work with
          businesses across Canada to create digital experiences that are
          polished, practical and built to grow.
        </p>

        <div className={styles.aboutMeBadges}>
          {items.map((item, idx) => (
            <PillButton key={idx}>{item}</PillButton>
          ))}
        </div>
      </div>

      <div className={styles.aboutCards}>
        <div className={styles.aboutCard}>
          <div className={styles.cardTop}>
            <span className={styles.cardNumber}>01</span>
            <span className={styles.cardPixel} aria-hidden="true" />
          </div>

          <div className={styles.cardContent}>
            <h4>Design</h4>

            <p>
              I think through layout, hierarchy, and user flow first — making
              sure everything feels intuitive before a single line of code is
              written.
            </p>
          </div>
        </div>

        <div className={styles.aboutCard}>
          <div className={styles.cardTop}>
            <span className={styles.cardNumber}>02</span>
            <span className={styles.cardPixel} aria-hidden="true" />
          </div>

          <div className={styles.cardContent}>
            <h4>Development</h4>

            <p>
              I build responsive, maintainable applications with performance and
              structure in mind — so what gets launched works in the real world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
