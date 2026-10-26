
import styles from "./SEOFindings.module.css";

const formatDate = (value) => {
  if (!value) return null;

  const date = new Date(`${value}T12:00:00Z`);

  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

const normalizeItems = (items) => {
  if (!Array.isArray(items)) return [];

  return items
    .map((item, index) => {
      if (typeof item === "string") {
        return {
          id: `item-${index}`,
          text: item,
        };
      }

      if (item && typeof item === "object") {
        return {
          id: item.id || `item-${index}`,
          title: item.title || null,
          text: item.description || item.text || "",
        };
      }

      return null;
    })
    .filter((item) => item && (item.title || item.text));
};

const FindingsList = ({ items, variant = "default" }) => {
  const normalized = normalizeItems(items);

  if (!normalized.length) return null;

  return (
    <ol className={`${styles.findingsList} ${
      variant === "next" ? styles.nextList : ""
    }`}>
      {normalized.map((item, index) => (
        <li key={item.id} className={styles.findingItem}>
          <span className={styles.itemNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className={styles.itemContent}>
            {item.title && <h4>{item.title}</h4>}
            {item.text && <p>{item.text}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
};

const SEOFindings = ({ data }) => {
  if (!data) return null;

  const {
    currentSummary,
    keyTakeaways = [],
    limitations = [],
    nextSteps = [],
    observations = [],
  } = data;

  const hasTakeaways = normalizeItems(keyTakeaways).length > 0;
  const hasLimitations = normalizeItems(limitations).length > 0;
  const hasNextSteps = normalizeItems(nextSteps).length > 0;

  const sortedObservations = Array.isArray(observations)
    ? [...observations]
        .filter((item) => item && (item.title || item.description))
        .sort((a, b) =>
          (b.date || "").localeCompare(a.date || "")
        )
    : [];

  const hasContent =
    Boolean(currentSummary) ||
    hasTakeaways ||
    hasLimitations ||
    hasNextSteps ||
    sortedObservations.length > 0;

  if (!hasContent) return null;

  return (
    <section
      className={styles.section}
      aria-labelledby="seo-findings-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowPixel} />
            08 / FINDINGS & NEXT STEPS
          </span>

          <h2 id="seo-findings-title" className={styles.title}>
            What we've
            <br />
            learned<span>.</span>
          </h2>

          <p className={styles.description}>
            An ongoing assessment of search performance,
            technical improvements, and the opportunities
            ahead.
          </p>
        </header>

        {currentSummary && (
          <div className={styles.summaryPanel}>
            <div className={styles.summaryDecoration}>
              <span />
              <span />
              <span />
              <span />
            </div>

            <span className={styles.summaryEyebrow}>
              CURRENT ASSESSMENT
            </span>

            <h3>The story so far</h3>

            <p>{currentSummary}</p>

            <div className={styles.summaryFooter}>
              <span>ONGOING SEO CASE STUDY</span>
              <span className={styles.summaryLine} />
              <span>VRB / SEO</span>
            </div>
          </div>
        )}

        {(hasTakeaways || hasNextSteps) && (
          <div className={styles.mainGrid}>
            {hasTakeaways && (
              <article className={styles.contentCard}>
                <div className={styles.cardHeading}>
                  <div className={styles.cardIcon}>
                    <span aria-hidden="true">✦</span>
                  </div>

                  <span className={styles.cardEyebrow}>
                    KEY INSIGHTS
                  </span>
                </div>

                <h3>Key takeaways</h3>

                <p className={styles.cardDescription}>
                  The most meaningful lessons and
                  observations from the project so far.
                </p>

                <FindingsList items={keyTakeaways} />
              </article>
            )}

            {hasNextSteps && (
              <article
                className={`${styles.contentCard} ${styles.nextCard}`}
              >
                <div className={styles.cardHeading}>
                  <div className={styles.cardIcon}>
                    <span aria-hidden="true">↗</span>
                  </div>

                  <span className={styles.cardEyebrow}>
                    FUTURE IMPROVEMENTS
                  </span>
                </div>

                <h3>What's next</h3>

                <p className={styles.cardDescription}>
                  Planned SEO improvements and opportunities
                  to explore as the project develops.
                </p>

                <FindingsList
                  items={nextSteps}
                  variant="next"
                />
              </article>
            )}
          </div>
        )}

        {sortedObservations.length > 0 && (
          <div className={styles.observationsSection}>
            <div className={styles.subsectionHeader}>
              <span className={styles.subsectionEyebrow}>
                RECORDED OBSERVATIONS
              </span>

              <h3>What the data is showing</h3>

              <p>
                Dated observations based on the project's
                available search performance data.
              </p>
            </div>

            <div className={styles.observationsGrid}>
              {sortedObservations.map((observation, index) => (
                <article
                  key={observation.id || index}
                  className={styles.observationCard}
                >
                  <div className={styles.observationTop}>
                    <span className={styles.observationNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {observation.date && (
                      <time dateTime={observation.date}>
                        {formatDate(observation.date)}
                      </time>
                    )}
                  </div>

                  {observation.title && (
                    <h4>{observation.title}</h4>
                  )}

                  {observation.description && (
                    <p>{observation.description}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {hasLimitations && (
          <div className={styles.limitationsPanel}>
            <div className={styles.limitationsHeading}>
              <span className={styles.limitationsIcon}>
                i
              </span>

              <div>
                <span className={styles.limitationsEyebrow}>
                  CONTEXT & LIMITATIONS
                </span>

                <h3>Understanding the results</h3>
              </div>
            </div>

            <p className={styles.limitationsIntro}>
              SEO results need context. These considerations
              help explain what the available data can and
              cannot tell us.
            </p>

            <ul className={styles.limitationsList}>
              {normalizeItems(limitations).map((item) => (
                <li key={item.id}>
                  {item.title && <strong>{item.title}</strong>}
                  {item.text && <span>{item.text}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.bottomDetail}>
          <span>FINDINGS / LESSONS / NEXT STEPS</span>
          <span className={styles.detailLine} />
          <span>08</span>
        </div>
      </div>
    </section>
  );
};

export default SEOFindings;
