import StoreLayout from "../../components/Layouts/StoreLayout";
import HeroComponent from "../../components/StoreComponents/HeroComponent/HeroComponent";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { restaurantList } from "../../components/datav2";
import { TRestaurantDataPrimary, TStorefrontData } from "../../global";
import CartOverview from "../../components/StoreComponents/CartOverviewComponent/CartOverview";

type TServerSideProps = {
    restaurant: {
        restaurantData: TRestaurantDataPrimary;
        storefrontData: TStorefrontData;
    };
};

export default function Store({ restaurant }: TServerSideProps) {
    return (
        <>
            <Head>
                <title>{restaurant.restaurantData.restaurantName}</title>
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
            <StoreLayout>
                <HeroComponent 
                    restaurantData={restaurant.restaurantData}
                    storefrontData={restaurant.storefrontData}
                />
                <CartOverview />
            </StoreLayout>
        </>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    // fetch data pertinent to store here
    // Always note that the last property ctx.params?.slug MUST be the same as the name [slug], without square brackets.
    const storeID = ctx.params?.slug;
    const restaurant =
        restaurantList[Number(storeID) as keyof typeof restaurantList];
    return {
        props: { restaurant },
    };
}
