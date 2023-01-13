import styled from "styled-components";

const CheckoutButton__button = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: var(--secondary-red);
    border-radius: 20px;

    &:hover {
        background-color: var(--tertiary-red);
    }
`;

const CheckoutButton__text__wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
`;

const CheckoutButton__checkout__label = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-white);
`;

const CheckoutButton__price__label = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-white);
`;

export default function CheckoutButton() {
    return (
        <CheckoutButton__button>
            <CheckoutButton__text__wrapper>
                <CheckoutButton__checkout__label>Checkout</CheckoutButton__checkout__label>
                <CheckoutButton__price__label>$55.65</CheckoutButton__price__label>
            </CheckoutButton__text__wrapper>
        </CheckoutButton__button>
    );
}