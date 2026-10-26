
"use client";

import { useMemo, useState } from "react";
import styles from "./SEOQueries.module.css";

const PAGE_SIZE = 10;

const formatNumber = (value) => {
  if (!Number.isFinite(value)) return "N/A";

  return new Intl.NumberFormat("en-CA").format(value);
};

const formatPercent = (value) => {
  if (!Number.isFinite(value)) return "N/A";
  return `${value.toFixed(2)}%`;
};

const formatPosition = (value) => {
  if (!Number.isFinite(value)) return "N/A";
  return value.toFixed(1);
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

const getComparablePrevious = (snapshots, selectedIndex) => {
  const current = snapshots[selectedIndex];

  if (!current?.period?.startDate || !current?.period?.endDate) {
    return null;
  }

  const currentStart = current.period.startDate;
  const currentEnd = current.period.endDate;

  const currentDays =
    (Date.parse(`${currentEnd}T00:00:00Z`) -
      Date.parse(`${currentStart}T00:00:00Z`)) /
      86400000 +
    1;

  const previous = snapshots
    .filter((snapshot, index) => {
      if (index === selectedIndex) return false;

      const start = snapshot.period?.startDate;
      const end = snapshot.period?.endDate;

      if (!start || !end || end >= currentStart) return false;

      const days =
        (Date.parse(`${end}T00:00:00Z`) -
          Date.parse(`${start}T00:00:00Z`)) /
          86400000 +
        1;

      const sameFilters =
        JSON.stringify(snapshot.filters || {}) ===
        JSON.stringify(current.filters || {});

      return days === currentDays && sameFilters;
    })
    .sort((a, b) =>
      b.period.endDate.localeCompare(a.period.endDate)
    );

  return previous[0] || null;
};

const SEOQueries = ({ data }) => {
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
          snapshot &&
          snapshot.id &&
          Array.isArray(snapshot.queries) &&
          snapshot.queries.length > 0
      )
      .sort((a, b) =>
        (b.period?.endDate || b.exportedAt || "").localeCompare(
          a.period?.endDate || a.exportedAt || ""
        )
      );
  }, [data]);

  const selectedIndex = Math.max(
    0,
    snapshots.findIndex((snapshot) => snapshot.id === selectedId)
  );

  const selectedSnapshot = snapshots[selectedIndex];

  const previousSnapshot = useMemo(
    () => getComparablePrevious(snapshots, selectedIndex),
    [snapshots, selectedIndex]
  );

  const previousQueryMap = useMemo(() => {
    const map = new Map();

    previousSnapshot?.queries?.forEach((query) => {
      map.set(query.query.toLowerCase(), query);
    });

    return map;
  }, [previousSnapshot]);

  const queries = useMemo(() => {
    if (!selectedSnapshot) return [];

    const normalizedSearch = search.trim().toLowerCase();

    return selectedSnapshot.queries
      .filter(
        (item) =>
          item &&
          typeof item.query === "string" &&
          item.query.toLowerCase().includes(normalizedSearch)
      )
      .map((item) => {
        const previous = previousQueryMap.get(
          item.query.toLowerCase()
        );

        const positionChange =
          previous &&
          Number.isFinite(item.position) &&
          Number.isFinite(previous.position)
            ? previous.position - item.position
            : null;

        return {
          ...item,
          positionChange,
        };
      })
      .sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];

        if (!Number.isFinite(aValue)) return 1;
        if (!Number.isFinite(bValue)) return -1;

        return sortDirection === "asc"
          ? aValue - bValue
          : bValue - aValue;
      });
  }, [
    selectedSnapshot,
    search,
    sortKey,
    sortDirection,
    previousQueryMap,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(queries.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedQueries = queries.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((direction) =>
        direction === "desc" ? "asc" : "desc"
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
      aria-labelledby="seo-queries-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowPixel} />
              04 / SEARCH QUERIES
            </span>

            <h2 id="seo-queries-title" className={styles.title}>
              What people are
              <br />
              searching for<span>.</span>
            </h2>

            <p className={styles.description}>
              Explore the search queries generating visibility
              for this website, including impressions, clicks,
              click-through rates, and average positions.
            </p>
          </div>

          <div className={styles.headerStat}>
            <span className={styles.headerStatValue}>
              {formatNumber(selectedSnapshot.queries.length)}
            </span>
            <span className={styles.headerStatLabel}>
              EXPORTED
              <br />
              QUERIES
            </span>
          </div>
        </div>

        <div className={styles.tablePanel}>
          <div className={styles.panelTop}>
            <div>
              <span className={styles.panelEyebrow}>
                GOOGLE SEARCH CONSOLE
              </span>
              <h3>Search query performance</h3>
            </div>

            <div className={styles.snapshotControl}>
              <label htmlFor="seo-query-snapshot">
                Reporting period
              </label>

              <select
                id="seo-query-snapshot"
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

          <div className={styles.toolbar}>
            <div className={styles.searchBox}>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <circle cx="10.8" cy="10.8" r="6.5" />
                <path d="m16 16 5 5" />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setPage(1);
                }}
                placeholder="Search queries..."
                aria-label="Search queries"
              />
            </div>

            {previousSnapshot && (
              <label className={styles.compareControl}>
                <input
                  type="checkbox"
                  checked={showChanges}
                  onChange={(event) =>
                    setShowChanges(event.target.checked)
                  }
                />
                Show ranking changes
              </label>
            )}
          </div>

          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Search query</th>

                  {[
                    ["clicks", "Clicks"],
                    ["impressions", "Impressions"],
                    ["ctr", "CTR"],
                    ["position", "Position"],
                  ].map(([key, label]) => (
                    <th scope="col" key={key}>
                      <button
                        type="button"
                        className={styles.sortButton}
                        onClick={() => handleSort(key)}
                        aria-label={`Sort by ${label}`}
                      >
                        {label}
                        <span aria-hidden="true">
                          {sortKey === key
                            ? sortDirection === "asc"
                              ? "↑"
                              : "↓"
                            : "↕"}
                        </span>
                      </button>
                    </th>
                  ))}

                  {showChanges && previousSnapshot && (
                    <th scope="col">Position change</th>
                  )}
                </tr>
              </thead>

              <tbody>
                {paginatedQueries.length > 0 ? (
                  paginatedQueries.map((item, index) => (
                    <tr
                      key={`${item.query}-${index}`}
                    >
                      <td className={styles.queryCell}>
                        {item.query}
                      </td>

                      <td>{formatNumber(item.clicks)}</td>

                      <td>
                        {formatNumber(item.impressions)}
                      </td>

                      <td>{formatPercent(item.ctr)}</td>

                      <td>
                        {formatPosition(item.position)}
                      </td>

                      {showChanges && previousSnapshot && (
                        <td>
                          {item.positionChange === null ? (
                            <span className={styles.noChange}>
                              N/A
                            </span>
                          ) : (
                            <span
                              className={
                                item.positionChange > 0
                                  ? styles.positiveChange
                                  : item.positionChange < 0
                                    ? styles.negativeChange
                                    : styles.noChange
                              }
                            >
                              {item.positionChange > 0
                                ? "↑ "
                                : item.positionChange < 0
                                  ? "↓ "
                                  : ""}
                              {Math.abs(
                                item.positionChange
                              ).toFixed(1)}
                            </span>
                          )}
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={
                        showChanges && previousSnapshot ? 6 : 5
                      }
                      className={styles.emptyResults}
                    >
                      No queries match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className={styles.tableFooter}>
            <span className={styles.resultCount}>
              Showing{" "}
              {queries.length === 0
                ? 0
                : (currentPage - 1) * PAGE_SIZE + 1}
              –
              {Math.min(
                currentPage * PAGE_SIZE,
                queries.length
              )}{" "}
              of {formatNumber(queries.length)} queries
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

        <p className={styles.dataNote}>
          Search query data is sourced from Google Search
          Console exports. Anonymized queries may not appear
          in exported results, so the number of rows should
          not be interpreted as a complete count of all
          searches.
        </p>

        <div className={styles.bottomDetail}>
          <span>KEYWORDS / VISIBILITY / RANKINGS</span>
          <span className={styles.detailLine} />
          <span>04</span>
        </div>
      </div>
    </section>
  );
};

export default SEOQueries;
