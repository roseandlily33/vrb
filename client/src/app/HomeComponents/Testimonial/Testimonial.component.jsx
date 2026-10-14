import styles from "./Testimonial.module.css";
import Link from "next/link";
import Image from "next/image";

const testimonial =
  "Working with Victoria Benoit was absolutely transformative for the function and overall experience of my website. Victoria applied an incredible eye for detail, focusing on making the layout more attractive and the overall presentation genuinely eye-catching. Beyond the aesthetics, the improvements to user flow were paramount. She optimized the navigation, making the site dramatically more user-friendly. My website now looks highly professional and provides a seamless experience for visitors. If you are looking for a design expert to refine your project and elevate it from good to outstanding, I highly recommend Victoria!";

export default function Testimonial() {
  return (
    <section
      className={styles.testimonialSection}
      aria-label="Client testimonial"
    >
      <div className={styles.testimonialInner}>
        <div className={styles.testimonialCard}>
          {/* QUOTE SYMBOL */}
          <div className={styles.quoteDecoration} aria-hidden="true">
            <span className={styles.quoteMark}>“</span>
            <span className={styles.quotePixel} />
          </div>

          {/* TESTIMONIAL CONTENT */}
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialEyebrow}>
              <span className={styles.eyebrowPixel} aria-hidden="true" />
              <span>Client Feedback</span>
            </div>

            <blockquote className={styles.quote}>{testimonial}</blockquote>

            {/* CONNECTING CIRCUIT */}
            <div className={styles.quoteCircuit} aria-hidden="true">
              <span className={styles.circuitLine} />
              <span className={styles.circuitNode} />
            </div>

            {/* CLIENT ATTRIBUTION */}
            <div className={styles.author}>
              <div className={styles.authorImageWrap}>
                <Image
                  src="/ArielPerformance/ArielLogo.webp"
                  alt="Ariel Performance Horses logo"
                  className={styles.authorImage}
                  width={100}
                  height={100}
                />
              </div>

              <div className={styles.authorDetails}>
                <Link
                  href="/case-study/ariel-performance-horses"
                  className={styles.authorLink}
                >
                  <span className={styles.authorName}>Ariel Boesener</span>

                  <span className={styles.authorMeta}>
                    Ariel Boesener Performance Horses
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* DECORATIVE ORBIT */}
          <div className={styles.orbitDecoration} aria-hidden="true">
            <svg viewBox="0 0 240 240" fill="none">
              <ellipse
                cx="120"
                cy="120"
                rx="108"
                ry="48"
                transform="rotate(-32 120 120)"
                className={styles.orbitPath}
              />

              <ellipse
                cx="120"
                cy="120"
                rx="85"
                ry="35"
                transform="rotate(-32 120 120)"
                className={styles.orbitInner}
              />

              <path
                d="M48 150H106L127 129H180"
                className={styles.orbitCircuit}
              />

              <circle cx="180" cy="129" r="5" className={styles.orbitNode} />

              <rect
                x="166"
                y="49"
                width="31"
                height="31"
                className={styles.orbitPixel}
              />

              <rect
                x="195"
                y="84"
                width="13"
                height="13"
                className={styles.orbitYellow}
              />

              <rect
                x="39"
                y="158"
                width="15"
                height="15"
                className={styles.orbitSmallPixel}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
