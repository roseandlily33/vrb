import styles from "./Services.module.css";
import Link from "next/link";
import { FaArrowRight, FaCode, FaPalette, FaCogs } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive websites built with clean code, strong structure, and long-term scalability in mind.",
      icon: <FaCode className="primaryIcon" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Thoughtful interfaces designed around clarity, usability, and a smooth experience for real users.",
      icon: <FaPalette className="primaryIcon" />,
    },
    {
      title: "Custom Functionality",
      description:
        "Features that go beyond a standard website, from integrations and forms to dashboards and user-focused tools.",
      icon: <FaCogs className="primaryIcon" />,
    },
  ];
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesHeader}>
        <p className="eyebrowHeader">Services</p>
        <h2>Services I offer</h2>
        <p>
          From polished websites to custom functionality, I help turn ideas into
          clean, usable digital experiences.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <article className={styles.serviceCard} key={service.title}>
            <h3>
              {service.icon}
              {service.title}
            </h3>
            <p>{service.description}</p>

            <Link href="/services" className={styles.serviceLink}>
              Learn More <FaArrowRight />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
