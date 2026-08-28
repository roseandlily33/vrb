import styles from "./CSTechnologies.module.css";
const CSTechnologies = ({ technologies = [] }) => {
  return (
    <section className={styles.technologies}>
      <div className={styles.technologiesInner}>
        <div className={styles.header}>
          <div className={styles.marker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <p className="eyebrowHeader">Technologies</p>

          <h2>Tools & technologies used</h2>
        </div>

        <div className={styles.techContainer}>
          {technologies?.map((technology, index) => (
            <div className={styles.techItem} key={technology}>
              <span className={styles.techIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.techName}>{technology}</span>

              <span className={styles.techPixel} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSTechnologies;
