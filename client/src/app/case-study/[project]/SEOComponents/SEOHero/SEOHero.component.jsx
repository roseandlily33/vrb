import Link from "next/link";
import styles from "./SEOHero.module.css";

const formatNumber = (value) => {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return null;
  }

  return new Intl.NumberFormat("en-CA").format(value);
};

const formatDate = (value) => {
  if (!value) return null;

  const date = new Date(`${value}T12:00:00`);

  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

const SEOHero = ({ data }) => {
  if (!data?.project) return null;

  const {
    project,
    searchConsole = {},
    id,
  } = data;

  const {
    name,
    website,
    industry,
    description,
    role,
    seoStartDate,
    trackingStartDate,
    status,
    lastUpdated,
    dataThrough,
    services = [],
  } = project;

  const daily = searchConsole.dailyPerformance || [];

  // Prefer the daily records for all-time performance.
  // Filter out invalid records before calculating totals.
  const validDaily = daily.filter(
    (item) =>
      item &&
      typeof item.date === "string" &&
      Number.isFinite(item.clicks) &&
      Number.isFinite(item.impressions)
  );

  const hasDailyData = validDaily.length > 0;

  const totalClicks = hasDailyData
    ? validDaily.reduce((sum, item) => sum + item.clicks, 0)
    : null;

  const totalImpressions = hasDailyData
    ? validDaily.reduce((sum, item) => sum + item.impressions, 0)
    : null;

  const overallCTR =
    totalImpressions !== null && totalImpressions > 0
      ? (totalClicks / totalImpressions) * 100
      : totalImpressions === 0
        ? 0
        : null;

  const sortedDaily = [...validDaily].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  const firstDate = sortedDaily[0]?.date || trackingStartDate;
  const latestDate = sortedDaily.at(-1)?.date || dataThrough;

  const metrics = [
    {
      label: "Impressions",
      value: formatNumber(totalImpressions),
    },
    {
      label: "Organic clicks",
      value: formatNumber(totalClicks),
    },
    {
      label: "Average CTR",
      value: overallCTR !== null
        ? `${overallCTR.toFixed(2)}%`
        : null,
    },
    {
      label: "Days recorded",
      value: hasDailyData
        ? formatNumber(
            new Set(validDaily.map((item) => item.date)).size
          )
        : null,
    },
  ].filter((metric) => metric.value !== null);

  const isOngoing = status === "ongoing";

  const displayDate = dataThrough || latestDate || lastUpdated;

  return (
    <section className={styles.hero} aria-labelledby="seo-hero-title">
      <div className={styles.gridBackground} aria-hidden="true" />

      <div className={styles.pixelCluster} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowPixel} />
            <span>VRB / SEO CASE STUDY</span>
          </div>

          {id && (
            <span className={styles.projectId}>
              {id.replace(/-/g, " ").toUpperCase()}
            </span>
          )}
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <span className={styles.sectionLabel}>
                SEARCH ENGINE OPTIMIZATION
              </span>

              <h1 id="seo-hero-title" className={styles.title}>
                {name}
                <span className={styles.titleAccent}>.</span>
              </h1>

              {description && (
                <p className={styles.description}>
                  {description}
                </p>
              )}
            </div>

            <div className={styles.tags}>
              {role && (
                <span className={styles.tag}>{role}</span>
              )}

              {industry && (
                <span className={styles.tag}>{industry}</span>
              )}

              {services.map((service, index) => (
                <span
                  key={`${service}-${index}`}
                  className={styles.tag}
                >
                  {service}
                </span>
              ))}
            </div>

            <div className={styles.projectDetails}>
              {seoStartDate && (
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>
                    SEO STARTED
                  </span>
                  <span className={styles.detailValue}>
                    {formatDate(seoStartDate)}
                  </span>
                </div>
              )}

              {trackingStartDate && (
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>
                    TRACKING SINCE
                  </span>
                  <span className={styles.detailValue}>
                    {formatDate(trackingStartDate)}
                  </span>
                </div>
              )}

              <div className={styles.detail}>
                <span className={styles.detailLabel}>
                  PROJECT STATUS
                </span>

                <span className={styles.status}>
                  <span
                    className={`${styles.statusDot} ${
                      isOngoing ? styles.active : styles.completed
                    }`}
                  />
                  {isOngoing ? "Ongoing" : "Completed"}
                </span>
              </div>
            </div>

            {website && (
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.websiteLink}
              >
                Visit website
                <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>

          <aside
            className={styles.performancePanel}
            aria-label="Google Search performance summary"
          >
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.panelEyebrow}>
                  GOOGLE SEARCH CONSOLE
                </span>
                <h2 className={styles.panelTitle}>
                  Search performance
                </h2>
              </div>

              <span className={styles.panelIcon} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>

            {metrics.length > 0 ? (
              <>
                <div className={styles.metricsGrid}>
                  {metrics.map((metric) => (
                    <div
                      className={styles.metric}
                      key={metric.label}
                    >
                      <span className={styles.metricValue}>
                        {metric.value}
                      </span>
                      <span className={styles.metricLabel}>
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className={styles.panelFooter}>
                  <span className={styles.footerIndicator} />
                  <span>
                    {firstDate && latestDate
                      ? `${formatDate(firstDate)} – ${formatDate(latestDate)}`
                      : "Available tracking data"}
                  </span>
                </div>
              </>
            ) : (
              <div className={styles.emptyPerformance}>
                <span className={styles.emptyIcon}>↗</span>

                <h3>Tracking search visibility</h3>

                <p>
                  Performance data will appear here as
                  Google Search Console collects results.
                </p>
              </div>
            )}

            {displayDate && (
              <div className={styles.dataUpdated}>
                Data through {formatDate(displayDate)}
              </div>
            )}
          </aside>
        </div>

        <div className={styles.bottomBar}>
          <span>SEO / PERFORMANCE / PROGRESS</span>
          <span className={styles.bottomLine} />
          <span>VRB WEB DESIGN & DEVELOPMENT</span>
        </div>
      </div>
    </section>
  );
};

export default SEOHero;
