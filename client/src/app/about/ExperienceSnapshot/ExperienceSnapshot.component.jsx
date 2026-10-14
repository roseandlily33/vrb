import { FaCode, FaCubes, FaPalette } from "react-icons/fa";
import styles from "./ExperienceSnapshot.module.css";
import Card from "@/app/Components/Card/Card.component";

const experience = [
  {
    title: "Web Design & Development",
    text: "4+ years of hands-on website design and development experience, from responsive business websites to custom digital experiences.",
    icon: <FaCode />,
  },
  {
    title: "Full-Stack Development",
    text: "Experience building full-stack applications from scratch using modern front-end and back-end technologies.",
    icon: <FaCubes />,
  },
  {
    title: "UX/UI & Platforms",
    text: "Worked on platforms, marketing sites and redesigns with a focus on usability, structure and intuitive user experiences.",
    icon: <FaPalette />,
  },
];

const ExperienceSnapshot = () => {
  return (
    <section
      className={styles.experienceSection}
      aria-labelledby="experience-heading"
    >
      <div className={styles.experienceInner}>
        {/* HEADER */}
        <div className={styles.experienceHeader}>
          <div>
            <div className={styles.sectionMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>Experience</p>

            <h2 id="experience-heading">Experience Snapshot</h2>
          </div>

          <div className={styles.headerDetail} aria-hidden="true">
            <span className={styles.detailLine} />
            <span className={styles.detailPixel} />
          </div>
        </div>

        {/* EXPERIENCE COMPOSITION */}
        <div className={styles.experienceLayout}>
          {/* DECORATIVE CONSTELLATION */}
          <div className={styles.experienceVisual} aria-hidden="true">
            <div className={styles.orbitScene}>
              <span className={styles.orbitOne} />
              <span className={styles.orbitTwo} />
              <span className={styles.orbitThree} />

              <div className={`${styles.skillNode} ${styles.skillOne}`}>
                <span className={styles.skillNumber}>01</span>
              </div>

              <div className={`${styles.skillNode} ${styles.skillTwo}`}>
                <span className={styles.skillNumber}>02</span>
              </div>

              <div className={`${styles.skillNode} ${styles.skillThree}`}>
                <span className={styles.skillNumber}>03</span>
              </div>

              <span className={`${styles.orbitPixel} ${styles.pixelOne}`} />
              <span className={`${styles.orbitPixel} ${styles.pixelTwo}`} />
              <span className={`${styles.orbitPixel} ${styles.pixelThree}`} />

              <span className={`${styles.orbitDot} ${styles.dotOne}`} />
              <span className={`${styles.orbitDot} ${styles.dotTwo}`} />
            </div>
          </div>

          {/* EXPERIENCE CONTENT */}
          <ul className={styles.experienceList}>
            {experience.map((item, index) => (
              <li className={styles.experienceItem} key={index}>
                <div className={styles.itemMeta}>
                  <span className={styles.itemNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.iconWrapper} aria-hidden="true">
                    {item.icon}
                  </span>
                </div>

                <div className={styles.itemContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSnapshot;
