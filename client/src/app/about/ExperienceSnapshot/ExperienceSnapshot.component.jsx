import { FaCode, FaCubes, FaPalette } from "react-icons/fa";
import styles from "./ExperienceSnapshot.module.css";
import Card from "@/app/Components/Card/Card.component";

const experience = [
  {
    title: "Web Design & Development",
    text: "4+ years of hands-on website design and development experience, from responsive business websites to custom digital experiences.",
    icon: <FaCode className="primaryIcon" />,
  },
  {
    title: "Full-Stack Development",
    text: "Experience building full-stack applications from scratch using modern front-end and back-end technologies.",
    icon: <FaCubes className="primaryIcon" />,
  },
  {
    title: "UX/UI & Platforms",
    text: "Worked on platforms, marketing sites and redesigns with a focus on usability, structure and intuitive user experiences.",
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
