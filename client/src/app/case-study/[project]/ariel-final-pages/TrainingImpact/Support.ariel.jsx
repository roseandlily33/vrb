import styles from "./Support.module.css";
import { FaNetworkWired, FaLifeRing, FaGlobeAmericas } from "react-icons/fa";
import InfoItem from "./InfoItem.ariel";
const SupportAndResources = () => {
  const resourceCards = [
    {
      title: "Access to Resources",
      text: "Our vast network of experienced professionals in both Canada and USA ensures you and your horse have support.",
      icon: <FaNetworkWired color="#bfa14a" size={20} />,
    },
    {
      title: "Ongoing Rider Support",
      text: "Get continued support, education, and guidance as your training progresses.",
      icon: <FaLifeRing color="#bfa14a" size={20} />,
    },
    {
      title: "Canada to Florida",
      text: "Support between Canada and USA ensures your training can continue seasonally.",
      icon: <FaGlobeAmericas color="#bfa14a" size={20} />,
    },
  ];
  return (
    <section className={styles.supportSection}>
      <div className={styles.supportInner}>
        <h3>Support & Resources</h3>

        <div className={styles.resourceGrid}>
          {resourceCards.map((card) => (
            <InfoItem key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportAndResources;
