import styles from './Results.module.css';
import { GiMeditation, GiHorseHead, GiFeather, GiHealthNormal } from "react-icons/gi";


const results = [
  {
    text: "Reduced stress for horse & rider",
    icon: <GiMeditation />,
  },
  {
    text: "A willing horse that’s truly sensitive to the rider’s aids",
    icon: <GiHorseHead />,
  },
  {
    text: "Softness in every movement",
    icon: <GiFeather />,
  },
  {
    text: "Healthy minded development & improved gains",
    icon: <GiHealthNormal />,
  },
];

export default function Results() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        {/* <p className={styles.eyebrow}>Results</p> */}
        <h2>Results you can expect from training</h2>
      </div>

      <div className={styles.resultsGrid}>
        {results.map((result, index) => (
          <div key={result.text} className={styles.resultItem}>
            <div className={styles.icon} aria-hidden="true">
              {result.icon}
            </div>
            <p>{result.text}</p>

            {index !== results.length - 1 && (
              <span className={styles.divider} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}