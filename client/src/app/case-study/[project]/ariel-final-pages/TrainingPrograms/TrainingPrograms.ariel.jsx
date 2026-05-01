import Card from "../Card/Card.ariel";
import styles from "./TrainingPrograms.module.css";

const corePrograms = [
  {
    title: "Full Training",
    description:
      "Our vast network of experienced professionals in both Canada and USA ensures that you and your horse will have access to the best care.",
  },
  {
    title: "Full Training",
    description:
      "Our vast network of experienced professionals in both Canada and USA ensures that you and your horse will have access to the best care.",
  },
  {
    title: "Full Training",
    description:
      "Our vast network of experienced professionals in both Canada and USA ensures that you and your horse will have access to the best care.",
  },
];

const additionalOfferings = [
  {
    title: "Full Training",
    description:
      "Our vast network of experienced professionals in both Canada and USA ensures that you and your horse will have access to the best care.",
  },
  {
    title: "Full Training",
    description:
      "Our vast network of experienced professionals in both Canada and USA ensures that you and your horse will have access to the best care.",
  },
  {
    title: "Full Training",
    description:
      "Our vast network of experienced professionals in both Canada and USA ensures that you and your horse will have access to the best care.",
  },
];

export default function TrainingPrograms() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Programs</p>
        <h2>Tailored Training Programs</h2>
        <p>Tailored programs to your needs.</p>
      </div>

      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Core Programs</h3>

        <div className={styles.grid}>
          {corePrograms.map((program, index) => (
            <Card key={index} {...program} />
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Additional Offerings</h3>

        <div className={styles.grid}>
          {additionalOfferings.map((program, index) => (
            <Card key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}