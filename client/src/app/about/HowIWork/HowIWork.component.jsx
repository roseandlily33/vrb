import styles from "./HowIWork.module.css";

const HowIWork = () => {
  return (
    <section
      className={styles.howIWorkSection}
      aria-labelledby="how-i-work-heading"
    >
      <div className={styles.howIWorkInner}>
        {/* SECTION HEADER */}
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>Approach</p>

            <h2 id="how-i-work-heading">How I Work</h2>
          </div>

          <div className={styles.headerDetail} aria-hidden="true">
            <span className={styles.headerLine} />
            <span className={styles.headerPixel} />
          </div>
        </div>

        {/* CONNECTED PROCESS */}
        <div className={styles.approachTimeline}>
          {/* Curved connecting paths */}
          <svg
            className={styles.timelinePath}
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M -30 115 C 150 115, 175 25, 380 75 S 655 210, 795 125 S 1050 30, 1230 100"
              className={styles.pathMain}
            />

            <path
              d="M -30 130 C 150 130, 175 40, 380 90 S 655 225, 795 140 S 1050 45, 1230 115"
              className={styles.pathSecondary}
            />
          </svg>

          <div className={styles.approachGrid}>
            {/* STAGE 01 */}
            <article className={styles.approachItem}>
              <div className={styles.nodeArea}>
                <span className={styles.approachNode}>
                  <span className={styles.nodeInner}>01</span>
                </span>

                <span className={styles.itemPixel} aria-hidden="true" />
              </div>

              <div className={styles.approachContent}>
                <h3>Start with the problem</h3>

                <p>
                  I take a structured, problem-solving approach to every
                  project. I focus on understanding the core problem first, then
                  build solutions that are clear, efficient, and scalable.
                </p>
              </div>
            </article>

            {/* STAGE 02 */}
            <article className={styles.approachItem}>
              <div className={styles.nodeArea}>
                <span className={styles.approachNode}>
                  <span className={styles.nodeInner}>02</span>
                </span>

                <span className={styles.itemPixel} aria-hidden="true" />
              </div>

              <div className={styles.approachContent}>
                <h3>Build with intention</h3>

                <p>
                  I value clear communication, thoughtful design decisions, and
                  writing clean, maintainable code. Whether it’s a full platform
                  build or a redesign, the goal is always to create something
                  that performs well and delivers real value.
                </p>
              </div>
            </article>

            {/* STAGE 03 */}
            <article className={styles.approachItem}>
              <div className={styles.nodeArea}>
                <span className={styles.approachNode}>
                  <span className={styles.nodeInner}>03</span>
                </span>

                <span className={styles.itemPixel} aria-hidden="true" />
              </div>

              <div className={styles.approachContent}>
                <h3>Design and development together</h3>

                <p>
                  Combining UX/UI design with full-stack development means
                  design decisions can be made with usability, performance and
                  technical feasibility in mind from the beginning.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
