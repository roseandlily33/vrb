import Link from "next/link";
import Hero from "../../Components/Hero/Hero.component";
import styles from "../page.module.css";
import { articles } from "../articles";

export const metadata = {
  title: "Website Redesign | Blog",
  description: "When to redesign, costs and how to keep what works.",
};

export default function RedesignPage() {
  const categoryKey = "website redesign";
  const posts = articles.filter((a) => a.category.toLowerCase().includes(categoryKey));

  return (
    <main>
      <Hero
        topMeta="Blog"
        highlight="Redesign"
        title="Website redesigns: timing, cost and preserving what works."
        subText="Guidance for planning a redesign that improves results without losing value."
      />

      <section className={styles.postsSection}>
        {posts.length === 0 ? (
          <p className={styles.excerpt}>No articles yet for Website Redesign.</p>
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
                <Link className={styles.readLink} href={`/blog/website-redesign/${p.slug}`}>
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
