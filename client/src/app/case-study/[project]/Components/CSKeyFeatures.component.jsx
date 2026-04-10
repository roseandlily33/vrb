import styles from '../page.module.css';
import { FaCheckCircle } from "react-icons/fa";
const CSKeyFeatures = ({ keyFeatures }) => {
  return (
    <section className={styles.features}>
      <div className={styles.rightTitle} style={{ marginBlock: "1.1rem" }}>
        <FaCheckCircle /> Key Features
      </div>
      <ul className={styles.featuresGrid}>
        {keyFeatures?.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
};

export default CSKeyFeatures;
