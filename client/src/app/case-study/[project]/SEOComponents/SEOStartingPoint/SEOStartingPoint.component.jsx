import styles from "./SEOStartingPoint.module.css";

const formatNumber = (value) => {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  return new Intl.NumberFormat("en-CA").format(value);
};

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

const SEOStartingPoint = ({ data }) => {
  if (!data) return null;

  const {
    overview,
    challenges = [],
    existingStrengths = [],
    initialIndexingStatus,
    initialSearchVisibility,
    baseline = {},
  } = data;

  const metrics = [
    {
      label: "Impressions",
      value: formatNumber(baseline.impressions),
    },
    {
      label: "Clicks",
      value: formatNumber(baseline.clicks),
    },
    {
      label: "Average CTR",
      value:
        typeof baseline.ctr === "number" ? `${baseline.ctr.toFixed(2)}%` : null,
    },
    {
      label: "Average position",
      value:
        typeof baseline.position === "number"
          ? baseline.position.toFixed(1)
          : null,
    },
  ].filter((metric) => metric.value !== null);

  const hasBaseline = metrics.length > 0;

  const hasContent = Boolean(
    overview ||
    challenges.length ||
    existingStrengths.length ||
    initialIndexingStatus ||
    initialSearchVisibility ||
    hasBaseline,
  );

  if (!hasContent) return null;

  const periodLabel =
    baseline.startDate && baseline.endDate
      ? `${formatDate(baseline.startDate)} – ${formatDate(baseline.endDate)}`
      : baseline.startDate
        ? `From ${formatDate(baseline.startDate)}`
        : null;

  return (
    <section
      className={styles.section}
      aria-labelledby="seo-starting-point-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowPixel} />
            01 / THE STARTING POINT
          </span>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.content}>
            <h2 id="seo-starting-point-title" className={styles.title}>
              Understanding the
              <br />
              starting point<span>.</span>
            </h2>

            {overview && <p className={styles.overview}>{overview}</p>}

            {initialSearchVisibility && (
              <div className={styles.contextBlock}>
                <span className={styles.contextLabel}>
                  INITIAL SEARCH VISIBILITY
                </span>

                <p>{initialSearchVisibility}</p>
              </div>
            )}

            {challenges.length > 0 && (
              <div className={styles.challenges}>
                <h3 className={styles.subheading}>Initial challenges</h3>

                <ol className={styles.challengeList}>
                  {challenges.map((challenge, index) => {
                    const isString = typeof challenge === "string";

                    const title = isString ? challenge : challenge.title;

                    const description = isString ? null : challenge.description;

                    if (!title) return null;

                    return (
                      <li
                        key={
                          isString
                            ? `${challenge}-${index}`
                            : challenge.id || index
                        }
                        className={styles.challengeItem}
                      >
                        <span className={styles.challengeNumber}>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className={styles.challengeContent}>
                          <span className={styles.challengeTitle}>{title}</span>

                          {description && <p>{description}</p>}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}
          </div>

          <div className={styles.sidebar}>
            {hasBaseline && (
              <div className={styles.baselinePanel}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.panelEyebrow}>
                      GOOGLE SEARCH CONSOLE
                    </span>

                    <h3 className={styles.panelTitle}>Initial baseline</h3>
                  </div>

                  <div className={styles.panelIcon} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className={styles.metricsGrid}>
                  {metrics.map((metric) => (
                    <div className={styles.metric} key={metric.label}>
                      <span className={styles.metricValue}>{metric.value}</span>

                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  ))}
                </div>

                {periodLabel && (
                  <div className={styles.panelFooter}>
                    <span className={styles.footerPixel} />
                    {periodLabel}
                  </div>
                )}
              </div>
            )}

            {initialIndexingStatus && (
              <div className={styles.indexingCard}>
                <span className={styles.cardLabel}>INDEXING STATUS</span>

                <p>{initialIndexingStatus}</p>
              </div>
            )}

            {existingStrengths.length > 0 && (
              <div className={styles.strengthsCard}>
                <h3 className={styles.strengthsTitle}>
                  What was already working
                </h3>

                <ul className={styles.strengthsList}>
                  {existingStrengths.map((strength, index) => (
                    <li key={`${strength}-${index}`}>
                      <span aria-hidden="true">+</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={styles.bottomDetail}>
          <span>SEO AUDIT / BASELINE / OPPORTUNITIES</span>
          <span className={styles.detailLine} />
          <span>01</span>
        </div>
      </div>
    </section>
  );
};

export default SEOStartingPoint;
