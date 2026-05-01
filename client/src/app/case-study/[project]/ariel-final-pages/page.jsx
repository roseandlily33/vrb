import Navbar from "./Nav/Nav.ariel";
import Footer from './Footer/Footer.ariel';
import ServicesBar from './Bar/ServicesBar.ariel';
import Principles from './FourPrinciples/Principles.ariel';
import HeroServices from './Hero/HeroServices.ariel';
import Results from './Results/Results.ariel';
import TrainingPrograms from './TrainingPrograms/TrainingPrograms.ariel';


const ArielFinal = () => {
    return (
        <main>
            <Navbar />
            <HeroServices />
            <ServicesBar />
            <TrainingPrograms />
            <Principles />
            <Results />
            <Footer/>
            </main>
      );
}
 
export default ArielFinal;