import Link from "next/link";
import styles from "./blogCta.module.css";
import BlogRelated from "../blogRelated/blogRelated";

const BlogCTA = ({ eyebrow, title, description, links }) => {
  return (
    <>
      <BlogRelated postTitle={title} />

      <section className={styles.nextSection}>
        <div className={styles.nextInner}>
          {/* DECORATIVE GRAPHICS */}
          <div className={styles.nextArtwork} aria-hidden="true">
            <div className={styles.nextOrbit}>
              <span className={styles.nextOrbitInner} />
              <span className={styles.nextOrbitDot} />
            </div>

            <div className={styles.nextPixels}>
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* SECTION CONTENT */}
          <div className={styles.nextContent}>
            <div className={styles.nextTopline}>
              <span className={styles.nextMarker} aria-hidden="true">
                <span />
                <span />
              </span>

              <span className={styles.nextEyebrow}>{eyebrow}</span>
            </div>

            <h2>{title}</h2>

            <p>{description}</p>
          </div>

          {/* RELATED LINKS */}
          {links?.length > 0 && (
            <div className={styles.nextLinks}>
              {links.map((link, index) => (
                <Link key={index} href={link.href} className={styles.textLink}>
                  <span className={styles.nextLinkNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.nextLinkLabel}>{link?.label}</span>

                  <span className={styles.nextLinkArrow} aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogCTA;
