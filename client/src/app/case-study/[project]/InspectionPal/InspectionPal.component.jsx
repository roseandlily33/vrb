import styles from "../page.module.css";
import CSHero from "../Components/CSHero.component";
import CTA4 from "@/app/Components/CTA/CTA4/CTA4.component";
import CSProblem from "../Components/CSProblem.component";
import CSProcess from "../Components/CSProcess.component";
import CSTechnologies from "../Components/CSTechnologies.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSResults from "../Components/CSResults.component";

const InspectionPal = () => {
  return (
    <section className={styles.mainContainer}>
      <CSHero img="/InspectionPal/Logo.png" companyName="InspectionPal" />
      <CSProblem />
      <CSProcess />
      <CSTechnologies />
      <CSKeyPages />
      <CTA4 />
    </section>
  );
};

export default InspectionPal;
