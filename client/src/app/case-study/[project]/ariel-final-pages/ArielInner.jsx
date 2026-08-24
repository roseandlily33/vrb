"use client";
import React, { useState } from "react";
import SupportAndResources from "./TrainingImpact/Support.ariel";
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

const ArielInner = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [theme, setTheme] = useState("theme-black");

  React.useEffect(() => {
    document.body.classList.remove("theme-black", "theme-navy");
    document.body.classList.add(theme);
  }, [theme]);

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
      <SupportAndResources />
      <Quote />
      <Sponsers />
      <Testimonial />
      <CTA1 />
      <Footer />
    </>
  );
  return (
    <>
      <div
        className={styles.pageSwitch}
        role="tablist"
        aria-label="Finished pages"
      >
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
      <button
        onClick={() =>
          setTheme((prev) =>
            prev === "theme-black" ? "theme-navy" : "theme-black",
          )
        }
        style={{
          marginTop: 24,
          padding: "0.6em 1.5em",
          borderRadius: 999,
          border: "none",
          background: "var(--color-gold)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "1rem",
          boxShadow: "0 4px 18px rgba(216, 160, 78, 0.18)",
          cursor: "pointer",
          transition: "background 0.18s, transform 0.18s",
          outline: "none",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = "var(--color-gold-light)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "var(--color-gold)")
        }
      >
        Switch Colorway
      </button>
      {selectedPage === "home" && homePage}
      {selectedPage === "services" && servicesPage}
    </>
  );
};

export default ArielInner;
