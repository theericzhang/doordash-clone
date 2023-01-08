import Navbar from "../Navigation/Navbar";
import styles from "../../styles/Home.module.css";
import { GlobalStyles } from "../../styles/GlobalStyles";

export default function HomeLayout({ children }: any) {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            {children}
        </>
    )
}