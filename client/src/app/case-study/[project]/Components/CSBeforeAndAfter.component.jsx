import styles from "../page.module.css";
const CSBeforeAndAfter = ({ beforeImage, afterImage }) => {
  return (
    <section className={styles.beforeAndAfter}>
      <h2>Before and After</h2>
      <div className={styles.images}>
        <img src={beforeImage} alt="Before" />
        <img src={afterImage} alt="After" />
      </div>
    </section>
  );
};

export default CSBeforeAndAfter;
