import Link from "next/link";
import Hero from "../../Components/Hero/Hero.component";
import styles from "../page.module.css";
import { articles } from "../articles";

export const metadata = {
  title: "SEO | Blog",
  description: "Articles about keywords, content strategy and technical SEO.",
};

export default function SEOPage() {
  const categoryKey = "seo";
  const posts = articles.filter((a) => a.category.toLowerCase().includes(categoryKey));

  return (
    <main>
      <Hero
        topMeta="Blog"
        highlight="SEO"
        title="SEO: keywords, content and technical ranking signals."
        subText="Articles that explain how search works and how to help your site get found."
      />

      <section className={styles.postsSection}>
        {posts.length === 0 ? (
          <p className={styles.excerpt}>No articles yet for SEO.</p>
        ) : (
          <div className={styles.postsGrid}>
            {posts.map((p, i) => (
              <article key={p.slug} className={styles.postCard}>
                <div className={styles.indexBadge} aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.category}>{p.category}</p>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.excerpt}>{p.description}</p>
                </div>
                <Link className={styles.readLink} href={`/blog/${p.slug}`}>
                  Read
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
