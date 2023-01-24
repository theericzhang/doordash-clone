import Link from "next/link";
import styled from "styled-components";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import CartItem from "../CartItem/CartItem";
import CarrotRight from "../../Icons/CarrotRightIcon";
import TableOfFood from "../../SVGgraphics/TableOfFood";

import { restaurantList } from "../../datav2";

// redux global state
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { resetCartNewStore } from "../../../app-redux/features/cart/cartSlice";

const CartOverview__wrapper = styled.aside<{isInCartSheet: boolean}>`
    display: flex;
    flex-direction: column;
    width: 340px;
    border-left: 1px solid var(--primary-gray);
    position: fixed;
    right: 0;
    height: ${props => props.isInCartSheet ? `100%` : `calc(100% - 64px)`};
    overflow-y: scroll;
    background-color: var(--primary-white);

    @media screen and (max-width: 1185px) {
        // hide the component for now - it will show itself when the shopping cart button is triggered
        display: ${props => props.isInCartSheet ? `flex` : `none`};
    }
`;

const CartOverview__checkout__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 18px;
    margin-bottom: 16px;
    row-gap: 17.5px;
`;

const CartOverview__checkout__description = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
`;

const CartOverview__checkout__header = styled.h6`
    font-size: 12px;
    font-weight: 500;
    color: var(--quinary-gray);
`;

const CartOverview__checkout__link = styled(Link)`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.5px;
    color: var(--primary-black);
    display: flex;
    align-items: center;
`;

const CartOverview__list__wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    width: 95.5%;
    border-top: 1px solid var(--primary-gray);
`;

const CartOverview__zeroItems = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 36px 0;
`;

const CartOverview__zeroItems__span__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24.5px 0;
    row-gap: 1.5px;
`;

const CartOverview__zeroItems__span = styled.span`
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

type TCartOverview = {
    isInCartSheet: boolean;
}

export default function CartOverview({ isInCartSheet }: TCartOverview) {
    const numberofitems = useAppSelector((state) => state.cartSlice.cart[0]?.quantity);
    console.log(numberofitems);
    
    const restaurants = restaurantList;

    // consume store, get storeID
    const storeID = useAppSelector((state) => state.cartSlice.storeID) as keyof typeof restaurants;

    // consume store, get cart array
    const cart = useAppSelector((state) => state.cartSlice.cart);
    
    const arrayOfCartItems = cart.map((item) => {
        return (
            <CartItem 
                imageSrc={restaurants[storeID].storefrontData.items[item.itemID].image.src}
                imageAlt={restaurants[storeID].storefrontData.items[item.itemID].image.alt}
                itemName={restaurants[storeID].storefrontData.items[item.itemID].itemName}
                price={restaurants[storeID].storefrontData.items[item.itemID].price}
                quantity={item.quantity}
                itemID={item.itemID}
                key={restaurants[storeID].storefrontData.items[item.itemID].image.src}
            />
        )
    })
    
    return (
        <CartOverview__wrapper isInCartSheet={isInCartSheet}>
            {numberofitems > 0 ?
                <>
                    <CartOverview__checkout__wrapper>
                        <CartOverview__checkout__description>
                            <CartOverview__checkout__header>
                                Your cart from
                            </CartOverview__checkout__header>
                            <CartOverview__checkout__link
                                href={`/store/${storeID}`}
                            >
                                {restaurants[storeID].restaurantData.restaurantName}
                                <CarrotRight />
                            </CartOverview__checkout__link>
                        </CartOverview__checkout__description>
                        <CheckoutButton />
                    </CartOverview__checkout__wrapper>
                    <CartOverview__list__wrapper>
                        {arrayOfCartItems}
                    </CartOverview__list__wrapper>
                </>
            :
                <CartOverview__zeroItems>
                    <TableOfFood />
                    <CartOverview__zeroItems__span__wrapper>
                        <CartOverview__zeroItems__span>Your cart is empty</CartOverview__zeroItems__span>
                        <CartOverview__zeroItems__span>Add items to get started</CartOverview__zeroItems__span>
                    </CartOverview__zeroItems__span__wrapper>
                </CartOverview__zeroItems>
            }
            
            
        </CartOverview__wrapper>
    );
}