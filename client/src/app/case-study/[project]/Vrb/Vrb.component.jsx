"use client";
import styles from "../page.module.css";
import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";
import CSHero from "../Components/CSHero/CSHero.component";

const Vrb = () => {
  return (
    <section className={styles.mainContainer}>
      <Breadcrumbs current="VRB Web Design and Development" />
      <CSHero
        img=""
        companyName="VRB Web Design and Development"
        // link="https://yodasafetyservices.com/"
        date="22026 - Present"
        status="In Progress"
        title="Building "
        highlightWords={["Training Platform"]}
        type="Web Application"
        role="Lead developer built and deployed the platform."
      />
    </section>
  );
};

export default Vrb;
