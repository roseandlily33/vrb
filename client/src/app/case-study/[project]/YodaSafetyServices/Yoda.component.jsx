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
import { pages, PhaseDescriptions } from "./pages";
import CSTestimonial from "../Components/CSTestimonial.component";

// import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";
import BackToTopButton from "@/app/Components/BackToTop/BackToTopButton";
import CSPhases from "../Components/CSPhases/CSPhases.component";

const Yoda = () => {
  return (
    <section className={styles.mainContainer}>
      {/* <Breadcrumbs current="Yoda Safety Services" /> */}
      <CSHero
        img="/YodaSafetyServices/Logo.png"
        companyName="Yoda Safety Services"
        link="https://yodasafetyservices.com/"
        date="2024 - Present"
        status="In Progress"
        description="A scalable system for managing courses, certifications, and company training workflows."
        title="Building a Comprehensive Training Platform"
        highlightWords={["Training Platform"]}
        type="Web Application"
        role="Lead developer"
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
      <CSPhases phasesDescriptions={PhaseDescriptions} />
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
      <CSTestimonial
        testimonial="I am extremely satisfied with the website designed by VRB Web Design and Development. The finished site is professional, visually appealing, easy to navigate, and accurately reflects Yoda Safety Services, its services, and its brand.

VRB Web Design created a clear and informative website for Yoda Safety Services, highlighting safety training, consulting, Nova Scotia WCB safety certification audits, program development, classroom training, online training, and workplace safety support across Atlantic Canada.

She organized the information in a professional and user-friendly way, making it easy for visitors to understand the company’s experience, values, services, and commitment to practical workplace health and safety solutions.

Overall, VRB Web Design and Development did an excellent job creating a credible, polished, and effective online presence that supports the continued growth of Yoda Safety Services.

Based on the quality of the design, professionalism, communication, and overall experience, I would rate my satisfaction as 10 out of 10.

I would confidently recommend VRB Web Design and Development to anyone looking for a professional, well-designed website and a positive customer experience.

Victoria brings a fresh, modern design approach that helps businesses keep pace with changing needs, evolving customer expectations, and the growing importance of a strong online presence."
      />
      <CTA2 />
      <BackToTopButton />
    </section>
  );
};

export default Yoda;
