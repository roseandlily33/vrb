import React from 'react';
import styles from "./Colours.module.css";

export default function ColourExamples({ data }) {
  const { bad, good } = data;

  return (
    <section className={styles.colourExamples}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{data.series}</span>
        <h2>{data.topic}</h2>
        <p>
          Colours should guide attention, create hierarchy, and support the
          brand — not make every element compete for attention.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.badCard}`}>
          <span className={styles.tag}>{bad.label}</span>
          <h3>{bad.title}</h3>
          <p>{bad.description}</p>

          <div className={styles.chaosPreview}>
            <div className={styles.chaosHero}>
              <span style={{ backgroundColor: bad.colours[0] }}>New</span>
              <h4 style={{ color: bad.colours[4] }}>Creative Website Design</h4>
              <p>
                A colourful page where everything is trying to be the most
                important thing at once.
              </p>

              <div className={styles.chaosButtons}>
                <button style={{ backgroundColor: bad.colours[1] }}>
                  Book Now
                </button>
                <button style={{ backgroundColor: bad.colours[2] }}>
                  Learn More
                </button>
                <button style={{ backgroundColor: bad.colours[3] }}>
                  Contact
                </button>
              </div>
            </div>

            <div className={styles.chaosCards}>
              {bad.colours.map((colour, index) => (
                <div
                  key={colour}
                  className={styles.chaosMiniCard}
                  style={{ borderColor: colour }}
                >
                  <span style={{ backgroundColor: colour }} />
                  <strong>Section {index + 1}</strong>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className={`${styles.card} ${styles.goodCard}`}>
          <span className={styles.tag}>{good.label}</span>
          <h3>{good.title}</h3>
          <p>{good.description}</p>

          <div className={styles.systemPreview}>
            <div className={styles.paletteRow}>
              {good.colours.map((colour) => (
                <span
                  key={colour}
                  className={styles.swatch}
                  style={{ backgroundColor: colour }}
                />
              ))}
            </div>

            <div className={styles.systemHero}>
              <span>Website Design</span>
              <h4>Colour With Purpose</h4>
              <p>
                A focused palette helps users understand hierarchy, actions, and
                supporting content.
              </p>

              <button>View Packages</button>
            </div>

            <div className={styles.systemCards}>
              <div>
                <strong>Primary</strong>
                <small>Used for key actions</small>
              </div>
              <div>
                <strong>Secondary</strong>
                <small>Supports the layout</small>
              </div>
              <div>
                <strong>Neutral</strong>
                <small>Creates balance</small>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}