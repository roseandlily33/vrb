import styles from "../page.module.css";
import Carousel from "./Extras/Carousel/Carousel";
const CSKeyPages = ({ pages }) => {
  return (
    <section className={styles.keyPages}>
      <h2>Key Pages</h2>
      <div>
        {pages?.length > 0 ? (
          <Carousel slides={pages} />
        ) : (
          <p>No key pages available.</p>
        )}
      </div>
    </section>
  );
};

export default CSKeyPages;
