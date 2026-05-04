import styles from "./TrainingImpact.module.css";
import {
  FaHandshake,
  FaUserGraduate,
  FaBalanceScale,
  FaHorseHead,
} from "react-icons/fa";
import InfoItem from "./InfoItem.ariel";

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

export default function TrainingImpact() {
  return (
    <>
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
      </section>
    </>
  );
}
