import Link from "next/link";
import styles from "./NewLine.module.css";
import CSHero from "../Components/CSHero/CSHero.component";
import { designElements } from "./designElements";
// import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";

import CSDesignShowcase from "../Components/CSDesignShowcase/CSDesignShowcase.component";

export default function NewLineCaseStudy() {
  return (
    <main className={styles.page}>
      {/* <Breadcrumbs current="VRB Web Design and Development" /> */}
      <CSHero
        title="Brand refinement and business materials."
        img="/NewLine/NewLineLogoNew.png"
        role="Designer"
        date="2026"
        status="Completed"
        type="Branding & Design"
        companyName="New Line Plumbing, Heating & Construction"
      />
      <CSDesignShowcase showcase={designElements} />
    </main>
  );
}
