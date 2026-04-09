import styles from "../page.module.css";
import CSHero from "../Components/CSHero.component";
import CTA3 from "@/app/Components/CTA/CTA3/CTA3.component";
import CSBeforeAndAfter from "../Components/CSBeforeAndAfter.component";
import CSProblem from "../Components/CSProblem.component";
import CSProcess from "../Components/CSProcess.component";
import CSTestimonial from "../Components/CSTestimonial.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSResults from "../Components/CSResults.component";

const Ariel = () => {
  return (
    <section className={styles.mainContainer}>
      <CSHero
        img="/ArielPerformanceHorses/ArielLogo.webp"
        companyName="Ariel Boesener Performance Horses"
      />
      <CSProblem />
      <CSBeforeAndAfter />
      <CSProcess />
      <CSKeyPages />
      <CSResults />
      <CSTestimonial />
      <CTA3 />
    </section>
  );
};

export default Ariel;
