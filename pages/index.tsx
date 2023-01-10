import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import HomeLayout from "../components/Layouts/HomeLayout";
import RestaurantCarousel from "../components/RestaurantCarousel/RestaurantCarousel";
import data from "../components/data";

const RestaurantCarouselSection = styled.section`
    width: 100%;
`;

export default function Home() {
    
    const carouselData = data();
    const arrayOfCarousels = carouselData.map((data, index) => {
        return (
            <RestaurantCarousel 
                carouselData={data}
                key={index}
            />
        );
    });
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
