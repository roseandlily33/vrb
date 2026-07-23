import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = ({ title, highlight, subText, topMeta }) => {
  const [before, after] = title.split(highlight);
  return (
    <section className={styles.hero}>
      {/* <div className={styles.pixelPattern}>
        <Image
          src="/pixels.svg"
          alt="Pixels image"
          width={380}
          height={380}
          className={styles.pixelImage}
          aria-hidden="true"
          priority
        /> */}
        {/* <div className={styles.pixelShimmer} /> */}
      {/* </div> */}
      {topMeta && <p className={styles.topMeta}>{topMeta}</p>}
      <h1 className={styles.title}>
        {before}
        <span className={styles.blue}>{highlight}</span>
        {after}
      </h1>
      <p className={styles.subText}>{subText}</p>
    </section>
  );
};

export default Hero;
