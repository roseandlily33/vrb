import Card from "@/app/Components/Card/Card.component";
import styles from "./Services.module.css";
import { FaCode, FaPalette, FaCogs } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "Custom websites and web applications built with modern technologies for performance, scalability and long-term use.",
      icon: <FaCode className="primaryIcon" />,
    },
    {
      title: "Website Design",
      description:
        "Responsive, user-focused websites designed around your brand, audience and business goals.",
      icon: <FaPalette className="primaryIcon" />,
    },
    {
      title: "UX/UI Design",
      description:
        "Interface and user experience design focused on clear navigation, intuitive interactions and accessible digital experiences.",
      icon: <FaCogs className="primaryIcon" />,
    },
  ];
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesHeader}>
        {/* <p className="eyebrowHeader">Services</p> */}
        <h2>Services I offer</h2>
        <p>
          I provide freelance web design and development services for businesses
          in Halifax, Nova Scotia, and across Canada. Projects range from
          responsive business websites and UX/UI design to custom web
          applications, platform development, website redesigns and ongoing
          website maintenance.
        </p>
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
