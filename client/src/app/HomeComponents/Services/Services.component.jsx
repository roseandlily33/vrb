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
    <section
      className={styles.servicesSection}
      aria-labelledby="services-heading"
    >
      <div className={styles.servicesInner}>
        {/* =====================================
        SECTION HEADER
    ===================================== */}

        <div className={styles.servicesHeader}>
          <div className={styles.headerLabel}>
            {/* <span className={styles.headerNumber}>#01</span> */}
            <span className={styles.headerLine} aria-hidden="true" />
          </div>

          <div className={styles.headerContent}>
            <p className={styles.servicesEyebrow}>What I can help you with</p>

            <h2 id="services-heading">
              Creative design.
              <br />
              <span>Thoughtful development.</span>
            </h2>

            <p>
              Whether you're building your first website, refreshing an outdated
              one or looking for something more custom, I offer web design and
              development services tailored to your business.
            </p>

            <p>
              From planning the experience to bringing the final design to life,
              I focus on creating websites that look professional, work well and
              make sense for the people using them.
            </p>
          </div>

          {/* Logo-inspired decorative pixels */}
          <div className={styles.headerPixels} aria-hidden="true">
            <span className={`${styles.pixel} ${styles.pixelOne}`} />
            <span className={`${styles.pixel} ${styles.pixelTwo}`} />
            <span className={`${styles.pixel} ${styles.pixelThree}`} />
            <span className={`${styles.pixelOutline} ${styles.pixelFour}`} />

            <svg
              className={styles.headerCircuit}
              viewBox="0 0 220 200"
              fill="none"
            >
              <path d="M15 145H72L95 122H155" />
              <path d="M35 166H115L135 146H185" />
              <circle cx="155" cy="122" r="5" />
              <circle cx="185" cy="146" r="5" />
            </svg>
          </div>
        </div>

        {/* =====================================
        SIX SERVICE CARDS
    ===================================== */}

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div className={styles.serviceItem} key={service.title}>
              <div className={styles.serviceTop}>
                <span className={styles.serviceNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.serviceCircuit} aria-hidden="true">
                  <span className={styles.circuitLine} />
                  <span className={styles.circuitNode} />
                </span>
              </div>

              <Card
                icon={service.icon}
                title={service.title}
                description={service.description}
                learnMoreLink="/services"
                variant="minimal"
              />
            </div>
          ))}
        </div>

        {/* =====================================
        SECTION FOOTER
    ===================================== */}

        <div className={styles.servicesFooter}>
          <span className={styles.footerPixel} aria-hidden="true" />

          <p>
            Every project is different. The goal is to find the right solution
            for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
