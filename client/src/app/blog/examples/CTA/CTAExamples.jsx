import styles from "./CTAExamples.module.css";

export default function CTAExamples({ data }) {
  const { bad, good, tooLittle } = data;

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

      <div className={styles.examplesStack}>
        <article className={`${styles.exampleRow} ${styles.tooLittleRow}`}>
          <div className={styles.exampleVisual}>
            <div className={styles.missingAction}>
              <div className={styles.fakeHeading}></div>
              <div className={styles.fakeLine}></div>
              <div className={styles.fakeLineShort}></div>
            </div>
          </div>

          <div className={styles.exampleCopy}>
            <span className={styles.tag}>{tooLittle?.label}</span>
            <h3>{tooLittle?.title}</h3>
            <p>{tooLittle?.description}</p>

            <ul className={styles.pointList}>
              {(tooLittle?.points || []).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className={`${styles.exampleRow} ${styles.reverseRow}`}>
          <div className={styles.exampleVisual}>
              <div className={styles.buttonMess}>
              {(bad?.buttons || []).map((button) => (
                <button key={button} type="button" className={styles.badButton}>
                  {button}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.exampleCopy}>
            <span className={styles.tag}>{bad?.label}</span>
            <h3>{bad?.title}</h3>
            <p>{bad?.description}</p>

            <ul className={styles.pointList}>
              {(bad?.points || []).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.focusedAction}>
              <button type="button" className={styles.primaryButton}>
                {good?.primaryButton}
              </button>

              <button type="button" className={styles.secondaryButton}>
                {good?.secondaryButton}
              </button>
            </div>
          </div>

          <div className={styles.exampleCopy}>
            <span className={styles.tag}>{good?.label}</span>
            <h3>{good?.title}</h3>
            <p>{good?.description}</p>

            <ul className={styles.pointList}>
              {(good?.points || []).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
