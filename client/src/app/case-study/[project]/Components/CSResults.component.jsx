import styles from "../page.module.css";

const CSResults = ({ results }) => {
  return (
    <section className={styles.results}>
      <h2>Results</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {results && results.map((result, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              border: "1.5px solid var(--blue-100)",
              borderRadius: "1rem",
              boxShadow: "0 2px 12px 0 rgba(38, 155, 230, 0.08)",
              padding: "2.5rem",
              minWidth: 220,
              maxWidth: 320,
              flex: "1 1 220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{  fontWeight: 700, marginBottom: "0.7rem", color: "var(--blue-700)" }}>{result.title}</h3>
            <p style={{ color: "var(--grey-800)", fontSize: "0.9rem" }}>{result.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CSResults;
