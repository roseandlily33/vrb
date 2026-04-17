
import styles from "./CSKeyFeatures.module.css";
import { FiCheckCircle } from "react-icons/fi";

const CSKeyFeatures = ({ keyFeatures }) => {
  return (
    <section className={styles.features}>
      <p className="eyebrowHeader">Key Features</p>
      <h2>Core features of the platform</h2>
      <ul className={styles.featuresGrid}>
        {keyFeatures?.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <span className={styles.featureIcon}><FiCheckCircle /></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CSKeyFeatures;
