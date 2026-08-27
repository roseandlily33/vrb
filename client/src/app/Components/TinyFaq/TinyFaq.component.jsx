import React from "react";
import styles from "./TinyFaq.module.css";

export const packageFaqs = {
  web: [
    {
      question: "How long does it take to build a website?",
      answer:
        "Timelines depend on the size, functionality, content, and complexity of the project. Most website projects follow a structured process that includes discovery, design, development, testing, and launch, with a clear timeline established before work begins.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes. Websites are designed and developed responsively so they work across desktop, tablet, and mobile screen sizes, with usability, accessibility, and performance considered throughout the project.",
    },
    {
      question: "Is SEO included with my website?",
      answer:
        "Website projects include foundational SEO considerations such as page structure, metadata, performance, accessibility, and crawlability where applicable. More comprehensive keyword research, technical SEO, content optimization, and ongoing search strategy can be added through SEO services.",
    },
  ],

  design: [
    {
      question: "What is included in the UX/UI design process?",
      answer:
        "The UX/UI design process can include research, page structure, user flows, wireframes, interface design, responsive layouts, and visual direction depending on the scope of the project.",
    },
    {
      question: "Do you develop the website after designing it?",
      answer:
        "Yes. Design can be provided as a standalone service or combined with web development for projects that need both the interface designed and the finished website built.",
    },
    {
      question: "Will the design work with my existing brand?",
      answer:
        "Yes. Existing brand guidelines, colours, typography, imagery, and other visual elements can be incorporated into the design to create a cohesive digital experience.",
    },
  ],

  social: [
    {
      question: "What is included in social media management?",
      answer:
        "Depending on the package, social media management can include content planning, custom graphics, caption writing, hashtag research, scheduling, publishing, and performance reporting.",
    },
    {
      question: "Do I need to provide the content?",
      answer:
        "Content can be supplied by your business or coordinated as part of the service. On-site content creation may also be available as an add-on depending on your location and package.",
    },
    {
      question: "Which social media platforms can you manage?",
      answer:
        "Platform recommendations depend on your audience, goals, and existing presence. The best channels and content approach can be discussed before your social media management plan begins.",
    },
  ],

  retainer: [
    {
      question: "What does website maintenance include?",
      answer:
        "Website maintenance can include content updates, technical changes, security monitoring, performance improvements, troubleshooting, and ongoing website support depending on your retainer.",
    },
    {
      question: "How often should a website be maintained?",
      answer:
        "Websites should be reviewed regularly to keep content, software, performance, security, and functionality in good condition. The appropriate maintenance schedule depends on how frequently your website changes and how complex it is.",
    },
    {
      question: "Can unused retainer hours roll over?",
      answer:
        "Retainer terms, available hours, and how unused time is handled are outlined before the retainer begins so the scope and expectations are clear.",
    },
  ],

};

export default function TinyFaq({ type }) {
  const faqs = packageFaqs[type] || [];

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={styles.wrap} aria-labelledby="tiny-faq-title">
      <h3 id="tiny-faq-title" className={styles.heading}>Frequently asked</h3>

      <div className={styles.list}>
        {faqs.map((f) => (
          <details className={styles.item} key={f.question}>
            <summary className={styles.question}>{f.question}</summary>
            <div className={styles.answer}>{f.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}