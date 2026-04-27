import styles from "./WhyMe.module.css";
import { FaLightbulb, FaTachometerAlt, FaLayerGroup } from "react-icons/fa";

const WhyMe = () => {
  return (
    <section className={styles.whyMeSection}>
      <div className={styles.whyIntro}>
        <p className="eyebrowHeader">Why work with me</p>
        <h3 className={styles.whyHeading}>What You Can Expect</h3>
        <p className={styles.whyP}>
          I enjoy building products that solve real problems. Whether it’s
          improving performance, simplifying a user experience, or structuring a
          complex system, I like taking something messy and turning it into
          something clear and functional.
        </p>
      </div>

      <ul className={styles.whyMeList}>
        <li>
          <span>
            <FaLightbulb className="primaryIcon" />
          </span>
          <span className={styles.whyMeText}>Problem-solving mindset</span>
        </li>
        <li>
          <span>
            <FaTachometerAlt className="primaryIcon" />
          </span>
          <span className={styles.whyMeText}>Performance-focused</span>
        </li>
        <li>
          <span>
            <FaLayerGroup className="primaryIcon" />
          </span>
          <span className={styles.whyMeText}>
            Design + development thinking
          </span>
        </li>
      </ul>
    </section>
  );
};

export default WhyMe;
