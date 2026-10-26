
"use client";

import { useMemo, useState } from "react";
import styles from "./SEOPages.module.css";

const PAGE_SIZE = 8;

const formatNumber = (value) =>
  Number.isFinite(value)
    ? new Intl.NumberFormat("en-CA").format(value)
    : "N/A";

const formatMetric = (value, type) => {
  if (!Number.isFinite(value)) return "N/A";

  if (type === "ctr") return `${value.toFixed(2)}%`;
  if (type === "position") return value.toFixed(1);

  return formatNumber(value);
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

const getSnapshotLabel = (snapshot) => {
  const start = formatDate(snapshot.period?.startDate);
  const end = formatDate(snapshot.period?.endDate);

  if (start && end) return `${start} – ${end}`;
  if (end) return `Through ${end}`;
  if (snapshot.exportedAt) {
    return `Exported ${formatDate(snapshot.exportedAt)}`;
  }

  return snapshot.id;
};

const normalizePage = (value) => {
  if (!value || typeof value !== "string") return "";

  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname.replace(/\/+$/, "") || "/"}`;
  } catch {
    return value.split("?")[0].replace(/\/+$/, "") || "/";
  }
};

const getPagePath = (value) => {
  if (!value) return "/";

  try {
    const url = new URL(value);
    return `${url.pathname}${url.search}`;
  } catch {
    return value;
  }
};

const getPageTitle = (page) => {
  if (page.title) return page.title;

  const path = getPagePath(page.page);

  if (path === "/") return "Homepage";

  const lastSegment = path
    .split("?")[0]
    .split("/")
    .filter(Boolean)
    .at(-1);

  if (!lastSegment) return "Website page";

  return decodeURIComponent(lastSegment)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const getPreviousSnapshot = (snapshots, selectedIndex) => {
  const current = snapshots[selectedIndex];

  if (!current?.period?.startDate || !current?.period?.endDate) {
    return null;
  }

  const duration =
    (Date.parse(`${current.period.endDate}T00:00:00Z`) -
      Date.parse(`${current.period.startDate}T00:00:00Z`)) /
      86400000 +
    1;

  return (
    snapshots
      .filter((snapshot, index) => {
        if (index === selectedIndex) return false;

        const start = snapshot.period?.startDate;
        const end = snapshot.period?.endDate;

        if (!start || !end || end >= current.period.startDate) {
          return false;
        }

        const previousDuration =
          (Date.parse(`${end}T00:00:00Z`) -
            Date.parse(`${start}T00:00:00Z`)) /
            86400000 +
          1;

        return (
          previousDuration === duration &&
          JSON.stringify(snapshot.filters || {}) ===
            JSON.stringify(current.filters || {})
        );
      })
      .sort((a, b) =>
        b.period.endDate.localeCompare(a.period.endDate)
      )[0] || null
  );
};

const SEOPages = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("impressions");
  const [sortDirection, setSortDirection] = useState("desc");
  const [page, setPage] = useState(1);
  const [showChanges, setShowChanges] = useState(false);

  const snapshots = useMemo(() => {
    if (!Array.isArray(data?.snapshots)) return [];

    return data.snapshots
      .filter(
        (snapshot) =>
          snapshot?.id &&
          Array.isArray(snapshot.pages) &&
          snapshot.pages.length > 0
      )
      .sort((a, b) =>
        (b.period?.endDate || b.exportedAt || "").localeCompare(
          a.period?.endDate || a.exportedAt || ""
        )
      );
  }, [data]);

  const selectedIndex = Math.max(
    0,
    snapshots.findIndex((item) => item.id === selectedId)
  );

  const selectedSnapshot = snapshots[selectedIndex];

  const previousSnapshot = useMemo(
    () => getPreviousSnapshot(snapshots, selectedIndex),
    [snapshots, selectedIndex]
  );

  const previousPageMap = useMemo(() => {
    const map = new Map();

    previousSnapshot?.pages?.forEach((item) => {
      if (item.page) {
        map.set(normalizePage(item.page), item);
      }
    });

    return map;
  }, [previousSnapshot]);

  const allPages = useMemo(() => {
    if (!selectedSnapshot) return [];

    return selectedSnapshot.pages
      .filter((item) => item && item.page)
      .map((item) => {
        const previous = previousPageMap.get(
          normalizePage(item.page)
        );

        return {
          ...item,
          title: getPageTitle(item),
          path: getPagePath(item.page),
          impressionChange:
            previous &&
            Number.isFinite(item.impressions) &&
            Number.isFinite(previous.impressions)
              ? item.impressions - previous.impressions
              : null,
        };
      });
  }, [selectedSnapshot, previousPageMap]);

  const summary = useMemo(() => {
    const impressions = allPages.reduce(
      (sum, item) => sum + (item.impressions || 0),
      0
    );

    const clicks = allPages.reduce(
      (sum, item) => sum + (item.clicks || 0),
      0
    );

    return {
      count: allPages.length,
      impressions,
      clicks,
    };
  }, [allPages]);

  const filteredPages = useMemo(() => {
    const term = search.trim().toLowerCase();

    return allPages
      .filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          item.path.toLowerCase().includes(term)
      )
      .sort((a, b) => {
        const first = a[sortKey];
        const second = b[sortKey];

        if (!Number.isFinite(first)) return 1;
        if (!Number.isFinite(second)) return -1;

        return sortDirection === "asc"
          ? first - second
          : second - first;
      });
  }, [allPages, search, sortKey, sortDirection]);

  const maxImpressions = Math.max(
    1,
    ...allPages.map((item) => item.impressions || 0)
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPages.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, totalPages);

  const visiblePages = filteredPages.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((current) =>
        current === "desc" ? "asc" : "desc"
      );
    } else {
      setSortKey(key);
      setSortDirection(key === "position" ? "asc" : "desc");
    }

    setPage(1);
  };

  if (!snapshots.length) return null;

  return (
    <section
      className={styles.section}
      aria-labelledby="seo-pages-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowPixel} />
            05 / PAGE PERFORMANCE
          </span>

          <h2 id="seo-pages-title" className={styles.title}>
            Which pages are
            <br />
            getting noticed<span>.</span>
          </h2>

          <p className={styles.description}>
            Explore how individual website pages are
            performing in organic search, from early
            impressions to growing visibility.
          </p>
        </div>

        <div className={styles.dashboard}>
          <div className={styles.dashboardHeader}>
            <div>
              <span className={styles.dashboardEyebrow}>
                GOOGLE SEARCH CONSOLE
              </span>

              <h3>Page performance</h3>
            </div>

            <div className={styles.snapshotControl}>
              <label htmlFor="seo-pages-period">
                Reporting period
              </label>

              <select
                id="seo-pages-period"
                value={selectedSnapshot.id}
                onChange={(event) => {
                  setSelectedId(event.target.value);
                  setPage(1);
                  setShowChanges(false);
                }}
              >
                {snapshots.map((snapshot) => (
                  <option
                    key={snapshot.id}
                    value={snapshot.id}
                  >
                    {getSnapshotLabel(snapshot)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.summaryGrid}>
            {[
              {
                label: "Pages reported",
                value: summary.count,
              },
              {
                label: "Exported impressions",
                value: summary.impressions,
              },
              {
                label: "Exported clicks",
                value: summary.clicks,
              },
            ].map((item) => (
              <div
                className={styles.summaryCard}
                key={item.label}
              >
                <strong>{formatNumber(item.value)}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.resultsPanel}>
            <div className={styles.toolbar}>
              <div className={styles.searchBox}>
                <input
                  type="search"
                  placeholder="Search pages..."
                  aria-label="Search pages"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setPage(1);
                  }}
                />
              </div>

              <div className={styles.toolbarActions}>
                <label className={styles.sortControl}>
                  Sort by
                  <select
                    value={`${sortKey}:${sortDirection}`}
                    onChange={(event) => {
                      const [key, direction] =
                        event.target.value.split(":");

                      setSortKey(key);
                      setSortDirection(direction);
                      setPage(1);
                    }}
                  >
                    <option value="impressions:desc">
                      Most impressions
                    </option>
                    <option value="clicks:desc">
                      Most clicks
                    </option>
                    <option value="ctr:desc">
                      Highest CTR
                    </option>
                    <option value="position:asc">
                      Best average position
                    </option>
                    <option value="position:desc">
                      Lowest average position
                    </option>
                  </select>
                </label>

                {previousSnapshot && (
                  <label className={styles.compareControl}>
                    <input
                      type="checkbox"
                      checked={showChanges}
                      onChange={(event) =>
                        setShowChanges(event.target.checked)
                      }
                    />
                    Compare impressions
                  </label>
                )}
              </div>
            </div>

            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Page</th>
                    <th scope="col">
                      <button
                        type="button"
                        onClick={() => handleSort("clicks")}
                      >
                        Clicks
                      </button>
                    </th>
                    <th scope="col">
                      <button
                        type="button"
                        onClick={() =>
                          handleSort("impressions")
                        }
                      >
                        Impressions
                      </button>
                    </th>
                    <th scope="col">
                      <button
                        type="button"
                        onClick={() => handleSort("ctr")}
                      >
                        CTR
                      </button>
                    </th>
                    <th scope="col">
                      <button
                        type="button"
                        onClick={() =>
                          handleSort("position")
                        }
                      >
                        Position
                      </button>
                    </th>
                    {showChanges && previousSnapshot && (
                      <th scope="col">
                        Impression change
                      </th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {visiblePages.length ? (
                    visiblePages.map((item, index) => {
                      const width =
                        ((item.impressions || 0) /
                          maxImpressions) *
                        100;

                      return (
                        <tr key={`${item.page}-${index}`}>
                          <td className={styles.pageCell}>
                            <div className={styles.pageInfo}>
                              <strong>{item.title}</strong>

                              <span>{item.path}</span>

                              <div
                                className={styles.barTrack}
                                aria-hidden="true"
                              >
                                <span
                                  className={styles.barFill}
                                  style={{
                                    width: `${width}%`,
                                  }}
                                />
                              </div>
                            </div>
                          </td>

                          <td>
                            {formatMetric(item.clicks)}
                          </td>

                          <td>
                            {formatMetric(
                              item.impressions
                            )}
                          </td>

                          <td>
                            {formatMetric(item.ctr, "ctr")}
                          </td>

                          <td>
                            {formatMetric(
                              item.position,
                              "position"
                            )}
                          </td>

                          {showChanges &&
                            previousSnapshot && (
                              <td>
                                {item.impressionChange ===
                                null ? (
                                  <span
                                    className={styles.neutral}
                                  >
                                    N/A
                                  </span>
                                ) : (
                                  <span
                                    className={
                                      item.impressionChange > 0
                                        ? styles.positive
                                        : item.impressionChange < 0
                                          ? styles.negative
                                          : styles.neutral
                                    }
                                  >
                                    {item.impressionChange > 0
                                      ? "+"
                                      : ""}
                                    {formatNumber(
                                      item.impressionChange
                                    )}
                                  </span>
                                )}
                              </td>
                            )}
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan={
                          showChanges && previousSnapshot
                            ? 6
                            : 5
                        }
                        className={styles.emptyResults}
                      >
                        No pages match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className={styles.resultsFooter}>
              <span>
                Showing{" "}
                {filteredPages.length === 0
                  ? 0
                  : (currentPage - 1) * PAGE_SIZE + 1}
                –
                {Math.min(
                  currentPage * PAGE_SIZE,
                  filteredPages.length
                )}{" "}
                of {filteredPages.length} pages
              </span>

              {totalPages > 1 && (
                <div className={styles.pagination}>
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setPage(currentPage - 1)
                    }
                  >
                    Previous
                  </button>

                  <span>
                    {currentPage} / {totalPages}
                  </span>

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setPage(currentPage + 1)
                    }
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className={styles.dataNote}>
          Metrics reflect pages included in the selected
          Google Search Console export. Exported row totals
          may differ from the overall performance totals.
        </p>

        <div className={styles.bottomDetail}>
          <span>PAGES / IMPRESSIONS / PERFORMANCE</span>
          <span className={styles.detailLine} />
          <span>05</span>
        </div>
      </div>
    </section>
  );
};

export default SEOPages;
