import React from "react";
import styles2 from "./optionalAddOns.module.css";
import styles from "../page.module.css";
// import Card from "@/app/Components/Card/Card.component";
import {
  FaAccessibleIcon,
  FaBezierCurve,
  FaBlog,
  FaBookOpen,
  FaBullhorn,
  FaCalendarAlt,
  FaChartLine,
  FaCode,
  FaCreditCard,
  FaDatabase,
  FaEnvelope,
  FaLayerGroup,
  FaMobileAlt,
  FaPalette,
  FaPenNib,
  FaPlug,
  FaProjectDiagram,
  FaPuzzlePiece,
  FaSearch,
  FaServer,
  FaSyncAlt,
  FaTools,
  FaUsersCog,
  FaWrench,
} from "react-icons/fa";
const addOnIcons = {
  "additional interface mockups": FaLayerGroup,
  "motion/interaction design": FaBezierCurve,
  "advanced prototyping": FaProjectDiagram,
  "brand identity expansion": FaPalette,
  "design presentations/decks": FaBookOpen,
  "design retainer support": FaSyncAlt,

  "additional pages": FaLayerGroup,
  "blog integration": FaBlog,
  "booking system expansion": FaCalendarAlt,
  "copywriting support": FaPenNib,
  "advanced animations/interactions": FaBezierCurve,
  "cms integration": FaDatabase,
  "ongoing maintenance plans": FaWrench,
  "analytics & tracking setup": FaChartLine,
  "additional seo optimization": FaSearch,
  "email marketing integration": FaEnvelope,
  "developer collaboration sessions": FaCode,
  "mobile app interface concepts": FaMobileAlt,
  "social media/marketing assets": FaBullhorn,
  "advanced accessibility reviews": FaAccessibleIcon,

  "additional page mockups": FaLayerGroup,
  "mobile-specific mockups": FaMobileAlt,
  "full ui design system": FaPuzzlePiece,
  "interactive prototypes": FaProjectDiagram,

  "advanced analytics & reporting": FaChartLine,
  "custom admin dashboards": FaServer,
  "membership/subscription systems": FaUsersCog,
  "payment integrations": FaCreditCard,
  "multi-user permissions": FaUsersCog,
  "advanced seo strategy": FaSearch,
  "automation integrations": FaPlug,
  "api expansion": FaCode,
  "additional platform modules/features": FaPuzzlePiece,
  "branding support": FaPalette,
  "design-to-development handoff": FaTools,
  "additional revision rounds": FaSyncAlt,
};

const OptionalAddOns = ({ pkg = {} }) => {
  const uniqueOptionalAddOns = pkg?.optionalAddOns
    ? [...new Set(pkg?.optionalAddOns)]
    : [];

  const getAddOnIcon = (item) => {
    const key = item?.toLowerCase().trim();
    return addOnIcons[key] || FaPuzzlePiece;
  };

  return (
    <>
      {uniqueOptionalAddOns?.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Flexible Options</span>
            <h2>Optional Add-Ons</h2>
            <p>
              Add extra support, functionality, or design deliverables as your
              project scope grows.
            </p>
          </div>

          <div className={styles2.addOnsGrid}>
            {uniqueOptionalAddOns?.map((item) => {
              const Icon = getAddOnIcon(item);

              return (
                <div key={item} className={styles2.addOnCard}>
                  <Icon className={styles2.addOnIcon} />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default OptionalAddOns;
