import styles from "./SocialProof.module.css";

export default function SocialProofExamples({ data }) {
  const { bad, good } = data;

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

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.badPreview}>
            {bad.proofItems.map((item) => (
              <span key={item} className={styles.badProofItem}>
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

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
        </article>
      </div>
    </section>
  );
}