import styles from "./HeroMain.module.css";
import Button from '../Button/Button.ariel';

export default function HeroMain() {
  return (
    <section className={styles.hero}>
<div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          Equestrian Training & Development
        </p>

        <h1 className={styles.title}>
          Building confident riders through structured & thoughtful training
        </h1>
        <div style={{ display: 'flex', gap: '1.2rem', marginTop: 'var(--space-m)' }}>
          <Button>Explore Programs</Button>
          <Button variant="secondary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}