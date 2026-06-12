import styles from "./Notifications.module.css";

export default function NotificationExamples({ data }) {
  const { bad, good } = data;

  return (
    <section className={styles.notificationExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Notifications should give users helpful feedback, not jump out from
          every corner like tiny digital confetti cannons.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.badPreview}>
            <div className={styles.mockPage}>
              <div className={styles.mockHeader} />
              <div className={styles.mockLine} />
              <div className={styles.mockLineShort} />
            </div>

            {bad.alerts.map((alert, index) => (
              <div
                key={alert}
                className={`${styles.alertBubble} ${
                  styles[`alert${index + 1}`]
                }`}
              >
                <span>{alert}</span>
                <button>×</button>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.goodPreview}>
            <div className={styles.successCard}>
              <div className={styles.checkIcon}>✓</div>
              <div>
                <strong>{good.status}</strong>
                <p>{good.message}</p>
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
