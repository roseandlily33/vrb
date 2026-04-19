"use client";
import React, { useEffect, useState } from "react";
import styles from "./HeroImage.module.css";
import { codeLines } from "./CodeLines";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton.component";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton.component";
import Link from "next/link";

const HeroImage = () => {
  // For syntax highlighting
  const typeToClass = {
    keyword: styles.codeKeyword,
    function: styles.codeFunction,
    object: styles.codeObject,
    method: styles.codeMethod,
    string: styles.codeString,
    plain: styles.codePlain,
  };

  // Typing animation state
  const [displayedLines, setDisplayedLines] = useState([[]]);
  const [lineIdx, setLineIdx] = useState(0);
  const [tokenIdx, setTokenIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx < codeLines.length) {
      const line = codeLines[lineIdx];
      if (tokenIdx < line.length) {
        const token = line[tokenIdx];
        if (charIdx < token.text.length) {
          // Realistic typing speed: random between 30-120ms
          const delay = Math.floor(Math.random() * 90) + 30;
          const timeout = setTimeout(() => {
            setDisplayedLines((prev) => {
              // Deep copy previous lines and tokens to avoid mutation
              const newLines = prev.map((l) => l.map((t) => ({ ...t })));
              // Ensure current line exists
              if (!newLines[lineIdx]) newLines[lineIdx] = [];
              // Ensure current token exists
              if (!newLines[lineIdx][tokenIdx]) {
                newLines[lineIdx][tokenIdx] = { ...token, text: "" };
              }
              // Add next char to a new string (do not mutate existing)
              const currentText = newLines[lineIdx][tokenIdx].text;
              newLines[lineIdx][tokenIdx] = {
                ...token,
                text: currentText + token.text[charIdx],
              };
              return newLines;
            });
            setCharIdx(charIdx + 1);
          }, delay);
          return () => clearTimeout(timeout);
        } else {
          setTimeout(() => {
            setTokenIdx(tokenIdx + 1);
            setCharIdx(0);
          }, 0);
        }
      } else {
        setTimeout(() => {
          setLineIdx(lineIdx + 1);
          setTokenIdx(0);
          setCharIdx(0);
          setDisplayedLines((prev) => [...prev, []]);
        }, 200);
      }
    }
  }, [charIdx, tokenIdx, lineIdx]);

  return (
    <section className={styles.splitMain}>
      <section className={styles.leftPane}>
        <h1 className={styles.heroTitle}>Building fast, user-focused web experiences</h1>
        <p className={styles.heroSubtitle}>
          Designing and developing applications that are clean, scalable, and built to last.
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/contact">
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>
          <Link href="/services">
            <SecondaryButton>Learn More</SecondaryButton>
          </Link>
        </div>
      </section>
      <section className={styles.rightPane}>
        <div className={styles.editorWindow}>
          <div className={styles.codeInner}>
            {displayedLines.map((line, i) => (
              <pre key={i} className={styles.codeLine}>
                {line.map((token, j) => (
                  <span
                    key={j}
                    className={typeToClass[token.type] || styles.codePlain}
                  >
                    {token.text}
                  </span>
                ))}
              </pre>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroImage;
