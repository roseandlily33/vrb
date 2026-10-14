import styles from "./WhyMe.module.css";
import { FaLightbulb, FaTachometerAlt, FaLayerGroup } from "react-icons/fa";

const WhyMe = () => {
  return (
    <section className={styles.whyMeSection} aria-labelledby="why-me-heading">
      <div className={styles.whyIntro}>
        <div className={styles.sectionMarker} aria-hidden="true">
          <span className={styles.markerLine} />
          <span className={styles.markerPixel} />
        </div>

        <p className="eyebrowHeader">Why work with me</p>

        <h2 id="why-me-heading" className={styles.whyHeading}>
          What You Can Expect
        </h2>

        <p className={styles.whyP}>
          I enjoy building products that solve real problems. Whether it’s
          improving performance, simplifying a user experience, or structuring a
          complex system, I like taking something messy and turning it into
          something clear and functional.
        </p>
      </div>

      <div className={styles.whyVisual}>
        <ul className={styles.whyMeList}>
          <li className={styles.whyMeItem}>
            <div className={styles.iconArea}>
              <span className={styles.iconOrbit} aria-hidden="true" />

              <span className={styles.whyMeIcon} aria-hidden="true">
                <FaLightbulb />
              </span>
            </div>

            <div className={styles.itemContent}>
              <span className={styles.whyNumber}>01 /</span>
              <span className={styles.whyMeText}>Problem-solving mindset</span>
            </div>
          </li>

          <li className={styles.whyMeItem}>
            <div className={styles.iconArea}>
              <span className={styles.iconOrbit} aria-hidden="true" />

              <span className={styles.whyMeIcon} aria-hidden="true">
                <FaTachometerAlt />
              </span>
            </div>

            <div className={styles.itemContent}>
              <span className={styles.whyNumber}>02 /</span>
              <span className={styles.whyMeText}>Performance-focused</span>
            </div>
          </li>

          <li className={styles.whyMeItem}>
            <div className={styles.iconArea}>
              <span className={styles.iconOrbit} aria-hidden="true" />

              <span className={styles.whyMeIcon} aria-hidden="true">
                <FaLayerGroup />
              </span>
            </div>

            <div className={styles.itemContent}>
              <span className={styles.whyNumber}>03 /</span>
              <span className={styles.whyMeText}>
                Design + development thinking
              </span>
            </div>
          </li>
        </ul>

        <span className={styles.decorativePixel} aria-hidden="true" />
      </div>
    </section>
  );
};

export default WhyMe;
