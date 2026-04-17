"use client";
import styles from "../page.module.css";
import CSHero from "../Components/CSHero/CSHero.component";
import CTA2 from "@/app/Components/CTA/CTA2/CTA2.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSProblem from "../Components/CSProblem/CSProblem.component";
import CSProcess from "../Components/CSProcess/CSProcess.component";
import CSResults from "../Components/CSResults/CSResults.component";
import CSTechnologies from "../Components/CSTechnologies/CSTechnologies.component";
import KeyFeatures from "../Components/CSKeyFeatures/CSKeyFeatures.component";
import { results } from "./results";
import { pages } from "./pages";
import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";

const Yoda = () => {
  return (
    <section className={styles.mainContainer}>
      <Breadcrumbs current="Yoda Safety Services" />
      <CSHero
        img="/YodaSafetyServices/Logo.png"
        companyName="Yoda Safety Services"
        link="https://yodasafetyservices.com/"
        date="2024 - Present"
        status="In Progress"
        title="Building a Comprehensive Training Platform"
        type="Web Application"
        role="Lead developer: collaborated with client to define requirements, built and deployed the platform."
      />
      <KeyFeatures
        keyFeatures={[
          "Course enrollment and progress tracking",
          "Secure online payments with paypal and certificate downloads with user details",
          "Automated email notifications and reminders",
          "Company Management; manager can assign courses, track progress, and manage company details, as well as a form management system",
          "Subcontractor Management",
          "Responsive design for mobile, tablet, and desktop",
          "Admin dashboard for course, company, newsletter and user management",
          "Interactive Form Upload & Instance System, saves the completed form, can query, filter and search on all the forms for a company",
        ]}
      />
      <CSProblem
        homeSrc="/YodaSafetyServices/Pages/Home.png"
        problemDescription="The client approached us to build a comprehensive training platform from the ground up, with features for payments, course management, and automated certifications. The challenge was to design and implement a solution tailored to their unique workflow."
      />
      <CSProcess
        discovery="We began with a series of collaborative meetings to deeply understand the client’s training workflows, compliance needs, and business goals. Through stakeholder interviews and process mapping, we identified pain points in their existing manual systems and gathered requirements for course management, user roles, and certification automation. This phase resulted in a clear, prioritized roadmap for the platform’s core features."
        design="Wireframes and interactive prototypes were developed to visualize the user journey for both administrators and trainees. We focused on intuitive navigation, responsive layouts, and clear calls to action. The design process included regular feedback sessions with the client to ensure alignment with their brand and operational needs, resulting in a modern, accessible interface tailored to their audience."
        development="We built the platform using a modern tech stack, including React for the frontend and Express/MongoDB for the backend. Key features include secure payment processing, automated email notifications, and a robust admin dashboard for managing courses and companies."
        launch="Deployed with render, with a custom domain url"
      />
      <CSResults results={results} />
      <CSTechnologies
        technologies={[
          "react",
          "react-router-dom",
          "styled-components",
          "express",
          "mongodb",
          "mongoose",
          "morgan",
          "helmet",
          "dotenv",
          "bcrypt",
          "cors",
          "jsonwebtoken",
          "multer",
          "nodemailer",
          "nodemailer-express-handlebars",
          "uuid",
          "render",
        ]}
      />
      <CSKeyPages pages={pages} />
      <CTA2 />
    </section>
  );
};

export default Yoda;
