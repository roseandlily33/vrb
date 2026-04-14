"use client";
import styles from "./Links.module.css";

const sections = [
    { label: "Packages", target: "#packages" },
    { label: "Design", target: "#design" },
    { label: "Process", target: "#process" },
    { label: "Retainers", target: "#retainers" },
    { label: "Extras", target: "#extras" },
];

export default function Links({ onSectionClick }) {
    return (
        <nav className={styles.linksBar}>
            {sections.map((section, idx) => (
                <div key={idx} style={{ display: 'flex'}}>
                    <button
                        key={section.label}
                        className={styles.linkBtn}
                        onClick={() => {
                            if (onSectionClick) onSectionClick(section.target);
                            else {
                                const el = document.querySelector(section.target);
                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                        }}
                        type="button"
                    >
                        {section.label}
                    </button>
                    {idx < sections.length - 1 && (
                        <span className={styles.separator}>
                            <span className={styles.bar}></span>
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
