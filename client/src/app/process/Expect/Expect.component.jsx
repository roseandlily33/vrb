import CheckmarkCircle from '../../Components/CheckmarkCircle/CheckmarkCircle.component';
import styles from "./Expect.module.css";

const EXPECT_LIST = [
    "Clear communication at every stage",
    "A structured process with defined milestones",
    "Regular updates and transparent progress",
    "Collaborative feedback and iteration",
    "A focus on performance, usability, and long-term scalability",
    "A smooth, guided launch with post-project support",
];

export default function Expect() {
    return (
        <section className={styles.expectSection}>
            <h2 className={styles.heading}>What You Can Expect</h2>
            <span className={styles.span}>A clear, structured experience from start to finish.</span>
            <ul className={styles.expectList}>
                {EXPECT_LIST.map((item) => (
                    <li className={styles.expectItem} key={item}>
                        <CheckmarkCircle />{item}
                    </li>
                ))}
            </ul>
        </section>
    );
}
