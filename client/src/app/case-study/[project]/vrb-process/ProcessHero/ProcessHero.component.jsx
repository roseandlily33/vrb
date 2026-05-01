import styles from "./ProcessHero.module.css";
import { eachPageList } from "../pageList";

const ProcessHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heading}>Explore the VRB Website Process</h1>
                <p className={styles.description}>
                    See how each page of the VRB project was designed and built. Jump to any section below to view details, progress, and visuals for each part of the site.
                </p>
                <nav className={styles.pageNav} aria-label="Page navigation">
                    <ul className={styles.pageList}>
                        {eachPageList.map((page, idx) => (
                            <li key={idx}>
                                <a href={`#${page.pageName.replace(/\s+/g, "-").toLowerCase()}`} className={styles.pageLink}>
                                    {page.pageName}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default ProcessHero;
