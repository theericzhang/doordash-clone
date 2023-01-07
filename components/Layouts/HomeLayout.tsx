import Navbar from "../Navigation/Navbar";
import styles from "../../styles/Home.module.css";

export default function HomeLayout({ children }: any) {
    return (
        <>
            <Navbar />
            <main className={styles.main}>{children}</main>
        </>
    )
}