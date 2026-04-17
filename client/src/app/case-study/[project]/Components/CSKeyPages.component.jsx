import styles from "../page.module.css";
import Carousel from "./Extras/Carousel/Carousel";
const CSKeyPages = ({ pages }) => {
  return (
    <section className={styles.keyPages}>
      {/* <h2>Key Pages</h2> */}
      <p className="eyebrowHeader">Key Pages</p>
      <h2>A closer look at the platform</h2>
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
