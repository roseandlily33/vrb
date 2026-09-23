import styles from "./websiteChangeSpectrum.module.css";

const levels = [
  {
    number: "01",
    label: "Update",
    scope: "Small scope",
    description:
      "Change individual pieces of information while keeping the existing design and structure.",
    examples: ["Content", "Pricing", "Hours", "Images"],
    className: "update",
  },
  {
    number: "02",
    label: "Refresh",
    scope: "Medium scope",
    description:
      "Keep the basic structure, but improve how the website looks, feels and presents information.",
    examples: ["Colours", "Typography", "Spacing", "Layout"],
    className: "refresh",
  },
  {
    number: "03",
    label: "Redesign",
    scope: "Larger scope",
    description:
      "Question whether the current structure, journeys and underlying website still fit the business.",
    examples: ["Structure", "Navigation", "Journeys", "Functionality"],
    className: "redesign",
  },
];

export default function WebsiteChangeSpectrum() {
  return (
    <section
      className={styles.visual}
      aria-labelledby="website-change-spectrum-title"
    >
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Choosing the right scope</span>

          <h2 id="website-change-spectrum-title" className={styles.title}>
            Not every website problem needs a redesign.
          </h2>
        </div>

        <p className={styles.intro}>
          The amount of work should grow with the size of the problem.
        </p>
      </div>

      <div className={styles.spectrum}>
        <div className={styles.scaleLabels} aria-hidden="true">
          <span>Smaller intervention</span>
          <span>Larger intervention</span>
        </div>

        <div className={styles.track} aria-hidden="true">
          <span className={styles.trackBase} />
          <span className={styles.trackProgress} />

          <span className={styles.runner}>
            <span className={styles.runnerCore} />
          </span>
        </div>

        <div className={styles.levels}>
          {levels.map((level) => (
            <div
              key={level.label}
              className={`${styles.level} ${styles[level.className]}`}
            >
              <div className={styles.node} aria-hidden="true">
                <span />
              </div>

              <div className={styles.levelTop}>
                <span className={styles.number}>{level.number}</span>
                <span className={styles.scope}>{level.scope}</span>
              </div>

              <h3>{level.label}</h3>

              <p>{level.description}</p>

              <div className={styles.examples}>
                {level.examples.map((example) => (
                  <span key={example}>{example}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.websiteField} aria-hidden="true">
          <div className={styles.websiteSmall}>
            <span className={styles.browserBar}>
              <i />
              <i />
              <i />
            </span>

            <span className={styles.miniContent}>
              <i />
              <i />
              <i />
            </span>
          </div>

          <span className={styles.connectionOne} />
          <span className={styles.connectionTwo} />
          <span className={styles.connectionThree} />

          <span className={`${styles.pixel} ${styles.pixelOne}`} />
          <span className={`${styles.pixel} ${styles.pixelTwo}`} />
          <span className={`${styles.pixel} ${styles.pixelThree}`} />
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.footerMarker} aria-hidden="true" />

        <p>
          Start with the problem, then choose the level of change that actually
          solves it.
        </p>
      </div>
    </section>
  );
}
