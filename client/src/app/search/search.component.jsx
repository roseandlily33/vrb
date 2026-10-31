"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { extrasList } from "../services/Extras/extrasList";
import { articles } from "../blog/data/articles";
import designPackages from "../package/DesignPackage/designPackage";
import { PackageInfo } from "../package/Packages/packageList";
// import seoPackages from "../package/SeoPackage/";
import { Retainer } from "../services/Retainers/retainerList";
import { socialMediaList } from "../services/SocialMedia/socialMedia";

import styles from "./search.module.css";

const CATEGORIES = [
  { id: "all", label: "All Results" },
  { id: "articles", label: "Articles" },
  { id: "services", label: "Services" },
  { id: "design", label: "Design Packages" },
  { id: "projects", label: "Project Packages" },
  { id: "seo", label: "SEO Packages" },
  { id: "retainers", label: "Retainers" },
  { id: "social", label: "Social Media" },
];

// Update these paths to match your actual Next.js routes.
const ROUTES = {
  articles: "/blog",
  services: "/services",
  design: "/package/design",
  projects: "/package",
  seo: "/package/seo",
  retainers: "/services/retainers",
  social: "/services/social-media",
};

const asArray = (value) => {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") {
    return Object.values(value).filter(
      (item) => item && typeof item === "object",
    );
  }
  return [];
};

const toText = (value) => {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) {
    return value.map(toText).filter(Boolean).join(" ");
  }
  return "";
};

const firstText = (...values) =>
  values.map(toText).find((value) => value.trim()) || "";

const stripHTML = (value) =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const normalize = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const makeSlug = (value) =>
  normalize(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const normalizePath = (value) => {
  if (typeof value !== "string" || !value.trim()) return "";

  const path = value.trim();

  if (/^https?:\/\//i.test(path)) {
    try {
      const url = new URL(path);
      return url.pathname + url.search + url.hash;
    } catch {
      return "";
    }
  }

  return path.startsWith("/") ? path : `/${path}`;
};
const BLOG_CATEGORY_SLUGS = {
  "web-design-strategy": "web-design",
};
const getURL = (item, category) => {
  const explicit = firstText(item.href, item.url, item.path, item.link);

  if (explicit) return normalizePath(explicit);

  const slug = firstText(item.slug, item.id);

  if (!slug) return "";

  // Blog articles have category-based routes

  if (category === "articles") {
    const rawCategorySlug =
      firstText(item.categorySlug, item.categoryPath) ||
      makeSlug(item.category);

    const categorySlug =
      BLOG_CATEGORY_SLUGS[rawCategorySlug] || rawCategorySlug;

    if (!categorySlug) return "";

    return `/blog/${encodeURIComponent(categorySlug)}/${encodeURIComponent(slug)}`;
  }

  // Other services and packages
  return `${ROUTES[category]}/${encodeURIComponent(slug)}`;
};

const normalizeCollection = (collection, category) =>
  asArray(collection)
    .filter((item) => item && typeof item === "object")
    .map((item, index) => {
      const title = firstText(
        item.title,
        item.name,
        item.heading,
        item.seoTitle,
      );

      if (!title) return null;

      const description = stripHTML(
        firstText(
          item.description,
          item.shortDescription,
          item.excerpt,
          item.summary,
          item.seoDescription,
          item.metaDescription,
          item.subtitle,
        ),
      );

      const contentCategory = firstText(item.category, item.type, item.tag);

      const keywords = firstText(item.keywords, item.tags, item.searchTerms);

      const href = getURL(item, category);

      return {
        id: `${category}-${item.slug || item.id || index}`,
        title,
        description,
        category,
        contentCategory,
        keywords,
        href,
        searchTitle: normalize(title),
        searchDescription: normalize(description),
        searchCategory: normalize(contentCategory),
        searchKeywords: normalize(keywords),
      };
    })
    .filter(Boolean);

const SEARCH_INDEX = [
  ...normalizeCollection(articles, "articles"),
  ...normalizeCollection(extrasList, "services"),
  ...normalizeCollection(designPackages, "design"),
  ...normalizeCollection(PackageInfo, "projects"),
  //   ...normalizeCollection(seoPackages, "seo"),
  ...normalizeCollection(Retainer, "retainers"),
  ...normalizeCollection(socialMediaList, "social"),
];

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef(null);

  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(urlQuery);
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  // Support "/" to focus search, and Escape to clear focus.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName) &&
        !document.activeElement?.isContentEditable
      ) {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if (event.key === "Escape") {
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setVisibleCount(9);
  }, [query, activeCategory]);

  const searchTerms = useMemo(
    () => normalize(query).split(/\s+/).filter(Boolean),
    [query],
  );

  const results = useMemo(() => {
    if (!searchTerms.length) return [];

    return SEARCH_INDEX.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      const searchable = [
        item.searchTitle,
        item.searchDescription,
        item.searchCategory,
        item.searchKeywords,
      ].join(" ");

      return searchTerms.every((term) => searchable.includes(term));
    })
      .map((item) => {
        let score = 0;

        searchTerms.forEach((term) => {
          if (item.searchTitle === term) score += 12;
          else if (item.searchTitle.startsWith(term)) score += 8;
          else if (item.searchTitle.includes(term)) score += 5;

          if (item.searchKeywords.includes(term)) score += 3;
          if (item.searchCategory.includes(term)) score += 2;
          if (item.searchDescription.includes(term)) score += 1;
        });

        return { ...item, score };
      })
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  }, [searchTerms, activeCategory]);

  const counts = useMemo(() => {
    const categoryCounts = {};

    CATEGORIES.forEach(({ id }) => {
      categoryCounts[id] =
        id === "all"
          ? results.length
          : SEARCH_INDEX.filter((item) => {
              if (item.category !== id) return false;

              const searchable = [
                item.searchTitle,
                item.searchDescription,
                item.searchCategory,
                item.searchKeywords,
              ].join(" ");

              return searchTerms.every((term) => searchable.includes(term));
            }).length;
    });

    return categoryCounts;
  }, [results, searchTerms]);

  const updateQuery = (value) => {
    setQuery(value);

    // Keep shareable URL in sync without adding browser history
    // entries for every keystroke.
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) params.set("q", value);
    else params.delete("q");

    const suffix = params.toString();

    window.history.replaceState(
      null,
      "",
      suffix ? `/search?${suffix}` : "/search",
    );
  };

  const clearSearch = () => {
    updateQuery("");
    setActiveCategory("all");
    inputRef.current?.focus();
  };

  const visibleResults = results.slice(0, visibleCount);
  const hasQuery = searchTerms.length > 0;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.pixel} />
            VRB / SITE SEARCH
          </span>

          <h1>
            What are you
            <br />
            <span>looking for?</span>
          </h1>

          <p className={styles.intro}>
            Search articles, services, packages, and resources to find exactly
            what you need.
          </p>

          <div className={styles.searchBox}>
            <svg
              className={styles.searchIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 5 5" />
            </svg>

            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Try SEO, website design, maintenance..."
              aria-label="Search VRB"
              autoComplete="off"
              className={styles.searchInput}
            />

            {query && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={clearSearch}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

            <span className={styles.searchShortcut}>/</span>
          </div>

          <div className={styles.searchHint}>
            <span>INSTANT SEARCH</span>
            <span className={styles.hintLine} />
            <span>{SEARCH_INDEX.length} INDEXED ITEMS</span>
          </div>
        </div>
      </section>

      <section className={styles.resultsSection} aria-label="Search results">
        <div className={styles.container}>
          {!hasQuery ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyNumber}>01</span>
              <h2>Start exploring.</h2>
              <p>
                Enter a keyword above to discover relevant articles, services,
                and packages.
              </p>

              <div className={styles.suggestions}>
                {["SEO", "Web Design", "Maintenance", "Social Media"].map(
                  (term) => (
                    <button
                      type="button"
                      key={term}
                      onClick={() => updateQuery(term)}
                    >
                      {term}
                      <span aria-hidden="true">↗</span>
                    </button>
                  ),
                )}
              </div>
            </div>
          ) : (
            <>
              <div className={styles.resultsHeader}>
                <div>
                  <span className={styles.resultsEyebrow}>SEARCH RESULTS</span>

                  <h2>
                    {results.length}{" "}
                    {results.length === 1 ? "result" : "results"} found
                  </h2>

                  <p>
                    Showing results for <strong>“{query.trim()}”</strong>
                  </p>
                </div>
              </div>

              <div className={styles.filters}>
                {CATEGORIES.map((category) => (
                  <button
                    type="button"
                    key={category.id}
                    className={`${styles.filterButton} ${
                      activeCategory === category.id ? styles.filterActive : ""
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                    aria-pressed={activeCategory === category.id}
                  >
                    {category.label}
                    <span>{counts[category.id] || 0}</span>
                  </button>
                ))}
              </div>

              {results.length ? (
                <>
                  <div className={styles.resultsGrid}>
                    {visibleResults.map((item) => {
                      const categoryLabel =
                        CATEGORIES.find(
                          (category) => category.id === item.category,
                        )?.label || "Resource";

                      const content = (
                        <>
                          <div className={styles.cardTop}>
                            <span className={styles.cardCategory}>
                              {categoryLabel}
                            </span>

                            <span className={styles.cardArrow}>↗</span>
                          </div>

                          <h3>{item.title}</h3>

                          {item.description && (
                            <p>
                              {item.description.length > 170
                                ? `${item.description.slice(0, 170).trim()}…`
                                : item.description}
                            </p>
                          )}

                          {item.contentCategory && (
                            <span className={styles.contentTag}>
                              {item.contentCategory}
                            </span>
                          )}

                          <span className={styles.cardFooter}>
                            {item.href
                              ? "Explore resource"
                              : "Link not configured"}
                          </span>
                        </>
                      );

                      return item.href ? (
                        <Link
                          href={item.href}
                          key={item.id}
                          className={styles.resultCard}
                        >
                          {content}
                        </Link>
                      ) : (
                        <article
                          key={item.id}
                          className={`${styles.resultCard} ${styles.unlinkedCard}`}
                        >
                          {content}
                        </article>
                      );
                    })}
                  </div>

                  {visibleCount < results.length && (
                    <div className={styles.loadMore}>
                      <button
                        type="button"
                        onClick={() => setVisibleCount((count) => count + 9)}
                      >
                        Load more results
                        <span aria-hidden="true">↓</span>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className={styles.noResults}>
                  <span>NO MATCHES FOUND</span>
                  <h3>Nothing matched that search.</h3>
                  <p>Try a different keyword or select another category.</p>
                  <button type="button" onClick={clearSearch}>
                    Clear search
                  </button>
                </div>
              )}
            </>
          )}

          <div className={styles.bottomDetail}>
            <span>ARTICLES / SERVICES / PACKAGES</span>
            <span className={styles.detailLine} />
            <span>VRB</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
