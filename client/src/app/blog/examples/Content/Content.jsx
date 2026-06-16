import styles from "./Content.module.css";

export default function Content({ data }) {
  const { bad, good, tooLittle } = data;

  return (
    <section className={styles.contentExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Website content should help users understand quickly, not overwhelm
          them or leave them guessing.
        </p>
      </div>

      <div className={styles.examplesStack}>
        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.tooLittleContent}>
              {tooLittle.contentBlocks.map((block) => (
                <p key={block}>{block}</p>
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
            <div className={styles.textWall}>
              {bad.contentBlocks.map((block) => (
                <p key={block}>{block}</p>
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
            <div className={styles.cleanContent}>
              <h4>{good.heading}</h4>
              <p>{good.shortText}</p>

              <ul>
                {good.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <button type="button">{good.primaryButton}</button>
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
