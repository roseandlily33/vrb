import styles from "./CSHero.module.css";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import { FiArrowRight } from "react-icons/fi";

function highlightText(text, words, className) {
  if (!words || words.length === 0) return text;
  // Escape regex special chars in words
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    words.some((w) => w.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className={className}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

const CSHero = ({
  img,
  companyName,
  link,
  date,
  status,
  type,
  role,
  title,
  highlightWords = [],
  note,
  description = "",
  finalResults,
  seeProcess,
}) => {
  return (
    <section className={styles.heroCentered}>
      <h1 className={styles.heroTitleCentered}>
        {highlightText(title, highlightWords, styles.highlighted)}
      </h1>
      {description && <p className={styles.heroDescription}>{description}</p>}
      <img
        src={img}
        alt={`${companyName} Logo`}
        className={styles.heroLogoLarge}
      />

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.heroLinkCentered}
        >
          <TertiaryButton>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <span className={styles.companyBadge}>{companyName}</span>{" "}
              <FiArrowRight style={{ marginLeft: 6 }} />
            </span>
          </TertiaryButton>
        </a>
      )}
      {finalResults && (
          <a
          href={finalResults}
          className={styles.heroLinkCentered}
        >
          <TertiaryButton>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <span className={styles.companyBadge}>See final results</span>{" "}
              <FiArrowRight style={{ marginLeft: 6 }} />
            </span>
          </TertiaryButton>
        </a>
      )}
       {seeProcess && (
          <a
          href={seeProcess}
          className={styles.heroLinkCentered}
        >
          <TertiaryButton>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <span className={styles.companyBadge}>See Process</span>{" "}
              <FiArrowRight style={{ marginLeft: 6 }} />
            </span>
          </TertiaryButton>
        </a>
      )}
      <div className={styles.metaBand}>
        <div className={styles.metaItem}>
          <div className={styles.metaValue}>{date}</div>
          <div className={styles.metaLabel}>Date</div>
        </div>
        <div className={styles.metaItem}>
          <div className={styles.metaValue}>{status}</div>
          <div className={styles.metaLabel}>Status</div>
        </div>
        <div className={styles.metaItem}>
          <div className={styles.metaValue}>{type}</div>
          <div className={styles.metaLabel}>Type</div>
        </div>
        <div className={styles.metaItem}>
          <div className={styles.metaValue}>{role}</div>
          <div className={styles.metaLabel}>Role</div>
        </div>
      </div>
      {note && (
        <div className={styles.heroNote}>
          <strong>Note:</strong> {note}
        </div>
      )}
    </section>
  );
};

export default CSHero;
