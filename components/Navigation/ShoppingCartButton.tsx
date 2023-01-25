import styled from "styled-components";
import CartIcon from "../Icons/CartIcon";

import { useAppSelector, useAppDispatch } from "../../app-redux/hooks";
import { toggleIsOpenFromCartSheet } from "../../app-redux/features/cart/cartSlice";

const ShoppingCartButton__wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
    min-width: 68px;
    height: 32px;
    background-color: var(--secondary-red);
    transition: ease 0.15s;
    transition-property: background-color;
    border-radius: 17px;
    border: none;

    &:hover {
        background-color: var(--tertiary-red);
        transition: ease 0.15s;
        transition-property: background-color;
        cursor: pointer;
    }

    &:active {
        transition: 0.15s ease;
        transition-property: background-color;
        background-color: var(--quaternary-red);
    }
`;

const ShoppingCartButton__label = styled.h4`
    color: var(--primary-white);
    font-weight: 500;
    font-size: 14px;
`;

type TShoppingCartButton = {
    isShoppingCartToggleable: boolean;
}

export default function ShoppingCartButton({ isShoppingCartToggleable }: TShoppingCartButton) {
    
    // calculate total number of items in cart
    const cart = useAppSelector((state) => state.cartSlice.cart);
    let cartCount = 0;
    cart.forEach((item) => {
        cartCount += item.quantity;
    });

    const dispatch = useAppDispatch();
    
    return (
        <ShoppingCartButton__wrapper 
            onClick={() => {dispatch(toggleIsOpenFromCartSheet())}}
            disabled={!isShoppingCartToggleable}
        >
            <CartIcon />
            <ShoppingCartButton__label>
                {cartCount}
            </ShoppingCartButton__label>
        </ShoppingCartButton__wrapper>
    );
}