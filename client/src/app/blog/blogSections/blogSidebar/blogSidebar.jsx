import { articles } from "../../articles";
import Link from "next/link";
import styles from "./blogSidebar.module.css";

const categoryRoutes = {
  "Website Redesign": "website-redesign",
  "Web Design": "web-design",
  "Web Design & Strategy": "web-design",
  SEO: "seo",
  "UX & UI Development": "ux-ui-development",
  "UX/UI & Development": "ux-ui-development",
  "Social Media": "social-media",
  "Website Maintenance": "website-maintenance",
};

export default function BlogSidebar({
  currentSlug,
  currentCategory,
  limit = 3,
}) {
  const relatedArticles = articles
    .filter(
      (article) =>
        article.slug !== currentSlug && article.category === currentCategory,
    )
    .slice(0, limit);

  if (!relatedArticles.length) return null;

  const categoryPath = categoryRoutes[currentCategory];

  return (
    <aside className={styles.sidebar} aria-label="Related articles">
      <div className={styles.sidebarHeader}>
        <span className={styles.eyebrow}>In This Topic</span>
        <span className={styles.headerPixel} aria-hidden="true" />
      </div>

      <div className={styles.articleList}>
        {relatedArticles.map((article, index) => {
          const articleCategoryPath = categoryRoutes[article.category];

          return (
            <Link
              key={article.id}
              href={`/blog/${articleCategoryPath}/${article.slug}`}
              className={styles.articleLink}
            >
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.articleTitle}>{article.title}</span>

              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          );
        })}
      </div>

      {categoryPath && (
        <Link href={`/blog/${categoryPath}`} className={styles.viewAll}>
          View All {currentCategory}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </aside>
  );
}
