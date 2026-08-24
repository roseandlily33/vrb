export const ProjectMetadata = {
  "yoda-safety-services": {
    title: "Yoda Safety Services | VRB Web Design & Development",
    description:
      "Explore the Yoda Safety Services project, a web design and development project focused on building a comprehensive training platform for managing courses, certifications, and company training workflows.",
  },
  'vrb-web': {
    title: "VRB Web Design & Development | Portfolio Project",
    description:
      "Explore the VRB Web Design & Development project, a portfolio project focused on creating a polished, responsive, and user-friendly digital experience.",
  },
  "vrb-process": {
    title: "VRB Web Design & Development Process | Portfolio Project",
    description:
      "Explore the VRB Web Design & Development process, a portfolio project focused on creating a polished, responsive, and user-friendly digital experience.",
  },
  newline: {
    title:
      "Newline Plumbing, Heating & Construction | Web Design & Development Project",
    description:
      "Explore the Newline project, a custom web design and development project focused on creating a polished, responsive, and user-friendly digital experience.",
  },
  "inspection-pal": {
    title: "InspectionPal | VRB Web Design & Development Project",
    description:
      "Explore the InspectionPal project, a web design and development project focused on rebuilding a high-performance marketing website optimized for speed, accessibility, and user experience.",
  },
  assuage: {
    title: "Assuage Wellness Centre | UX/UI Design Concept Project",
    description:
      "Explore the Assuage Wellness Centre project, a UX/UI design concept focused on creating two distinct visual directions for a future website redesign.",
  },
  "ariel-performance-horses-final-pages": {
    title:
      "Ariel Boesener Performance Horses Final Pages | VRB Web Design & Development",
    description:
      "Explore the Ariel Boesener Performance Horses project, a custom web design and development project focused on creating a polished, responsive, and user-friendly digital experience.",
  },
  "ariel-performance-horses": {
    title:
      "Ariel Boesener Performance Horses | VRB Web Design & Development Project",
    description:
      "Explore the Ariel Boesener Performance Horses project, a web design and development project focused on improving clarity, usability, and visual consistency for a more user-friendly experience.",
  },
};

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