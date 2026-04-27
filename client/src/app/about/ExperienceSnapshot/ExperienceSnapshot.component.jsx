import { FaCode, FaCubes, FaPalette } from "react-icons/fa";
import styles from "./ExperienceSnapshot.module.css";
import Card from "@/app/Components/Card/Card.component";

const experience = [
  {
    title: "Development",
    text: "4+ years of hands-on development experience",
    icon: <FaCode />,
  },
  {
    title: "Full-Stack",
    text: "Experience building full-stack applications from scratch",
    icon: <FaCubes />,
  },
  {
    title: "UX & Platforms",
    text: "Worked on platforms, marketing sites, and UX-focused redesigns",
    icon: <FaPalette />,
  },
];

const ExperienceSnapshot = () => {
  return (
    <section className={styles.experienceSection}>
      {/* <p className="eyebrowHeader">Experience</p> */}
      {/* <h3>What I Focus On </h3> */}
      <h2>Experience Snapshot</h2>
      <ul className={styles.experienceList}>
        {experience.map((item, index) => (
          <Card key={index} className={styles.experienceItem}>
            <span className="primaryIcon">{item.icon}</span>
            <span className={styles.experienceTitle}>{item.title}</span>
            <span className={styles.experienceText}>{item.text}</span>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSnapshot;
