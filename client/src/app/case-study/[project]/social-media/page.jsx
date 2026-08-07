"use client";
import React from "react";
import { useParams } from "next/navigation";
import styles from "../page.module.css";
import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";
import CSTopMenu from "../Components/CSTopMenu/CSTopMenu.component";
import CSSocialMediaPosts from "../Components/CSSocialMediaPosts/CSSocialMediaPosts.component";

const assuagePosts = [
  {
    id: "1",
    image: "/Assuage/InstagramPosts/1.png",
    title: "How to Book",
    objective: "Educational",
    description:
      "An informational carousel designed to simplify the booking process by clearly outlining both online and phone booking options while encouraging new appointments.",
    date: "July 2026",
  },
  {
    id: "2",
    image: "/Assuage/InstagramPosts/2.png",
    title: "5th Anniversary Invitation",
    objective: "Announcement",
    // highlight: '1.5k views on facebook',
    description:
      "A celebratory event announcement created to build excitement for Assuage Wellness Centre's fifth anniversary while reinforcing the brand's welcoming and community-focused personality.",
    date: "July 2026",
  },
  {
    id: "3",
    image: "/Assuage/InstagramPosts/3.png",
    title: "Assuage Meaning",
    objective: "Educational",
    description:
      "An educational post explaining the meaning behind the name 'Assuage' using a clean dictionary-inspired layout that reinforces the spa's calming brand identity.",
    date: "July 2026",
  },
  {
    id: "4",
    image: "/Assuage/InstagramPosts/4.png",
    title: "Vacation Ready #1",
    objective: "Promotional",
    description:
      "A postcard-inspired carousel encouraging clients to plan treatments before travelling, using seasonal messaging and travel-themed visuals to increase appointment bookings.",
    date: "July 2026",
  },
  {
    id: "5",
    image: "/Assuage/InstagramPosts/5.png",
    title: "Vacation Ready #2",
    objective: "Promotional",
    description:
      "A companion design expanding on the Vacation Ready campaign with service timing recommendations presented in an engaging postcard-inspired format.",
    date: "July 2026",
  },
  {
    id: "6",
    image: "/Assuage/InstagramPosts/6.png",
    title: "Greener Future",
    objective: "Educational",
    description:
      "An educational post showcasing Assuage Wellness Centre's commitment to sustainability while strengthening trust through environmentally conscious messaging.",
    date: "July 2026",
  },
  {
    id: "7",
    image: "/Assuage/InstagramPosts/7.png",
    title: "Welcome Back",
    objective: "Announcement",
    highlight: "2.1k views on facebook",
    description:
      "A welcoming announcement celebrating the return of a team member with warm, personable messaging designed to reconnect existing clients and encourage future bookings.",
    date: "July 2026",
  },
  {
    id: "8",
    image: "/Assuage/InstagramPosts/8.png",
    title: "Our Treat",
    objective: "Educational",
    description:
      "A promotional post highlighting the TreatCard rewards program, communicating client benefits in a simple, approachable format while encouraging repeat visits.",
    date: "July 2026",
  },
  {
    id: "9",
    image: "/Assuage/InstagramPosts/9.png",
    title: "Summer Reset",
    objective: "Promotional",
    description:
      "A seasonal wellness carousel introducing practical ways to recharge during the summer while positioning the spa as a destination for relaxation and self-care.",
    date: "July 2026",
  },
];

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
      <Breadcrumbs current="Assuage Wellness Centre" />
      <CSTopMenu
        activeKey="web"
        items={[
          {
            key: "web",
            label: "Web Design",
            description: "Homepage, UI concepts and layout decisions.",
          },
          {
            key: "social",
            label: "Social Media",
            description: "Social post concepts and marketing assets.",
            href: "/case-study/assuage/social-media",
          },
        ]}
      />
      <div
        style={{ padding: "var(--space-l) var(--space-m) 0 var(--space-m)" }}
      >
        <h1>Assuage Wellness Centre</h1>
        <h3>Social Media Posts</h3>
      </div>
      <p className={styles.meta}>
        Concept social posts and marketing assets for Assuage Wellness Centre.
      </p>
      <CSSocialMediaPosts posts={assuagePosts} />
    </main>
  );
}
