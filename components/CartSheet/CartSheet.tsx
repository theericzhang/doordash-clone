import styled from "styled-components";
import CartOverview from "../StoreComponents/CartOverviewComponent/CartOverview";

const CartSheet__wrapper = styled.aside`
    display: flex;
    position: absolute;
    right: -100%;
`

export default function CartSheet() {
    return (
        <CartSheet__wrapper>
            <CartOverview isInCartSheet={true} />
        </CartSheet__wrapper>
    );
}