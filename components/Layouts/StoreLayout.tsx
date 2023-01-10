import HeroComponent from "../StoreComponents/HeroComponent/HeroComponent";

type TStoreLayout = {
    storeID: string;
}

export default function StoreLayout({ storeID }: TStoreLayout) {
    return (
        <>
            <HeroComponent />
            {storeID}
        </>
    );
}