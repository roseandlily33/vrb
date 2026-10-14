import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = ({ title, highlight, subText, topMeta }) => {
  const [before, after] = title.split(highlight);
  return (
    <section className={styles.hero}>
      {/* BACKGROUND GRID */}
      <div className={styles.heroGrid} aria-hidden="true" />

      {/* LEFT PIXEL + CIRCUIT COMPOSITION */}
      <div className={styles.pixelComposition} aria-hidden="true">
        <svg
          className={styles.pixelCircuit}
          viewBox="0 0 420 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className={styles.circuitPath} d="M0 248H112L158 202H286" />

          <path
            className={styles.circuitPathSecondary}
            d="M0 295H77L132 350H244"
          />

          <circle className={styles.circuitNode} cx="286" cy="202" r="7" />

          <circle className={styles.circuitNode} cx="244" cy="350" r="5" />

          <rect
            className={styles.pixelBlue}
            x="42"
            y="38"
            width="148"
            height="148"
          />

          <rect
            className={styles.pixelLight}
            x="162"
            y="160"
            width="92"
            height="92"
          />

          <rect
            className={styles.pixelYellow}
            x="272"
            y="98"
            width="42"
            height="42"
          />

          <rect
            className={styles.pixelDark}
            x="28"
            y="304"
            width="25"
            height="25"
          />

          <rect
            className={styles.pixelOutline}
            x="264"
            y="266"
            width="105"
            height="105"
          />

          <rect
            className={styles.pixelOutlineYellow}
            x="124"
            y="315"
            width="58"
            height="58"
          />

          <rect
            className={styles.pixelYellow}
            x="332"
            y="384"
            width="16"
            height="16"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className={styles.heroContent}>
        {topMeta && (
          <p className={styles.topMeta}>
            <span className={styles.metaPixel} aria-hidden="true" />
            {topMeta}
          </p>
        )}

        <h1 className={styles.title}>
          {before}
          {highlight && <span className={styles.blue}>{highlight}</span>}
          {after}
        </h1>

        {subText && <p className={styles.subText}>{subText}</p>}
      </div>

      {/* RIGHT CORNER DETAILS */}
      <div className={styles.cornerPixels} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* BOTTOM ACCENT */}
      <div className={styles.heroBottomLine} aria-hidden="true">
        <span />
      </div>
    </section>
  );
};

export default Hero;
