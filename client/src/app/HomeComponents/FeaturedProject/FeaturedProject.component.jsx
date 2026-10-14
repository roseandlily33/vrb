import { FaArrowRight } from "react-icons/fa";
import styles from "./FeaturedProject.module.css";
import Link from "next/link";
import Image from "next/image";
const FeaturedProject = () => {
  return (
    <section
      className={styles.projectsSection}
      aria-labelledby="featured-project-heading"
    >
      <div className={styles.projectsInner}>
        {/* SECTION HEADER */}
        <div className={styles.projectsHeader}>
          <div className={styles.headerContent}>
            <div className={styles.sectionEyebrow}>
              <span className={styles.eyebrowPixel} aria-hidden="true" />
              <span>Selected Work / 01</span>
            </div>

            <h2 id="featured-project-heading">
              Featured <span>Project.</span>
            </h2>

            <p>
              A closer look at how thoughtful design, user experience and
              development come together in a real project.
            </p>
          </div>

          <div className={styles.headerDecoration} aria-hidden="true">
            <svg viewBox="0 0 200 110" fill="none">
              <path d="M10 70H65L92 43H156" className={styles.decorCircuit} />
              <path
                d="M38 90H112L133 69H184"
                className={styles.decorCircuitSecondary}
              />
              <circle cx="156" cy="43" r="5" className={styles.decorNode} />
              <circle cx="184" cy="69" r="5" className={styles.decorNode} />
              <rect
                x="146"
                y="5"
                width="28"
                height="28"
                className={styles.decorPixel}
              />
              <rect
                x="178"
                y="34"
                width="10"
                height="10"
                className={styles.decorYellow}
              />
            </svg>
          </div>
        </div>

        {/* FEATURED PROJECT */}
        <article className={styles.featuredProjectCard}>
          <div className={styles.projectImageArea}>
            <div className={styles.projectImageWrap}>
              <div className={styles.browserBar} aria-hidden="true">
                <div className={styles.browserDots}>
                  <span />
                  <span />
                  <span />
                </div>

                <span className={styles.browserLabel}>PROJECT PREVIEW</span>

                <span className={styles.browserPixel} />
              </div>

              <div className={styles.projectScreenshot}>
                <Image
                  src="/YodaSafetyServices/Pages/Home.png"
                  alt="Homepage of the Yoda Safety Services online training platform"
                  className={styles.projectImage}
                  width={800}
                  height={600}
                  sizes="(max-width: 850px) 100vw, 60vw"
                />
              </div>
            </div>

            <span className={styles.imagePixelOne} aria-hidden="true" />
            <span className={styles.imagePixelTwo} aria-hidden="true" />
            <span className={styles.imagePixelThree} aria-hidden="true" />
          </div>

          <div className={styles.projectContent}>
            <div className={styles.projectMeta}>
              <span className={styles.projectIndex}>01 / FEATURED</span>
              <span className={styles.projectMetaLine} aria-hidden="true" />
            </div>

            <p className={styles.projectType}>
              UX/UI Design · Full-Stack Development
            </p>

            <h3>Yoda Safety Services</h3>

            <p className={styles.projectDescription}>
              A custom online training platform designed and developed to make
              course management, learning and certification easier for
              individuals and businesses.
            </p>

            <p className={styles.projectDescriptionSecondary}>
              From the learning experience to company dashboards, payments and
              automated certificates, the platform brings multiple workflows
              together into one connected system.
            </p>

            <div className={styles.projectTags}>
              <span>React</span>
              <span>MongoDB</span>
              <span>Node.js</span>
            </div>

            <div className={styles.projectAction}>
              <Link
                href="/case-study/yoda-safety-services"
                className={styles.projectLink}
              >
                View Case Study
                <FaArrowRight aria-hidden="true" />
              </Link>

              <div className={styles.actionCircuit} aria-hidden="true">
                <span className={styles.actionCircuitLine} />
                <span className={styles.actionCircuitNode} />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedProject;
