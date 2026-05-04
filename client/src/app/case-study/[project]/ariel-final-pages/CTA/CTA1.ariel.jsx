import styles from "./CTA1.module.css";
import Button from "../Button/Button.ariel";

export default function CTA1() {
  return (
    <section className={styles.section}>
      <div className={styles.imageBlock} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Let’s Work Together</p>

        <h2>Every partnership begins with understanding.</h2>

        <p className={styles.lede}>
          Book a free consultation and we’ll help you take the next step with
          clarity and confidence.
        </p>

        <Button>Contact Us</Button>
      </div>
    </section>
  );
}
