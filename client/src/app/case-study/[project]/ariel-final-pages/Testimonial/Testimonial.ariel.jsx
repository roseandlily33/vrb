import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.testimonialCard}>
        <p className={styles.eyebrow}>Client Experience</p>

        <blockquote>
          “Ariel’s Training maintains a balance between teaching technical
          skills and fostering personal growth.”
        </blockquote>

        <div className={styles.authorWrap}>
          <span className={styles.authorLine} />
          <p className={styles.author}>Kim</p>
        </div>
      </div>
    </section>
  );
}
