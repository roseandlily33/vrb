import Link from "next/link";
import Hero from "../../Components/Hero/Hero.component";
import styles from "../page.module.css";
import { articles } from "../articles";

export const metadata = {
  title: "UX/UI & Development | Blog",
  description: "Usability, accessibility, performance and technical decisions.",
};

export default function UXUIPage() {
  const categoryKey = "ux"; // matches 'ux' or 'ux/ui' if used in article.category
  const posts = articles.filter((a) => a.category.toLowerCase().includes(categoryKey));

  return (
    <main>
      <Hero
        topMeta="Blog"
        highlight="UX/UI"
        title="UX/UI & Development: usability, accessibility and performance."
        subText="Deep dives into the decisions that make websites easier to use and faster."
      />

      <section className={styles.postsSection}>
        {posts.length === 0 ? (
          <p className={styles.excerpt}>No articles yet for UX/UI & Development.</p>
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
