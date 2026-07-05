import styles from '../page.module.css';
export const EditableField = ({
  label,
  value,
  editing,
  field,
  type = "text",
  textarea = false,
  onChange,
}) => {
  if (!editing && !value) return null;

  return (
    <div className={styles.clientField}>
      <div className={styles.eyebrow}>{label}</div>

      {!editing ? (
        <div>{value}</div>
      ) : textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
        />
      )}
    </div>
  );
};