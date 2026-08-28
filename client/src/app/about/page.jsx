import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
import CTA3 from "../Components/CTA/CTA3/CTA3.component";
import ToolsTechnologies from "./ToolsTech/ToolsTech.component";
import AboutMe from "./AboutMe/AboutMe.component";
import ExperienceSnapshot from "./ExperienceSnapshot/ExperienceSnapshot.component";
import FocusOn from "./FocusOn/FocusOn.component";
import HowIWork from "./HowIWork/HowIWork.component";
import WhyMe from "./WhyMe/WhyMe.component";

export const metadata = {
  title: "Freelance Web Designer Canada | VRB Web Design & Development",
  description:
    "Freelance web designer and developer based in Halifax, creating thoughtful, high-performing websites and digital experiences for businesses across Canada.",
};

export default function About() {
  return (
    <main>
      <Hero
        topMeta="About Me"
        title="Freelance Web Designer & Developer building high-performing, user-first web experiences"
        highlight="Freelance Web Designer & Developer"
        subText="Based in Halifax, Nova Scotia, I provide freelance web design and development for businesses across Canada, creating thoughtful, high-performing digital experiences built around real users."
      />
      <AboutMe />
      <HowIWork />
      <FocusOn />
      <ExperienceSnapshot />
      <WhyMe />
      <ToolsTechnologies />
      <CTA3 />
    </main>
  );
}
