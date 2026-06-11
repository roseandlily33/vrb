import styles from "./Content.module.css";

export default function Content({ data }) {
  const { bad, good } = data;

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

      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.badCard}`}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.textWall}>
            {bad.contentBlocks.map((block) => (
              <p key={block}>{block}</p>
            ))}
          </div>
        </article>

        <article className={`${styles.card} ${styles.goodCard}`}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.cleanContent}>
            <h4>{good.heading}</h4>
            <p>{good.shortText}</p>

            <ul>
              {good.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <button>{good.primaryButton}</button>
          </div>
        </article>
      </div>
    </section>
  );
}