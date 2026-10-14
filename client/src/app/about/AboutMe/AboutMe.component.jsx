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
  {/* INTRODUCTION */}
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

  {/* DESIGN + DEVELOPMENT */}
  <div className={styles.aboutVisual}>
    {/* Curved connection behind the cards */}
    <svg
      className={styles.connectionSvg}
      viewBox="0 0 500 540"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 70 65 C 10 155, 10 240, 100 285 S 200 405, 80 495"
        className={styles.connectionPath}
      />

      <path
        d="M 105 40 C 35 165, 65 260, 155 310"
        className={styles.connectionAccent}
      />
    </svg>

    <span
      className={`${styles.connectionNode} ${styles.nodeOne}`}
      aria-hidden="true"
    />
    <span
      className={`${styles.connectionNode} ${styles.nodeTwo}`}
      aria-hidden="true"
    />

    <div className={styles.aboutCards}>
      <div className={styles.aboutCard}>
        <div className={styles.cardTop}>
          <span className={styles.cardNumber}>01</span>
          <span className={styles.cardPixel} aria-hidden="true" />
        </div>

        <div className={styles.cardContent}>
          <h3>Design</h3>

          <p>
            I think through layout, hierarchy, and user flow first,
            making sure everything feels intuitive before a single
            line of code is written.
          </p>
        </div>
      </div>

      <div className={styles.aboutCard}>
        <div className={styles.cardTop}>
          <span className={styles.cardNumber}>02</span>
          <span className={styles.cardPixel} aria-hidden="true" />
        </div>

        <div className={styles.cardContent}>
          <h3>Development</h3>

          <p>
            I build responsive, maintainable applications with
            performance and structure in mind, so what gets launched
            works in the real world.
          </p>
        </div>
      </div>
    </div>

    <span className={styles.visualPixel} aria-hidden="true" />
  </div>
</section>

  );
};

export default AboutMe;
