import styles from "../page.module.css";
import CSHero from "../Components/CSHero.component";
import CTA2 from "@/app/Components/CTA/CTA2/CTA2.component";
import CSKeyPages from "../Components/CSKeyPages.component";
import CSProblem from "../Components/CSProblem.component";
import CSProcess from "../Components/CSProcess.component";
import CSResults from "../Components/CSResults.component";
import CSTechnologies from "../Components/CSTechnologies.component";

const Yoda = () => {
  return (
    <section className={styles.mainContainer}>
      <CSHero
        img="/YodaSafetyServices/Logo.png"
        companyName="Yoda Safety Services"
        link="https://yodasafetyservices.com/"
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
      <CSTechnologies />
      <CSKeyPages />
      <CTA2 />
    </section>
  );
};

export default Yoda;
