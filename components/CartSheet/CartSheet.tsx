import styled from "styled-components";
import CartOverview from "../StoreComponents/CartOverviewComponent/CartOverview";
import { useAppSelector, useAppDispatch } from "../../app-redux/hooks";
import { toggleIsOpenFromCartSheet } from "../../app-redux/features/cart/cartSlice";

const CartSheet__wrapper = styled.aside<{ isOpenFromCartSheet: boolean }>`
    display: flex;
    position: absolute;
    // width of the wrapper + box shadow = 340px + 24px
    right: ${props => props.isOpenFromCartSheet ? `0px` : `-364px`};
    pointer-events: ${props => props.isOpenFromCartSheet ? `all` : `none`};
    z-index: 3;
    background-color: var(--primary-white);
    height: 100%;
    width: 340px;
    transition: 0.225s right ease;
`

export default function CartSheet() {
    const isOpenFromCartSheet = useAppSelector((state) => state.cartSlice.isOpenFromCartSheet);

    return (
        <CartSheet__wrapper isOpenFromCartSheet={!!isOpenFromCartSheet}>
            {/* Create an X button that triggers toggleIsOpenFromCartSheet */}
            <CartOverview isInCartSheet={true} />
        </CartSheet__wrapper>
    );
}