import styles from "../page.module.css";
const CSProblem = ({ problemDescription }) => {
  return (
    <section className={styles.problem}>
      <h2>Problem Statement</h2>
      <p>{problemDescription}</p>
    </section>
  );
};

export default CSProblem;
