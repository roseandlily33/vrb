import styles from './InfoItem.module.css';
export default function InfoItem({ icon, eyebrow, title, text }) {
  return (
    <div className={styles.infoItem}>
      {icon && <span className={styles.cardIcon}>{icon}</span>}

      <div className={styles.cardContent}>
        {eyebrow && <span className={styles.cardEyebrow}>{eyebrow}</span>}
        <h4>{title}</h4>
        <span className={styles.cardLine} />
        <p>{text}</p>
      </div>
    </div>
  );
}