"use client";
import { useParams } from "next/navigation";
import { ProjectMetadata } from "./projectMetadata";
import Ariel from "./ArielPerformanceHorses/Ariel.component";
import InspectionPal from "./InspectionPal/InspectionPal.component";
import Yoda from "./YodaSafetyServices/Yoda.component";
import Vrb from "./Vrb/Vrb.component";
import Assuage from "./Assuage/Assuage.component";
import NewLine from "./NewLine/NewLine.component";
import Anchor from "./Anchor/Anchor.component";

export async function generateMetadata({ params }) {
  const { project } = await params;

  return (
    ProjectMetadata[project] || {
      title: "Portfolio Project | VRB Web Design & Development",
      description:
        "Explore selected web design and development work by VRB Web Design & Development.",
    }
  );
}

export default function ProjectPage() {
  const { project } = useParams();
  
  if (project === "inspection-pal") {
    return <InspectionPal />;
  }
  if (project === "ariel-performance-horses") {
    return <Ariel />;
  }
  if (project === "yoda-safety-services") {
    return <Yoda />;
  }
  if (project === "vrb-web") {
    return <Vrb />;
  }
  if (project === "assuage") {
    return <Assuage />;
  }
  if (project === "newline") {
    return <NewLine />;
  }
  if (project === "anchor-marine") {
    return <Anchor />;
  }
  return <h2>No project found</h2>;
}

