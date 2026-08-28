import styles from "./MiniFaq.module.css";
// import { FaQuestionCircle } from "react-icons/fa";

const faq = [
  {
    q: "How long does a project take?",
    a: "Timelines vary by scope, but most projects are completed in 2–6 weeks. You'll get a clear estimate before we start, and regular updates throughout.",
  },
  {
    q: "Is pricing flexible?",
    a: "Yes! Packages are designed for transparency, but I can tailor solutions to fit your needs and budget. Just ask if you need something custom.",
  },
  {
    q: "How do revisions work?",
    a: "All packages include a set number of revisions to ensure you’re happy with the result. Additional tweaks can be added as needed.",
  },
  {
    q: "What’s included in a package?",
    a: "Each package comes with clear deliverables—design, development, testing, and launch support. See the package details for specifics.",
  },
  {
    q: "How will we communicate?",
    a: "I use email and async tools for most updates, with optional calls for milestones or complex topics. You’ll always know what’s happening.",
  },
];

export default function MiniFaq() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqInner}>
        <div className={styles.faqHeader}>
          <div className={styles.headerMarker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <h2>Frequently asked questions</h2>

          <p className={styles.meta}>
            A few quick answers to common questions about timelines, process,
            and what to expect.
          </p>
        </div>

        <div className={styles.faqList}>
          {faq.map((item, idx) => (
            <details className={styles.faqItem} key={idx}>
              <summary className={styles.question}>
                <span className={styles.number}>
                  #{String(idx + 1).padStart(2, "0")}
                </span>

                <span className={styles.questionText}>{item.q}</span>

                <span className={styles.plus} aria-hidden="true">
                  <span />
                  <span />
                </span>
              </summary>

              <div className={styles.answerWrap}>
                <div className={styles.answerGrid}>
                  <div className={styles.answer}>{item.a}</div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
