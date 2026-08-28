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
      <section className={styles.contactIntro}>
        <div className={styles.introInner}>
          <div className={styles.introContent}>
            <div className={styles.introLabel} aria-hidden="true">
              <span className={styles.labelLine} />
              <span className={styles.labelPixel} />
            </div>
            <h1>Let&apos;s work together</h1>
            <p>
              I&apos;m currently available for freelance web design and
              development projects. Get in touch to discuss your goals,
              timeline, and what you need.
            </p>
          </div>

          <div className={styles.introPixels} aria-hidden="true">
            <span className={`${styles.pixel} ${styles.pixelOne}`} />
            <span className={`${styles.pixel} ${styles.pixelTwo}`} />
            <span className={`${styles.pixel} ${styles.pixelThree}`} />
            <span className={`${styles.pixel} ${styles.pixelFour}`} />
            <span className={`${styles.pixelOutline} ${styles.outlineOne}`} />
            <span className={`${styles.pixelOutline} ${styles.outlineTwo}`} />
          </div>
        </div>
      </section>
      <section className={styles.contactSection}>
        <div className={styles.sideBySide}>
          <div className={styles.formColumn}>
            <ContactForm />
          </div>
          <div className={styles.infoColumn}>
            <ContactInfo />
          </div>
        </div>
      </section>
      <Faq />
    </main>
  );
}
