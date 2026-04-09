import { useState } from "react";
import styles from "../page.module.css";

const TABS = [
    { key: "discovery", label: "Discovery" },
    { key: "design", label: "Design" },
    { key: "development", label: "Development" },
    { key: "launch", label: "Launch" },
];

const CSProcess = ({ content }) => {
    const [activeTab, setActiveTab] = useState(TABS[0].key);

    return (
        <section className={styles.processTabs}>
            <h2>Process</h2>
            <div className={styles.tabGroup}>
                {TABS.map((tab, idx) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={
                            styles.tabButton +
                            (activeTab === tab.key ? ' ' + styles.activeTab : '') +
                            (idx === 0 ? ' ' + styles.firstTab : '') +
                            (idx === TABS.length - 1 ? ' ' + styles.lastTab : '')
                        }
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>
                {content && content[activeTab]}
            </div>
        </section>
    );
};

export default CSProcess;
