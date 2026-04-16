import styles from "./ContactInfo.module.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const contactDetails = [
  {
    icon: <FiMail className={styles.icon} aria-hidden="true" />,
    label: "Email",
    value: "victoria.benoit.dev@gmail.com",
    link: "mailto:victoria.benoit.dev@gmail.com",
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

export default function ContactInfo() {
  return (
    <aside className={styles.contactInfoSection}>
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
      <p className={styles.booking}>
        Currently booking in 2-4 weeks in advance, depending on the project
        scope and requirements. Please reach out to discuss your project
        timeline and availability.
      </p>
      <p className={styles.responseTime}>I typically respond to inquiries within 24-48 hours.</p>
    </aside>
  );
}
