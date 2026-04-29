import styles from "../page.module.css";
import CSHero from "../Components/CSHero/CSHero.component";
import CTA4 from "@/app/Components/CTA/CTA4/CTA4.component";
import CSProblem from "../Components/CSProblem/CSProblem.component";
import CSProcess from "../Components/CSProcess/CSProcess.component";
import CSTechnologies from "../Components/CSTechnologies/CSTechnologies.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSResults from "../Components/CSResults/CSResults.component";
import CSKeyFeatures from "../Components/CSKeyFeatures/CSKeyFeatures.component";
import { results } from "./results";
import { pages, PhaseDescriptions } from "./pages";
import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";
import BackToTopButton from "@/app/Components/BackToTop/BackToTopButton";
import CSPhases from "../Components/CSPhases/CSPhases.component";

const InspectionPal = () => {
  return (
    <section className={styles.mainContainer}>
      <Breadcrumbs current="InspectionPal" />
      <CSHero
        img="/InspectionPal/Logo.png"
        companyName="InspectionPal"
        date="2025"
        highlightWords={["Marketing Website"]}
        status="Completed"
        title="Rebuilding a High-Performance Marketing Website"
        type="Web Application"
        link="https://www.inspectionpal.com/"
        role="Lead developer"
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
      <CSProblem
        homeSrc="/InspectionPal/Home.png"
        problemDescription="The original website was outdated, slow, and lacked a clear structure, making it difficult for users to navigate and engage. It also failed to reflect the brand’s identity. The goal was to redesign and rebuild the site into a fast, modern, and user-friendly experience optimized for performance and accessibility."
      />
      <CSProcess
        discovery="The approach focused on identifying weaknesses in performance, structure, and user experience within the existing site. From there, I planned a streamlined layout and optimized content flow, prioritizing speed, responsiveness, and clarity. The goal was to deliver a modern, high-performing website that better represents the brand and improves overall usability."
        design="The design phase focused on simplifying the user interface and improving visual clarity. I created a structured layout that prioritizes readability and intuitive navigation, while refining visual elements to ensure consistency across the site. The result was a modern, responsive design that enhances both usability and overall user experience."
        development="The development phase focused on delivering a fast, optimized, and responsive website. Built with Gatsby and deployed on Netlify, the site was structured for performance and maintainability. Key functionality, including a contact form for capturing inquiries, was integrated alongside performance optimizations such as lazy loading and asset compression to ensure a smooth user experience."
        launch="Deployed with Netlify, with a custom domain url"
      />
      <CSPhases phasesDescriptions={PhaseDescriptions} />
      <CSResults results={results} />
      <CSTechnologies
        technologies={["gatsby", "styled-components", "netlify"]}
      />
      <CSKeyPages pages={pages} />
      <CTA4 />
      <BackToTopButton />
    </section>
  );
};

export default InspectionPal;
