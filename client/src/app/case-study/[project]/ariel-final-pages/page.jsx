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
      <Quote />
      <TrainingImpact />
      <Sponsers />
      <Experience />
      <Testimonial />
      <CTA1 />
      <Footer />
    </>
  );

  // Inline styles for button group and active button
  const buttonGroupStyle = {
    display: "flex",
    gap: "var(--space-l)",
    justifyContent: "center",
    margin: "2.5rem 0 2rem 0",
  };
  const activeButtonStyle = {
    boxShadow: "0 0 0 3px var(--color-gold)",
    background: "var(--color-gold)",
    color: "var(--color-black)",
    fontWeight: 700,
    borderColor: "var(--color-gold-dark)",
    transition: "all 0.2s",
  };

  return (
    <main>
      <h1 style={{ textAlign: "center", margin: "2.5rem 0 1.5rem 0", fontSize: "2.2rem", fontWeight: 700, letterSpacing: "0.01em" }}>
        Ariel Finished Pages
      </h1>
      <div style={buttonGroupStyle}>
        <PrimaryButton
          onClick={() => setSelectedPage('home')}
          style={selectedPage === 'home' ? activeButtonStyle : {}}
        >
          Home
        </PrimaryButton>
        <PrimaryButton
          onClick={() => setSelectedPage('services')}
          style={selectedPage === 'services' ? activeButtonStyle : {}}
        >
          Services
        </PrimaryButton>
      </div>
      {selectedPage === "home" && homePage}
      {selectedPage === "services" && servicesPage}
    </main>
  );
};

export default ArielFinal;
