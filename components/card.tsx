import styles from "../styles/card.module.css";

export default function Card({titel}: { titel: string }) {
    return (
        <div className={styles.card}>
            {titel}
        </div>
    );
}