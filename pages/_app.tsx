import "../styles/globals.css";
import { GlobalStyles } from "../styles/GlobalStyles";
import localFont from '@next/font/local';
import type { AppProps } from "next/app";
import Home from './index';
import Store from "./store/[slug]";
import Navbar from "../components/Navigation/Navbar";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../app-redux/store";
import CartSheet from "../components/CartSheet/CartSheet";

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
    useEffect(() => {
        console.log('%chttps://anericzhang.com', 'background: orange; font-size: 16px');
    }, []);
    return (
        <Provider store={store}>
            <div className={ttNormsFont.className}>
                <GlobalStyles />
                {
                    /**
                    * Check if the child component pages (Component prop) are either Home or Store. If they are,
                    * Render a <Navbar />
                    * */
                }
                {(Component === Home || Component === Store) ? <Navbar /> : null}
                <CartSheet />
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}
