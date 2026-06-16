import styles from "./PricingOptions.module.css";

export default function PricingOptionExamples({ data }) {
  const { bad, good, tooLittle } = data;

  return (
    <section className={styles.pricingExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Pricing should make choices easier, not send users into comparison
          quicksand.
        </p>
      </div>

      <div className={styles.examplesStack}>
        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.tooLittlePreview}>
              {tooLittle.plans.map((plan) => (
                <div key={plan} className={styles.tooLittlePlan}>
                  <strong>{plan}</strong>
                  <span>No extra context</span>
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
            <div className={styles.planPile}>
              {bad.plans.map((plan) => (
                <div key={plan} className={styles.badPlan}>
                  <strong>{plan}</strong>
                  <span>Almost the same</span>
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
            <div className={styles.packageGrid}>
              {good.plans.map((plan) => (
                <div key={plan.name} className={styles.goodPlan}>
                  <span>{plan.bestFor}</span>
                  <h4>{plan.name}</h4>
                  <p>{plan.price}</p>
                  <button type="button">Compare</button>
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
