import styles from "./CSKeyFeatures.module.css";
import { FiCheckCircle } from "react-icons/fi";

const CSKeyFeatures = ({ keyFeatures }) => {
  return (
   <section className={styles.features}>
  <div className={styles.featuresHeader}>
    <div className={styles.marker} aria-hidden="true">
      <span className={styles.markerLine} />
      <span className={styles.markerPixel} />
    </div>

    <p className="eyebrowHeader">Key Features</p>

    <h2>Core features of the platform</h2>
  </div>

  <ul className={styles.featuresGrid}>
    {keyFeatures?.map((feature, index) => (
      <li key={index} className={styles.featureItem}>
        <span className={styles.featureNumber}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className={styles.featureText}>{feature}</span>

        <span className={styles.featurePixel} aria-hidden="true" />
      </li>
    ))}
  </ul>
</section>
  );
};

export default CSKeyFeatures;
