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
  // topMenu = false,
}) => {
  return (
    <section className={styles.heroCentered}>
      {/* =====================================================
      HERO BACKGROUND
  ===================================================== */}

      {img && (
        <Image
          src={img}
          alt=""
          aria-hidden="true"
          className={styles.heroWatermark}
          width={800}
          height={800}
          loading="eager"
        />
      )}

      <div className={styles.heroGraphics} aria-hidden="true">
        <span className={styles.heroOrbit} />
        <span className={styles.heroOrbitInner} />

        <span className={styles.heroPixelOne} />
        <span className={styles.heroPixelTwo} />
        <span className={styles.heroPixelThree} />
        <span className={styles.heroPixelFour} />
        <span className={styles.heroPixelFive} />
      </div>

      {/* =====================================================
      MAIN HERO CONTENT
  ===================================================== */}

      <div className={styles.heroIntro}>
        <div className={styles.heroContent}>
          {/* NAVIGATION */}

          <div className={styles.heroNavigation}>
            <Breadcrumbs
              current={companyName || "Case Study"}
              firstLink="/work"
              first="Work"
            />
{/* 
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
            )} */}
          </div>

          {/* PROJECT INTRODUCTION */}

          <div className={styles.heroHeadingBlock}>
            <div className={styles.heroEyebrowRow}>
              <span className={styles.heroEyebrowMarker} aria-hidden="true">
                <span />
                <span />
              </span>

              <span className={styles.eyebrow}>
                {companyName || "Case Study"}
              </span>
            </div>

            <h1 className={styles.heroTitleCentered}>
              {highlightText(title, highlightWords, styles.highlighted)}
            </h1>

            {description && (
              <div className={styles.heroDescriptionWrap}>
                <span
                  className={styles.heroDescriptionAccent}
                  aria-hidden="true"
                />

                <p className={styles.heroDescription}>{description}</p>
              </div>
            )}

            {/* ACTIONS */}

            {(link || finalResults || seeProcess) && (
              <div className={styles.heroActions}>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryAction}
                  >
                    <span>Visit Live Site</span>
                    <FiArrowRight aria-hidden="true" />
                  </a>
                )}

                {finalResults && (
                  <a href={finalResults} className={styles.secondaryAction}>
                    <span>See Final Results</span>
                    <FiArrowRight aria-hidden="true" />
                  </a>
                )}

                {seeProcess && (
                  <a href={seeProcess} className={styles.secondaryAction}>
                    <span>See Process</span>
                    <FiArrowRight aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
      FULL-WIDTH PROJECT INFORMATION
  ===================================================== */}

      <div className={styles.metaBand}>
        <div className={styles.metaBandInner}>
          <div className={styles.metaItem}>
            <span className={styles.metaIndex} aria-hidden="true">
              01
            </span>

            <div className={styles.metaItemContent}>
              <span className={styles.metaLabel}>Date</span>
              <span className={styles.metaValue}>{date}</span>
            </div>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaIndex} aria-hidden="true">
              02
            </span>

            <div className={styles.metaItemContent}>
              <span className={styles.metaLabel}>Status</span>
              <span className={styles.metaValue}>{status}</span>
            </div>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaIndex} aria-hidden="true">
              03
            </span>

            <div className={styles.metaItemContent}>
              <span className={styles.metaLabel}>Type</span>
              <span className={styles.metaValue}>{type}</span>
            </div>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaIndex} aria-hidden="true">
              04
            </span>

            <div className={styles.metaItemContent}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{role}</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
      OPTIONAL PROJECT NOTE
  ===================================================== */}

      {note && (
        <div className={styles.heroNote}>
          <div className={styles.heroNoteInner}>
            <div className={styles.heroNoteHeading}>
              <span className={styles.heroNoteMarker} aria-hidden="true" />

              <span className={styles.noteLabel}>Note</span>
            </div>

            <p>{note}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CSHero;
