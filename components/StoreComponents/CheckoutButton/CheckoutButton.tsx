import styled from 'styled-components';

import { useAppSelector } from '../../../app-redux/hooks';

const CheckoutButtonWrapper = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: var(--secondary-red);
    border-radius: 20px;
    transition: ease 0.15s;
    transition-property: background-color;

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

const CheckoutButtonTextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
`;

const CheckoutButtonCheckoutLabel = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-white);
`;

const CheckoutButtonPriceLabel = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-white);
`;

export default function CheckoutButton() {
    const cartTotalValue = useAppSelector((state) => state.cartSlice.totalValue);
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <CheckoutButtonWrapper>
            <CheckoutButtonTextWrapper>
                <CheckoutButtonCheckoutLabel>Checkout</CheckoutButtonCheckoutLabel>
                <CheckoutButtonPriceLabel>{priceFormatter.format(cartTotalValue)}</CheckoutButtonPriceLabel>
            </CheckoutButtonTextWrapper>
        </CheckoutButtonWrapper>
    );
}
