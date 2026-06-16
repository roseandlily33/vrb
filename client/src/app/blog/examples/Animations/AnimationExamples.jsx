import styles from "./AnimationExample.module.css";

export default function AnimationExamples({ data }) {
  const { bad, good, tooLitte } = data;

  return (
<section className={styles.animationExamples}>
  <div className={styles.header}>
    <span className={styles.eyebrow}>{data.series}</span>
    <h2>{data.topic}</h2>
    <p>
      Animation should guide attention and create feedback, not make every part
      of the page compete for attention.
    </p>
  </div>

  <div className={styles.examplesStack}>
    <article className={styles.exampleRow}>
      <div className={styles.exampleVisual}>
        <div className={styles.staticMockup}>
          <div className={styles.staticCard}>
            <span>New Project</span>
            <h4>Website Refresh</h4>
            <p>
              The layout is clear, but the interactions feel a little flat
              because nothing responds.
            </p>

            <button type="button">View Details</button>
          </div>

          <div className={styles.staticFeedbackRow}>
            {tooLittle.items.map((item) => (
              <div key={item} className={styles.staticFeedbackItem}>
                {item}
              </div>
            ))}
          </div>
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
        <div className={styles.chaoticMockup}>
          {bad.items.map((item, index) => (
            <div
              key={item}
              className={`${styles.motionItem} ${styles[`chaos${index + 1}`]}`}
            >
              {item}
            </div>
          ))}
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
        <div className={styles.balancedMockup}>
          <div className={styles.previewCard}>
            <span>New Project</span>
            <h4>Website Refresh</h4>
            <p>
              A cleaner structure with subtle motion to support the user
              journey.
            </p>

            <button type="button">View Details</button>
          </div>

          <div className={styles.feedbackRow}>
            {good.items.map((item) => (
              <div key={item} className={styles.feedbackItem}>
                {item}
              </div>
            ))}
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