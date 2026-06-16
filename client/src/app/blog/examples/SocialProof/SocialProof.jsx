import styles from "./SocialProof.module.css";

export default function SocialProofExamples({ data }) {
  const { bad, good, tooLittle } = data;

  return (
    <section className={styles.socialProofExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Social proof should help visitors feel confident, not turn the page
          into a credibility sticker book.
        </p>
      </div>

      <div className={styles.examplesStack}>
        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.tooLittlePreview}>
              <div className={styles.emptyProofCard}>
                <span>No reviews yet</span>
                <h4>Client feedback</h4>
                <p>
                  This section is here, but it does not give visitors much to go
                  on yet.
                </p>
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
            <div className={styles.badPreview}>
              {bad.proofItems.map((item) => (
                <span key={item} className={styles.badProofItem}>
                  {item}
                </span>
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
            <div className={styles.goodPreview}>
              <div className={styles.featuredProof}>
                <span className={styles.rating}>★★★★★</span>
                <blockquote>
                  “The process felt organized, clear, and easy to follow from
                  start to launch.”
                </blockquote>
                <p>Client feedback from a website project</p>
              </div>

              <div className={styles.proofGrid}>
                {good.proofItems.map((item) => (
                  <div key={item.label} className={styles.goodProofItem}>
                    <strong>{item.label}</strong>
                    <p>{item.detail}</p>
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
