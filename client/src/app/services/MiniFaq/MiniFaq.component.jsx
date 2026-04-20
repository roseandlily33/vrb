import styles from "./MiniFaq.module.css";

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
      <span className={styles.eyebrow}>FAQ</span>
      <h2 className={styles.heading}>Frequently asked questions</h2>
      <p className={styles.subtext}>
        A few quick answers to common questions about timelines, process, and
        what to expect.
      </p>

      <ul className={styles.faqList}>
        {faq.map((item, idx) => (
          <li key={idx} className={styles.faqItem}>
            <div className={styles.question}>{item.q}</div>
            <div className={styles.answer}>{item.a}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
