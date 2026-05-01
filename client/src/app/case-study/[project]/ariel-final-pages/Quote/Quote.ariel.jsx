import styles from "./Quote.module.css";

export default function Quote() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.quoteRow}>
          <div className={styles.line} />
          <blockquote className={styles.quote}>
            True horsemanship lies about what you do for the horse you do,
            it’s about your skillset under the guidance and mentorship of a
            life long equestrian and horsewoman.
          </blockquote>
          <div className={styles.line} />
        </div>

        <p className={styles.author}>— Ariel Boesener</p>
      </div>
    </section>
  );
}