import styled from 'styled-components';
import React from 'react';
import styles from '../../styles/StoreLayout.module.css';
import ItemOverlay from '../StoreComponents/ItemOverlay/ItemOverlay';

const StorePage = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
    width: calc(100% - 340px);
    left: 0;
    position: absolute;
    row-gap: 22px;

    @media screen and (max-width: 1185px) {
        width: 100%;
    }
`;

const StorePageDivider = styled.hr`
    width: 928px;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid var(--primary-gray);

    @media screen and (max-width: 1300px) {
        margin: 0 16px;
        max-width: calc(100% - 32px);
        width: 100%;
    }

    @media screen and (max-width: 1185px) {
        margin: 0;
        width: calc(928px);
    }
`;

type TStoreLayout = {
    children: JSX.Element[];
};

export default function StoreLayout({ children }: TStoreLayout) {
    const mainContent = children.slice(0, -1);
    return (
        <>
            <ItemOverlay />
            <main className={styles.main}>
                <StorePage>
                    {/* {eslint-disable-next-line arrow-body-style} */}
                    {mainContent.map((child, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <React.Fragment key={index}>
                            {child}
                            {index !== mainContent.length - 1 ? <StorePageDivider /> : null}
                        </React.Fragment>
                    ))}
                </StorePage>
                {/* NAV */}
                {children[children.length - 1]}
            </main>
        </>
    );
}
