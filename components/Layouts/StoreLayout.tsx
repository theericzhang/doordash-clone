import styles from "../../styles/Home.module.css";

type TStoreLayout = {
    children: JSX.Element;
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