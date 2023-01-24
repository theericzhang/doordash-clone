import styled from "styled-components";
import MenuItem from "../MenuItem/MenuItem";
import { Fragment, useContext } from "react";
import { StoreItemsContext } from "../../../pages/store/[slug]";

const MenuSection__section = styled.section`
    display: flex;
    flex-direction: column;
`;

const MenuSection__header__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3.5px;

    @media screen and (max-width: 770px) {
        padding: 0 16px;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

// reserved for larger headers, like feature items section
const MenuSection__header__large = styled.h2`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.6px;
    color: var(--primary-black);
`;

const MenuSection__header = styled.h2`
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.7px;
    color: var(--primary-black);
`;

const MenuSection__subheader = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const MenuSection__items__wrapper = styled.div`
    display: flex;
    column-gap: 14px;
    row-gap: 16px;
    flex-wrap: wrap;
    width: 100%;
    margin: 18px 0;
    overflow: hidden;

    @media screen and (max-width: 1300px) {
        justify-content: space-between;
        column-gap: unset;
    }

    @media screen and (max-width: 770px) {
        padding: 0 18px;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

const MenuSection__items__divider = styled.hr`
    display: none;

    @media screen and (max-width: 770px) {
        display: block;
        width: 100%;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid var(--primary-gray);
    }
`

export default function MenuSection() {
    const restaurantMenu = useContext(StoreItemsContext);
    
    return (
        <MenuSection__section>
            <MenuSection__header__wrapper>
                <MenuSection__header>
                    Popular Items
                </MenuSection__header>
                <MenuSection__subheader>
                    The most commonly ordered items and dishes from this store
                </MenuSection__subheader>
            </MenuSection__header__wrapper>
            <MenuSection__items__wrapper>
                {restaurantMenu?.map((item, index) => {
                    return (
                        <Fragment key={item.itemName}>
                            <MenuItem
                                itemID={index}
                                image={item.image}
                                itemName={item.itemName}
                                price={item.price}
                                description={item.description}
                                ratingCount={item.ratingCount}
                                ratingPercentage={item.ratingPercentage}
                                lastOrdered={item?.lastOrdered}
                            />
                            <MenuSection__items__divider />
                        </Fragment>
                    )
                })}
            </MenuSection__items__wrapper>
        </MenuSection__section>
    );
}
