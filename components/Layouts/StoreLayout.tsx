import styles from "../../styles/StoreLayout.module.css";

type TStoreLayout = {
    children: JSX.Element | JSX.Element[];
}

export default function StoreLayout({ children }: TStoreLayout) {
    return (
        <>
            <main className={styles.main}>
                {children}
            </main>
        </>
    );
}