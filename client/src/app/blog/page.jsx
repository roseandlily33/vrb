import Link from "next/link";
import { blogPosts } from "./data/blogPosts";
import { comparisonExamples } from "./data/tooMuchVsTooLittle";
import Hero from "../Components/Hero/Hero.component";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Website Tips, Design Insights, and Internet Explanations",
  description:
    "Helpful articles for small business owners who want to better understand their website and online presence.",
};

export default function BlogPage() {
  const allPosts = [...blogPosts, ...comparisonExamples];
  const todaysDate = new Date();
  const filteredPostsByTodaysDate = allPosts.filter(
    (post) => new Date(post.date) <= todaysDate,
  );

  return (
    <main>
      <Hero
        topMeta="Blog"
        highlight="design insights"
        title="Website tips, design insights, and internet explanations."
        subText="Helpful articles for small business owners who want to better understand their website and online presence."
      />

      <section className={styles.postsSection}>
        <h3>Blog is currently under development</h3>
        {/* <div className={styles.postsGrid}>
          {filteredPostsByTodaysDate.map((post) => (
            <article key={post.slug} className={styles.postCard}>
              <div className={styles.cardContent}>
                <p className={styles.category}>{post.category}</p>

                <h3 className={styles.title}>{post.title}</h3>

                <p className={styles.excerpt}>{post.excerpt}</p>

                <div className={styles.metaRow}>
                  <small className={styles.meta}>{post.date}</small>
                  <small className={styles.meta}>· {post.readTime}</small>
                </div>
              </div> */}

        {/* <Link href={`/blog/${post.slug}`} className={styles.readLink}>
                Read Article
              </Link>
            </article>
          ))}
        </div> */}
      </section>
    </main>
  );
}
