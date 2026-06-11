import styles from "./CTAExamples.module.css";

export default function CTAExamples({ data }) {
  const { bad, good } = data;

  return (
    <section className={styles.ctaExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Too Much vs Too Little</span>
        <h2>Calls To Action</h2>
        <p>
          CTA buttons should guide users, not make them choose between six
          different paths at once.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.badCard}`}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.buttonMess}>
            {bad.buttons.map((button) => (
              <button key={button} className={styles.badButton}>
                {button}
              </button>
            ))}
          </div>
        </article>

        <article className={`${styles.card} ${styles.goodCard}`}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.focusedAction}>
            <button className={styles.primaryButton}>
              {good.primaryButton}
            </button>

            <button className={styles.secondaryButton}>
              {good.secondaryButton}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}