import Link from "next/link";
import styles from "./Anchor.module.css";
import CSHero from "../Components/CSHero/CSHero.component";
import { designElements } from "./designElements";
// import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";

import CSDesignShowcase from "../Components/CSDesignShowcase/CSDesignShowcase.component";

export const metadata = {
  title: "Anchor Marine & Mechanical | Branding & Business Design Project",
  description:
    "Explore the Anchor project, featuring custom business materials and visual design created to deliver a cohesive, professional brand experience.",
};

export default function AnchorCaseStudy() {
  return (
    <main className={styles.page}>
      {/* <Breadcrumbs current="VRB Web Design and Development" /> */}
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
