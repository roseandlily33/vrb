import styles from "./CTA2.module.css";
import Button from "../Button/Button.ariel";

export default function CTA2() {
  return (
 <section className={styles.section}>
  <div className={styles.content}>
    <div className={styles.contentInner}>
      <p className={styles.eyebrow}>Let’s Work Together</p>

      <h2>Discover What’s Possible</h2>

      <div className={styles.textGroup}>
        <p className={styles.question}>Interested in working together?</p>
        <p>Send us a message, we’re excited to hear from you!</p>
      </div>

      <Button>Get in touch</Button>
    </div>
  </div>

  <div className={styles.imageBlock} />
</section>
  );
}