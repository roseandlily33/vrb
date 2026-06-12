import styles from "./PricingOptions.module.css";

export default function PricingOptionExamples({ data }) {
  const { bad, good } = data;

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

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.planPile}>
            {bad.plans.map((plan) => (
              <div key={plan} className={styles.badPlan}>
                <strong>{plan}</strong>
                <span>Almost the same</span>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.packageGrid}>
            {good.plans.map((plan) => (
              <div key={plan.name} className={styles.goodPlan}>
                <span>{plan.bestFor}</span>
                <h4>{plan.name}</h4>
                <p>{plan.price}</p>
                <button>Compare</button>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}