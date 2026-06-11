import styles from "./whitespace.module.css";

export default function WhitespaceExamples({ data }) {
  const { bad, good } = data;

  return (
    <section className={styles.whitespaceExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          White space helps users understand what belongs together, what matters
          most, and where to look next.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.crowdedCard}`}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.mockup}>
            <div className={styles.tightHero}>
              <span>Services</span>
              <h4>Custom Website Support</h4>
              <p>
                Design, development, updates, strategy, SEO, maintenance,
                branding, forms, integrations, and launch help.
              </p>
              <button>Learn More</button>
            </div>

            <div className={styles.tightList}>
              {bad.cards.map((card) => (
                <div key={card} className={styles.tightItem}>
                  <strong>{card}</strong>
                  <small>Helpful service detail</small>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className={`${styles.card} ${styles.balancedCard}`}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.mockup}>
            <div className={styles.relaxedHero}>
              <span>Services</span>
              <h4>Custom Website Support</h4>
              <p>
                Design, development, updates, and launch support organized into
                a clear user experience.
              </p>
              <button>Learn More</button>
            </div>

            <div className={styles.relaxedGrid}>
              {good.cards.map((card) => (
                <div key={card} className={styles.relaxedItem}>
                  <strong>{card}</strong>
                  <small>Helpful service detail</small>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}