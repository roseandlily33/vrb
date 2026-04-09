import styles from "./MetadataBar.module.css";

export default function MetadataBar() {
    return (
        <div className={styles.metadataBar}>
            <span>4+ Years Experience</span>
            <span className={styles.separator}>
                <span className={styles.bar}></span>
            </span>
            <span>Full Stack Developer</span>
            <span className={styles.separator}>
                <span className={styles.bar}></span>
            </span>
            <span>Real Client Work</span>
        </div>
    );
}
