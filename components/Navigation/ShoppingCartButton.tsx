import styled from "styled-components";
import CartIcon from "../Icons/CartIcon";

import { useAppSelector } from "../../app-redux/hooks";

const ShoppingCartButton__wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
    min-width: 68px;
    height: 32px;
    background-color: var(--secondary-red);
    transition: ease 0.1s;
    transition-property: background-color;
    border-radius: 17px;
    border: none;

    &:hover {
        background-color: var(--tertiary-red);
        transition: ease 0.1s;
        transition-property: background-color;
        cursor: pointer;
    }
`;

const ShoppingCartButton__label = styled.h4`
    color: var(--primary-white);
    font-weight: 500;
    font-size: 14px;
`;

export default function ShoppingCartButton() {
    
    // calculate total number of items in cart
    const cart = useAppSelector((state) => state.cartSlice.cart);
    let cartCount = 0;
    cart.forEach((item) => {
        cartCount += item.quantity;
    });
    
    return (
        <ShoppingCartButton__wrapper>
            <CartIcon />
            <ShoppingCartButton__label>
                {cartCount}
            </ShoppingCartButton__label>
        </ShoppingCartButton__wrapper>
    );
}