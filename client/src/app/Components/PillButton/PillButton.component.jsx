import styles from "./PillButton.module.css";
import { techIconMap } from "./techIcons";

const PillButton = ({ children, className = "", tech, icon, ...props }) => {
  const Icon = techIconMap[tech];
  return (
    <button className={`${styles.pillButton} ${className}`} {...props}>
      {icon ? (
        // If icon prop is provided, render it directly
        <span className={styles.icon}>{icon}</span>
      ) : (
        Icon && <Icon className={styles.icon} />
      )}
      {children}
    </button>
  );
};

export default PillButton;
