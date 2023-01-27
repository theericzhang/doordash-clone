import FilterButtonRow from '../FilterButtonRow/FilterButtonRow';

type THomeLayout = {
    children: JSX.Element;
};

export default function HomeLayout({ children }: THomeLayout) {
    return (
        <>
            <FilterButtonRow />
            {children}
        </>
    );
}
