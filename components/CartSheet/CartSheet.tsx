import styled from "styled-components";
import CartOverview from "../StoreComponents/CartOverviewComponent/CartOverview";
import { toggleIsOpenFromCartSheet } from "../../app-redux/features/cart/cartSlice";

const CartSheet__wrapper = styled.aside`
    display: flex;
    position: absolute;
    // width of the wrapper + box shadow = 340px + 24px
    right: -364px;
    z-index: 3;
    background-color: var(--primary-white);
    height: 100%;
    width: 340px;
`

export default function CartSheet() {
    return (
        <CartSheet__wrapper>
            {/* Create an X button that triggers toggleIsOpenFromCartSheet */}
            <CartOverview isInCartSheet={true} />
        </CartSheet__wrapper>
    );
}