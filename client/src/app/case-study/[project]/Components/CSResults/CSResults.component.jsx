import styles from "./CSResults.module.css";
import Card from "@/app/Components/Card/Card.component";
import * as MdIcons from "react-icons/md";

const CSResults = ({ results }) => {
  return (
    <section className={styles.results}>
      <div className={styles.resultsInner}>
        {/* SECTION HEADER */}
        <div className={styles.resultsHeader}>
          <div className={styles.resultsHeaderContent}>
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className="eyebrowHeader">Results</p>

            <h2>
              What this project
              <span className={styles.headingAccent}> delivered.</span>
            </h2>
          </div>

          <div className={styles.resultsHeaderAside}>
            <span className={styles.resultsAsideLabel}>PROJECT OUTCOMES</span>

            <span className={styles.resultsCount}>
              {String(results?.length || 0).padStart(2, "0")}
            </span>

            <span className={styles.resultsAsideCaption}>Key results</span>
          </div>
        </div>

        {/* RESULTS GRID */}
        <div className={styles.cardContainer}>
          {results?.map((result, idx) => {
            const Icon = result.icon ? MdIcons[`Md${result.icon}`] : null;

            return (
              <article className={styles.resultCard} key={idx}>
                <div className={styles.cardTop}>
                  <div className={styles.cardNumberWrap}>
                    <span className={styles.cardNumberLabel}>OUTCOME</span>

                    <span className={styles.cardIndex}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {Icon && (
                    <span className={styles.iconWrap} aria-hidden="true">
                      <Icon />
                    </span>
                  )}
                </div>

                <div className={styles.cardContent}>
                  <h3>{result.title}</h3>

                  <p>{result.desc}</p>
                </div>

                <div className={styles.cardBottom} aria-hidden="true">
                  <span className={styles.cardBottomLine} />
                  <span className={styles.cardPixel} />
                </div>
              </article>
            );
          })}
        </div>

        {/* SECTION FOOTER */}
        <div className={styles.resultsFooter}>
          <span className={styles.footerPixel} aria-hidden="true" />

          <span>THE WORK. THE OUTCOMES.</span>

          <span className={styles.footerLine} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default CSResults;
