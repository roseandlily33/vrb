import React from "react";
import SocialMediaPage from "./SMPage";
import styles from "./page.module.css";

export const metadata = {
  title: "Assuage Wellness Centre | Social Media Marketing Project",
  description:
    "Explore the Assuage Wellness Centre project, a social media marketing project focused on creating a cohesive and engaging digital presence for the brand.",
};

export default function SocialMediaRoute() {
 
  return (
    <main className={styles.mainContainer}>
      <SocialMediaPage />
    </main>
  );
}
