
import React from "react";
import styles from "./DoYouNeedSeo.module.css";

export default function DoYouNeedSeo() {
	const bullets = [
		"Your website isn't appearing for searches relevant to your business.",
		"You're getting little or no organic search traffic.",
		"You're unsure what keywords your website should target.",
		"Important pages aren't being indexed.",
		"Your site has technical SEO or performance issues.",
		"You've redesigned or launched a website and want to establish a stronger search foundation.",
		"You want to improve how your business appears in traditional and AI-powered search.",
	];

	return (
		<section className={styles.container} aria-labelledby="do-you-need-seo">
  <div className={styles.headingColumn}>
    <div className={styles.marker} aria-hidden="true">
      <span className={styles.markerLine} />
      <span className={styles.markerPixel} />
    </div>

    <h2 id="do-you-need-seo" className={styles.title}>
      SEO services may be a good fit if...
    </h2>
  </div>

  <ul className={styles.list}>
    {bullets.map((b, index) => (
      <li key={b} className={styles.item}>
        <span className={styles.number}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={styles.itemText}
          dangerouslySetInnerHTML={{
            __html: b.replace(
              "AI-powered",
              "<strong>AI-powered</strong>"
            ),
          }}
        />

        <span className={styles.pixel} aria-hidden="true" />
      </li>
    ))}
  </ul>
</section>
	);
}

