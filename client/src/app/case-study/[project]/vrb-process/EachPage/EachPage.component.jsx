import styles from "./EachPage.module.css";
import { FaCheckCircle, FaExclamationTriangle, FaStar } from "react-icons/fa";

const EachPage = ({ page, index }) => {
  const bgClass =
    typeof index === "number"
      ? index % 2 === 0
        ? styles.bgOne
        : styles.bgTwo
      : styles.bgOne;

  return (
    <section
      className={`${styles.section} ${bgClass}`}
      id={page.pageName.replace(/\s+/g, "-").toLowerCase()}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h3 className={styles.pageTitle}>{page.pageName}</h3>

          <div className={styles.metaRow}>
            {page.role && (
              <span className={styles.metaItem}>
                <strong>Role:</strong> {page.role}
              </span>
            )}

            {page.tools && (
              <span className={styles.metaItem}>
                <strong>Tools:</strong> {page.tools}
              </span>
            )}

            {page.focus && (
              <span className={styles.metaItem}>
                <strong>Focus:</strong> {page.focus}
              </span>
            )}
          </div>

          <p className={styles.description}>{page.description}</p>
        </div>

        <img
          src={page.url}
          alt={page.pageName}
          className={styles.previewImage}
        />

        {(page.keyDecisions || page.challenges || page.outcomes) && (
          <div className={styles.listsRow}>
            {page.keyDecisions && (
              <div className={styles.listCol}>
                <div className={styles.listHeader}>
                  <FaCheckCircle className={styles.listIcon} />
                  Key Decisions
                </div>

                <ul>
                  {page.keyDecisions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {page.challenges && (
              <div className={styles.listCol}>
                <div className={styles.listHeader}>
                  <FaExclamationTriangle className={styles.listIcon} />
                  Challenges
                </div>

                <ul>
                  {page.challenges.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {page.outcomes && (
              <div className={styles.listCol}>
                <div className={styles.listHeader}>
                  <FaStar className={styles.listIcon} />
                  Outcomes
                </div>

                <ul>
                  {page.outcomes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
export default EachPage;
