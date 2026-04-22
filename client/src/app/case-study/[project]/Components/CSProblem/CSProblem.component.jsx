import styles from "./CSProblem.module.css";

const CSProblem = ({ problemDescription, homeSrc }) => {
  return (
    <section className={styles.problem}>
      <div style={{ flex: 2 }}>
        <p className="eyebrowHeader">Problem</p>
        <h2>The challenge we needed to solve</h2>
        <p className={styles.prob}>{problemDescription}</p>
      </div>
      {homeSrc && (
        <div className={styles.imgContainer}>
          <img
            src={homeSrc}
            alt="home page screenshot"
            className={styles.homeImg}
          />
        </div>
      )}
      {/* </div> */}
    </section>
  );
};

export default CSProblem;
