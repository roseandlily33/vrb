import { FaArrowRight } from "react-icons/fa";
import styles from "./FeaturedProject.module.css";
import Link from "next/link";
import Image from "next/image";
const FeaturedProject = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsHeader}>
        {/* <p className="eyebrowHeader">Work</p> */}
        <h2 className="header">Featured Project</h2>
      </div>

      <article className={styles.featuredProjectCard}>
        <div className={styles.projectImageWrap}>
          <Image
            src="/YodaSafetyServices/Pages/Home.png"
            alt="Training platform project preview"
            className={styles.projectImage}
            width={800}
            height={600}
          />
        </div>

        <div className={styles.projectContent}>
          <p className={styles.projectType}>Full-Stack Platform</p>
          <h3 className="header">Comprehensive Training Platform</h3>
          <p>
            A custom-designed and developed training platform with course
            management, secure payments, certificates, company dashboards, and
            automated workflows.
          </p>

          <div className={styles.projectTags}>
            <span>React</span>
            <span>MongoDB</span>
            <span>Node.js</span>
          </div>

          <Link
            href="/case-study/yoda-safety-services"
            className={styles.projectLink}
          >
            View Case Study <FaArrowRight />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default FeaturedProject;
