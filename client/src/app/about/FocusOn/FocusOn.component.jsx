
import styles from "./FocusOn.module.css";

const FocusOn = () => {
    const focuses = [
        "Building fast, scalable web applications",
        "Creating clear, intuitive user experiences",
        "Structuring applications for long-term growth",
        "Optimizing performance across all devices",
    ];
    return (
        <ul className={styles.focusList}>
            {focuses.map((focus, index) => (
                <li key={index} className={styles.focusItem}>
                    {focus}
                </li>
            ))}
        </ul>
    );
};

export default FocusOn;
