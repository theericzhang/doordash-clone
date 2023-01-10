type TStoreLayout = {
    children: JSX.Element;
}

export default function StoreLayout({ children }: TStoreLayout) {
    return (
        <>
            {children}
        </>
    );
}