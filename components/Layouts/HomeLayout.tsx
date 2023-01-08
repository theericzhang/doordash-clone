import Navbar from "../Navigation/Navbar";
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