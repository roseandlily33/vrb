import MostPopular from "../../Components/MostPopular/MostPopular.component";
import { FaRegClock } from "react-icons/fa";
const SelectedDesignPackage = ({ pkg, setSelectedIdx }) => {
  const Icon = () => (
    <span
      className={styles.cardIcon}
      aria-hidden="true"
      style={{
        fontSize: "2.1rem",
        color: "var(--blue-500)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      🎨
    </span>
  );
  return (
    <section className={styles.designSection}>
      <div className={styles.designIntro}>
        <div className={styles.introText}>
          <span className="eyebrowHeader">Design-Only Options</span>
          <h2 className={styles.heading}>{pkg.title}</h2>
          <p className={styles.meta}>{pkg.description}</p>
        </div>
      </div>
      <div className={styles.detailCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardIcon}>
            <Icon />
          </span>
          <div>
            <h3 className={styles.cardTitle}>{pkg.title}</h3>
            <div className={styles.bestFor}>{pkg.bestFor}</div>
          </div>
          {pkg.highlight && <div>{pkg.highlight}</div>}
        </div>
        <div className={styles.priceSection}>
          <div className={styles.priceLabel}>STARTING AT</div>
          <div className={styles.priceValue}>{pkg.startingAt}</div>
          <div className={styles.timelineRow}>
            <FaRegClock className={styles.clockIcon} />
            <span className={styles.timelineText}>Approx. {pkg.timeline}</span>
          </div>
        </div>
        <p className={styles.cardDesc}>{pkg.description}</p>
        <div className={styles.detailBody}>
          <h4 className={styles.includesTitle}>What’s included</h4>
          <ul className={styles.featuresList}>
            {pkg.features.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.cardBottomButtonWrapper}>
          <TertiaryButton onClick={() => setSelectedIdx(null)}>
            Hide details
          </TertiaryButton>
        </div>
      </div>
    </section>
  );
};

export default SelectedDesignPackage;
