import styles from "../page.module.css";
import Carousel from "./Extras/Carousel/Carousel";

const CSBeforeAndAfter = ({ beforeImages = [], afterImages = [] }) => {
  return (
    <section className={styles.beforeAndAfter}>
      <h2>Before and After</h2>
      <Carousel slides={beforeImages} />
      <Carousel slides={afterImages} />
    </section>
  );
};

export default CSBeforeAndAfter;
