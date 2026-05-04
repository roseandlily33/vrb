import styles from "./TrainingImpact.module.css";
import {
  FaHandshake,
  FaUserGraduate,
  FaBalanceScale,
  FaHorseHead,
  FaNetworkWired,
  FaLifeRing,
  FaGlobeAmericas,
} from "react-icons/fa";

const impactCards = [
  {
    title: "Integrity & Thoughtful Training",
    text: "Horse ownership is a commitment and a skill. Performance comes through trust and clear communication.",
    icon: <FaHandshake color="#bfa14a" size={20} />,
  },
  {
    title: "Personalized Rider Development",
    text: "Every rider and horse need a system that builds confidence and clarity.",
    icon: <FaUserGraduate color="#bfa14a" size={20} />,
  },
  {
    title: "Balanced Multi-Discipline Approach",
    text: "Training should support both the horse’s mind and body across different disciplines.",
    icon: <FaBalanceScale color="#bfa14a" size={20} />,
  },
  {
    title: "Real World Application",
    text: "Practical training that carries into real riding situations, not just the arena.",
    icon: <FaHorseHead color="#bfa14a" size={20} />,
  },
];

const resourceCards = [
  {
    title: "Access to Resources",
    text: "Our vast network of experienced professionals in both Canada and USA ensures you and your horse have support.",
    icon: <FaNetworkWired color="#bfa14a" size={20} />,
  },
  {
    title: "Ongoing Rider Support",
    text: "Get continued support, education, and guidance as your training progresses.",
    icon: <FaLifeRing color="#bfa14a" size={20} />,
  },
  {
    title: "Canada to Florida",
    text: "Support between Canada and USA ensures your training can continue seasonally.",
    icon: <FaGlobeAmericas color="#bfa14a" size={20} />,
  },
];
function InfoItem({ icon, eyebrow, title, text }) {
  return (
    <div className={styles.infoItem}>
      {icon && <span className={styles.cardIcon}>{icon}</span>}

      <div className={styles.cardContent}>
        {eyebrow && <span className={styles.cardEyebrow}>{eyebrow}</span>}
        <h3>{title}</h3>
        <span className={styles.cardLine} />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function TrainingImpact() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>What Sets Our Training Apart</p>
        <h2>Thoughtful Training. Lasting Impact.</h2>
        <p>
          A refined approach to developing skill, confidence, and lasting
          connection between horse and rider.
        </p>
      </div>

      <div className={styles.impactGrid}>
        {impactCards.map((card) => (
          <InfoItem key={card.title} {...card} />
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.resources}>
        <h2>Support & Resources</h2>

        <div className={styles.resourceGrid}>
          {resourceCards.map((card) => (
            <InfoItem key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
