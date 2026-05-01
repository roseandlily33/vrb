import styles from "./Principles.module.css";

const principles = [
  {
    number: "01",
    title: "Awareness",
    description:
      "Awareness in horses is body language & energy levels. Awareness creates interactions and provides a strong base for trust.",
  },
  {
    number: "02",
    title: "Listening & Communication",
    description:
      "Understanding how horses communicate through movement and response creates clarity and consistency in training.",
  },
  {
    number: "03",
    title: "Trust Building",
    description:
      "Trust is built through consistent actions and clear communication, allowing horses to feel safe and responsive.",
  },
  {
    number: "04",
    title: "Adaptability",
    description:
      "Every horse is different. Adapting your approach ensures better results and a stronger long-term connection.",
  },
];

export default function Principles() {
  return (
    <section className={styles.section}>
      {/* LEFT SIDE (image placeholder) */}
      <div className={styles.left} />

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <p className={styles.eyebrow}>Our Approach</p>
        <h2 className={styles.title}>4 Principles</h2>
        <p className={styles.subtitle}>
          We specialize in these touchpoints
        </p>

        <div className={styles.list}>
          {principles.map((item) => (
            <div key={item.number} className={styles.item}>
              <span className={styles.number}>{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}