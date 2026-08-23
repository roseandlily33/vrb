import Hero from "../Components/Hero/Hero.component";
import ProcessInner from "./ProcessInner";
export const metadata = {
  title: "Web Design Process | VRB Web Design & Development",
  description:
    "Explore my web design process from discovery and strategy through design, development, and launch, focused on creating high-performing websites.",
};

export default function Process() {
  return (
    <main>
      <Hero
        topMeta="Process"
        title="From idea to launch, here's how my web design process works."
        highlight="web design"
        subText="Every website follows a structured design and development process focused on performance, usability, and real business goals."
      />
      <ProcessInner />
    </main>
  );
}
