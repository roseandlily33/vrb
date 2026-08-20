import styles from "./CSSocialMediaStrategy.module.css";

export default function CSSocialMediaStrategy({ strategy = [] }) {
  const data = Array.isArray(strategy) ? strategy[0] : strategy;

  if (!data) return null;

  const {
    title = "Social Media Strategy",
    objective,
    channels = [],
    cadence,
    approach,
    pillars = [],
    priorities = [],
  } = data;

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.headingBlock}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        {objective && (
          <div className={styles.objectiveCard}>
            <span className={styles.label}>Objective</span>
            <p className={styles.objective}>{objective}</p>
          </div>
        )}
      </div>

      {(channels.length > 0 || cadence || approach) && (
        <div className={styles.approachCard}>
          <div className={styles.approachHeader}>
            <div>
              <span className={styles.cardEyebrow}>Approach</span>
              <h3 className={styles.approachTitle}>How I approached it</h3>
            </div>

            {(channels.length > 0 || cadence) && (
              <div className={styles.approachMeta}>
                {channels.length > 0 && (
                  <div className={styles.metaGroup}>
                    <span className={styles.metaLabel}>Channels</span>

                    <div className={styles.channels}>
                      {channels.map((channel) => (
                        <span key={channel} className={styles.channel}>
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {cadence && (
                  <div className={styles.metaGroup}>
                    <span className={styles.metaLabel}>Cadence</span>
                    <span className={styles.metaValue}>{cadence}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {approach && (
            <p className={styles.approachText}>{approach}</p>
          )}
        </div>
      )}

      {(pillars.length > 0 || priorities.length > 0) && (
        <div className={styles.cardsGrid}>
          {pillars.length > 0 && (
            <article className={styles.contentCard}>
              <div className={styles.cardHeading}>
                <span className={styles.cardEyebrow}>Content System</span>
                <h3 className={styles.cardTitle}>Content Pillars</h3>
              </div>

              <div className={styles.pillars}>
                {pillars.map((pillar, index) => (
                  <div
                    className={styles.pillar}
                    key={`${pillar}-${index}`}
                  >
                    <span className={styles.pillarDot} aria-hidden="true" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </article>
          )}

          {priorities.length > 0 && (
            <article className={styles.contentCard}>
              <div className={styles.cardHeading}>
                <span className={styles.cardEyebrow}>Direction</span>
                <h3 className={styles.cardTitle}>Strategy Priorities</h3>
              </div>

              <div className={styles.priorities}>
                {priorities.map((priority, index) => (
                  <div
                    className={styles.priority}
                    key={`${priority.title}-${index}`}
                  >
                    <div className={styles.priorityContent}>
                      <h4>{priority.title}</h4>

                      {priority.description && (
                        <p>{priority.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      )}
    </section>
  );
}