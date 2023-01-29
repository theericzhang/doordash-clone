import '../styles/globals.css';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from '../styles/GlobalStyles';
import Home from './index';
import Store from './store/[slug]';
import Navbar from '../components/Navigation/Navbar';
import { store } from '../app-redux/store';
import CartSheet from '../components/CartSheet/CartSheet';
import GithubBadge from '../components/GithubBadge/GithubBadge';

const ttNormsFont = localFont({
    src: [
        {
            path: '../public/fonts/TTNorms/TTNorms-ExtraBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/TTNorms/TTNorms-Bold.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/TTNorms/TTNorms-Medium.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/TTNorms/TTNorms-Regular.woff2',
            weight: '300',
            style: 'normal',
        },
    ]
});

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        console.log('%chttps://anericzhang.com', 'background: orange; font-size: 16px');
        // Prints: my website to the console
    }, []);

    return (
        <Provider store={store}>
            <div className={ttNormsFont.className}>
                <GlobalStyles />
                {/**
                 * Check if the child component pages (Component prop) are either Home or Store.
                 * If they are, render a <Navbar />
                 * */}
                {Component === Home || Component === Store ? (
                    Component !== Store ? (
                        <Navbar isShoppingCartToggleable />
                    ) : (
                        <Navbar isShoppingCartToggleable={false} />
                    )
                ) : null}
                {/* {(Component !== Store) ? <CartSheet /> : null} */}
                {/* Consider passing a cartSheet with property isStoreCartSheet for
                Component === store? So we can use this boolean to hide/show the cart sheet */}
                {Component === Home ? (
                    <CartSheet />
                ) : Component === Store ? (
                    <CartSheet isStoreCartSheet />
                ) : null}
                <Component {...pageProps} />
                <GithubBadge />
            </div>
        </Provider>
    );
}
