
"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import styles from "./SEOPerformance.module.css";

const METRICS = {
  impressions: {
    label: "Impressions",
    color: "#0054c9",
  },
  clicks: {
    label: "Clicks",
    color: "#1b8ae4",
  },
  ctr: {
    label: "CTR",
    color: "#0054c9",
  },
  position: {
    label: "Average position",
    color: "#0054c9",
  },
};

const RANGES = [
  { label: "7 days", value: "7" },
  { label: "28 days", value: "28" },
  { label: "3 months", value: "90" },
  { label: "All time", value: "all" },
];

const parseDate = (date) =>
  new Date(`${date}T00:00:00Z`);

const addDays = (date, days) => {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
};

const toDateString = (date) =>
  date.toISOString().slice(0, 10);

const formatDate = (value) => {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(parseDate(value));
};

const formatNumber = (value) =>
  new Intl.NumberFormat("en-CA").format(value);

const formatMetric = (value, metric) => {
  if (value === null || !Number.isFinite(value)) {
    return "N/A";
  }

  if (metric === "ctr") return `${value.toFixed(2)}%`;
  if (metric === "position") return value.toFixed(1);

  return formatNumber(value);
};

const getSummary = (records) => {
  if (!records.length) return null;

  const clicks = records.reduce(
    (sum, item) => sum + (item.clicks ?? 0),
    0
  );

  const impressions = records.reduce(
    (sum, item) => sum + (item.impressions ?? 0),
    0
  );

  const ctr =
    impressions > 0 ? (clicks / impressions) * 100 : 0;

  // Daily average positions cannot be reliably combined
  // into a period-level GSC average position.
  return {
    clicks,
    impressions,
    ctr,
    position: null,
  };
};

const getChange = (current, previous, metric) => {
  if (
    current === null ||
    previous === null ||
    !Number.isFinite(current) ||
    !Number.isFinite(previous)
  ) {
    return null;
  }

  // Percentage-point change for CTR.
  if (metric === "ctr") {
    return {
      value: current - previous,
      unit: "pp",
    };
  }

  if (previous === 0) return null;

  return {
    value: ((current - previous) / previous) * 100,
    unit: "%",
  };
};

const CustomTooltip = ({ active, payload, label, metric }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipDate}>
        {formatDate(label)}
      </span>

      {payload.map((item) => (
        <div className={styles.tooltipRow} key={item.dataKey}>
          <span
            className={styles.tooltipDot}
            style={{ background: item.color }}
          />

          <span>{item.name}</span>

          <strong>
            {formatMetric(item.value, metric)}
          </strong>
        </div>
      ))}
    </div>
  );
};

const SEOPerformance = ({ data }) => {
  const [activeMetric, setActiveMetric] =
    useState("impressions");

  const [activeRange, setActiveRange] =
    useState("28");

  const [showComparison, setShowComparison] =
    useState(false);

  const daily = data?.dailyPerformance || [];

  const records = useMemo(() => {
    if (!Array.isArray(daily)) return [];

    const unique = new Map();

    daily.forEach((item) => {
      if (
        !item ||
        typeof item.date !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(item.date)
      ) {
        return;
      }

      unique.set(item.date, {
        date: item.date,
        clicks: Number.isFinite(item.clicks)
          ? item.clicks
          : null,
        impressions: Number.isFinite(item.impressions)
          ? item.impressions
          : null,
        ctr: Number.isFinite(item.ctr)
          ? item.ctr
          : null,
        position: Number.isFinite(item.position)
          ? item.position
          : null,
      });
    });

    return [...unique.values()].sort((a, b) =>
      a.date.localeCompare(b.date)
    );
  }, [daily]);

  const report = useMemo(() => {
    if (!records.length) return null;

    const endDate = parseDate(records.at(-1).date);

    const startDate =
      activeRange === "all"
        ? parseDate(records[0].date)
        : addDays(endDate, -(Number(activeRange) - 1));

    const current = records.filter((item) => {
      const date = parseDate(item.date);
      return date >= startDate && date <= endDate;
    });

    const duration =
      Math.round(
        (endDate.getTime() - startDate.getTime()) /
          86400000
      ) + 1;

    const previousEnd = addDays(startDate, -1);
    const previousStart = addDays(
      previousEnd,
      -(duration - 1)
    );

    const previous = records.filter((item) => {
      const date = parseDate(item.date);

      return date >= previousStart &&
        date <= previousEnd;
    });

    // Require complete daily coverage for a valid
    // previous-period comparison.
    const canCompare =
      activeRange !== "all" &&
      previous.length === duration &&
      current.length === duration &&
      current.every(
        (item) =>
          item.clicks !== null &&
          item.impressions !== null
      ) &&
      previous.every(
        (item) =>
          item.clicks !== null &&
          item.impressions !== null
      );

    const currentSummary = getSummary(current);
    const previousSummary = canCompare
      ? getSummary(previous)
      : null;

    const chartData = current.map((item, index) => ({
      ...item,
      previousValue: canCompare
        ? previous[index]?.[activeMetric] ?? null
        : null,
    }));

    return {
      current,
      previous,
      chartData,
      currentSummary,
      previousSummary,
      canCompare,
      startDate: toDateString(startDate),
      endDate: toDateString(endDate),
    };
  }, [records, activeRange, activeMetric]);

  const hasData = records.length > 0;

  const metrics = [
    {
      key: "impressions",
      label: "Total impressions",
      value: report?.currentSummary?.impressions ?? null,
    },
    {
      key: "clicks",
      label: "Total clicks",
      value: report?.currentSummary?.clicks ?? null,
    },
    {
      key: "ctr",
      label: "Average CTR",
      value: report?.currentSummary?.ctr ?? null,
    },
    {
      key: "position",
      label: "Average position",
      // Only display a period-level position when
      // an appropriately aggregated value is supplied.
      value: null,
    },
  ];

  const comparisonEnabled =
    showComparison && report?.canCompare;

  return (
    <section
      className={styles.section}
      aria-labelledby="seo-performance-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowPixel} />
              03 / SEARCH PERFORMANCE
            </span>

            <h2
              id="seo-performance-title"
              className={styles.title}
            >
              Measuring the
              <br />
              progress<span>.</span>
            </h2>

            <p className={styles.description}>
              An ongoing look at organic search visibility,
              clicks, and performance recorded through
              Google Search Console.
            </p>
          </div>

          <div className={styles.headerDecoration}>
            <span>GSC / PERFORMANCE DATA</span>
            <div className={styles.decorativePixels}>
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>

        {!hasData ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>↗</span>
            <h3>Performance tracking in progress</h3>
            <p>
              Search performance data will be displayed
              here as it becomes available.
            </p>
          </div>
        ) : (
          <div className={styles.dashboard}>
            <div className={styles.dashboardTop}>
              <div>
                <span className={styles.dashboardLabel}>
                  GOOGLE SEARCH CONSOLE
                </span>
                <h3>Organic search overview</h3>
              </div>

              <div className={styles.rangeControls}>
                {RANGES.map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    className={`${styles.rangeButton} ${
                      activeRange === range.value
                        ? styles.rangeActive
                        : ""
                    }`}
                    onClick={() =>
                      setActiveRange(range.value)
                    }
                    aria-pressed={
                      activeRange === range.value
                    }
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.metricsGrid}>
              {metrics.map((metric) => {
                const change =
                  comparisonEnabled &&
                  report.previousSummary
                    ? getChange(
                        metric.value,
                        report.previousSummary[metric.key],
                        metric.key
                      )
                    : null;

                return (
                  <button
                    key={metric.key}
                    type="button"
                    onClick={() =>
                      setActiveMetric(metric.key)
                    }
                    aria-pressed={
                      activeMetric === metric.key
                    }
                    className={`${styles.metricCard} ${
                      activeMetric === metric.key
                        ? styles.metricActive
                        : ""
                    }`}
                  >
                    <span className={styles.metricLabel}>
                      {metric.label}
                    </span>

                    <strong className={styles.metricValue}>
                      {formatMetric(
                        metric.value,
                        metric.key
                      )}
                    </strong>

                    {change && (
                      <span className={styles.metricChange}>
                        {change.value > 0 ? "+" : ""}
                        {change.value.toFixed(1)}
                        {change.unit} vs previous period
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className={styles.chartPanel}>
              <div className={styles.chartHeader}>
                <div>
                  <span className={styles.chartEyebrow}>
                    PERFORMANCE TREND
                  </span>

                  <h3>{METRICS[activeMetric].label}</h3>

                  <p>
                    {formatDate(report.startDate)} to{" "}
                    {formatDate(report.endDate)}
                  </p>
                </div>

                <label className={styles.compareControl}>
                  <input
                    type="checkbox"
                    checked={comparisonEnabled || false}
                    disabled={!report.canCompare}
                    onChange={(event) =>
                      setShowComparison(
                        event.target.checked
                      )
                    }
                  />

                  Compare previous period
                </label>
              </div>

              <div
                className={styles.chartContainer}
                role="img"
                aria-label={`Daily ${METRICS[
                  activeMetric
                ].label.toLowerCase()} from ${formatDate(
                  report.startDate
                )} to ${formatDate(report.endDate)}`}
              >
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <LineChart
                    data={report.chartData}
                    margin={{
                      top: 12,
                      right: 14,
                      bottom: 8,
                      left: -12,
                    }}
                  >
                    <CartesianGrid
                      stroke="#e2e8f0"
                      strokeDasharray="3 5"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="date"
                      tickFormatter={formatDate}
                      tick={{
                        fill: "#666a7a",
                        fontSize: 11,
                      }}
                      tickLine={false}
                      axisLine={false}
                      minTickGap={28}
                    />

                    <YAxis
                      reversed={activeMetric === "position"}
                      domain={
                        activeMetric === "position"
                          ? ["auto", "auto"]
                          : [0, "auto"]
                      }
                      tick={{
                        fill: "#666a7a",
                        fontSize: 11,
                      }}
                      tickLine={false}
                      axisLine={false}
                      width={48}
                    />

                    <Tooltip
                      content={
                        <CustomTooltip
                          metric={activeMetric}
                        />
                      }
                    />

                    {comparisonEnabled && (
                      <Legend
                        verticalAlign="top"
                        height={35}
                      />
                    )}

                    <Line
                      type="monotone"
                      dataKey={activeMetric}
                      name="Current period"
                      stroke={METRICS[activeMetric].color}
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 5 }}
                      connectNulls={false}
                      isAnimationActive={false}
                    />

                    {comparisonEnabled && (
                      <Line
                        type="monotone"
                        dataKey="previousValue"
                        name="Previous period"
                        stroke="#999ca8"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        connectNulls={false}
                        isAnimationActive={false}
                      />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <p className={styles.chartNote}>
                {activeMetric === "position"
                  ? "Lower average position values indicate better ranking positions. Daily values are shown without calculating an unsupported period average."
                  : "Daily Google Search Console performance. Comparisons use matching calendar-length periods when complete data is available."}
              </p>
            </div>

            <div className={styles.dashboardFooter}>
              <span>
                Source: Google Search Console
              </span>

              <span>
                {formatNumber(report.current.length)}{" "}
                daily records in selected period
              </span>
            </div>
          </div>
        )}

        <div className={styles.bottomDetail}>
          <span>VISIBILITY / CLICKS / RANKINGS</span>
          <span className={styles.detailLine} />
          <span>03</span>
        </div>
      </div>
    </section>
  );
};

export default SEOPerformance;
