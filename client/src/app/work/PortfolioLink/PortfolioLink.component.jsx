"use client";
import styles from "./PortfolioLink.module.css";
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";

const PortfolioLink = () => {
    return (
        <section className={styles.linkContainer}>
            <div className={styles.words}>
                <h2 className={styles.h2}>Want to see more of my work?</h2>
                <p>Check out my full portfolio for more projects and case studies.</p>
            </div>
            <div className={styles.buttonWrapper}>
                <PrimaryButton
                    onClick={() =>
                        window.open("https://victoriabenoit-portfolio.onrender.com", "_blank")
                    }
                >
                    View Portfolio
                </PrimaryButton>
            </div>
        </section>
    );
};

export default PortfolioLink;
