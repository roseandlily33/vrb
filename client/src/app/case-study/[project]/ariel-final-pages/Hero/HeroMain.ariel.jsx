import styles from "./HeroMain.module.css";
import Button from "../Button/Button.ariel";

export default function HeroMain() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Equestrian Training & Development</p>

        <h1 className={styles.title}>
          Building confident riders through structured & thoughtful training
        </h1>

        <p className={styles.text}>
          Thoughtful training programs designed to support horse and rider
          development with clarity, confidence, and care.
        </p>

        <div className={styles.actions}>
          <Button>Explore Programs</Button>
          <Button variant="secondary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
