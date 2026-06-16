import styles from "./testimonial.module.css";

export default function TestimonialExample({ data }) {
  const { bad, good, tooLittle } = data;

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

      <div className={styles.examplesStack}>
        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.emptyTestimonial}>
              <div className={styles.emptyStars}>☆☆☆☆☆</div>
              <blockquote>No testimonial added yet.</blockquote>
              <p>Missing client feedback</p>
            </div>
          </div>

          <div className={styles.exampleCopy}>
            <span className={styles.tag}>{tooLittle.label}</span>
            <h3>{tooLittle.title}</h3>
            <p>{tooLittle.description}</p>
          </div>
        </article>

        <article className={`${styles.exampleRow} ${styles.reverseRow}`}>
          <div className={styles.exampleVisual}>
            <div className={styles.badTestimonial}>
              <div className={styles.stars}>{bad.rating}</div>
              <blockquote>“{bad.quote}”</blockquote>
              <p>{bad.author}</p>
            </div>
          </div>

          <div className={styles.exampleCopy}>
            <span className={styles.tag}>{bad.label}</span>
            <h3>{bad.title}</h3>
            <p>{bad.description}</p>
          </div>
        </article>

        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.goodTestimonial}>
              <div className={styles.stars}>{good.rating}</div>
              <blockquote>“{good.quote}”</blockquote>

              <div className={styles.authorBlock}>
                <strong>{good.author}</strong>
                <span>{good.projectType}</span>
              </div>
            </div>
          </div>

          <div className={styles.exampleCopy}>
            <span className={styles.tag}>{good.label}</span>
            <h3>{good.title}</h3>
            <p>{good.description}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
