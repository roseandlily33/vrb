import styles from "./Card.module.css";

export default function Card({ title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        Ω
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}