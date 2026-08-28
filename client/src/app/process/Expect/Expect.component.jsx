// import CheckmarkCircle from "../../Components/CheckmarkCircle/CheckmarkCircle.component";
import styles from "./Expect.module.css";

const EXPECT_LIST = [
  {
    title: "Clear communication",
    description: "You’ll always know what’s happening and what comes next.",
  },
  {
    title: "Structured milestones",
    description: "A defined process with clear checkpoints and progress.",
  },
  {
    title: "Transparent updates",
    description: "Regular updates so nothing feels uncertain or delayed.",
  },
  {
    title: "Collaborative feedback",
    description: "We refine together to make sure everything aligns.",
  },
  {
    title: "Performance-focused",
    description: "Built with usability, speed, and scalability in mind.",
  },
  {
    title: "Guided launch",
    description: "A smooth handoff with support beyond delivery.",
  },
];

export default function Expect() {
  return (
    <section className={styles.expectSection}>
      <div className={styles.expectInner}>
        <div className={styles.expectHeader}>
          <div className={styles.sectionMarker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <p className={styles.eyebrow}>Project Standards</p>

          <h2 className={styles.heading}>
            What you can expect
            <br />
            <span>at every stage.</span>
          </h2>

          <p className={styles.intro}>
            A clear, collaborative website design process that keeps your
            project moving smoothly from the first idea to final launch.
          </p>
        </div>

        <ul className={styles.expectList}>
          {EXPECT_LIST.map((item, index) => (
            <li className={styles.expectItem} key={item.title}>
              <div className={styles.itemTop}>
                <span className={styles.itemNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.itemPixel} aria-hidden="true" />
              </div>

              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>

                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
