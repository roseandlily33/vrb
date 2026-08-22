"use client";
import React from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { assuageOverview } from "./assuageOverview";
// import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";
import CSTopMenu from "../Components/CSTopMenu/CSTopMenu.component";
import CSSocialMediaPosts from "../Components/CSSocialMediaPosts/CSSocialMediaPosts.component";
import { assuagePosts } from "./assuagePosts";
import { assuageResults } from "./assuageResults";
import { assuageStrategy } from "./assuageStrategy";
import CSSocialMediaResults from "../Components/CSSocialMediaResults/CSSocialMediaResults.component";
import CSSocialMediaStrategy from "../Components/CSSocialMediaStrategy/CSSocialMediaStrategy.component";
import CSSocialMediaOverview from "../Components/CSSocialMediaOverview/CSSocialMediaOverview.component";

export default function SocialMediaRoute() {
  const { project } = useParams();

  if (project !== "assuage") {
    return (
      <main className={styles.mainContainer}>
        <h2>No social media posts found for this project.</h2>
      </main>
    );
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.caseHeader}>
      {/* <Breadcrumbs current="Assuage Wellness Centre" /> */}
      </div>
      <CSTopMenu
        activeKey="social"
        items={[
          {
            key: "web",
            label: "Web Design",
            description: "Homepage, UI concepts and layout decisions.",
            href: "/case-study/assuage",
          },
          {
            key: "social",
            label: "Social Media",
            description: "Social post concepts and marketing assets.",
            href: "/case-study/assuage/social-media",
          },
        ]}
      />

      <CSSocialMediaOverview overview={assuageOverview[0]} />
      <CSSocialMediaStrategy strategy={assuageStrategy} />
      <CSSocialMediaResults
        results={assuageResults}
        title="Social Media Results"
      />

      <CSSocialMediaPosts posts={assuagePosts} />
    </main>
  );
}
