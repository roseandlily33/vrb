import styles from "./CSResults.module.css";
import Card from "@/app/Components/Card/Card.component";

const CSResults = ({ results }) => {
  return (
    <section className={styles.results}>
      {/* <h2>Results</h2> */}
       <p className="eyebrowHeader">results</p>
      <h2>What this project delivered</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {results && results.map((result, idx) => (
          <Card
            key={idx}
            style={{
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
            <h3 style={{  fontWeight: 700, marginBottom: "0.7rem", color: "var(--blue-800)" }}>{result.title}</h3>
            <p style={{ color: "var(--grey-800)", fontSize: "0.9rem" }}>{result.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CSResults;
