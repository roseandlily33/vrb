import styles from "./AbouteMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.introSection} aria-labelledby="intro-heading">
      {/* Subtle background pixels */}
      <div className={styles.pixelComposition} aria-hidden="true">
        <span className={`${styles.pixel} ${styles.pixel1}`} />
        <span className={`${styles.pixel} ${styles.pixel2}`} />
        <span className={`${styles.pixel} ${styles.pixel3}`} />
        <span className={`${styles.pixel} ${styles.pixel4}`} />

        <span className={`${styles.pixelOutline} ${styles.outline1}`} />
        <span className={`${styles.pixelOutline} ${styles.outline2}`} />
      </div>

      <div className={styles.introInner}>
        {/* LEFT: INTRODUCTION */}

        <div className={styles.introContent}>
          <p className={styles.introEyebrow}>
            <span className={styles.eyebrowPixel} aria-hidden="true" />
            More than just a website
          </p>

          <h2 id="intro-heading">
            Good design gets attention.{" "}
            <span className={styles.highlightText}>
              Thoughtful design makes it work.
            </span>
          </h2>

          <p className={styles.introText}>
            A website does more than give your business a place online. It
            shapes how people see your brand, find information and decide
            whether to take the next step.
          </p>

          <p className={styles.introText}>
            I bring design, development and user experience together to create
            custom websites that look professional, feel intuitive and support
            the businesses behind them.
          </p>
        </div>

        {/* RIGHT: CONNECTED PRINCIPLES */}

        <div className={styles.principles}>
          <div className={styles.principlesHeader} aria-hidden="true">
            <span>THE THINKING BEHIND THE WORK</span>
            <span className={styles.headerPixel} />
          </div>

          <div className={styles.principlesList}>
            <div className={styles.circuitTrack} aria-hidden="true" />

            <div className={styles.principle}>
              <div className={styles.principleMarker}>
                <span className={styles.principleNumber}>01</span>
              </div>

              <div className={styles.principleContent}>
                <h3>Understand the business</h3>
                <p>
                  Every project starts with understanding your goals, audience
                  and what your website needs to accomplish.
                </p>
              </div>
            </div>

            <div className={styles.principle}>
              <div className={styles.principleMarker}>
                <span className={styles.principleNumber}>02</span>
              </div>

              <div className={styles.principleContent}>
                <h3>Design around the user</h3>
                <p>
                  Clear navigation, thoughtful layouts and intuitive experiences
                  help visitors find what they need.
                </p>
              </div>
            </div>

            <div className={styles.principle}>
              <div className={styles.principleMarker}>
                <span className={styles.principleNumber}>03</span>
              </div>

              <div className={styles.principleContent}>
                <h3>Build with the bigger picture in mind</h3>
                <p>
                  Design and development decisions work together to create a
                  website that's reliable, adaptable and ready to grow with your
                  business.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.principlesFooter}>
            <span className={styles.footerPixel} aria-hidden="true" />
            <span>Design + Development + Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
