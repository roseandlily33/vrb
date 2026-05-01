import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.goldLine} aria-hidden="true" />
        <blockquote>
          “Ariel’s Training maintains a balance between teaching technical skills and fostering personal growth.”
        </blockquote>
        <p className={styles.author}>— Kim</p>
      </div>
    </section>
  );
}