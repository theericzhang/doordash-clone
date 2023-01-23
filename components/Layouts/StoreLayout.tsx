import styles from "../../styles/StoreLayout.module.css";
import styled from 'styled-components';
import React from "react";
import ItemOverlay from "../StoreComponents/ItemOverlay/ItemOverlay";

const StorePage = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
    width: calc(100% - 340px);
    left: 0;
    position: absolute;
    row-gap: 22px;
`;

const StorePage__divider = styled.hr`
    width: 928px;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid var(--primary-gray);

    @media screen and (max-width: 1300px) {
        margin: 0 16px;
        max-width: calc(100% - 32px);
        width: 100%;
    }
`;

type TStoreLayout = {
    children: JSX.Element[];
}

export default function StoreLayout({ children }: TStoreLayout) {
    
    const mainContent = children.slice(0, -1);
    return (
        <>
            <ItemOverlay />
            <main className={styles.main}>
                <StorePage>
                    {mainContent.map((child, index) => {
                        if (index !== mainContent.length -1) {
                            return (
                                <React.Fragment key={index}>
                                    {child}
                                    <StorePage__divider />
                                </React.Fragment>
                            );
                        } else if (index === mainContent.length - 1) {
                            return (
                                <React.Fragment key={index}>
                                    {child}
                                </React.Fragment>
                            );
                        }
                    })}
                </StorePage>
                {/* NAV */}
                {children[children.length - 1]}
            </main>
        </>
    );
}