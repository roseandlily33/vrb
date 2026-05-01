import styles from "./Results.module.css";

const results = [
  "Reduced stress for horse & rider",
  "A willing horse that’s truly sensitive to the rider’s aids",
  "Softness in every movement",
  "Healthy minded development & improved gains",
];

export default function Results() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Results</p>
        <h2>Results you can expect from training</h2>
      </div>

      <div className={styles.resultsGrid}>
        {results.map((result, index) => (
          <div key={result} className={styles.resultItem}>
            <div className={styles.icon} aria-hidden="true">
              Ω
            </div>
            <p>{result}</p>

            {index !== results.length - 1 && (
              <span className={styles.divider} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}