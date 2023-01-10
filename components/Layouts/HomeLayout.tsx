import FilterButtonRow from "../FilterButtonRow/FilterButtonRow"

export default function HomeLayout({ children }: any) {
    return (
        <>
            <FilterButtonRow />
            {children}
        </>
    )
}