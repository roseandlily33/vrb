import styles from "../page.module.css";
import CSHero from "../Components/CSHero.component";
import CTA2 from "@/app/Components/CTA/CTA2/CTA2.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSProblem from "../Components/CSProblem.component";
import CSProcess from "../Components/CSProcess.component";
import CSResults from "../Components/CSResults.component";
import CSTechnologies from "../Components/CSTechnologies.component";
import KeyFeatures from "../Components/CSKeyFeatures.component";
import { pages } from "./pages";

const Yoda = () => {
  return (
    <section className={styles.mainContainer}>
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
      <CSProblem problemDescription="The client approached us to build a comprehensive training platform from the ground up, with features for payments, course management, and automated certifications. The challenge was to design and implement a solution tailored to their unique workflow." />
      <CSProcess
        content={{
          discovery: (
            <>
              <p>
                We started with in-depth meetings to understand the client's
                needs and mapped out the platform's core requirements.
              </p>
              <p>
                Stakeholder interviews and workflow analysis helped define the
                project scope and priorities.
              </p>
            </>
          ),
          design: (
            <>
              <p>
                Wireframes and prototypes were created to visualize the user
                journey and interface.
              </p>
              <img
                src="/YodaSafetyServices/DesignMock.png"
                alt="Design mockup"
                style={{ maxWidth: "100%", borderRadius: 12 }}
              />
              <p>
                Feedback loops with the client ensured the design matched their
                vision and branding.
              </p>
            </>
          ),
          development: (
            <>
              <p>
                The platform was built using a modern tech stack, focusing on
                scalability and security.
              </p>
              <p>
                We implemented features like course management, payments, and
                automated certifications.
              </p>
            </>
          ),
          launch: (
            <>
              <p>
                After thorough testing, the platform was launched smoothly and
                on schedule.
              </p>
              <p>
                We provided training and documentation to ensure a seamless
                handoff to the client.
              </p>
            </>
          ),
        }}
      />
      <CSResults />
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
