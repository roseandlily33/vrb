import React from "react";
import styles from "./page.module.css";
import ArielInner from "./ArielInner";
export const metadata = {
  title: "Ariel Boesener Performance Horses | Web Design & Development Project",
  description:
    "Explore the Ariel Boesener Performance Horses project, a custom web design and development project focused on creating a polished, responsive, and user-friendly digital experience.",
};

const ArielFinal = () => {
  return (
    <main>
      <section className={styles.finishedPagesHeader}>
        <p className={styles.eyebrow}>Final Results</p>

        <h1 className={styles.title}>Finished Pages</h1>
        <ArielInner />
      </section>
    </main>
  );
};

export default ArielFinal;
