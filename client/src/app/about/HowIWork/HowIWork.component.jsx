import styles from "./HowIWork.module.css";

const HowIWork = () => {
  return (
    <section className={styles.howIWorkSection}>
      <p className="eyebrowHeader">Approach</p>
      <h3>How I Work </h3>
      <p className={styles.paragraph}>
        I take a structured, problem-solving approach to every project. I focus
        on understanding the core problem first, then build solutions that are
        clear, efficient, and scalable.
      </p>
      <p className={styles.paragraph}>
        I value clear communication, thoughtful design decisions, and writing
        clean, maintainable code. Whether it’s a full platform build or a
        redesign, the goal is always to create something that performs well and
        delivers real value.
      </p>
      <p className={styles.paragraph}>
        Combining UX/UI design with full-stack development means design
        decisions can be made with usability, performance and technical
        feasibility in mind from the beginning.
      </p>
    </section>
  );
};

export default HowIWork;
