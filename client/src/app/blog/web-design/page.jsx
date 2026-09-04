import Link from "next/link";
import Hero from "../../Components/Hero/Hero.component";
import styles from "../page.module.css";
import { articles } from "../articles";

export const metadata = {
  title: "Web Design | Blog",
  description: "Practical advice on planning, designing and building websites.",
};

export default function WebDesignPage() {
  const categoryKey = "web design";
  const posts = articles.filter((a) => a.category.toLowerCase().includes(categoryKey));

  return (
    <main>
      <Hero
        topMeta="Blog"
        highlight="Web Design"
        title="Practical web design: planning, layout and building with purpose."
        subText="Advice and examples for designing websites that work for customers."
      />

      <section className={styles.postsSection}>
        {posts.length === 0 ? (
          <p className={styles.excerpt}>No articles yet for Web Design.</p>
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
