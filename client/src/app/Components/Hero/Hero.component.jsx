import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = ({ title, highlight, subText, topMeta }) => {
  const [before, after] = title.split(highlight);
  return (
    <section className={styles.hero}>
      {topMeta && <p className={styles.topMeta}>{topMeta}</p>}
      <h1 className={styles.title}>
        {before}
        <span className={styles.blue}>{highlight}</span>
        {after}
      </h1>
      <p className={styles.subText}>{subText}</p>
      <div className={styles.pixelPattern}>
        <Image
          src="/pixels.svg"
          alt="Pixels image"
          width={380}
          height={380}
          priority
        />
        <div className={styles.pixelShimmer}/>
      </div>
    </section>
  );
};

export default Hero;
