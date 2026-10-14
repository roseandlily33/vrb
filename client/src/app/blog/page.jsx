import Link from "next/link";
import Hero from "../Components/Hero/Hero.component";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Website Tips, Design Insights, and Internet Explanations",
  description:
    "Helpful articles for small business owners who want to better understand their website and online presence.",
};

const blogCategories = [
  {
    first: "Website",
    second: "Redesign",
    href: "/blog/website-redesign",
    label: "Website Redesign",
    theme: "light",
  },
  {
    first: "Web",
    second: "Design",
    href: "/blog/web-design",
    label: "Web Design",
    theme: "dark",
  },
  {
    first: "UX/UI &",
    second: "Development",
    href: "/blog/ux-ui-development",
    label: "UX/UI and Development",
    theme: "dark",
  },
  {
    first: "SEO",
    second: "",
    href: "/blog/seo",
    label: "SEO",
    theme: "light",
  },
  {
    first: "Social",
    second: "Media",
    href: "/blog/social-media",
    label: "Social Media",
    theme: "light",
  },
  {
    first: "Website",
    second: "Maintenance",
    href: "/blog/website-maintenance",
    label: "Website Maintenance",
    theme: "dark",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Hero
        topMeta="Blog"
        highlight="design insights"
        title="Website tips, design insights, and internet explanations."
        subText="Helpful articles for small business owners who want to better understand their website and online presence."
      />

      <section
        className={`${styles.postsSection} ${styles.blogLanding}`}
        aria-label="Explore blog topics"
      >
        <div className={styles.postsGrid}>
          {blogCategories.map((category, index) => (
            <article
              key={category.href}
              className={[
                styles.postCard,
                styles.topicCard,
                category.theme === "dark" ? styles.darkCard : styles.lightCard,
              ].join(" ")}
            >
              <div className={styles.topicArtwork} aria-hidden="true">
                <span className={styles.topicOrbit} />
                <span className={styles.topicOrbitInner} />
                <span className={styles.topicOrbitDot} />
              </div>

              <div className={styles.pixelCluster} aria-hidden="true">
                <span className={styles.pixel1} />
                <span className={styles.pixel2} />
                <span className={styles.pixel3} />
                <span className={styles.pixel4} />
                <span className={styles.pixel5} />
                <span className={styles.pixel6} />
              </div>

              <div className={styles.topicMeta}>
                <span>{String(index + 1).padStart(2, "0")} / 06</span>
                <span>Explore Topics</span>
              </div>

              <div className={styles.cardMain}>
                <span className={styles.accentLine} aria-hidden="true" />

                <h2 className={styles.cardTitle}>
                  {category.first}
                  {category.second && <span>{category.second}</span>}
                </h2>
              </div>

              <div className={styles.cardFooter}>
                <Link
                  href={category.href}
                  className={styles.arrowLink}
                  aria-label={`Explore ${category.label} articles`}
                >
                  <span>Explore articles</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
