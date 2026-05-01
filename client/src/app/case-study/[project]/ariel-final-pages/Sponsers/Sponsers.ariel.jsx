import styles from "./Sponsers.module.css";

const sponsors = [
  { name: "Partner One", logo: "/ArielPerformance/Pictures/Sponser1.png" },
  { name: "Partner Two", logo: "/ArielPerformance/Pictures/Sponser2.png" },
  { name: "Partner Three", logo: "/ArielPerformance/Pictures/Sponser3.png" },
  { name: "Partner Four", logo: "/ArielPerformance/Pictures/Sponser4.png" },
  { name: "Partner Five", logo: "/ArielPerformance/Pictures/Sponser5.png" },
];

export default function Sponsers() {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <div className={styles.headerText}>
          <h2>Our Trusted Partners</h2>
          <p className={styles.description}>
            We are grateful for the support and collaboration of these outstanding organizations. Their partnership helps us deliver the best for our clients and community.
          </p>
        </div>
      </div>
      <div className={styles.logoGrid}>
        {sponsors.map((sponsor) => (
          <a href="#" key={sponsor.name} className={styles.logoCard}>
            <img src={sponsor.logo} alt={sponsor.name} />
          </a>
        ))}
      </div>
    </section>
  );
}