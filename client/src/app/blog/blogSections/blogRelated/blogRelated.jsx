"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import styles from "./blogRelated.module.css";
import {
  buildBlogPostPath,
  getCategoryName,
  getRelatedPosts,
  resolveRelatedSourcePost,
} from "./blogRelatedHelper";
import { articles } from "../../articles";

const RelatedBlogs = ({ postTitle }) => {
  const pathname = usePathname();

  const inferredPost = useMemo(() => {
    if (!pathname) return null;
    const normalizedPath = pathname.replace(/\/+$/, "");

    return (
      articles.find((article) => normalizedPath.endsWith(`/${article.slug}`)) ||
      null
    );
  }, [pathname]);

  const currentPost =
    resolveRelatedSourcePost(postTitle, articles) || inferredPost;
  const relatedPosts = getRelatedPosts(currentPost, articles, 4);

  return (
    <section className={styles.relatedSection}>
      <div className={styles.relatedInner}>
        {/* SECTION HEADER */}
        <div className={styles.relatedHeader}>
          <div className={styles.relatedHeading}>
            <div className={styles.relatedTopline}>
              <span className={styles.relatedMarker} aria-hidden="true">
                <span />
                <span />
              </span>

              <p className={styles.relatedEyebrow}>Keep Reading</p>
            </div>

            <h2>Related Articles</h2>

            <p className={styles.relatedSubtitle}>
              More ideas, insights, and practical advice to explore.
            </p>
          </div>

          <Link href="/blog" className={styles.viewAllLink}>
            View All Articles
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* HORIZONTAL ARTICLE SCROLLER */}
        <div className={styles.relatedScroller}>
          {relatedPosts.map((relatedPost, index) => (
            <article
              key={relatedPost.slug}
              className={`${styles.relatedCard} ${
                index % 2 === 0
                  ? styles.relatedCardLight
                  : styles.relatedCardDark
              }`}
            >
              {/* CARD NUMBER */}
              <div className={styles.relatedCardNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* DECORATIVE GRAPHICS */}
              <div className={styles.relatedPixel} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className={styles.relatedOrbit} aria-hidden="true">
                <span />
              </div>

              {/* ARTICLE CONTENT */}
              <div className={styles.relatedCardContent}>
                <p className={styles.relatedCategory}>
                  {getCategoryName(relatedPost.category)}
                </p>

                <h3>
                  <Link
                    href={buildBlogPostPath(relatedPost)}
                    className={styles.relatedTitleLink}
                  >
                    {relatedPost.title}
                  </Link>
                </h3>

                <p className={styles.relatedDescription}>
                  {relatedPost.description}
                </p>
              </div>

              {/* CARD FOOTER */}
              <div className={styles.relatedFooter}>
                <span className={styles.relatedReadTime}>
                  {relatedPost.readTime}
                </span>

                <Link
                  href={buildBlogPostPath(relatedPost)}
                  className={styles.relatedLink}
                >
                  Read Article
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* SCROLL HINT */}
        <div className={styles.relatedScrollHint} aria-hidden="true">
          <span>Explore More</span>
          <span className={styles.relatedScrollLine} />
          <span>→</span>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;
