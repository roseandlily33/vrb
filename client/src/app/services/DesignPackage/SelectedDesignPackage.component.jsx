import MostPopular from "../../Components/MostPopular/MostPopular.component";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import Card from "@/app/Components/Card/Card.component";
import styles from "../Packages/Packages.module.css";
import designPackages from "./designPackage";

const SelectedDesignPackage = ({
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
          {designPackages.map((p, idx) => (
            <button
              key={p.title + p.type}
              className={`${styles.tab} ${idx === selectedIdx ? styles.activeTab : ""}`}
              onClick={() => setSelectedIdx(idx)}
              disabled={idx === selectedIdx}
              type="button"
            >
              <span className={styles.tabTitle}>{p.title}</span>
              <span className={styles.tabType}>
                {p.type === "design" ? "Design" : "Website"}
              </span>
            </button>
          ))}
        </div>

        <Card className={styles.detailCard}>
          {pkg.highlight && (
            <MostPopular className={styles.mostPopularInside}>{pkg.highlight}</MostPopular>
          )}
          <div className={styles.detailTop}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <div className={styles.bestFor}>
                  <b>Best for</b> <span>{pkg.bestFor}</span>
                </div>
              </div>
            </div>

            <div className={styles.detailMetaRow}>
              <span className={styles.cardPrice}>
                <b>Starting at</b> {pkg.startingAt}
              </span>
              <span className={styles.detailDivider}>•</span>
              <span className={styles.cardMeta}>
                <b>Approx.</b> {pkg.timeline}
              </span>
            </div>

            <p className={styles.cardDesc}>
              <b>Description:</b> {pkg.description}
            </p>
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

export default SelectedDesignPackage;
