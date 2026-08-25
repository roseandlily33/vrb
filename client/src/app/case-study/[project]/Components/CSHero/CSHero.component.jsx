import styles from "./CSHero.module.css";
// import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import CSTopMenu from "../CSTopMenu/CSTopMenu.component";
import Breadcrumbs from "../Extras/Breadcrumbs/Breadcrumbs.component";

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
  topMenu = false,
}) => {
  return (
    <section className={styles.heroCentered}>
      {img && (
        <Image
          src={img}
          alt={companyName + "Logo" || "Case Study Hero Image"}
          aria-hidden="true"
          className={styles.heroWatermark}
          width={800}
          height={800}
        />
      )}

      <div className={styles.heroIntro}>
        <div className={styles.heroContent}>
          <Breadcrumbs
            current={companyName || "Case Study"}
            firstLink="/work"
            first="Work"
          />
          {topMenu && (
            <CSTopMenu
              activeKey="web"
              items={[
                {
                  key: "web",
                  label: "Web Design",
                  description: "Homepage, UI concepts and layout decisions.",
                },
                {
                  key: "social",
                  label: "Social Media",
                  description: "Social post concepts and marketing assets.",
                  href: "/case-study/assuage/social-media",
                },
              ]}
            />
          )}

          <span className={styles.eyebrow}>{companyName || "Case Study"}</span>

          <h1 className={styles.heroTitleCentered}>
            {highlightText(title, highlightWords, styles.highlighted)}
          </h1>

          {description && (
            <p className={styles.heroDescription}>{description}</p>
          )}

          {(link || finalResults || seeProcess) && (
            <div className={styles.heroActions}>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryAction}
                >
                  Visit Live Site <FiArrowRight />
                </a>
              )}

              {finalResults && (
                <a href={finalResults} className={styles.secondaryAction}>
                  See Final Results <FiArrowRight />
                </a>
              )}

              {seeProcess && (
                <a href={seeProcess} className={styles.secondaryAction}>
                  See Process <FiArrowRight />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className={styles.metaBand}>
        <div className={styles.metaItem}>
          <div className={styles.metaLabel}>Date</div>
          <div className={styles.metaValue}>{date}</div>
        </div>

        <div className={styles.metaItem}>
          <div className={styles.metaLabel}>Status</div>
          <div className={styles.metaValue}>{status}</div>
        </div>

        <div className={styles.metaItem}>
          <div className={styles.metaLabel}>Type</div>
          <div className={styles.metaValue}>{type}</div>
        </div>

        <div className={styles.metaItem}>
          <div className={styles.metaLabel}>Role</div>
          <div className={styles.metaValue}>{role}</div>
        </div>
      </div>

      {note && (
        <div className={styles.heroNote}>
          <span className={styles.noteLabel}>Note</span>
          <p>{note}</p>
        </div>
      )}
    </section>
  );
};

export default CSHero;
