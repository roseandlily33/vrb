import styles from "../page.module.css";
const CSTestimonial = ({ testimonial }) => {
  return (
    <section className={styles.testimonial}>
      <h2>Testimonial</h2>
      <p>{testimonial}</p>
    </section>
  );
};

export default CSTestimonial;
