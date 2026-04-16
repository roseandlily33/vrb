import styles from "./CSProblem.module.css";

const CSProblem = ({ problemDescription, homeSrc }) => {
  return (
    <section className={styles.problem}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "2.5rem" }}>
        <div style={{ flex: 2 }}>
          <h2>Problem Statement</h2>
          <p>{problemDescription}</p>
        </div>
        {homeSrc && (
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
            <img
              src={homeSrc}
              alt="home page screenshot"
              style={{
                borderRadius: "0.8rem",
                width: "500px",
                maxWidth: "none",
                height: "auto",
                aspectRatio: "4/3",
                objectFit: "cover",
                objectPosition: "top",
                boxShadow: "0 2px 12px 0 rgba(38, 155, 230, 0.10)",
                maxHeight: "320px",
                flexBasis: "30%",
                flexGrow: 0,
                flexShrink: 1,
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CSProblem;
