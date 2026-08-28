import styles from "./HowIWork.module.css";

const HowIWork = () => {
  return (
    <section className={styles.howIWorkSection}>
      <div className={styles.howIWorkInner}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Approach</p>
            <h3>How I Work</h3>
          </div>

          <div className={styles.headerDetail} aria-hidden="true">
            <span className={styles.headerLine} />
            <span className={styles.headerPixel} />
          </div>
        </div>

        <div className={styles.approachGrid}>
          <article className={styles.approachItem}>
            <div className={styles.itemTop}>
              <span className={styles.approachNumber}>01</span>
              <span className={styles.itemPixel} aria-hidden="true" />
            </div>

            <h4>Start with the problem</h4>

            <p>
              I take a structured, problem-solving approach to every project. I
              focus on understanding the core problem first, then build
              solutions that are clear, efficient, and scalable.
            </p>
          </article>

          <article className={styles.approachItem}>
            <div className={styles.itemTop}>
              <span className={styles.approachNumber}>02</span>
              <span className={styles.itemPixel} aria-hidden="true" />
            </div>

            <h4>Build with intention</h4>

            <p>
              I value clear communication, thoughtful design decisions, and
              writing clean, maintainable code. Whether it’s a full platform
              build or a redesign, the goal is always to create something that
              performs well and delivers real value.
            </p>
          </article>

          <article className={styles.approachItem}>
            <div className={styles.itemTop}>
              <span className={styles.approachNumber}>03</span>
              <span className={styles.itemPixel} aria-hidden="true" />
            </div>

            <h4>Design and development together</h4>

            <p>
              Combining UX/UI design with full-stack development means design
              decisions can be made with usability, performance and technical
              feasibility in mind from the beginning.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
