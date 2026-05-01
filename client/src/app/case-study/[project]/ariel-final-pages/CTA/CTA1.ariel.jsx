import styles from "./CTA1.module.css";
import Button from "../Button/Button.ariel";

export default function CTA1() {
  return (
    <section className={styles.section}>
      <div className={styles.imageBlock} />

      <div className={styles.content}>
        <h2>
          Every partnership begins with understanding — let’s take the first
          step together.
        </h2>

        <div className={styles.textGroup}>
          <p className={styles.question}>Want a free consultation?</p>
          <p>Send us a message & we’ll get back to you!</p>
        </div>
        <Button>Contact Us</Button>
      </div>
    </section>
  );
}
