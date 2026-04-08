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
    </section>
  );
};

export default Hero;