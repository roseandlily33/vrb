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
      <div className={styles.contactIntro}>
        <h1>Let&apos;s work together</h1>

        <p>
          I&apos;m currently available for freelance web design and development
          projects. Get in touch to discuss your goals, timeline, and what you
          need.
        </p>
      </div>
      <div className={styles.sideBySide}>
        <ContactForm />
        <ContactInfo />
      </div>

      <Faq />
    </main>
  );
}
