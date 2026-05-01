import styles from "./EachPage.module.css";

const EachPage = ({ page, index }) => {
  // page has pageName, description and url
  // Alternate backgrounds using index if provided
  const bgClass =
    typeof index === "number"
      ? index % 2 === 0
        ? styles.bgOne
        : styles.bgTwo
      : styles.bgOne;
  return (
    <section className={`${styles.section} ${bgClass}`}>
      <h3>{page.pageName}</h3>
      <p>{page.description}</p>
      <img
        src={page.url}
        alt={page.pageName}
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};
export default EachPage;
