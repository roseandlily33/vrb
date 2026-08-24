import React from "react";
import styles from "./page.module.css";
import ArielInner from "./ArielInner";

const ArielFinal = () => {
  return (
    <main>
      <section className={styles.finishedPagesHeader}>
        <p>Note: This page is currently under construction.</p>
        <p className={styles.eyebrow}>Final Results</p>

        <h1 className={styles.title}>Finished Pages</h1>
        <ArielInner />
      </section>
    </main>
  );
};

export default ArielFinal;
