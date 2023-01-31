import Link from 'next/link';
import styled from 'styled-components';
import CheckoutButton from '../CheckoutButton/CheckoutButton';
import CartItem from '../CartItem/CartItem';
import CarrotRight from '../../Icons/CarrotRightIcon';
import TableOfFood from '../../SVGgraphics/TableOfFood';

import { restaurantList } from '../../datav2';

// redux global state
import { useAppSelector } from '../../../app-redux/hooks';

const CartOverviewWrapper = styled.aside<{ isInCartSheet: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.isInCartSheet ? '100%' : '340px')};
    border-left: 1px solid var(--primary-gray);
    position: ${(props) => (props.isInCartSheet ? 'relative' : 'fixed')};
    right: ${(props) => (props.isInCartSheet ? 'unset' : '0')};
    height: ${(props) => (props.isInCartSheet ? '100%' : 'calc(100% - 64px)')};
    box-shadow: ${(props) => (props.isInCartSheet ? 'rgb(0 0 0 / 20%) 0px 8px 24px;' : 'none')};
    /* padding-top: ${(props) => (props.isInCartSheet ? '72px' : '0')}; */
    overflow-y: scroll;
    background-color: var(--primary-white);

    @media screen and (max-width: 1185px) {
        // hide the component for now - it will show itself when the shopping cart button is triggered
        display: ${(props) => (props.isInCartSheet ? 'flex' : 'none')};
    }
`;

const CartOverviewCheckoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 18px;
    margin-bottom: 16px;
    row-gap: 17.5px;
`;

const CartOverviewCheckoutDescription = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
`;

const CartOverviewCheckoutHeader = styled.h6`
    font-size: 12px;
    font-weight: 500;
    color: var(--quinary-gray);
`;

const CartOverviewCheckoutLink = styled(Link)`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.5px;
    color: var(--primary-black);
    display: flex;
    align-items: center;
`;

const CartOverviewListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    width: 95.5%;
    border-top: 1px solid var(--primary-gray);
`;

const CartOverviewZeroItems = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 36px 0;
`;

const CartOverviewZeroItemsSpanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24.5px 0;
    row-gap: 1.5px;
`;

const CartOverviewZeroItemsSpan = styled.span`
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

type TCartOverview = {
  isInCartSheet: boolean;
  children?: JSX.Element;
};

export default function CartOverview({ isInCartSheet, children }: TCartOverview) {
    const numberofitems = useAppSelector((state) => state.cartSlice.cart[0]?.quantity);

    const restaurants = restaurantList;

    // consume store, get storeID
    const storeID = useAppSelector((state) => state.cartSlice.storeID) as keyof typeof restaurants;

    // consume store, get cart array
    const cart = useAppSelector((state) => state.cartSlice.cart);

    const arrayOfCartItems = cart.map((item) => (
        <CartItem
            imageSrc={restaurants[storeID].storefrontData.items[item.itemID].image.src}
            imageAlt={restaurants[storeID].storefrontData.items[item.itemID].image.alt}
            itemName={restaurants[storeID].storefrontData.items[item.itemID].itemName}
            price={restaurants[storeID].storefrontData.items[item.itemID].price}
            itemID={item.itemID}
            key={restaurants[storeID].storefrontData.items[item.itemID].image.src}
        />
    ));

    return (
        <CartOverviewWrapper isInCartSheet={isInCartSheet}>
            {children || null}
            {numberofitems > 0
                ? (
                    <>
                        <CartOverviewCheckoutWrapper>
                            <CartOverviewCheckoutDescription>
                                <CartOverviewCheckoutHeader>
                                    Your cart from
                                </CartOverviewCheckoutHeader>
                                <CartOverviewCheckoutLink
                                    href={`/store/${storeID}`}
                                >
                                    {restaurants[storeID].restaurantData.restaurantName}
                                    <CarrotRight />
                                </CartOverviewCheckoutLink>
                            </CartOverviewCheckoutDescription>
                            <CheckoutButton />
                        </CartOverviewCheckoutWrapper>
                        <CartOverviewListWrapper>
                            {arrayOfCartItems}
                        </CartOverviewListWrapper>
                    </>
                )
                : (
                    <CartOverviewZeroItems>
                        <TableOfFood />
                        <CartOverviewZeroItemsSpanWrapper>
                            <CartOverviewZeroItemsSpan>
                                Your cart is empty
                            </CartOverviewZeroItemsSpan>
                            <CartOverviewZeroItemsSpan>
                                Add items to get started
                            </CartOverviewZeroItemsSpan>
                        </CartOverviewZeroItemsSpanWrapper>
                    </CartOverviewZeroItems>
                )}

        </CartOverviewWrapper>
    );
}
