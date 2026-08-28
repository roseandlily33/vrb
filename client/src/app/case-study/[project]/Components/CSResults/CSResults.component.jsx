import styles from "./CSResults.module.css";
import Card from "@/app/Components/Card/Card.component";
import * as MdIcons from "react-icons/md";

const CSResults = ({ results }) => {
  return (
    <section className={styles.results}>
  <div className={styles.resultsInner}>
    <div className={styles.resultsHeader}>
      <div className={styles.marker} aria-hidden="true">
        <span className={styles.markerLine} />
        <span className={styles.markerPixel} />
      </div>

      <p className="eyebrowHeader">Results</p>

      <h2>What this project delivered</h2>
    </div>

    <div className={styles.cardContainer}>
      {results &&
        results.map((result, idx) => {
          const Icon = result.icon ? MdIcons[`Md${result.icon}`] : null;

          return (
            <article className={styles.resultCard} key={idx}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>
                  {String(idx + 1).padStart(2, "0")}
                </span>

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

              <span className={styles.cardPixel} aria-hidden="true" />
            </article>
          );
        })}
    </div>
  </div>
</section>
  );
};

export default CSResults;
