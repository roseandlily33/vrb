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
            title: "Performance",
            description:
                "Optimizing your digital products for speed, efficiency, and scalability.",
        },
    ];
    return (
        <section className={styles.servicesSection}>
             <p className="eyebrowHeader">Services</p>
      {/* <h3>What I Focus On </h3> */}
            <h2 className={styles.heading}>Services I offer</h2>
            <div className={styles.subtext}>
                From design to development, I offer end-to-end digital services.
            </div>
            <div className={styles.cardsWrapper}>
                {eachService?.map((service) => (
                    <Card key={service.title} className={styles.serviceCard}>
                        <h3
                            style={{
                                paddingBottom: "var(--space-s)",
                                // borderBottom: "1px solid var(--grey-400)",
                                color: "var(--grey-600)",
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
