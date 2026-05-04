import styles from "./ProcessHero.module.css";

const ProcessHero = ({ title, description, pageList }) => {
  return (
  <section className={styles.hero}>
  <div className={styles.inner}>
    {/* LEFT */}
    <div className={styles.left}>
      <p className={styles.eyebrow}>Process Breakdown</p>

      <h1 className={styles.heading}>{title}</h1>

      <p className={styles.description}>{description}</p>

      <div className={styles.meta}>
        <span><strong>Role:</strong> UX/UI + Development</span>
        <span><strong>Tools:</strong> Figma, Next.js</span>
      </div>
    </div>

    {/* RIGHT */}
    <nav className={styles.right} aria-label="Page navigation">
      <p className={styles.indexLabel}>Page Index</p>

      <ul className={styles.pageList}>
        {pageList.map((page, idx) => (
          <li key={idx}>
            <a
              href={`#${page.pageName.replace(/\s+/g, "-").toLowerCase()}`}
              className={styles.pageLink}
            >
              <span className={styles.pageNumber}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              {page.pageName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</section>
  );
};

export default ProcessHero;
