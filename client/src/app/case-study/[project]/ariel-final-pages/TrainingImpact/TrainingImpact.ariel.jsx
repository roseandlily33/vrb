import styles from "./TrainingImpact.module.css";

const impactCards = [
  {
    eyebrow: "Trust",
    title: "Integrity & Thoughtful Training",
    text: "Horse ownership is a commitment and a skill. Performance comes through trust and clear communication.",
  },
  {
    eyebrow: "Trust",
    title: "Personalized Rider Development",
    text: "Every rider and horse need a system that builds confidence and clarity.",
  },
  {
    eyebrow: "Trust",
    title: "Balanced Multi-Discipline Approach",
    text: "Training should support both the horse’s mind and body across different disciplines.",
  },
  {
    eyebrow: "Trust",
    title: "Real World Application",
    text: "Practical training that carries into real riding situations, not just the arena.",
  },
];

const resourceCards = [
  {
    title: "Access to Resources",
    text: "Our vast network of experienced professionals in both Canada and USA ensures you and your horse have support.",
  },
  {
    title: "Ongoing Rider Support",
    text: "Get continued support, education, and guidance as your training progresses.",
  },
  {
    title: "Canada to Florida",
    text: "Support between Canada and USA ensures your training can continue seasonally.",
  },
];

function InfoCard({ eyebrow, title, text }) {
  return (
    <article className={styles.card}>
      {eyebrow && <p className={styles.cardEyebrow}>{eyebrow}</p>}

      <div className={styles.cardTop}>
        <h3>{title}</h3>
        <span aria-hidden="true">Ω</span>
      </div>

      <p>{text}</p>
    </article>
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
          <InfoCard key={card.title} {...card} />
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.resources}>
        <h2>Support & Resources</h2>

        <div className={styles.resourceGrid}>
          {resourceCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}