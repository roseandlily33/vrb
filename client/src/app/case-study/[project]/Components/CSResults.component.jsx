import styles from "../page.module.css";
const CSResults = ({ resultsDescription }) => {
  return (
    <section className={styles.results}>
      <h2>Results</h2>
      <p>{resultsDescription}</p>
    </section>
  );
};

export default CSResults;
