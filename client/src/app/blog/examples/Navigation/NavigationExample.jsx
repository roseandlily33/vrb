import styles from "./NavigationExample.module.css";

export default function NavigationExamples({ data }) {
  const { bad, good } = data;

  return (
    <section className={styles.navigationExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Navigation should help users move through a website with confidence,
          not make them guess where to go next.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.mockBrowser}>
            <div className={styles.browserBar}>
              <span />
              <span />
              <span />
            </div>

            <nav className={styles.crowdedNav}>
              {bad.links.map((link) => (
                <a key={link}>{link}</a>
              ))}
            </nav>

            <div className={styles.mockPage}>
              <div className={styles.mockLabel}>Current Page</div>
              <h4>Where should I go?</h4>
              <p>
                With too many options competing for attention, the next step
                becomes harder to choose.
              </p>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.mockBrowser}>
            <div className={styles.browserBar}>
              <span />
              <span />
              <span />
            </div>

            <nav className={styles.focusedNav}>
              {good.links.map((link) => (
                <a key={link}>{link}</a>
              ))}
            </nav>

            <div className={styles.mockPage}>
              <div className={styles.breadcrumbs}>
                {good.breadcrumb.map((item, index) => (
                  <span key={item}>
                    {item}
                    {index < good.breadcrumb.length - 1 && " / "}
                  </span>
                ))}
              </div>

              <h4>Website Design</h4>
              <p>
                Clear navigation and page context help users understand where
                they are and what to do next.
              </p>

              <button>View Services</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}