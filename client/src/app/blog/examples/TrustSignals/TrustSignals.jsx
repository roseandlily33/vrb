import styles from "./TrustSignals.module.css";

export default function TrustSignalExamples({ data }) {
  const { bad, good, tooLittle } = data;

  return (
 <section className={styles.trustExamples}>
  <div className={styles.header}>
    <span className={styles.eyebrow}>{data.series}</span>
    <h2>{data.topic}</h2>
    <p>
      Trust signals should reassure users at the right moment, not cover the
      page in credibility confetti.
    </p>
  </div>

  <div className={styles.examplesStack}>
    <article className={styles.exampleRow}>
      <div className={styles.exampleVisual}>
        <div className={styles.tooLittlePreview}>
          {tooLittle.signals.map((signal) => (
            <span key={signal} className={styles.tooLittleSignal}>
              {signal}
            </span>
          ))}
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
          {bad.signals.map((signal) => (
            <span key={signal} className={styles.badSignal}>
              {signal}
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
          {good.signals.map((signal) => (
            <div key={signal.label} className={styles.goodSignal}>
              <div className={styles.icon}>✓</div>

              <div>
                <strong>{signal.label}</strong>
                <p>{signal.detail}</p>
              </div>
            </div>
          ))}
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