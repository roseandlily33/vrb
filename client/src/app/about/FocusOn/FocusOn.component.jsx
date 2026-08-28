import styles from "./FocusOn.module.css";
import {
  FaRocket,
  FaUserFriends,
  FaSitemap,
  FaMobileAlt,
} from "react-icons/fa";

const FocusOn = () => {
  const focuses = [
    {
      text: "Building fast, scalable web applications",
      icon: <FaRocket />,
    },
    {
      text: "Creating clear, intuitive user experiences",
      icon: <FaUserFriends />,
    },
    {
      text: "Structuring applications for long-term growth",
      icon: <FaSitemap />,
    },
    {
      text: "Optimizing performance across all devices",
      icon: <FaMobileAlt />,
    },
  ];

  return (
    <section className={styles.focusSection}>
      <div className={styles.focusInner}>
        <div className={styles.focusHeader}>
          <div>
            <div className={styles.sectionMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className="eyebrowHeader">Focus</p>

            <h3>What I Focus On</h3>
          </div>

          <div className={styles.headerPixels} aria-hidden="true">
            <span className={styles.pixelOne} />
            <span className={styles.pixelTwo} />
            <span className={styles.pixelThree} />
          </div>
        </div>

        <ul className={styles.focusList}>
          {focuses.map((focus, index) => (
            <li key={index} className={styles.focusItem}>
              <div className={styles.focusTop}>
                <span className={styles.focusNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.focusIcon} aria-hidden="true">
                  {focus.icon}
                </span>
              </div>

              <p>{focus.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FocusOn;
