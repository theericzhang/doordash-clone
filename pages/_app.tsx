import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from '../styles/GlobalStyles';
import Home from './index';
import Store from './store/[slug]';
import Navbar from '../components/Navigation/Navbar';
import { store } from '../app-redux/store';
import CartSheet from '../components/CartSheet/CartSheet';
import GithubBadge from '../components/GithubBadge/GithubBadge';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        console.log('%chttps://anericzhang.com', 'background: orange; font-size: 16px');
        // Prints: my website to the console
    }, []);

    const [restaurantData, setRestaurantData] = useState({});
    const [restaurantCarousels, setRestaurantCarouselsData] = useState({});

    // fetch restaurant data
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/api/hello');
                if (!res.ok) {
                    console.log(`fetch failed, error code ${res.status} - ${res.statusText}`);
                } else {
                    const data = await res.json();
                    // console.log(data);
                    setRestaurantData(data.restaurantListData);
                    setRestaurantCarouselsData(data.restaurantCarouselsData);
                    console.log(restaurantData, restaurantCarousels);
                }
            } catch (e) {
                console.error(e);
                console.log('fetch failed!');
            }
        }

        fetchData();
    }, []);

    return (
        <Provider store={store}>
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
        </Provider>
    );
}
