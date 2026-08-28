import styles from "./ProjectIntro.module.css";

const ProjectIntro = () => {
  return (
    <div className={styles.projectsIntro}>
      <div className={styles.projectsIntroMarker} aria-hidden="true">
        <span className={styles.markerLine} />
        <span className={styles.markerPixel} />
      </div>

      <div className={styles.projectsIntroContent}>
        <h4>Selected Web Design & Development Projects</h4>

        <p>
          Explore selected web design and development case studies, from
          business websites and redesigns to custom platforms and UX/UI
          projects.
        </p>
      </div>
    </div>
  );
};

export default ProjectIntro;
