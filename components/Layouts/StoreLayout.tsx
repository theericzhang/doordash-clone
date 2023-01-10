type TStoreLayout = {
    children: JSX.Element;
    storeID: string;
}

export default function StoreLayout({ children, storeID }: TStoreLayout) {
    return (
        <>
            {storeID}
        </>
    );
}