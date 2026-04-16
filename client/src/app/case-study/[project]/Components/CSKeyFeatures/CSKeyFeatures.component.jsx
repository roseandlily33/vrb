import styles from './CSKeyFeatures.module.css';
const CSKeyFeatures = ({ keyFeatures }) => {
  return (
    <section className={styles.features}>
      <h4 className={styles.rightTitle}>
         Key Features
      </h4>
      <ul className={styles.featuresGrid}>
        {keyFeatures?.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
};

export default CSKeyFeatures;
