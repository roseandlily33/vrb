
import styles from "./AboutMe.module.css";

const AboutMe = () => {
    const items = [
        "4+ Years Experience",
        "Full Stack Development",
        "Performance Optimization",
        "User-Centered Design",
    ];
    return (
        <section className={styles.aboutMeSection}>
            <div className={styles.aboutMeLeft}>
                <h2>About Me</h2>
                <p>
                    I’m a full stack developer focused on building high-performance,
                    user-focused web applications. I enjoy turning complex ideas into clean,
                    scalable solutions that are both efficient and easy to use.
                </p>
                <p>
                    With experience across both design and development, I approach projects
                    with a strong focus on performance, usability, and long-term
                    maintainability. My goal is to create products that not only look good,
                    but work reliably in real-world use.
                </p>
            </div>
            <div className={styles.aboutMeRight}>
                <div className={styles.aboutMeBadges}>
                    {items.map((item, idx) => (
                        <span key={idx} className={styles.aboutMeBadge}>{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
