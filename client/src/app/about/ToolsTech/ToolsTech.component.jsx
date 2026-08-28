import React from "react";
import styles from "./ToolsTech.module.css";
import { skills } from "./ToolsList";

const ToolsTechnologies = () => {
  return (
    <section className={styles.tools}>
      <div className={styles.toolsInner}>
        <div className={styles.toolsHeader}>
          <div className={styles.headerContent}>
            <div className={styles.sectionMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>Technical Toolkit</p>

            <h3>Tools & Technologies</h3>

            <p className={styles.toolsIntro}>
              Focused on building high-performance, scalable web applications
              using modern technologies
            </p>
          </div>

          <div className={styles.headerPixels} aria-hidden="true">
            <span className={styles.pixelOne} />
            <span className={styles.pixelTwo} />
            <span className={styles.pixelThree} />
            <span className={styles.pixelOutline} />
          </div>
        </div>

        <div className={styles.skillSections}>
          {Object.entries(skills).map(([section, skillList], sectionIndex) => (
            <div key={section} className={styles.skillSection}>
              <div className={styles.skillSectionHeader}>
                <span className={styles.sectionNumber}>
                  {String(sectionIndex + 1).padStart(2, "0")}
                </span>

                <h4>{section}</h4>
              </div>

              <div className={styles.skillsGrid}>
                {skillList.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillIcon} aria-hidden="true">
                      {skill.icon}
                    </span>

                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
