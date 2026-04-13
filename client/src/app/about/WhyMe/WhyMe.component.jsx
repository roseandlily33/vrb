import styles from "./WhyMe.module.css";

const WhyMe = () => {
    return (
        <section className={styles.whyMeSection}>
            <h3>Why Me</h3>
            <p>
                I enjoy building products that solve real problems. Whether it’s
                improving performance, simplifying a user experience, or structuring a
                complex system, I like taking something messy and turning it into
                something clear and functional.
            </p>
            <ul className={styles.whyMeList}>
                <li>
                    <span className={styles.check}>✔</span> Problem-solving mindset
                </li>
                <li>
                    <span className={styles.check}>✔</span> Performance-focused
                </li>
                <li>
                    <span className={styles.check}>✔</span> Design + development thinking
                </li>
            </ul>
        </section>
    );
};

export default WhyMe;
