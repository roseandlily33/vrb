import Link from "next/link";
import styles from "./blogCta.module.css";

const BlogCTA = ({ eyebrow, title, description, links }) => {
  return (
    <section className={styles.nextSection}>
      <div className={styles.nextInner}>
        <span className={styles.nextEyebrow}>{eyebrow}</span>

        <h2>{title}</h2>

        <p>{description}</p>

        <div className={styles.nextLinks}>
          {links.map((link, index) => (
            <Link key={index} href={link.href} className={styles.textLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
