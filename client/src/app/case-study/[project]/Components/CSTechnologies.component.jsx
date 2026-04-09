import styles from "../page.module.css";
const CSTechnologies = ({ technologiesDescription }) => {
  return (
    <section className={styles.technologies}>
      <h2>Technologies Used</h2>
      <p>{technologiesDescription}</p>
    </section>
  );
};

export default CSTechnologies;
