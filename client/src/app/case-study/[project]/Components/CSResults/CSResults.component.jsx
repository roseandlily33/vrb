
import styles from "./CSResults.module.css";
import Card from "@/app/Components/Card/Card.component";
import * as MdIcons from "react-icons/md";

const CSResults = ({ results }) => {
  return (
    <section className={styles.results}>
      <p className="eyebrowHeader">results</p>
      <h2>What this project delivered</h2>
      <div className={styles.cardContainer}>
        {results &&
          results.map((result, idx) => {
            const Icon = result.icon ? MdIcons[`Md${result.icon}`] : null;
            return (
              <Card key={idx} className={styles.eachCard}>
                <div className={styles.iconTitleWrapper}>
                  {Icon && <Icon className={styles.resultIcon} size={28} />}
                  <h4>{result.title}</h4>
                </div>
                <p style={{ color: "var(--grey-800)", fontSize: "0.9rem" }}>
                  {result.desc}
                </p>
              </Card>
            );
          })}
      </div>
    </section>
  );
};

export default CSResults;
