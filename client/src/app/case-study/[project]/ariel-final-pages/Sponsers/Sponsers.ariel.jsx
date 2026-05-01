import styles from "./Sponsers.module.css";

const sponsors = [
  { name: "Partner One", logo: "/logos/partner-one.png" },
  { name: "Partner Two", logo: "/logos/partner-two.png" },
  { name: "Partner Three", logo: "/logos/partner-three.png" },
  { name: "Partner Four", logo: "/logos/partner-four.png" },
  { name: "Partner Five", logo: "/logos/partner-five.png" },
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