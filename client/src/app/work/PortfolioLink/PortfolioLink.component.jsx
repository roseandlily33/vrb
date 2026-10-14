"use client";
import styles from "./PortfolioLink.module.css";
import CTAButton from "@/app/Components/CTAButton/CTAButton.component";
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";

const PortfolioLink = () => {
  return (
    <section
      className={styles.linkContainer}
      aria-labelledby="portfolio-cta-title"
    >
      <div className={styles.inner}>
        <div className={styles.words}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowPixel} aria-hidden="true" />
            <span>Explore more</span>
          </div>

          <h2 id="portfolio-cta-title" className={styles.h2}>
            There&apos;s more where that came from.
          </h2>

          <p>
            Explore my full portfolio for more projects, case studies, and a
            closer look at how I approach design and development.
          </p>
        </div>

        <div className={styles.buttonWrapper}>
          <a
            href="https://victoriabenoit-portfolio.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.portfolioLink}
            aria-label="Explore my full portfolio (opens in a new tab)"
          >
            <CTAButton>Explore my portfolio</CTAButton>
          </a>
        </div>
      </div>

      <div className={styles.decorativePixels} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default PortfolioLink;
