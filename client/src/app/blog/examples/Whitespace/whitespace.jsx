import styles from "./whitespace.module.css";

export default function WhitespaceExamples({ data }) {
  const { bad, good, tooLittle } = data;

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

      <div className={styles.examplesStack}>
        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.mockup}>
              <div className={styles.tooLooseHero}>
                <span>Services</span>
                <h4>Custom Website Support</h4>
                <p>Design and development support for your website.</p>
                <button type="button">Learn More</button>
              </div>

              <div className={styles.tooLooseList}>
                {tooLittle.cards.map((card) => (
                  <div key={card} className={styles.tooLooseItem}>
                    <strong>{card}</strong>
                    <small>Helpful service detail</small>
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
            <div className={styles.mockup}>
              <div className={styles.tightHero}>
                <span>Services</span>
                <h4>Custom Website Support</h4>
                <p>
                  Design, development, updates, strategy, SEO, maintenance,
                  branding, forms, integrations, and launch help.
                </p>
                <button type="button">Learn More</button>
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
          </div>

          <div className={styles.exampleCopy}>
            <span className={styles.tag}>{bad.label}</span>
            <h3>{bad.title}</h3>
            <p>{bad.description}</p>
          </div>
        </article>

        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.mockup}>
              <div className={styles.relaxedHero}>
                <span>Services</span>
                <h4>Custom Website Support</h4>
                <p>
                  Design, development, updates, and launch support organized
                  into a clear user experience.
                </p>
                <button type="button">Learn More</button>
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
