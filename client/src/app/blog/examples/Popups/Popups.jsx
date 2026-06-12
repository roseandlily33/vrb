import styles from "./Popups.module.css";

export default function PopupExamples({ data }) {
  const { bad, good } = data;

  return (
    <section className={styles.popupExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Popups should support the user journey, not leap onto the screen like
          five tiny sales goblins.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

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
                <button aria-label="Close popup">×</button>
                <strong>{popup}</strong>
                <span>Limited time message</span>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.goodPreview}>
            <div className={styles.goodPopup}>
              <button aria-label="Close popup">×</button>

              <span className={styles.popupLabel}>Helpful Prompt</span>
              <h4>{good.popupTitle}</h4>
              <p>{good.popupText}</p>

              <div className={styles.popupActions}>
                <button className={styles.primaryButton}>
                  {good.primaryButton}
                </button>
                <button className={styles.secondaryButton}>
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
        </article>
      </div>
    </section>
  );
}