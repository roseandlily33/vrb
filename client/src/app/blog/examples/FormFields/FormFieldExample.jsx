import styles from "./FormFieldExample.module.css";

export default function FormFieldExamples({ data }) {
  const { bad, good, tooLittle } = data;

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

      <div className={styles.examplesStack}>
        <article className={styles.exampleRow}>
          <div className={styles.exampleVisual}>
            <div className={styles.tooLittleFormMockup}>
              {tooLittle.fields.map((field) => (
                <label key={field} className={styles.tooLittleField}>
                  <span>{field}</span>
                  <input type="text" />
                </label>
              ))}

              <button type="button" className={styles.tooLittleButton}>
                Send
              </button>
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
            <div className={styles.formMockup}>
              {bad.fields.map((field) => (
                <label key={field} className={styles.badField}>
                  <span>{field}</span>
                  <input type="text" />
                </label>
              ))}

              <button type="button" className={styles.badButton}>
                Submit
              </button>
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

              <button type="button" className={styles.goodButton}>
                {good.primaryButton}
              </button>
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
