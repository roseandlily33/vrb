import Card from "../../Components/Card/Card.component";
import styles from "./Services.module.css";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Services() {
  const eachService = [
    {
      title: "Web Development",
      description:
        "Modern, scalable, and performant websites and web apps tailored to your needs.",
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive, beautiful interfaces and user experiences that delight and convert.",
    },
    {
      title: "Custom Functionality",
      description:
        "From user accounts to dashboards and integrations, I build features that go beyond a standard website.",
    },
  ];
  return (
    <section className={styles.servicesSection}>
      <p className="eyebrowHeader">Services</p>
      <h2 className={styles.heading}>Services I offer</h2>
      <div className={styles.subtext}>
        From design to development, I offer end-to-end digital services.
      </div>
      <div className={styles.cardsWrapper}>
        {eachService?.map((service) => (
          <Card key={service.title} className={styles.serviceCard}>
            <h3
              className="cardHeader"
              style={{
                paddingBottom: "var(--space-s)",
              }}
            >
              {service.title}
            </h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <div className={styles.bottomButton}>
              <Link href="/services">
                <TertiaryButton as="span">
                  Learn More{" "}
                  <FiArrowRight
                    style={{ marginLeft: 6, verticalAlign: "middle" }}
                    aria-hidden="true"
                  />
                </TertiaryButton>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
