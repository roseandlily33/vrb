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
    <section className={styles.experienceSection}>
      <div className={styles.experienceInner}>
        <div className={styles.experienceHeader}>
          <div>
            <p className={styles.eyebrow}>Experience</p>
            <h3>Experience Snapshot</h3>
          </div>

          <div className={styles.headerDetail} aria-hidden="true">
            <span className={styles.detailLine} />
            <span className={styles.detailPixel} />
          </div>
        </div>

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
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSnapshot;
