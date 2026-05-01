import styles from "./ServicesBar.module.css";

const services = [
  "Full Training",
  "Horsemanship",
  "Coaching",
  "Clinics",
  "Winters in Florida",
];

export default function ServicesBar() {
  return (
    <section className={styles.bar}>
      <div className={styles.inner}>
        {services.map((service, index) => (
          <div key={service} className={styles.itemWrap}>
            <span className={styles.item}>{service}</span>
            {index !== services.length - 1 && (
              <span className={styles.divider} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}