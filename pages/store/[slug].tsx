import StoreLayout from "../../components/Layouts/StoreLayout";
import HeroComponent from "../../components/StoreComponents/HeroComponent/HeroComponent";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

type TServerSideProps = {
    storeID: string;
}

export default function Store({ storeID }: TServerSideProps) {
    console.log(storeID);
    return (
        <>
            <Head>
                <title>Nari Thai</title>
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
                <HeroComponent />
            </StoreLayout>
        </>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    // fetch data pertinent to store here
    // Always note that the last property ctx.params?.slug MUST be the same as the name [slug], without square brackets.
    const storeID = ctx.params?.slug;
    return {
        props: { storeID }
    }
}