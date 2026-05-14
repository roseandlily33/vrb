// import ContactForm from "./ContactForm/ContactForm.component";
import ContactInfo from "./ContactInfo/ContactInfo.component";
import Faq from "./FAQ/Faq.component";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <div className={styles.sideBySide}>
        {/* <ContactForm /> */}
        <ContactInfo />
      </div>
      <Faq />
    </main>
  );
}
