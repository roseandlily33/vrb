import ContactForm from "./ContactForm/ContactForm.component";
import ContactInfo from "./ContactInfo/ContactInfo.component";
import Faq from "./FAQ/Faq.component";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | VRB Web Design & Development",
  description:
    "Get in touch with VRB Web Design & Development to discuss your web design, development, UX/UI, or digital project in Halifax or remotely across Canada.",
};

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      {/* =========================================
      CONTACT HERO
  ========================================= */}

      <section className={styles.contactIntro}>
        <div className={styles.introInner}>
          {/* Main hero content */}

          <div className={styles.introContent}>
            <div className={styles.introEyebrow}>
              <span className={styles.labelLine} aria-hidden="true" />
              <span className={styles.labelPixel} aria-hidden="true" />

              <span>Contact / Let's Collaborate</span>
            </div>

            <h1>
              Have a project
              <span className={styles.headingAccent}> in mind?</span>
            </h1>

            <p className={styles.introDescription}>
              Whether you're starting something new or looking to improve what
              you already have, I'd love to hear about it. Tell me what you're
              working on, and let's explore what's possible.
            </p>

            <div className={styles.introActions}>
              <a href="#contact" className={styles.introButton}>
                Start a conversation
                <span aria-hidden="true">↗</span>
              </a>

              <span className={styles.introActionNote}>
                Freelance web design & development
              </span>
            </div>
          </div>

          {/* Project inquiry overview */}

          <div className={styles.heroAside}>
            <div className={styles.heroAsideHeader}>
              <span className={styles.asideEyebrow}>Working Together</span>

              <span className={styles.asideHeaderPixel} aria-hidden="true" />
            </div>

            <div className={styles.heroSteps}>
              <div className={styles.heroStep}>
                <span className={styles.stepNumber}>01</span>

                <div className={styles.stepContent}>
                  <h2>Your idea</h2>
                  <p>
                    Share what you're looking to create, change, or improve.
                  </p>
                </div>
              </div>

              <div className={styles.heroStep}>
                <span className={styles.stepNumber}>02</span>

                <div className={styles.stepContent}>
                  <h2>The conversation</h2>
                  <p>
                    We'll discuss your goals, questions, and what your project
                    needs.
                  </p>
                </div>
              </div>

              <div className={styles.heroStep}>
                <span className={styles.stepNumber}>03</span>

                <div className={styles.stepContent}>
                  <h2>Next steps</h2>
                  <p>
                    We'll work out a direction and the best way to move forward.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.heroAsideFooter}>
              <span>Have questions? That's okay too.</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
        </div>

        <div className={styles.heroBottomLine} aria-hidden="true">
          <span />
          <span />
        </div>
      </section>

      {/* =========================================
      CONTACT FORM + INFORMATION
  ========================================= */}

      <section
        className={styles.contactSection}
        aria-label="Contact and project inquiry"
      >
        <div className={styles.sideBySide}>
          <div className={styles.formColumn}>
            <ContactForm />
          </div>

          <div className={styles.infoColumn}>
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* =========================================
      FREQUENTLY ASKED QUESTIONS
  ========================================= */}

      <Faq />
    </main>
  );
}
