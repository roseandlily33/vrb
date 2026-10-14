import styles from "./CSKeyFeatures.module.css";
import { FiCheckCircle } from "react-icons/fi";

const CSKeyFeatures = ({ keyFeatures }) => {
  return (
    <section className={styles.features} id="key-features">
      <div className={styles.featuresInner}>
        {/* SECTION HEADER */}
        <div className={styles.featuresHeader}>
          <div className={styles.featuresHeaderTop}>
            <span className={styles.featuresSectionIndex}>
              PLATFORM / CAPABILITIES
            </span>

            <div className={styles.marker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>
          </div>

          <p className="eyebrowHeader">Key Features</p>

          <div className={styles.featuresHeadingRow}>
            <h2>
              Core features{" "}
              <span className={styles.featuresHeadingAccent}>
                of the platform.
              </span>
            </h2>

            <div className={styles.featuresHeaderAside}>
              <span className={styles.featuresCount}>
                {String(keyFeatures?.length ?? 0).padStart(2, "0")}
              </span>

              <span className={styles.featuresCountLabel}>
                Key Capabilities
              </span>
            </div>
          </div>
        </div>

        {/* FEATURE GRID */}
        <ul className={styles.featuresGrid}>
          {keyFeatures?.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <div className={styles.featureItemTop}>
                <span className={styles.featureNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.featurePixelGroup} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </div>

              <p className={styles.featureText}>{feature}</p>

              <div className={styles.featureItemBottom} aria-hidden="true">
                <span className={styles.featureRule} />
                <span className={styles.featurePixel} />
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.featuresFooter} aria-hidden="true">
          <span className={styles.featuresFooterLabel}>
            DESIGNED TO WORK TOGETHER
          </span>

          <span className={styles.featuresFooterLine} />

          <span className={styles.featuresFooterPixel} />
        </div>
      </div>
    </section>
  );
};

export default CSKeyFeatures;
