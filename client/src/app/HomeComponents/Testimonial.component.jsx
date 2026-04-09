import styles from "./Testimonial.module.css";

const testimonial =
  "Working with Victoria Benoit was absolutely transformative for the function and overall experience of my website. Victoria applied an incredible eye for detail, focusing on making the layout more attractive and the overall presentation genuinely eye-catching. Beyond the aesthetics, the improvements to user flow were paramount. She optimized the navigation, making the site dramatically more user-friendly. My website now looks highly professional and provides a seamless experience for visitors. If you are looking for a design expert to refine your project and elevate it from good to outstanding, I highly recommend Victoria!";

export default function Testimonial() {
  return (
    <section className={styles.testimonialSection}>
      <blockquote className={styles.testimonialText}>
        <span className={styles.bigQuote} aria-hidden="true">
          “
        </span>
        {testimonial}
        <div className={styles.authorWrapper}>
          <span className={styles.testimonialAuthor}>Ariel Boesener</span>
        </div>
      </blockquote>
    </section>
  );
}
