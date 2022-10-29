import styles from '../styles/Layout.module.css';

export default function NestedLayout({children}: any) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}