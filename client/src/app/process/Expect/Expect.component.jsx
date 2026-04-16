import CheckmarkCircle from "../../Components/CheckmarkCircle/CheckmarkCircle.component";
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
            <h2 className={styles.heading}>What you can expect at every stage</h2>
            <ul className={styles.expectList}>
                {EXPECT_LIST.map((item) => (
                    <li className={styles.expectItem} key={item.title}>
                        <div className={styles.itemContent}>
                            <strong className={styles.itemTitle}>{item.title}</strong>
                            <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
