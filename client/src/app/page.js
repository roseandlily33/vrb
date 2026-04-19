import HeroImage from "./HomeComponents/HeroImage/HeroImage.component";
import AboutMe from "./HomeComponents/AboutMe/AboutMe.component";
import Services from "./HomeComponents/Services/Services.component";
import Projects from "./HomeComponents/Projects/Projects.component";
import Testimonial from "./HomeComponents/Testimonial/Testimonial.component";
import CTA from "./Components/CTA/CTA.component";

export default function Home() {
  return (
    <main>
      <HeroImage />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonial />
      <CTA />
    </main>
  );
}
