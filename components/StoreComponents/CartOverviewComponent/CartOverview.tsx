import Link from "next/link";
import styled from "styled-components";

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
    padding: 0 17px;
    margin: 19px 0;
`;

const CartOverview__checkout__description = styled.div`
    display: flex;
    flex-direction: column;
`;

const CartOverview__checkout__header = styled.h6`
    font-size: 12px;
    font-weight: 500;
    color: var(--quinary-gray);
`;

const CartOverview__checkout__link = styled(Link)`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -3%;
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
                        L.O.L BBQ & BAR
                    </CartOverview__checkout__link>
                </CartOverview__checkout__description>
            </CartOverview__checkout__wrapper>
        </CartOverview__wrapper>
    );
}