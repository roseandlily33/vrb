import styles from "./blogHero.module.css";
// import HeroPixels from "../heroPixels/heroPixels";
const BlogHero = ({ title, intro, eyebrow }) => {
  const HeroPixels = () => {
    return (
      <div className={styles.heroPixels} aria-hidden="true">
        <span className={`${styles.pixel} ${styles.pixelHero1}`} />
        <span className={`${styles.pixel} ${styles.pixelHero2}`} />
        <span className={`${styles.pixel} ${styles.pixelHero3}`} />
        <span className={`${styles.pixel} ${styles.pixelHero4}`} />
        <span className={`${styles.pixel} ${styles.pixelHero5}`} />
        <span className={`${styles.pixel} ${styles.pixelHero6}`} />
        <span className={`${styles.pixel} ${styles.pixelHero7}`} />
        <span className={`${styles.pixel} ${styles.pixelHero8}`} />
        <span className={`${styles.pixel} ${styles.pixelHero9}`} />
        <span className={`${styles.pixel} ${styles.pixelHero10}`} />
        <span className={`${styles.pixel} ${styles.pixelHero11}`} />
        <span className={`${styles.pixel} ${styles.pixelHero12}`} />
      </div>
    );
  };
  return (
    <section className={styles.hero}>
      <HeroPixels />

      <div className={styles.heroInner}>
        <div className={styles.metaRow}>
          <span className={styles.category}>{eyebrow}</span>

          <span className={styles.metaDivider} aria-hidden="true">
            •
          </span>

          <span>9 min read</span>
        </div>

        <h1>{title}</h1>

        <p className={styles.intro}>{intro}</p>
      </div>
    </section>
  );
};

export default BlogHero;
