import styles from "./HeroServices.module.css";

export default function HeroServices() {
  return (
    <section className={styles.hero}>
      {/* Background layer */}
      <div className={styles.bg} />

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>Training Programs</p>

        <h1 className={styles.title}>
          Ready to connect with your horse on a different level?
        </h1>

        <p className={styles.description}>
          Learn from someone who's been it. Learn a system of training that
          gets physical results, builds communication and mutual respect.
        </p>

        <button className={styles.cta}>Contact</button>
      </div>
    </section>
  );
}