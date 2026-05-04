
import { FaHandshake, FaUserGraduate, FaBalanceScale, FaHorseHead, FaNetworkWired, FaLifeRing, FaGlobeAmericas } from "react-icons/fa";

const impactCards = [
  {
    eyebrow: "Trust",
    title: "Integrity & Thoughtful Training",
    text: "Horse ownership is a commitment and a skill. Performance comes through trust and clear communication.",
    icon: <FaHandshake color="#bfa14a" size={28} />,
  },
  {
    eyebrow: "Trust",
    title: "Personalized Rider Development",
    text: "Every rider and horse need a system that builds confidence and clarity.",
    icon: <FaUserGraduate color="#bfa14a" size={28} />,
  },
  {
    eyebrow: "Trust",
    title: "Balanced Multi-Discipline Approach",
    text: "Training should support both the horse’s mind and body across different disciplines.",
    icon: <FaBalanceScale color="#bfa14a" size={28} />,
  },
  {
    eyebrow: "Trust",
    title: "Real World Application",
    text: "Practical training that carries into real riding situations, not just the arena.",
    icon: <FaHorseHead color="#bfa14a" size={28} />,
  },
];

const resourceCards = [
  {
    title: "Access to Resources",
    text: "Our vast network of experienced professionals in both Canada and USA ensures you and your horse have support.",
    icon: <FaNetworkWired color="#bfa14a" size={28} />,
  },
  {
    title: "Ongoing Rider Support",
    text: "Get continued support, education, and guidance as your training progresses.",
    icon: <FaLifeRing color="#bfa14a" size={28} />,
  },
  {
    title: "Canada to Florida",
    text: "Support between Canada and USA ensures your training can continue seasonally.",
    icon: <FaGlobeAmericas color="#bfa14a" size={28} />,
  },
];


function InfoItem({ eyebrow, title, text, icon }) {
  return (
    <div className={styles.infoItem}>
      {eyebrow && <span className={styles.cardEyebrow}>{eyebrow}</span>}
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
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
          A balanced approach that builds skill, confidence and understanding
          for both horse and rider.
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