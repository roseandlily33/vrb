
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = ({ title, highlight, subText }) => {
  const [before, after] = title.split(highlight);
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        {before}
        <span className={styles.blue}>{highlight}</span>
        {after}
      </h1>
      <p className={styles.subText}>{subText}</p>
      <Image
        src="/squares.png"
        alt="Squares background"
        className={styles.squaresBG}
        width={600}
        height={600}
        priority
      />
    </section>
  );
};

export default Hero;
