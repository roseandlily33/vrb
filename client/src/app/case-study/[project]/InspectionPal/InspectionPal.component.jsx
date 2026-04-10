import styles from "../page.module.css";
import CSHero from "../Components/CSHero.component";
import CTA4 from "@/app/Components/CTA/CTA4/CTA4.component";
import CSProblem from "../Components/CSProblem.component";
import CSProcess from "../Components/CSProcess.component";
import CSTechnologies from "../Components/CSTechnologies.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSResults from "../Components/CSResults.component";
import CSKeyFeatures from "../Components/CSKeyFeatures.component";

const InspectionPal = () => {
  return (
    <section className={styles.mainContainer}>
      <CSHero
        img="/InspectionPal/Logo.png"
        companyName="InspectionPal"
        date="2025"
        type="Web Application"
        link="https://www.inspectionpal.com/"
        role="Lead developer: collaborated with client to define requirements, built and deployed the platform."
      />
      <CSKeyFeatures
        keyFeatures={[
          "Responsive Design",
          "SEO Optimization",
          "Custom animations & transitions",
          "Accessibility Improvements",
          "Performance optimization (lazy loading, image compression)",
        ]}
      />
      <CSProblem />
      <CSProcess />
      <CSTechnologies
        technologies={{
          frontend: ["styled-components"],
          backend: [],
          extra: ["gatsby"],
        }}
      />
      <CSKeyPages />
      <CSResults />
      <CTA4 />
    </section>
  );
};

export default InspectionPal;
