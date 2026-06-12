import styles from "./HomepageSections.module.css";

export default function HomepageSectionExamples({ data }) {
  const { bad, good } = data;

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

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.badPreview}>
            {bad.sections.map((section) => (
              <div key={section} className={styles.badSection}>
                {section}
              </div>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

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
        </article>
      </div>
    </section>
  );
}