import styles from "./blogHero.module.css";
import Link from "next/link";
// import HeroPixels from "../heroPixels/heroPixels";
const BlogHero = ({ title, eyebrow, description, date, readTime }) => {
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
      {/* DECORATIVE ELEMENTS */}
      <div className={styles.heroArtwork} aria-hidden="true">
        <div className={styles.heroOrbit}>
          <span className={styles.heroOrbitInner} />
          <span className={styles.heroOrbitCore} />
          <span className={styles.heroOrbitDot} />
        </div>
      </div>

      <HeroPixels />

      <div className={styles.heroInner}>
        {/* ARTICLE METADATA */}
        <div className={styles.metaRow}>
          <span className={styles.category}>{eyebrow}</span>

          <span className={styles.metaDivider} aria-hidden="true" />

          <span className={styles.author}>
            Written by{" "}
            <Link
              href="https://victoriabenoit-portfolio.onrender.com"
              className={styles.authorLink}
            >
              Victoria Benoit
            </Link>
          </span>

          <span className={styles.metaDivider} aria-hidden="true" />

          <span>{readTime}</span>

          <span className={styles.metaDivider} aria-hidden="true" />

          <span>{date}</span>
        </div>

        {/* MAIN HEADING */}
        <div className={styles.heroContent}>
          <div className={styles.heroHeading}>
            <h1>{title}</h1>
          </div>

          <div className={styles.heroDescription}>
            <span className={styles.heroAccentLine} aria-hidden="true" />

            <p className={styles.intro}>{description}</p>
          </div>
        </div>

        {/* BOTTOM ARTICLE MARKER */}
        <div className={styles.heroBottom}>
          <div className={styles.heroBottomLabel}>
            <span className={styles.heroBottomSquare} aria-hidden="true" />
            <span>From the VRB Blog</span>
          </div>

          <span className={styles.heroBottomLine} aria-hidden="true" />

          <span className={styles.heroBottomArrow} aria-hidden="true">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
