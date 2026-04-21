import Card from "@/app/Components/Card/Card.component";
import MostPopular from "@/app/Components/MostPopular/MostPopular.component";
import styles from "./Packages.module.css";
import { PackageInfo } from "./packageList";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";

const SelectedPackage = ({
  pkg,
  selectedIdx,
  setSelectedIdx,
  animating,
  handleHideInfo,
}) => {
  return (
    <section className={styles.packagesSection}>
      <div
        className={`${styles.tabsWrapper} ${animating ? styles.fadeOut : styles.fadeIn}`}
      >
        <div className={styles.tabs}>
          {PackageInfo.map((p, idx) => (
            <button
              key={p.title + p.type}
              className={`${styles.tab} ${idx === selectedIdx ? styles.activeTab : ""}`}
              onClick={() => setSelectedIdx(idx)}
              disabled={idx === selectedIdx}
            >
              <span className={styles.tabTitle}>{p.title}</span>
              <span className={styles.tabType}>
                {p.type === "design" ? "Design" : "Website"}
              </span>
            </button>
          ))}
        </div>

        <Card className={styles.detailCard}>
          <div className={styles.detailTop}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <div className={styles.bestFor}>
                  Best for <span>{pkg.bestFor}</span>
                </div>
              </div>

              {pkg.highlight && <MostPopular>{pkg.highlight}</MostPopular>}
            </div>

            <div className={styles.detailMetaRow}>
              <span className={styles.cardPrice}>
                Starting at {pkg.startingAt}
              </span>
              <span className={styles.detailDivider}>•</span>
              <span className={styles.cardMeta}>Approx. {pkg.timeline}</span>
            </div>

            <p className={styles.cardDesc}>{pkg.description}</p>
          </div>

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

          <div className={styles.detailActions}>
            <TertiaryButton onClick={handleHideInfo}>
              Hide details
            </TertiaryButton>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SelectedPackage;
