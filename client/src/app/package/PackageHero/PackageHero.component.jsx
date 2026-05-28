import React from "react";
import styles from "./PackageHero.module.css";
import Breadcrumbs from "../../case-study/[project]/Components/Extras/Breadcrumbs/Breadcrumbs.component";

export default function PackageHero() {
  return (
    <>
      <section className={styles.packagesHero}>
        <Breadcrumbs
          current="Packages"
          first="Services"
          firstLink="/services"
        />

        <div className={styles.packagesHeroContent}>
          {/* <span className={styles.eyebrow}>Packages</span> */}
          <h1>Packages built to grow with your business.</h1>
          <p>
            Explore project, design, and support packages built to help
            businesses launch, improve, and scale their online presence with
            clarity and confidence.
          </p>
        </div>
      </section>
    </>
  );
}
