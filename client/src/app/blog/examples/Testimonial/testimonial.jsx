import styles from "./testimonial.module.css";

export default function TestimonialExample({ data }) {
  const { bad, good } = data;

  return (
    <section className={styles.testimonialExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Testimonials should build trust with specific details, not just sit
          there looking cute with five stars.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.badTestimonial}>
            <div className={styles.stars}>{bad.rating}</div>
            <blockquote>“{bad.quote}”</blockquote>
            <p>{bad.author}</p>
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.goodTestimonial}>
            <div className={styles.stars}>{good.rating}</div>
            <blockquote>“{good.quote}”</blockquote>

            <div className={styles.authorBlock}>
              <strong>{good.author}</strong>
              <span>{good.projectType}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}