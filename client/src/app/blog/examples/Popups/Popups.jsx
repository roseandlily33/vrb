import styles from "./Popups.module.css";

export default function PopupExamples({ data }) {
  const { bad, good, tooLittle } = data;

  return (
<section className={styles.popupExamples}>
  <div className={styles.header}>
    <span className={styles.eyebrow}>{data.series}</span>
    <h2>{data.topic}</h2>
    <p>
      Popups should support the user journey, not leap onto the screen like five
      tiny sales goblins.
    </p>
  </div>

  <div className={styles.examplesStack}>
    <article className={styles.exampleRow}>
      <div className={styles.exampleVisual}>
        <div className={styles.tooLittlePreview}>
          <div className={styles.mockPage}>
            <div className={styles.mockHero} />
            <div className={styles.mockLine} />
            <div className={styles.mockLineShort} />

            <div className={styles.missedPrompt}>
              <strong>No helpful prompt shown</strong>
              <span>Users keep browsing without extra guidance.</span>
            </div>
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
          <div className={styles.mockPage}>
            <div className={styles.mockHero} />
            <div className={styles.mockLine} />
            <div className={styles.mockLineShort} />
          </div>

          {bad.popups.map((popup, index) => (
            <div
              key={popup}
              className={`${styles.badPopup} ${styles[`popup${index + 1}`]}`}
            >
              <button type="button" aria-label="Close popup">
                ×
              </button>
              <strong>{popup}</strong>
              <span>Limited time message</span>
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
          <div className={styles.goodPopup}>
            <button type="button" aria-label="Close popup">
              ×
            </button>

            <span className={styles.popupLabel}>Helpful Prompt</span>
            <h4>{good.popupTitle}</h4>
            <p>{good.popupText}</p>

            <div className={styles.popupActions}>
              <button type="button" className={styles.primaryButton}>
                {good.primaryButton}
              </button>
              <button type="button" className={styles.secondaryButton}>
                {good.secondaryButton}
              </button>
            </div>
          </div>

          <div className={styles.exampleList}>
            {good.examples.map((item) => (
              <div key={item} className={styles.exampleItem}>
                <span>✓</span>
                <p>{item}</p>
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