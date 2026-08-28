import styles from "./AbouteMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.introSection}>
      <div className={styles.pixelComposition} aria-hidden="true">
        <span className={`${styles.pixel} ${styles.pixel1}`} />
        <span className={`${styles.pixel} ${styles.pixel2}`} />
        <span className={`${styles.pixel} ${styles.pixel3}`} />
        <span className={`${styles.pixel} ${styles.pixel4}`} />
        <span className={`${styles.pixel} ${styles.pixel5}`} />
        <span className={`${styles.pixel} ${styles.pixel6}`} />

        <span className={`${styles.pixelOutline} ${styles.outline1}`} />
        <span className={`${styles.pixelOutline} ${styles.outline2}`} />
      </div>

      <div className={styles.introInner}>
        <div className={styles.introContent}>
          <p className="eyebrowHeader">Design meets development</p>

          <h2>
            I design and develop{" "}
            <span className={styles.shimmeringText}>websites</span> that feel
            clear, fast, and easy to use.
          </h2>

          <p className={styles.introText}>
            As a Halifax-based web designer and developer, I create custom
            websites and scalable web applications for businesses in Nova Scotia
            and across Canada, combining thoughtful design with clean, reliable
            development.
          </p>
        </div>

        <ul className={styles.introList}>
          <li>
            <span className={styles.listNumber}>01</span>
            <span>Fast, performance-focused builds</span>
          </li>

          <li>
            <span className={styles.listNumber}>02</span>
            <span>Clean, scalable development</span>
          </li>

          <li>
            <span className={styles.listNumber}>03</span>
            <span>Thoughtful UX/UI decisions</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
