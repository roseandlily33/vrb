import Link from "next/link";
import Hero from "../../Components/Hero/Hero.component";
import styles from "../page.module.css";
import { seoArticles } from "../articles";

export const metadata = {
  title:
    "SEO for Small Business Websites | VRB Web Design and Development Blog",
  description: "Articles about keywords, content strategy and technical SEO.",
};

export default function SEOPage() {
  const posts = seoArticles;

  return (
    <main>
      <Hero
        topMeta="Blog"
        highlight="SEO"
        title="SEO: keywords, content and technical ranking signals."
        subText="Articles that explain how search works and how to help your site get found."
      />

      {/* BLOG CATEGORY NAVIGATION */}
      <nav
        className={`${styles.blogNav} ${styles.categoryBlogNav}`}
        aria-label="Blog topics"
      >
        <span className={styles.blogNavLabel}>Blog Topics</span>

        <div className={styles.blogNavLinks}>
          <Link href="/blog/website-redesign" className={styles.blogNavLink}>
            Website Redesign
          </Link>

          <Link href="/blog/web-design" className={styles.blogNavLink}>
            Web Design
          </Link>

          <Link
            href="/blog/seo"
            className={`${styles.blogNavLink} ${styles.blogNavActive}`}
            aria-current="page"
          >
            SEO
          </Link>

          <Link href="/blog/ux-ui-development" className={styles.blogNavLink}>
            UX/UI &amp; Development
          </Link>

          <Link href="/blog/social-media" className={styles.blogNavLink}>
            Social Media
          </Link>

          <Link href="/blog/website-maintenance" className={styles.blogNavLink}>
            Website Maintenance
          </Link>
        </div>
      </nav>

      {/* BLOG CATEGORY CONTENT */}
      <section
        className={`${styles.postsSection} ${styles.categoryListing}`}
        aria-labelledby="category-articles-heading"
      >
        <div className={styles.categoryListingHeader}>
          <div className={styles.categoryListingIntro}>
            <div className={styles.categorySectionMarker} aria-hidden="true">
              <span />
              <span />
            </div>

            <p className={styles.categoryEyebrow}>Explore Articles</p>

            <h2 id="category-articles-heading">SEO Articles</h2>
          </div>

          <div className={styles.categoryListingMeta}>
            <span className={styles.categoryArticleCount}>
              {String(posts?.length ?? 0).padStart(2, "0")}
            </span>

            <span>{posts?.length === 1 ? "Article" : "Articles"}</span>
          </div>
        </div>

        {posts?.length === 0 ? (
          <div className={styles.categoryEmptyState}>
            <p>No articles yet for SEO.</p>

            <Link href="/blog" className={styles.categoryBackLink}>
              Explore other blog topics
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        ) : (
          <div className={styles.postsGrid}>
            {posts?.map((p, i) => (
              <article
                key={p.slug}
                className={`${styles.postCard} ${
                  i % 2 === 0 ? styles.lightCard : styles.darkCard
                }`}
              >
                {/* LARGE EDITORIAL NUMBER */}
                <div className={styles.indexRail} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className={styles.cardBody}>
                  {/* DECORATIVE PIXELS */}
                  <div className={styles.pixelCluster} aria-hidden="true">
                    <span className={styles.pixel1} />
                    <span className={styles.pixel2} />
                    <span className={styles.pixel3} />
                    <span className={styles.pixel4} />
                    <span className={styles.pixel5} />
                  </div>

                  {/* SUBTLE CIRCULAR GRAPHIC */}
                  <div className={styles.categoryCardOrbit} aria-hidden="true">
                    <span className={styles.categoryOrbitRing} />
                    <span className={styles.categoryOrbitDot} />
                  </div>

                  {/* ARTICLE CONTENT */}
                  <div className={styles.cardContent}>
                    <p className={styles.category}>
                      {typeof p?.category === "string"
                        ? p.category
                        : p?.category?.name || ""}
                    </p>

                    <h3 className={styles.title}>
                      <Link
                        href={`/blog/seo/${p.slug}`}
                        className={styles.categoryTitleLink}
                      >
                        {p.title}
                      </Link>
                    </h3>

                    <p className={styles.excerpt}>{p.description}</p>
                  </div>

                  {/* ARTICLE FOOTER */}
                  <div className={styles.cardFooter}>
                    <span className={styles.footerLine} aria-hidden="true" />

                    <Link
                      className={styles.readLink}
                      href={`/blog/seo/${p.slug}`}
                    >
                      Read Article
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* BACK TO BLOG */}
        <div className={styles.categoryBottomNav}>
          <Link href="/blog" className={styles.categoryBackLink}>
            <span aria-hidden="true">←</span>
            All Blog Topics
          </Link>
        </div>
      </section>
    </main>
  );
}
