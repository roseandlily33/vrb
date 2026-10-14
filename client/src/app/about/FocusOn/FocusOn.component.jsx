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
    
<section
  className={styles.focusSection}
  aria-labelledby="focus-heading"
>
  <div className={styles.focusInner}>
    <div className={styles.focusHeader}>
      <div>
        <div className={styles.sectionMarker} aria-hidden="true">
          <span className={styles.markerLine} />
          <span className={styles.markerPixel} />
        </div>

        <p className="eyebrowHeader">Focus</p>

        <h2 id="focus-heading">What I Focus On</h2>
      </div>

      {/* Decorative connection */}
      <div className={styles.headerGraphic} aria-hidden="true">
        <svg
          viewBox="0 0 180 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 5 62 C 50 62, 45 12, 100 28 S 145 75, 175 20"
            className={styles.graphicPath}
          />

          <circle
            cx="100"
            cy="28"
            r="8"
            className={styles.graphicNode}
          />

          <circle
            cx="175"
            cy="20"
            r="4"
            className={styles.graphicDot}
          />

          <rect
            x="22"
            y="22"
            width="10"
            height="10"
            className={styles.graphicPixel}
          />
        </svg>
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

          <span className={styles.focusAccent} aria-hidden="true" />
        </li>
      ))}
    </ul>
  </div>
</section>

  );
};

export default FocusOn;
