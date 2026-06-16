import styles from "./Features.module.css";

export default function FeatureExamples({ data }) {
  const { bad, good, tooLittle } = data;

  return (
    <section className={styles.featureExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Features should explain value clearly, not turn into a tiny inventory
          list wearing a website costume.
        </p>
      </div>

      <div className={styles.examplesStack}>
        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.tooLittlePreview}>
              {tooLittle.features.map((feature) => (
                <div key={feature} className={styles.tooLittleFeature}>
                  <span>✓</span>
                  <p>{feature}</p>
                </div>
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
              {bad.features.map((feature) => (
                <div key={feature} className={styles.badFeature}>
                  <span>✓</span>
                  <p>{feature}</p>
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
            <div className={styles.goodPreview}>
              {good.features.map((feature, index) => (
                <div key={feature.title} className={styles.goodFeature}>
                  <div className={styles.icon}>0{index + 1}</div>

                  <div>
                    <strong>{feature.title}</strong>
                    <p>{feature.detail}</p>
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
