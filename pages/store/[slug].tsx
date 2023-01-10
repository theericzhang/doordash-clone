import StoreLayout from "../../components/Layouts/StoreLayout";
import { GetServerSidePropsContext } from "next";

type TServerSideProps = {
    storeID: string;
}

export default function Store({ storeID }: TServerSideProps) {
    console.log(storeID);
    return (
        <StoreLayout 
            storeID={storeID}
        />
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