import Link from "next/link";
import styles from "./Anchor.module.css";
import CSHero from "../Components/CSHero/CSHero.component";
import { designElements } from "./designElements";
import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";

import CSDesignShowcase from "../Components/CSDesignShowcase/CSDesignShowcase.component";

export default function AnchorCaseStudy() {
  return (
    <main className={styles.page}>
      <Breadcrumbs current="VRB Web Design and Development" />
      <CSHero
        title="Brand refinement and business materials."
        img="/Anchor/AnchorLogo.png"
        role="Designer"
        date="2026"
        status="Completed"
        type="Branding & Design"
        companyName="Anchor Marine & Mechanical"
      />
      <CSDesignShowcase showcase={designElements} />
    </main>
  );
}
