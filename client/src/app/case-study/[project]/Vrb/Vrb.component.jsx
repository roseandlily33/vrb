"use client";
import styles from "../page.module.css";
import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";
import CSHero from "../Components/CSHero/CSHero.component";
import CTA2 from "@/app/Components/CTA/CTA2/CTA2.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSProblem from "../Components/CSProblem/CSProblem.component";
import CSProcess from "../Components/CSProcess/CSProcess.component";
import CSResults from "../Components/CSResults/CSResults.component";
import CSTechnologies from "../Components/CSTechnologies/CSTechnologies.component";
import BackToTopButton from "@/app/Components/BackToTop/BackToTopButton";
import CSPhases from "../Components/CSPhases/CSPhases.component";
import { results } from "./results";
import { PhaseDescriptions } from "./pages";

const Vrb = () => {
  return (
    <section className={styles.mainContainer}>
      <Breadcrumbs current="VRB Web Design and Development" />
      <CSHero
        img=""
        companyName="VRB Web Design and Development"
        date="2026"
        status="Complete"
        title="Where design and development work together"
        highlightWords={["design and development"]}
        type="Web Application"
        role="Lead developer"
      />
      <CSProblem
        homeSrc=""
        problemDescription="I needed a portfolio that could effectively showcase my work while also
serving as a professional platform for attracting and working with clients.The challenge was creating something that felt both visually strong and
strategically structured — not just a gallery of projects."
      />
      <CSProcess
        discovery="Understanding goals, audience, and positioning. This phase focused on defining the structure of the site, the services being presented, and how users would navigate the experience."
        design="Translating the structure into a clear and cohesive interface. Layout, hierarchy, and visual direction were refined to ensure the content was easy to scan while maintaining a strong, polished aesthetic."
        development="Building the site with a focus on performance, responsiveness, and scalability. Components were structured to be reusable and maintainable across different sections of the site."
        launch="Final testing, refinement, and deployment. The site was optimized for performance and accessibility, ensuring a smooth experience across devices and a reliable foundation moving forward."
      />
      <CSPhases phasesDescriptions={PhaseDescriptions} />
      <CSResults results={results} />
      <CSTechnologies technologies={["Next.js", "Figma", "css", "Javascript", "Responsive Design", "Component Based Architecture"]} />
      {/* <CSKeyPages pages={pages} /> */}
      <CTA2 />
      <BackToTopButton />
    </section>
  );
};

export default Vrb;
