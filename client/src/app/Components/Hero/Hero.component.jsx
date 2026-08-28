import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = ({ title, highlight, subText, topMeta }) => {
  const [before, after] = title.split(highlight);
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid} aria-hidden="true" />

      <div className={styles.pixelComposition} aria-hidden="true">
        <span className={`${styles.pixel} ${styles.pixelOne}`} />
        <span className={`${styles.pixel} ${styles.pixelTwo}`} />
        <span className={`${styles.pixel} ${styles.pixelThree}`} />
        <span className={`${styles.pixel} ${styles.pixelFour}`} />
        <span className={`${styles.pixel} ${styles.pixelFive}`} />
        <span className={`${styles.pixelOutline} ${styles.outlineOne}`} />
        <span className={`${styles.pixelOutline} ${styles.outlineTwo}`} />
      </div>

      <div className={styles.heroContent}>
        {topMeta && <p className={styles.topMeta}>{topMeta}</p>}

        <h1 className={styles.title}>
          {before}
          <span className={styles.blue}>{highlight}</span>
          {after}
        </h1>

        <p className={styles.subText}>{subText}</p>
      </div>

      <div className={styles.cornerPixels} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default Hero;
