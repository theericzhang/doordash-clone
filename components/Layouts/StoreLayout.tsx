import styles from "../../styles/StoreLayout.module.css";
import styled from 'styled-components';

const StorePage = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
    width: calc(100% - 340px);
    left: 0;
    position: absolute;
`

type TStoreLayout = {
    children: JSX.Element[];
}

export default function StoreLayout({ children }: TStoreLayout) {
    
    const mainContent = children.slice(0, -1);
    return (
        <>
            <main className={styles.main}>
                <StorePage>
                    {mainContent}
                </StorePage>
                {/* NAV */}
                {children[children.length - 1]}
            </main>
        </>
    );
}