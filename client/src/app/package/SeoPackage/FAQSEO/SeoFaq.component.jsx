"use client";
import React from "react";
import styles from "./SeoFaq.module.css";

const faqQuestions = [
  {
    question: "How long until I see SEO results?",
    answer:
      "SEO is cumulative — technical fixes and on-page optimizations can show improvements in weeks, but meaningful ranking and traffic gains typically take 3–6 months depending on competition and content volume.",
  },
  {
    question: "Do you optimize for AI search (ChatGPT / generative models)?",
    answer:
      "Yes — we include entity optimization, structured data, and semantic/topic modelling to help content surface in AI-driven answers and generative agents alongside traditional search engines.",
  },
  {
    question: "Will you fix technical issues on my site?",
    answer:
      "We run technical audits (crawlability, sitemaps, robots, redirects, performance and Core Web Vitals) and implement prioritized fixes or provide a clear remediation plan for developers to follow.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track rankings, organic traffic, conversions, Core Web Vitals, and Search Console insights; deliver regular reports and recommended next steps for continued growth.",
  },
  {
    question: "Can you optimize existing content or do you create new content?",
    answer:
      "Both — we audit existing content and recommend improvements, and we can also produce semantic, topical content that aligns with keyword and entity strategies when needed.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "Technical changes and quick wins can be implemented quickly, but meaningful ranking and traffic gains usually develop over months. Results depend on competition, domain history, content volume, and authority — typically 3–6 months for noticeable movement.",
  },
  {
    question: "What's included in your SEO services?",
    answer:
      "A mix of technical fixes, on-page optimization, keyword research & page mapping, structured data, performance improvements, content recommendations, and ongoing monitoring/reporting tailored to your goals.",
  },
  {
    question: "Do you guarantee first-page Google rankings?",
    answer:
      "No. Guarantees for specific rankings are not offered — SEO outcomes depend on many external factors. We focus on measurable improvements and transparent reporting to build long-term results.",
  },
  {
    question: "Do you offer SEO for existing websites?",
    answer:
      "Yes — we perform audits to identify technical and content issues, prioritize fixes, and implement optimizations or provide an actionable plan for your team to execute.",
  },
  {
    question: "Do you optimize websites for AI search?",
    answer:
      "Yes — we include entity work, structured data, topical content, and site architecture strategies to make content more discoverable by AI-powered systems as well as traditional search engines.",
  },
];

export default function FaqSeo() {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqHeading}>FAQ — SEO & AI Search</h2>

      <div className={styles.faqList}>
        {faqQuestions.map((item) => (
          <details className={styles.faqItem} key={item.question}>
            <summary className={styles.faqQuestion}>
              <span className={styles.faqQuestionText}>{item.question}</span>
            </summary>

            <div className={styles.faqAnswer}>{item.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
