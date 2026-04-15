import styles from "./WhyMe.module.css";
import CheckmarkCircle from "@/app/Components/CheckmarkCircle/CheckmarkCircle.component";

const WhyMe = () => {
  return (
    <section className={styles.whyMeSection}>
      <h3>Why Me</h3>
      <p>
        I enjoy building products that solve real problems. Whether it’s
        improving performance, simplifying a user experience, or structuring a
        complex system, I like taking something messy and turning it into
        something clear and functional.
      </p>
      <ul className={styles.whyMeList}>
        <li>
          <CheckmarkCircle />
          Problem-solving mindset
        </li>
        <li>
          <CheckmarkCircle /> Performance-focused
        </li>
        <li>
          <CheckmarkCircle /> Design + development thinking
        </li>
      </ul>
    </section>
  );
};

export default WhyMe;
