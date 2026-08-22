import React from "react";
import Hero from "../Components/Hero/Hero.component";
import MetadataBar from "./MetadataBar/MetadataBar.component";
import WorkPage from "./WorkPage";
export const metadata = {
  title: "Work | VRB Web Design & Development",
  description:
    "Select web development and design projects by VRB Web Design & Development, a Halifax-based web designer and developer working with businesses locally and remotely across Canada.",
};

export default function Work() {
  return (
    <main>
      <Hero
        topMeta="Selected Work"
        title="Designing & Building High-Performing Web Experiences"
        subText="Focused on performance, UX, and real business impact"
      />
      <MetadataBar />
      <WorkPage />
    </main>
  );
}
