import Card from "@/app/Components/Card/Card.component";
import styles from "./Services.module.css";
import {
  FaCode,
  FaPalette,
  FaCogs,
  FaSearch,
  FaTools,
  FaPlug,
} from "react-icons/fa";

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
    {
      title: "SEO Services",
      description:
        "Technical and on-page SEO focused on improving site structure, search visibility, performance and long-term discoverability.",
      icon: <FaSearch className="primaryIcon" />,
    },
    {
      title: "Website Maintenance",
      description:
        "Ongoing website support, updates, troubleshooting and improvements to keep your site reliable, secure and performing well.",
      icon: <FaTools className="primaryIcon" />,
    },
    {
      title: "Custom Functionality",
      description:
        "Custom features, integrations and workflows designed around the specific needs of your website or digital platform.",
      icon: <FaPlug className="primaryIcon" />,
    },
  ];
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesInner}>
        <div className={styles.servicesHeader}>
          <div className={styles.headerLabel}>
            <span className={styles.headerNumber}>#01</span>
            <span className={styles.headerLine}></span>
          </div>

          <div className={styles.headerContent}>
            <h2>Services I offer</h2>

            <p>
              I provide freelance web design and development services for
              businesses in Halifax, Nova Scotia, and across Canada. Projects
              range from responsive business websites and UX/UI design to custom
              web applications, platform development, website redesigns and
              ongoing website maintenance.
            </p>

            <p>
              From polished websites to custom functionality, I help turn ideas
              into clean, usable digital experiences.
            </p>
          </div>

          <div className={styles.headerPixels} aria-hidden="true">
            <span className={`${styles.pixel} ${styles.pixelOne}`} />
            <span className={`${styles.pixel} ${styles.pixelTwo}`} />
            <span className={`${styles.pixel} ${styles.pixelThree}`} />
            <span className={`${styles.pixelOutline} ${styles.pixelFour}`} />
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div className={styles.serviceItem} key={service.title}>
              <span className={styles.serviceNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <Card
                icon={service.icon}
                title={service.title}
                description={service.description}
                learnMoreLink="/services"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
