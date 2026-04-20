import HeroImage from "./HomeComponents/HeroImage/HeroImage.component";
import AboutMe from "./HomeComponents/AboutMe/AboutMe.component";
import Services from "./HomeComponents/Services/Services.component";
import Projects from "./HomeComponents/Projects/Projects.component";
import Testimonial from "./HomeComponents/Testimonial/Testimonial.component";
import CTA from "./Components/CTA/CTA.component";
import CTA2 from "./Components/CTA/CTA2/CTA2.component";
import CTA3 from "./Components/CTA/CTA3/CTA3.component";
import CTA4 from "./Components/CTA/CTA4/CTA4.component";

export default function Home() {
  return (
    <main>
      <HeroImage />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonial />
      <CTA />
      <CTA2 />
      <CTA3 />
      <CTA4 />
    </main>
  );
}
