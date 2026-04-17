import styles from "../page.module.css";
const CSTestimonial = ({ testimonial }) => {
  return (
    <section className={styles.testimonial}>
      <p className="eyebrowHeader">In their words</p>
      <h2>What the client had to say about the project</h2>
      <p>{testimonial}</p>
    </section>
  );
};

export default CSTestimonial;
