import "../styles/globals.css";
import { GlobalStyles } from "../styles/GlobalStyles";
import type { AppProps } from "next/app";
import HomeLayout from "../components/Layouts/HomeLayout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <HomeLayout>
                <Component {...pageProps} />
            </HomeLayout>
        </>
    );
}
