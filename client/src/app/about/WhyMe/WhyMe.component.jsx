import styles from "./WhyMe.module.css";
import { FaLightbulb, FaTachometerAlt, FaLayerGroup } from "react-icons/fa";

const WhyMe = () => {
  return (
    <section className={styles.whyMeSection}>
      <p className="eyebrowHeader">Why work with me</p>
      {/* <h3>What I Focus On </h3> */}
      <h3>What You Can Expect</h3>
      <p className={styles.whyP}>
        I enjoy building products that solve real problems. Whether it’s
        improving performance, simplifying a user experience, or structuring a
        complex system, I like taking something messy and turning it into
        something clear and functional.
      </p>
      <ul className={styles.whyMeList}>
        <li>
          <span className={styles.whyMeIcon}><FaLightbulb /></span>
          Problem-solving mindset
        </li>
        <li>
          <span className={styles.whyMeIcon}><FaTachometerAlt /></span>
          Performance-focused
        </li>
        <li>
          <span className={styles.whyMeIcon}><FaLayerGroup /></span>
          Design + development thinking
        </li>
      </ul>
    </section>
  );
};

export default WhyMe;
