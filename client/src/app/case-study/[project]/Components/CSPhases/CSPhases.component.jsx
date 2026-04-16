import styles from "./CSPhases.module.css";
import Carousel from "../Extras/Carousel/Carousel";
import { PhaseDescriptions } from "../../ArielPerformanceHorses/pages";

// phaseImages: { [phase: string]: { url, description }[] }
export default function CSPhases({ phaseImages = {} }) {
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
                        {phaseImages[phase.phase] && phaseImages[phase.phase].length > 0 && (
                            <div style={{ marginTop: "1.2rem" }}>
                                <Carousel slides={phaseImages[phase.phase]} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
