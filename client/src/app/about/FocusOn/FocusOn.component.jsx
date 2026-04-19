import styles from "./FocusOn.module.css";
import { FaRocket, FaUserFriends, FaSitemap, FaMobileAlt } from "react-icons/fa";

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
    <ul className={styles.focusList}>
      <p className="eyebrowHeader">Focus</p>
      <h3>What I Focus On </h3>
      {focuses.map((focus, index) => (
        <li key={index} className={styles.focusItem}>
          <span style={{ marginRight: '0.7em', color: 'var(--blue-500)', fontSize: '1.2em' }}>{focus.icon}</span>
          {focus.text}
        </li>
      ))}
    </ul>
  );
};

export default FocusOn;
