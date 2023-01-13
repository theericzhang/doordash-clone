import styled from "styled-components";

const CartItem__wrapper = styled.a`
    width: 100%;
    display: flex;
    border-bottom: 1px solid var(--primary-gray);
`;

export default function CartItem() {
    return (
        <CartItem__wrapper>
            ITEM GOES HERE
        </CartItem__wrapper>
    );
}