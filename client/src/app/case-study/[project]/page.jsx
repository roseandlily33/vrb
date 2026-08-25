import ProjectClient from "./ProjectClient";
import { ProjectMetadata } from "./projectMetadata";

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

export default async function ProjectPage({ params }) {
  const { project } = await params;

  return <ProjectClient project={project} />;
}