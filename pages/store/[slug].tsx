import StoreLayout from "../../components/Layouts/StoreLayout";
import HeroComponent from "../../components/StoreComponents/HeroComponent/HeroComponent";
import { GetServerSidePropsContext } from "next";

type TServerSideProps = {
    storeID: string;
}

export default function Store({ storeID }: TServerSideProps) {
    console.log(storeID);
    return (
        <StoreLayout 
            storeID={storeID}
        >
            <HeroComponent />
        </StoreLayout>
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