    import styles from '../styles/layout.module.css';

export default function NestedLayout({children}: any) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}