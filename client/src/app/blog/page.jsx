import Link from "next/link";
import Hero from "../Components/Hero/Hero.component";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Website Tips, Design Insights, and Internet Explanations",
  description:
    "Helpful articles for small business owners who want to better understand their website and online presence.",
};

export default function BlogPage() {
  return (
    <main>
      <Hero
        topMeta="Blog"
        highlight="design insights"
        title="Website tips, design insights, and internet explanations."
        subText="Helpful articles for small business owners who want to better understand their website and online presence."
      />
      <section className={styles.postsSection}>
        <div className={styles.postsGrid}>
          <article className={`${styles.postCard} ${styles.lightCard} ${styles.topicCard}`}>
            <div className={styles.pixelCluster} aria-hidden="true">
              <span className={styles.pixel1} />
              <span className={styles.pixel2} />
              <span className={styles.pixel3} />
              <span className={styles.pixel4} />
              <span className={styles.pixel5} />
              <span className={styles.pixel6} />
            </div>

            <div className={styles.cardMain}>
              <span className={styles.accentLine} aria-hidden="true" />

              <h2 className={styles.cardTitle}>
                Website
                <span>Redesign</span>
              </h2>
            </div>

            <div className={styles.cardFooter}>
              <Link
                href="/blog/website-redesign"
                className={styles.arrowLink}
                aria-label="Explore Website Redesign articles"
              >
                EXPLORE →
              </Link>
            </div>
          </article>

          <article className={`${styles.postCard} ${styles.darkCard} ${styles.topicCard}`}>
            <div className={styles.pixelCluster} aria-hidden="true">
              <span className={styles.pixel1} />
              <span className={styles.pixel2} />
              <span className={styles.pixel3} />
              <span className={styles.pixel4} />
              <span className={styles.pixel5} />
              <span className={styles.pixel6} />
            </div>

            <div className={styles.cardMain}>
              <span className={styles.accentLine} aria-hidden="true" />

              <h2 className={styles.cardTitle}>
                Web
                <span>Design</span>
              </h2>
            </div>

            <div className={styles.cardFooter}>
              <Link
                href="/blog/web-design"
                className={styles.arrowLink}
                aria-label="Explore Web Design articles"
              >
                EXPLORE →
              </Link>
            </div>
          </article>
          <article className={`${styles.postCard} ${styles.darkCard} ${styles.topicCard}`}>
            <div className={styles.pixelCluster} aria-hidden="true">
              <span className={styles.pixel1} />
              <span className={styles.pixel2} />
              <span className={styles.pixel3} />
              <span className={styles.pixel4} />
              <span className={styles.pixel5} />
              <span className={styles.pixel6} />
            </div>

            <div className={styles.cardMain}>
              <span className={styles.accentLine} aria-hidden="true" />

              <h2 className={styles.cardTitle}>
                UX/UI &<span>Development</span>
              </h2>
            </div>

            <div className={styles.cardFooter}>
              <Link
                href="/blog/ux-ui-development"
                className={styles.arrowLink}
                aria-label="Explore UX/UI and Development articles"
              >
                EXPLORE →
              </Link>
            </div>
          </article>

          <article className={`${styles.postCard} ${styles.lightCard} ${styles.topicCard}`}>
            <div className={styles.pixelCluster} aria-hidden="true">
              <span className={styles.pixel1} />
              <span className={styles.pixel2} />
              <span className={styles.pixel3} />
              <span className={styles.pixel4} />
              <span className={styles.pixel5} />
              <span className={styles.pixel6} />
            </div>

            <div className={styles.cardMain}>
              <span className={styles.accentLine} aria-hidden="true" />

              <h2 className={styles.cardTitle}>SEO</h2>
            </div>

            <div className={styles.cardFooter}>
              <Link
                href="/blog/seo"
                className={styles.arrowLink}
                aria-label="Explore SEO articles"
              >
                EXPLORE →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
