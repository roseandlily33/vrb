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
              <Card
                key={idx}
                title={result.title}
                description={result.desc}
                icon={Icon && <Icon className="primaryIcon" size={28} />}
              />
            );
          })}
      </div>
    </section>
  );
};

export default CSResults;
