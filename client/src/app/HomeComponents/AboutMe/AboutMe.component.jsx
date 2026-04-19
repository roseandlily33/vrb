import styles from "./AbouteMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.topText}>
        {/* <h1 className={styles.introLine}>
          I’m a <span className={styles.blue}>full-stack developer </span>
          with a strong focus on UX/UI design,
          <br />
          creating clean, functional, and user-friendly digital experiences.
        </h1> */}
        <h1 className={styles.introLine}>
          I build <span className={styles.blue}>web experiences</span> that are fast, intuitive, and designed with
          real users in mind.
        </h1>
      </div>
      {/* <div className={styles.divider} /> */}
      <div className={styles.bottomAboutMe}>
        <p className={styles.bottomText}>
          With a background in both design and development, I focus on building
          efficient, scalable, and visually polished solutions.
        </p>
        <img src="/squares.png" alt="Square" className={styles.logo} />
      </div>
    </section>
  );
}
