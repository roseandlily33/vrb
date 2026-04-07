import styles from "./ServicesHero.module.css";

const ServicesHero = () => {
  return (
    <section className={styles.hero}>
      <h1>
        Services <span className={styles.blue}>designed</span> to bring your
        ideas to life
      </h1>
      <p style={{ color: "var(--blue-100)" }}>
        Custom websites designed to grow your business.
      </p>
    </section>
  );
};

export default ServicesHero;
