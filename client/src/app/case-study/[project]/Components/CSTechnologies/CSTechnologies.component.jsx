import styles from "./CSTechnologies.module.css";
import PillButton from "@/app/Components/PillButton/PillButton.component";
const CSTechnologies = ({ technologies = [] }) => {
  return (
    <section className={styles.technologies}>
      {/* <h2>Technologies Used</h2> */}
       <p className="eyebrowHeader">Technologies</p>
      <h2>Tools & technologies used</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.8rem",
          marginTop: "1.2rem",
        }}
      >
        {technologies?.map((t) => (
          <PillButton key={t} tech={t}>
            {t}
          </PillButton>
        ))}
      </div>
    </section>
  );
};

export default CSTechnologies;
