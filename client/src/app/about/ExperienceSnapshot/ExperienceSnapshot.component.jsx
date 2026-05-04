import { FaCode, FaCubes, FaPalette } from "react-icons/fa";
import styles from "./ExperienceSnapshot.module.css";
import Card from "@/app/Components/Card/Card.component";

const experience = [
  {
    title: "Development",
    text: "4+ years of hands-on development experience",
    icon: <FaCode className="primaryIcon" />,
  },
  {
    title: "Full-Stack",
    text: "Experience building full-stack applications from scratch",
    icon: <FaCubes className="primaryIcon" />,
  },
  {
    title: "UX & Platforms",
    text: "Worked on platforms, marketing sites, and UX-focused redesigns",
    icon: <FaPalette className="primaryIcon" />,
  },
];

const ExperienceSnapshot = () => {
  return (
    <section className={styles.experienceSection}>
      {/* <p className="eyebrowHeader">Experience</p> */}
      {/* <h3>What I Focus On </h3> */}
      <h3>Experience Snapshot</h3>
      <ul className={styles.experienceList}>
        {experience.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.text}
          />
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSnapshot;
