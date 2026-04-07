import designPackage from './designPackage';
import Card from '@/app/Components/Card/Card.component';
import styles from './DesignPackage.module.css';

export default function DesignPackage() {
    const pkg = designPackage[0];
    return (
        <section className={styles.designSection}>
            <h2 className={styles.heading}>{pkg.title}</h2>
            <div className={styles.metaRow}>
                <span className={styles.price}>{pkg.startingAt}</span>
                <span className={styles.timeline}>{pkg.timeline}</span>
            </div>
            <Card className={styles.card}>
                <p className={styles.desc}>{pkg.description}</p>
                <ul className={styles.featuresList}>
                    {pkg.features.map((feature) => (
                        <li key={feature} className={styles.featureItem}>{feature}</li>
                    ))}
                </ul>
            </Card>
        </section>
    );
}
