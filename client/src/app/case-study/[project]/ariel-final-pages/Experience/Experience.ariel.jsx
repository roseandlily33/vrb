import styles from "./Experience.module.css";

const experiences = [
  {
    year: "2020",
    title: "Florida International Youth Championship",
    description:
      "Achieved highly placing scores. With horse Prime Poetry",
  },
  {
    year: "2019",
    title: "Florida International Youth Championship",
    description:
      "Achieved highly placing scores. With horse Winnie Pooh",
  },
];

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2>10+</h2>
          <p>Years of experience</p>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider} />

        {/* RIGHT */}
        <div className={styles.right}>
          {experiences.map((exp) => (
            <div key={exp.year} className={styles.item}>
              <span className={styles.year}>{exp.year}</span>

              <div>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}