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
      <h2>Our Trusted Partners</h2>

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