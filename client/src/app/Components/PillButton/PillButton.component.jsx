import styles from "./PillButton.module.css";
import { techIconMap } from "./techIcons";

const PillButton = ({ children, className = "", tech, ...props }) => {
    const Icon = techIconMap[tech];
    return (
        <button className={`${styles.pillButton} ${className}`} {...props}>
            {Icon && <Icon className={styles.icon} />}
            {children}
        </button>
    );
};

export default PillButton;
