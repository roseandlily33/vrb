import styles from "./Horsemanship.module.css";

const items = [
  "Mental & Physical well-being for both horse and rider",
  "Using strategic, adaptable training to build confidence",
  "Across both English and Western disciplines",
  "Education beyond her home province Nova Scotia training with world-class horsemen and women",
];

export default function Horsemanship() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>A lifelong approach to Horsemanship</h2>
        <p>An Accomplished Canadian Dressage Rider & Skilled Horsewoman</p>
      </div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={item} className={styles.item}>
            <div className={styles.icon} aria-hidden="true">
              Ω
            </div>

            <p>{item}</p>

            {index !== items.length - 1 && (
              <span className={styles.divider} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}