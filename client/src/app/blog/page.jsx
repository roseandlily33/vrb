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
          <article className={styles.postCard}>
            <div className={styles.cardContent}>
              <p className={styles.category}>Website Redesign</p>
              <h3 className={styles.title}>Know when it's time for a redesign</h3>
              <p className={styles.excerpt}>
                When to redesign, typical costs, and how to improve your site without
                losing what already works.
              </p>
              <div className={styles.metaRow} />
            </div>
            <Link className={styles.readLink} href="/blog/website-redesign">
              Explore
            </Link>
          </article>

          <article className={styles.postCard}>
            <div className={styles.cardContent}>
              <p className={styles.category}>Web Design</p>
              <h3 className={styles.title}>Plan, design and build websites that work</h3>
              <p className={styles.excerpt}>
                Practical advice on planning, designing and building a website for
                your business and customers.
              </p>
              <div className={styles.metaRow} />
            </div>
            <Link className={styles.readLink} href="/blog/web-design">
              Explore
            </Link>
          </article>

          <article className={styles.postCard}>
            <div className={styles.cardContent}>
              <p className={styles.category}>SEO</p>
              <h3 className={styles.title}>Keywords, content and technical SEO</h3>
              <p className={styles.excerpt}>
                Understand keywords, content strategy and the technical pieces that
                help your site get found in search.
              </p>
              <div className={styles.metaRow} />
            </div>
            <Link className={styles.readLink} href="/blog/seo">
              Explore
            </Link>
          </article>

          <article className={styles.postCard}>
            <div className={styles.cardContent}>
              <p className={styles.category}>UX/UI & Development</p>
              <h3 className={styles.title}>Usability, accessibility and performance</h3>
              <p className={styles.excerpt}>
                Dig into usability, accessibility, performance and the technical
                decisions behind better websites.
              </p>
              <div className={styles.metaRow} />
            </div>
            <Link className={styles.readLink} href="/blog/ux-ui-development">
              Explore
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
