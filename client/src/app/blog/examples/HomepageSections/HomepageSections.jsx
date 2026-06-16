import styles from "./HomepageSections.module.css";

export default function HomepageSectionExamples({ data }) {
  const { bad, good, tooLittle } = data;

  return (
    <section className={styles.homepageExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          A homepage should feel like a guided path, not a storage closet for
          every idea the website has ever had.
        </p>
      </div>

      <div className={styles.examplesStack}>
        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.tooLittlePreview}>
              {tooLittle.sections.map((section) => (
                <div key={section} className={styles.tooLittleSection}>
                  {section}
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
            <div className={styles.badPreview}>
              {bad.sections.map((section) => (
                <div key={section} className={styles.badSection}>
                  {section}
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
              {good.sections.map((section, index) => (
                <div key={section.name} className={styles.goodSection}>
                  <span className={styles.step}>0{index + 1}</span>

                  <div>
                    <strong>{section.name}</strong>
                    <p>{section.purpose}</p>
                  </div>
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
