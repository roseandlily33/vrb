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
      <div className={styles.sectionInner}>
        {/* INTRODUCTION */}
        <div className={styles.intro}>
          <div className={styles.headingBlock}>
            <div className={styles.markerGroup} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <span className={styles.eyebrow}>Strategy / Project Direction</span>

            <h2 className={styles.title}>{title}</h2>
          </div>

          {objective && (
            <div className={styles.objectiveBlock}>
              <div className={styles.objectiveTop}>
                <span className={styles.label}>The Objective</span>
                <span className={styles.objectivePixel} aria-hidden="true" />
              </div>

              <p className={styles.objective}>{objective}</p>
            </div>
          )}
        </div>

        {/* APPROACH */}
        {(channels.length > 0 || cadence || approach) && (
          <div className={styles.approachSection}>
            <div className={styles.approachHeader}>
              <div className={styles.approachHeading}>
                <span className={styles.cardEyebrow}>01 / The Approach</span>

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
              <div className={styles.approachBody}>
                <span className={styles.approachAccent} aria-hidden="true" />

                <p className={styles.approachText}>{approach}</p>
              </div>
            )}
          </div>
        )}

        {/* STRATEGY BREAKDOWN */}
        {(pillars.length > 0 || priorities.length > 0) && (
          <div className={styles.strategyGrid}>
            {/* CONTENT PILLARS */}
            {pillars.length > 0 && (
              <article className={styles.strategyColumn}>
                <div className={styles.cardHeading}>
                  <div className={styles.cardHeadingTop}>
                    <span className={styles.cardEyebrow}>
                      02 / Content System
                    </span>

                    <span className={styles.headingPixel} aria-hidden="true" />
                  </div>

                  <h3 className={styles.cardTitle}>Content Pillars</h3>

                  <p className={styles.cardSubtitle}>
                    The themes guiding the content.
                  </p>
                </div>

                <div className={styles.pillars}>
                  {pillars.map((pillar, index) => (
                    <div className={styles.pillar} key={`${pillar}-${index}`}>
                      <span className={styles.itemIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className={styles.itemText}>{pillar}</span>

                      <span className={styles.itemPixel} aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* STRATEGY PRIORITIES */}
            {priorities.length > 0 && (
              <article className={styles.strategyColumn}>
                <div className={styles.cardHeading}>
                  <div className={styles.cardHeadingTop}>
                    <span className={styles.cardEyebrow}>
                      03 / Strategic Direction
                    </span>

                    <span className={styles.headingPixel} aria-hidden="true" />
                  </div>

                  <h3 className={styles.cardTitle}>Strategy Priorities</h3>

                  <p className={styles.cardSubtitle}>
                    The decisions shaping the work.
                  </p>
                </div>

                <div className={styles.priorities}>
                  {priorities.map((priority, index) => (
                    <div
                      className={styles.priority}
                      key={`${priority.title}-${index}`}
                    >
                      <span className={styles.itemIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className={styles.priorityContent}>
                        <h4>{priority.title}</h4>

                        {priority.description && <p>{priority.description}</p>}
                      </div>

                      <span className={styles.itemPixel} aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </article>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
