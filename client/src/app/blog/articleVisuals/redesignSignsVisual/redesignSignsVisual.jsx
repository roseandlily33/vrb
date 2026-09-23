import styles from "./redesignSigns.module.css";

const signs = [
  {
    number: "01",
    title: "Brand",
    description: "No longer fits the business",
    className: "signOne",
  },
  {
    number: "02",
    title: "Information",
    description: "Important details are hard to find",
    className: "signTwo",
  },
  {
    number: "03",
    title: "Navigation",
    description: "Moving through the site feels confusing",
    className: "signThree",
  },
  {
    number: "04",
    title: "Mobile",
    description: "The experience breaks down on smaller screens",
    className: "signFour",
  },
  {
    number: "05",
    title: "Performance",
    description: "Slow, heavy or difficult to maintain",
    className: "signFive",
  },
  {
    number: "06",
    title: "Growth",
    description: "The business has outgrown the structure",
    className: "signSix",
  },
  {
    number: "07",
    title: "Next Step",
    description: "Visitors aren't sure where to go next",
    className: "signSeven",
  },
];

export default function RedesignSignsVisual() {
  return (
    <section className={styles.visual} aria-labelledby="redesign-signs-title">
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Website diagnostic</span>

          <h2 id="redesign-signs-title" className={styles.title}>
            Seven signals worth paying attention to
          </h2>
        </div>

        <p className={styles.intro}>
          One issue may only need a small fix. When several start connecting,
          the website itself may need a closer look.
        </p>
      </div>

      <div className={styles.diagram}>
        {/* ----------------------------------
            Circuit paths
        ----------------------------------- */}

        <svg
          className={styles.circuit}
          viewBox="0 0 1200 650"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className={styles.circuitShadow}
            d="
    M 70 140
    H 250
    V 85
    H 455
    V 215
    H 500
    V 285
    H 420
    V 440
    H 625
    V 500
    H 760
    V 180
    H 930
    V 315
    H 1130
  "
          />

          <path
            id="diagnosticCircuit"
            className={styles.circuitLine}
            d="
    M 70 140
    H 250
    V 85
    H 455
    V 215
    H 500
    V 285
    H 420
    V 440
    H 625
    V 500
    H 760
    V 180
    H 930
    V 315
    H 1130
  "
          />
          <circle className={styles.signalGlow} r="13">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="
                M 70 155
                H 255
                V 95
                H 455
                V 220
                H 600
                V 325
                H 760
                V 165
                H 930
                V 285
                H 1130
              "
            />
          </circle>

          <circle className={styles.signal} r="5">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="
                M 70 155
                H 255
                V 95
                H 455
                V 220
                H 600
                V 325
                H 760
                V 165
                H 930
                V 285
                H 1130
              "
            />
          </circle>
        </svg>

        {/* ----------------------------------
            Orbit / central website
        ----------------------------------- */}

        <div className={styles.orbitSystem} aria-hidden="true">
          <div className={styles.orbitOuter}>
            <span className={styles.orbitRunner}>
              <span className={styles.orbitRunnerGlow} />
            </span>
          </div>

          <div className={styles.orbitInner}>
            <span className={`${styles.orbitDot} ${styles.orbitDotTwo}`} />
            <span className={`${styles.orbitDot} ${styles.orbitDotThree}`} />
          </div>

          <div className={styles.website}>
            <div className={styles.browserBar}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.websiteContent}>
              <span className={styles.websiteLabel}>Website</span>

              <span className={styles.websiteLineLarge} />
              <span className={styles.websiteLine} />
              <span className={styles.websiteLineShort} />

              <span className={styles.websiteButton}>?</span>
            </div>
          </div>
        </div>

        {/* ----------------------------------
            Diagnostic points
        ----------------------------------- */}

        <div className={styles.signs}>
          {signs.map((sign) => (
            <div
              key={sign.number}
              className={`${styles.sign} ${styles[sign.className]}`}
            >
              <div className={styles.node}>
                <span className={styles.nodeCore} />
              </div>

              <div className={styles.signContent}>
                <span className={styles.number}>{sign.number}</span>

                <strong>{sign.title}</strong>

                <span>{sign.description}</span>
              </div>
            </div>
          ))}
        </div>

        <span className={`${styles.pixel} ${styles.pixelOne}`} />
        <span className={`${styles.pixel} ${styles.pixelTwo}`} />
        <span className={`${styles.pixel} ${styles.pixelThree}`} />
        <span className={`${styles.pixel} ${styles.pixelFour}`} />
      </div>

      <p className={styles.footer}>
        The more of these signals that connect, the more likely the problem is
        bigger than one isolated update.
      </p>
    </section>
  );
}
