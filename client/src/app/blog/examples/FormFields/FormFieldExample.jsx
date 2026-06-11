import styles from "./FormFieldExample.module.css";

export default function FormFieldExamples({ data }) {
  const { bad, good } = data;

  return (
    <section className={styles.formFieldExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Forms should collect helpful information without making users feel
          like starting a conversation is too much work.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.formMockup}>
            {bad.fields.map((field) => (
              <label key={field} className={styles.badField}>
                <span>{field}</span>
                <input type="text" />
              </label>
            ))}

            <button className={styles.badButton}>Submit</button>
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.cleanFormMockup}>
            {good.fields.map((field) => (
              <label key={field} className={styles.goodField}>
                <span>{field}</span>

                {field === "Message" ? (
                  <textarea rows="4" />
                ) : (
                  <input type="text" />
                )}
              </label>
            ))}

            <p className={styles.note}>{good.note}</p>

            <button className={styles.goodButton}>{good.primaryButton}</button>
          </div>
        </article>
      </div>
    </section>
  );
}