import styles from "./AbouteMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.introSection}>
      <div className={styles.introInner}>
        <p className="eyebrowHeader">Design meets development</p>
        <h2>
          I build <span className={styles.shimmeringText}>web experiences</span> that feel clear, fast, and easy to use.
        </h2>
        <p className={styles.introText}>
          With a background in both design and development, I focus on creating
          websites and applications that look polished, work reliably, and
          support real user goals.
        </p>

        <ul className={styles.introList}>
          <li>Fast, performance-focused builds</li>
          <li>Clean, scalable development</li>
          <li>Thoughtful UX/UI decisions</li>
        </ul>
      </div>
      <div className={styles.pixelAccent} aria-hidden="true"></div>
    </section>
  );
}
