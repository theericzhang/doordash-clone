import styled from "styled-components";
import CartOverview from "../StoreComponents/CartOverviewComponent/CartOverview";

const CartSheet__wrapper = styled.aside`
    display: flex;
    position: absolute;
    right: -100%;
    z-index: 3;
    background-color: var(--primary-white);
    height: 100%;
    width: 340px;
`

export default function CartSheet() {
    return (
        <CartSheet__wrapper>
            <CartOverview isInCartSheet={true} />
        </CartSheet__wrapper>
    );
}