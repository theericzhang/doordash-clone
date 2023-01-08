import Navbar from "../Navigation/Navbar";

export default function HomeLayout({ children }: any) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}