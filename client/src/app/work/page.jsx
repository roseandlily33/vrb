import React from "react";
import Hero from "../Components/Hero/Hero.component";
import MetadataBar from "./MetadataBar/MetadataBar.component";
import WorkPage from "./WorkPage";

export const metadata = {
  title: "Website Design Portfolio | VRB Web Design & Development",
  description:
    "Explore my website design portfolio featuring real web design and development projects, case studies, UI/UX work, and custom web applications.",
};

export default function Work() {
  return (
    <main>
      <Hero
        topMeta="Web Design & Development Portfolio"
        highlight="Real-world"
        title="Real-world websites and web applications, designed and built with purpose."
        subText="Focused on performance, UX, and real business impact"
      />
      <MetadataBar />
      <div style={{ textAlign: "center" }}>
        <h4>Selected Web Design & Development Projects</h4>
        <p>
          Explore selected web design and development case studies, from
          business websites and redesigns to custom platforms and UX/UI
          projects.
        </p>
      </div>
      <WorkPage />
    </main>
  );
}
