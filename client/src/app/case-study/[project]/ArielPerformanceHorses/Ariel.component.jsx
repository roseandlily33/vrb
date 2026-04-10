import styles from "../page.module.css";
import CSHero from "../Components/CSHero.component";
import CTA3 from "@/app/Components/CTA/CTA3/CTA3.component";
import CSBeforeAndAfter from "../Components/CSBeforeAndAfter.component";
import CSProblem from "../Components/CSProblem.component";
import CSProcess from "../Components/CSProcess.component";
import CSTestimonial from "../Components/CSTestimonial.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSResults from "../Components/CSResults.component";
import CSKeyFeatures from "../Components/CSKeyFeatures.component";

const Ariel = () => {
  return (
    <section className={styles.mainContainer}>
      <CSHero
        img="/ArielPerformanceHorses/ArielLogo.webp"
        companyName="Ariel Boesener Performance Horses"
        date="2025"
        type="Design"
        role="UX/UI Designer: collaborated with client to create design mockups"
      />
      <CSKeyFeatures
        keyFeatures={[
          "Responsive design for mobile and desktop",
          "Gallery of training services and available horses",
          "Hierarchy of content for easy navigation",
          "Navigation Improvements",
        ]}
      />
      <CSProblem />
      <CSBeforeAndAfter />
      <CSProcess />
      <CSKeyPages />
      <CSResults />
      <CSTestimonial testimonial="Working with Victoria Benoit was absolutely transformative for the function and overall experience of my website. Victoria applied an incredible eye for detail, focusing on making the layout more attractive and the overall presentation genuinely eye-catching. Beyond the aesthetics, the improvements to user flow were paramount. She optimized the navigation, making the site dramatically more user-friendly. My website now looks highly professional and provides a seamless experience for visitors. If you are looking for a design expert to refine your project and elevate it from good to outstanding, I highly recommend Victoria! - Ariel Boesener" />
      <CTA3 />
    </section>
  );
};

export default Ariel;
