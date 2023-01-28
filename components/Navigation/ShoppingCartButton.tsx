import styled from 'styled-components';
import CartIcon from '../Icons/CartIcon';

import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { toggleIsOpenFromCartSheet } from '../../app-redux/features/cart/cartSlice';

const ShoppingCartButtonWrapper = styled.button<{ isShoppingCartToggleable?: boolean }>`
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

    @media screen and (min-width: 1185px) {
        pointer-events: ${(props) => (props.isShoppingCartToggleable ? 'all' : 'none')};
    }
`;

const ShoppingCartButtonLabel = styled.h4`
    color: var(--primary-white);
    font-weight: 500;
    font-size: 14px;
`;

type TShoppingCartButton = {
    isShoppingCartToggleable: boolean;
};

export default function ShoppingCartButton({ isShoppingCartToggleable }: TShoppingCartButton) {
    // calculate total number of items in cart
    const cart = useAppSelector((state) => state.cartSlice.cart);
    let cartCount = 0;
    cart.forEach((item) => {
        cartCount += item.quantity;
    });

    const dispatch = useAppDispatch();

    return (
        <ShoppingCartButtonWrapper
            onClick={() => { dispatch(toggleIsOpenFromCartSheet()); }}
            isShoppingCartToggleable={isShoppingCartToggleable}
            aria-label={`Shopping cart, ${cartCount} items`}
        >
            <CartIcon />
            <ShoppingCartButtonLabel>
                {cartCount}
            </ShoppingCartButtonLabel>
        </ShoppingCartButtonWrapper>
    );
}
