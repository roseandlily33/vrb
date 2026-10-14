import styles from "./CSTechnologies.module.css";
const CSTechnologies = ({ technologies = [] }) => {
  return (
    <section className={styles.technologies}>
      <div className={styles.technologiesInner}>
        <div className={styles.header}>
          <div className={styles.headingBlock}>
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>Project Toolkit</p>

            <h2 className={styles.heading}>Tools &amp; technologies used</h2>

            <p className={styles.headerDescription}>
              The tools and technologies behind the project.
            </p>
          </div>

          {technologies?.length > 0 && (
            <div className={styles.techCount}>
              <span className={styles.countNumber}>
                {String(technologies.length).padStart(2, "0")}
              </span>

              <span className={styles.countLabel}>
                Tools &amp;
                <br />
                Technologies
              </span>
            </div>
          )}
        </div>

        {technologies?.length > 0 && (
          <div className={styles.techContainer}>
            {technologies.map((technology, index) => (
              <div className={styles.techItem} key={`${technology}-${index}`}>
                <span className={styles.techIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.techName}>{technology}</span>

                <span className={styles.techPixel} aria-hidden="true" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CSTechnologies;
