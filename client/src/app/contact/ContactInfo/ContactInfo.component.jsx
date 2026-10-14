import styles from "./ContactInfo.module.css";
import { FiMail, FiPhone, FiMapPin, FiClock, FiCalendar } from "react-icons/fi";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FiMail className={styles.icon} aria-hidden="true" />,
      label: "Email",
      value: "victoria@vrbwebdesignanddev.com",
      link: "mailto:victoria@vrbwebdesignanddev.com",
    },
    // {
    //   icon: <FiPhone className={styles.icon} aria-hidden="true" />,
    //   label: "Phone",
    //   value: "+1 (902) 817-1001",
    //   link: "tel:+19028171001",
    // },
    {
      icon: <FiMapPin className={styles.icon} aria-hidden="true" />,
      label: "Location",
      value: "Halifax, Canada (or remote)",
    },
  ];

  return (
    <aside className={styles.contactInfoSection}>
      {/* =========================================
      CONTACT PANEL HEADER
  ========================================= */}

      <div className={styles.infoHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerEyebrow}>
            <span className={styles.headerMarker} aria-hidden="true">
              <span />
              <span />
            </span>

            <span>Get in Touch</span>
          </div>

          <h2 className={styles.mainTitle}>Let&apos;s keep in touch.</h2>

          <p className={styles.headerDescription}>
            Have a question or want to connect directly? Here's where you can
            find me.
          </p>
        </div>

        <div className={styles.headerPixels} aria-hidden="true">
          <span className={styles.headerPixelOne} />
          <span className={styles.headerPixelTwo} />
        </div>
      </div>

      {/* =========================================
      CONTACT METHODS
  ========================================= */}

      <div className={styles.contactMethods}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionIndex}>01</span>
          <span className={styles.sectionLabel}>Contact Details</span>
          <span className={styles.sectionLine} aria-hidden="true" />
        </div>

        <ul className={styles.infoList}>
          {contactDetails.map((item) => (
            <li className={styles.infoItem} key={item.label}>
              <span className={styles.iconWrapper} aria-hidden="true">
                {item.icon}
              </span>

              <div className={styles.infoTextBlock}>
                <span className={styles.infoLabel}>{item.label}</span>

                {item.link ? (
                  <a
                    href={item.link}
                    className={styles.infoValue}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className={styles.infoValue}>{item.value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* =========================================
      AVAILABILITY AND RESPONSE TIME
  ========================================= */}

      <div className={styles.projectInfo}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionIndex}>02</span>
          <span className={styles.sectionLabel}>Good to Know</span>
          <span className={styles.sectionLine} aria-hidden="true" />
        </div>

        <div className={styles.infoSection}>
          <span className={styles.iconWrapper} aria-hidden="true">
            <FiCalendar className={styles.icon} />
          </span>

          <div className={styles.infoTextBlock}>
            <span className={styles.infoSectionTitle}>Availability</span>

            <span className={styles.infoSectionText}>
              Currently booking in 2-4 weeks in advance, depending on the
              project scope and requirements. Please reach out to discuss your
              project timeline and availability.
            </span>
          </div>
        </div>

        <div className={styles.infoSection}>
          <span className={styles.iconWrapper} aria-hidden="true">
            <FiClock className={styles.icon} />
          </span>

          <div className={styles.infoTextBlock}>
            <span className={styles.infoSectionTitle}>Response Time</span>

            <span className={styles.infoSectionText}>
              I typically respond to inquiries within 24-48 hours.
            </span>
          </div>
        </div>
      </div>

      {/* =========================================
      DECORATIVE FOOTER
  ========================================= */}

      <div className={styles.infoFooter} aria-hidden="true">
        <span className={styles.footerLine} />
        <span className={styles.footerPixel} />
      </div>
    </aside>
  );
};

export default ContactInfo;
