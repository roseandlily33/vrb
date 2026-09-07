import Link from "next/link";
import Hero from "../../Components/Hero/Hero.component";
import styles from "../page.module.css";
import { articles } from "../articles";

// Primary keyword: website redesign
// Secondary: website redesign guide, redesign a website, website redesign resources
// intent: informational
export const metadata = {
  title: "Website Redesign | VRB Web Design and Development Blog",
  description: "When to redesign, costs and how to keep what works.",
};

export default function RedesignPage() {
  const categoryKey = "website redesign";
  const getCategoryName = (category) =>
    typeof category === "string" ? category : category?.name || "";

  const posts = articles.filter((a) =>
    getCategoryName(a.category).toLowerCase().includes(categoryKey),
  );

  return (
    <main>
      <Hero
        topMeta="Blog"
        highlight="Redesign"
        title="Website redesigns: timing, cost and preserving what works."
        subText="Guidance for planning a redesign that improves results without losing value."
      />
      <nav className={styles.blogNav} aria-label="Blog topics">
        <span className={styles.blogNavLabel}>Blog Topics</span>

        <div className={styles.blogNavLinks}>
          <Link
            href="/blog/website-redesign"
            className={`${styles.blogNavLink} ${styles.blogNavActive}`}
            aria-current="page"
          >
            Website Redesign
          </Link>

          <Link href="/blog/web-design" className={styles.blogNavLink}>
            Web Design
          </Link>

          <Link href="/blog/seo" className={styles.blogNavLink}>
            SEO
          </Link>

          <Link href="/blog/ux-ui-development" className={styles.blogNavLink}>
            UX/UI & Development
          </Link>
        </div>
      </nav>
      <section className={styles.postsSection}>
        {posts.length === 0 ? (
          <p className={styles.excerpt}>
            No articles yet for Website Redesign.
          </p>
        ) : (
          <div className={styles.postsGrid}>
            {posts.map((p, i) => (
              <article
                key={p.slug}
                className={`${styles.postCard} ${
                  i % 2 === 0 ? styles.lightCard : styles.darkCard
                }`}
              >
                <div className={styles.indexRail} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.pixelCluster} aria-hidden="true">
                    <span className={styles.pixel1} />
                    <span className={styles.pixel2} />
                    <span className={styles.pixel3} />
                    <span className={styles.pixel4} />
                    <span className={styles.pixel5} />
                  </div>

                  <div className={styles.cardContent}>
                    <p className={styles.category}>
                      {getCategoryName(p.category)}
                    </p>

                    <h3 className={styles.title}>{p.title}</h3>

                    <p className={styles.excerpt}>{p.description}</p>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.footerLine} aria-hidden="true" />

                    <Link
                      className={styles.readLink}
                      href={`/blog/website-redesign/${p.slug}`}
                    >
                      Read
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
