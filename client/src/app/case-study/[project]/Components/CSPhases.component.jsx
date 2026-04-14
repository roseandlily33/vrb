import styles from "../page.module.css";
import { PhaseDescriptions } from "../ArielPerformanceHorses/pages";

export default function CSPhases() {
    return (
        <section className={styles.phasesSection}>
            <h2 className={styles.phasesHeading}>Project Phases</h2>
            <div className={styles.phasesGrid}>
                {PhaseDescriptions.map((phase, idx) => (
                    <div className={styles.phaseCard} key={phase.phase}>
                        <div className={styles.phaseHeader}>
                            <span className={styles.phaseBadge}>{phase.phase}</span>
                        </div>
                        <div className={styles.phaseDesc}>{phase.description}</div>
                        {phase.points && (
                            <ul className={styles.phasePoints}>
                                {phase.points.map((pt) => (
                                    <li key={pt} className={styles.phasePoint}>{pt}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
