import Link from "next/link";
import styled from "styled-components";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

const CartOverview__wrapper = styled.aside`
    display: flex;
    flex-direction: column;
    width: 340px;
    border-left: 1px solid var(--primary-gray);
    position: fixed;
    right: 0;
    height: 100%;
    overflow-y: scroll;
`;

const CartOverview__checkout__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 18px 0;
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
`;

export default function CartOverview() {
    return (
        <CartOverview__wrapper>
            { /*TODO: Continue working on CartOverview checkout button */}
            <CartOverview__checkout__wrapper>
                <CartOverview__checkout__description>
                    <CartOverview__checkout__header>
                        Your cart from
                    </CartOverview__checkout__header>
                    <CartOverview__checkout__link
                        href='https://www.google.com'
                    >
                        Cholita Linda
                    </CartOverview__checkout__link>
                </CartOverview__checkout__description>
                <CheckoutButton />
            </CartOverview__checkout__wrapper>
        </CartOverview__wrapper>
    );
}