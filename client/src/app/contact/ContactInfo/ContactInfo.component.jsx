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
    {
      icon: <FiPhone className={styles.icon} aria-hidden="true" />,
      label: "Phone",
      value: "+1 (902) 817-1001",
      link: "tel:+19028171001",
    },
    {
      icon: <FiMapPin className={styles.icon} aria-hidden="true" />,
      label: "Location",
      value: "Halifax, Canada (or remote)",
    },
  ];

  return (
    <aside className={styles.contactInfoSection}>
      <div className={styles.mainTitle}>Let&apos;s keep in touch</div>
      <ul className={styles.infoList}>
        {contactDetails.map((item) => (
          <li className={styles.infoItem} key={item.label}>
            <span className={styles.iconWrapper}>{item.icon}</span>
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

      <div className={styles.infoSection}>
        <div className={styles.infoSectionTitleRow}>
          <span className={styles.iconWrapper}>
            <FiCalendar aria-hidden="true" className={styles.icon} />
          </span>
        </div>
        <div className={styles.infoTextBlock}>
          <span className={styles.infoSectionTitle}>Availability</span>
          <span className={styles.infoSectionText}>
            Currently booking in 2-4 weeks in advance, depending on the project
            scope and requirements. Please reach out to discuss your project
            timeline and availability.
          </span>
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.infoSectionTitleRow}>
          <span className={styles.iconWrapper}>
            <FiClock aria-hidden="true" className={styles.icon} />
          </span>
        </div>
        <div className={styles.infoTextBlock}>
          <span className={styles.infoSectionTitle}>Response Time</span>
          <span className={styles.infoSectionText}>
            I typically respond to inquiries within 24-48 hours.
          </span>
        </div>
      </div>
    </aside>
  );
};

export default ContactInfo;
