import Head from 'next/head';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import HomeLayout from '../components/Layouts/HomeLayout';
import RestaurantCarousel from '../components/RestaurantCarousel/RestaurantCarousel';
import { restaurantCarousels } from '../components/datav2';

const RestaurantCarouselSection = styled.section`
    width: 100%;
`;

export default function Home() {
    const arrayOfCarousels = restaurantCarousels.map((carousel, index) => (
        <RestaurantCarousel
            carouselData={carousel}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
        />
    ));

    return (
        <>
            <Head>
                <title>DoorDash Food Delivery</title>
                <meta
                    name="DoorDash"
                    content="DoorDash Food Delivery - Delivering Now, From Restaurants Near You"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeLayout>
                <main className={styles.main}>
                    <RestaurantCarouselSection>
                        {arrayOfCarousels}
                    </RestaurantCarouselSection>
                </main>
            </HomeLayout>
        </>
    );
}
