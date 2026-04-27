import styles from "./Testimonial.module.css";
import Link from "next/link";

const testimonial =
  "Working with Victoria Benoit was absolutely transformative for the function and overall experience of my website. Victoria applied an incredible eye for detail, focusing on making the layout more attractive and the overall presentation genuinely eye-catching. Beyond the aesthetics, the improvements to user flow were paramount. She optimized the navigation, making the site dramatically more user-friendly. My website now looks highly professional and provides a seamless experience for visitors. If you are looking for a design expert to refine your project and elevate it from good to outstanding, I highly recommend Victoria!";

export default function Testimonial() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialCard}>
        <p className="eyebrowHeader">Client Feedback</p>

        <blockquote className={styles.quote}>{testimonial}</blockquote>

        <div className={styles.author}>
          <img
            src="/ArielPerformance/ArielLogo.webp"
            alt="Ariel Performance Horses Logo"
            className={styles.authorImage}
          />
          <div>
            <Link href="/case-study/ariel-performance-horses">
              <p className={styles.authorName}>Ariel Boesener</p>
              <p className={styles.authorMeta}>
                Ariel Boesener Performance Horses
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
