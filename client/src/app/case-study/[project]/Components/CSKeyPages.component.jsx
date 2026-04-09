import styles from "../page.module.css";
const CSKeyPages = ({ keyPagesDescription }) => {
  return (
    <section className={styles.keyPages}>
      <h2>Key Pages</h2>
      <p>{keyPagesDescription}</p>
    </section>
  );
};

export default CSKeyPages;
