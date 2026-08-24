import styles from "../page.module.css";
import CSHero from "../Components/CSHero/CSHero.component";
// import CSTopMenu from "../Components/CSTopMenu/CSTopMenu.component";
import CTA3 from "@/app/Components/CTA/CTA3/CTA3.component";
import CSProblem from "../Components/CSProblem/CSProblem.component";
import CSProcess from "../Components/CSProcess/CSProcess.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSKeyFeatures from "../Components/CSKeyFeatures/CSKeyFeatures.component";
import { pages } from "./pages";
// import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";
import BackToTopButton from "@/app/Components/BackToTop/BackToTopButton";

const Assuage = () => {
  return (
    <section className={styles.mainContainer}>
      {/* <Breadcrumbs current="Assuage Wellness Centre" /> */}
     
      <CSHero
        img="/Assuage/AssuageLogoCircle.png"
        companyName="Assuage Wellness Centre"
        date="2026"
        type="Design Concept"
        status="Concept Complete"
        title="Exploring Two Visual Directions for a Modern Wellness Website"
        highlightWords={["Visual", "Wellness"]}
        role="UX/UI Designer"
        seeProcess={false}
        topMenu={true}
        // finalResults="/case-study/assuage/assuage-final-pages"
        note="This project focused on exploring multiple design directions for a future website redesign. I developed two distinct concepts, one centered around a modern spa experience and another focused on wellness, before refining the strongest ideas into a polished homepage concept."
      />
      <CSKeyFeatures
        keyFeatures={[
          "Two distinct design concepts",
          "Responsive-first page layouts",
          "Modern typography and colour exploration",
          "Improved content hierarchy",
          "User-focused navigation",
          "High-fidelity UI mockups",
        ]}
      />
      <CSProblem
        homeSrc="/Assuage/AssuageHome.png"
        problemDescription="The goal of this project was to explore potential visual directions for a future website redesign. Rather than redesigning an existing interface, the focus was on creating high-fidelity concepts that balanced aesthetics, usability, and clear content organization while reflecting the client's evolving vision."
      />
      <CSProcess
        discovery="The project began with discovery and creative exploration to understand the client's goals and desired aesthetic. I researched modern wellness websites, explored typography and colour palettes, and developed an initial design direction that aligned with the brand's identity."
        design="The design phase focused on creating two unique concepts. One emphasized a calming spa experience, while the other explored a broader wellness aesthetic. Throughout both directions, attention was given to visual hierarchy, spacing, typography, and intuitive navigation."
        development="This project concluded at the design stage. The deliverables consisted of polished, high-fidelity mockups intended to guide a future website implementation."
        launch="As this was a design exploration project, no production website was developed or launched at this stage."
      />
      <CSKeyPages pages={pages} />
      <BackToTopButton />
      <CTA3 />
    </section>
  );
};

export default Assuage;
