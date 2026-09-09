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

  const currentPost = resolveRelatedSourcePost(postTitle, articles) || inferredPost;
  const relatedPosts = getRelatedPosts(currentPost, articles, 4);

  return (
    <section className={styles.relatedSection}>
      <div className={styles.relatedHeader}>
        <div>
          <p className={styles.relatedEyebrow}>Keep Reading</p>
          <h2>Related Articles</h2>
        </div>

        <Link href="/blog" className={styles.viewAllLink}>
          View all articles →
        </Link>
      </div>

      <div className={styles.relatedScroller}>
        {relatedPosts.map((relatedPost) => (
          <article key={relatedPost.slug} className={styles.relatedCard}>
            <div className={styles.relatedPixel} aria-hidden="true" />

            <p className={styles.relatedCategory}>
              {getCategoryName(relatedPost.category)}
            </p>

            <h3>{relatedPost.title}</h3>

            <p className={styles.relatedDescription}>
              {relatedPost.description}
            </p>

            <div className={styles.relatedFooter}>
              <span>{relatedPost.readTime}</span>

              <Link
                href={buildBlogPostPath(relatedPost)}
                className={styles.relatedLink}
              >
                Read →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedBlogs;
