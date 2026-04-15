import styles from "./FocusOn.module.css";
import CheckmarkIcon from '../../Components/CheckmarkCircle/CheckmarkCircle.component';

const FocusOn = () => {
  const focuses = [
    "Building fast, scalable web applications",
    "Creating clear, intuitive user experiences",
    "Structuring applications for long-term growth",
    "Optimizing performance across all devices",
  ];
  return (
    <ul className={styles.focusList}>
      <h3>What I Focus On</h3>
      {focuses.map((focus, index) => (
        <li key={index} className={styles.focusItem}>
          <CheckmarkIcon />{focus}
        </li>
      ))}
    </ul>
  );
};

export default FocusOn;
