import styles from "../page.module.css";
import CSHero from "../Components/CSHero/CSHero.component";
import CTA3 from "@/app/Components/CTA/CTA3/CTA3.component";
import CSProblem from "../Components/CSProblem/CSProblem.component";
import CSProcess from "../Components/CSProcess/CSProcess.component";
import CSTestimonial from "../Components/CSTestimonial.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSResults from "../Components/CSResults/CSResults.component";
import CSKeyFeatures from "../Components/CSKeyFeatures/CSKeyFeatures.component";
import CSPhaseCard from "../Components/CSPhases/CSPhases.component";
import { results } from "./result";
import { beforePages, pages, afterPages, PhaseDescriptions} from "./pages";
import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";
import BackToTopButton from "@/app/Components/BackToTop/BackToTopButton";

const Ariel = () => {
  return (
    <section className={styles.mainContainer}>
      <Breadcrumbs current="Ariel Performance Horses" />
      <CSHero
        img="/ArielPerformance/ArielLogo.webp"
        companyName="Ariel Boesener Performance Horses"
        date="2025"
        link="https://www.arielboesenerperformancehorses.com/"
        type="Design"
        status="Completed"
        title="Redesigning a Website for Clarity and Usability"
        highlightWords={["Clarity", "Usability"]}
        role="UX/UI Designer"
        note="I developed multiple design iterations to improve structure, usability, and visual clarity. While implementation is still in progress, the work outlines a strong direction for a more refined user experience."
      />
      <CSKeyFeatures
        keyFeatures={[
          "Responsive design for mobile and desktop",
          "Gallery of training services and available horses",
          "Hierarchy of content for easy navigation",
          "Navigation Improvements",
        ]}
      />
      <CSProblem
        homeSrc="/ArielPerformance/Phase2/Home.png"
        problemDescription="The existing site was cluttered, difficult to navigate, and visually inconsistent with the brand. Poor content organization and unclear navigation made it hard for users to find key information. The goal was to simplify the structure, improve navigation, and create a more cohesive, user-friendly experience."
      />
      {/* Optionally keep CSBeforeAndAfter for overall before/after, or remove if not needed */}
      {/* <CSBeforeAndAfter beforeImages={beforePages} afterImages={afterPages} /> */}
      <CSProcess
        discovery="The approach centered on improving usability through better structure and clarity. I analyzed the existing site to identify navigation issues, inconsistent design elements, and gaps in content hierarchy. From there, I restructured the layout and refined the visual direction to create a more cohesive, user-friendly experience aligned with the brand."
        design="The design phase centered on restructuring the user interface to improve clarity and usability. I established a clear content hierarchy, refined the layout for better flow, and updated the visual style to align more closely with the brand. The result was a more cohesive, intuitive experience that makes information easier to find and navigate."
        development="The development phase focused on translating the redesigned interface into a consistent and responsive front-end. Updated layouts and navigation structures were implemented to reflect the improved user experience, ensuring the site remains easy to use and visually cohesive across all devices."
        launch="There was no formal launch process, as the project was primarily focused on design improvements."
      />
      <CSPhaseCard
        phaseImages={{
          "Phase 1": beforePages,
          "Phase 2": afterPages.filter((img) => img.url.includes("Phase2")),
          "Phase 3": afterPages.filter((img) => img.url.includes("Phase3")),
          "Phase 4": afterPages.filter((img) => img.url.includes("Phase4")),
        }}
        phasesDescriptions={PhaseDescriptions}
      />
      <CSKeyPages pages={pages} />
      <CSResults results={results} />
      <CSTestimonial testimonial="Working with Victoria Benoit was absolutely transformative for the function and overall experience of my website. Victoria applied an incredible eye for detail, focusing on making the layout more attractive and the overall presentation genuinely eye-catching. Beyond the aesthetics, the improvements to user flow were paramount. She optimized the navigation, making the site dramatically more user-friendly. My website now looks highly professional and provides a seamless experience for visitors. If you are looking for a design expert to refine your project and elevate it from good to outstanding, I highly recommend Victoria! - Ariel Boesener" />
      <CTA3 />
      <BackToTopButton />
    </section>
  );
};

export default Ariel;
