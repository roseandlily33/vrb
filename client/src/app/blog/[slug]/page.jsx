import { notFound } from "next/navigation";
import { blogPosts } from "../data/blogPosts";
import { comparisonExamples } from "../data/tooMuchVsTooLittle";
import styles from "./page.module.css";
import BlogComparisonExample from "./blogComparisons";
import Image from "next/image";

export function generateStaticParams() {
  const allPosts = [...blogPosts, ...comparisonExamples];
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const allPosts = [...blogPosts, ...comparisonExamples];
  const {slug} = await params;
  const post = allPosts.find((post) => post?.slug === slug);

  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const allPosts = [...blogPosts, ...comparisonExamples];
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <p className={styles.category}>{post.category}</p>

            <h1 className={styles.title}>{post.title}</h1>

            <p className={styles.excerpt}>{post.excerpt}</p>

            <div className={styles.metaRow}>
              <small className={styles.meta}>{post.date}</small>
              <small className={styles.meta}>· {post.readTime}</small>
            </div>
          </div>

          {post.image && (
            <div className={styles.headerImage}>
              <Image src={post.image} alt={post.imageAlt || post.title} width={800} height={600} />
            </div>
          )}
        </header>

        <section className={styles.content}>
          <BlogContent sections={post.sections} />
        </section>
      </article>
    </main>
  );
}

function BlogContent({ sections }) {
  return (
    <>
      {sections.map((section, index) => {
        if (section.type === "heading") {
          return (
            <h2 key={index} className={styles.h2}>
              {section.content}
            </h2>
          );
        }

        if (section.type === "paragraph") {
          return (
            <p key={index} className={styles.p}>
              {section.content}
            </p>
          );
        }

        if (section.type === "list") {
          return (
            <ul key={index} className={styles.ul}>
              {section.items.map((item) => (
                <li key={item} className={styles.li}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        if (section.type === "image") {
          return (
            <div key={index} className={styles.inlineImage}>
              <Image src={section.src} alt={section.alt || ""} width={800} height={600} />
            </div>
          );
        }
        if (section.type === "comparisonExample") {
          return (
            <BlogComparisonExample
              key={index}
              id={section.id}
            />
          );
        }

        return null;
      })}
    </>
  );
}
