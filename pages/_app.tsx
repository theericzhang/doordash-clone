import "../styles/globals.css";
import { GlobalStyles } from "../styles/GlobalStyles";
import localFont from '@next/font/local';
import type { AppProps } from "next/app";
import HomeLayout from "../components/Layouts/HomeLayout";

const ttNormsFont = localFont({
    src: [
        {
            path:'../public/fonts/TTNorms/TTNorms-Heavy.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path:'../public/fonts/TTNorms/TTNorms-Black.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path:'../public/fonts/TTNorms/TTNorms-ExtraBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path:'../public/fonts/TTNorms/TTNorms-Bold.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path:'../public/fonts/TTNorms/TTNorms-Medium.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path:'../public/fonts/TTNorms/TTNorms-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path:'../public/fonts/TTNorms/TTNorms-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path:'../public/fonts/TTNorms/TTNorms-Thin.woff2',
            weight: '100',
            style: 'normal',
        }
    ]
})

export default function App({ Component, pageProps }: AppProps) {
    console.log('%c https://anericzhang.com', 'font-weight: bold; font-size: 50px; color: orange;');
    return (
        <div className={ttNormsFont.className}>
            <GlobalStyles />
            <HomeLayout>
                <Component {...pageProps} />
            </HomeLayout>
        </div>
    );
}
