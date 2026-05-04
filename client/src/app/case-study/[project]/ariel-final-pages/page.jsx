"use client";
import React, { useState } from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton.component";
import Navbar from "./Nav/Nav.ariel";
import Footer from "./Footer/Footer.ariel";
import ServicesBar from "./Bar/ServicesBar.ariel";
import Principles from "./FourPrinciples/Principles.ariel";
import HeroServices from "./Hero/HeroServices.ariel";
import Results from "./Results/Results.ariel";
import TrainingPrograms from "./TrainingPrograms/TrainingPrograms.ariel";
import CTA1 from "./CTA/CTA1.ariel";
import CTA2 from "./CTA/CTA2.ariel";
import Experience from "./Experience/Experience.ariel";
import HeroMain from "./Hero/HeroMain.ariel";
import Horsemanship from "./Horsemanship/Horsemanship.ariel";
import Quote from "./Quote/Quote.ariel";
import Sponsers from "./Sponsers/Sponsers.ariel";
import Testimonial from "./Testimonial/Testimonial.ariel";
import TrainingImpact from "./TrainingImpact/TrainingImpact.ariel";
import styles from "./page.module.css";

const ArielFinal = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const servicesPage = (
    <>
      <Navbar />
      <HeroServices />
      <ServicesBar />
      <TrainingPrograms />
      <Principles />
      <Results />
      <CTA2 />
      <Footer />
    </>
  );
  const homePage = (
    <>
      <Navbar />
      <HeroMain />
      <Horsemanship />
      <Experience />
      <TrainingImpact />
      <Quote />
      <Sponsers />
      <Testimonial />
      <CTA1 />
      <Footer />
    </>
  );


  return (
    <main>
     <section className={styles.finishedPagesHeader}>
  <p className={styles.eyebrow}>Final Results</p>

  <h1 className={styles.title}>Finished Pages</h1>

  <div className={styles.pageSwitch} role="tablist" aria-label="Finished pages">
    <button
      type="button"
      onClick={() => setSelectedPage("home")}
      className={`${styles.switchButton} ${
        selectedPage === "home" ? styles.active : ""
      }`}
    >
      Home
    </button>

    <button
      type="button"
      onClick={() => setSelectedPage("services")}
      className={`${styles.switchButton} ${
        selectedPage === "services" ? styles.active : ""
      }`}
    >
      Services
    </button>
  </div>
</section>
      {selectedPage === "home" && homePage}
      {selectedPage === "services" && servicesPage}
    </main>
  );
};

export default ArielFinal;
