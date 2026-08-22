import Card from "@/app/Components/Card/Card.component";
import styles from "./Services.module.css";
import { FaCode, FaPalette, FaCogs } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom, responsive websites and web applications built with clean code, strong structure, and long-term scalability in mind.",
      icon: <FaCode className="primaryIcon" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Thoughtful interface and user experience design centred on clarity, usability, accessibility, and real users.",
      icon: <FaPalette className="primaryIcon" />,
    },
    {
      title: "Custom Functionality",
      description:
        "Custom website functionality beyond a standard build, from integrations and forms to dashboards and user-focused tools.",
      icon: <FaCogs className="primaryIcon" />,
    },
  ];
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesHeader}>
        {/* <p className="eyebrowHeader">Services</p> */}
        <h2>Services I offer</h2>
        <p>
          From polished websites to custom functionality, I help turn ideas into
          clean, usable digital experiences.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <Card
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            learnMoreLink="/services"
          />
        ))}
      </div>
    </section>
  );
}
