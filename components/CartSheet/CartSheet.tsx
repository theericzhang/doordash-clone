import styled from "styled-components";
import CartOverview from "../StoreComponents/CartOverviewComponent/CartOverview";
import { useAppSelector, useAppDispatch } from "../../app-redux/hooks";
import { toggleIsOpenFromCartSheet } from "../../app-redux/features/cart/cartSlice";
import X from "../Icons/XIcon";

const CartSheet__wrapper = styled.aside<{ isOpenFromCartSheet: boolean }>`
    display: flex;
    position: fixed;
    // width of the wrapper + box shadow = 340px + 24px
    right: ${props => props.isOpenFromCartSheet ? `0px` : `-364px`};
    top: 0px;
    pointer-events: ${props => props.isOpenFromCartSheet ? `all` : `none`};
    z-index: 3;
    background-color: var(--primary-white);
    height: 100%;
    width: 340px;
    transition: 0.225s right ease;
`;

const CartSheet__button_close = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 24px;
    border: none;
    background-color: transparent;
    margin: 24px 0;
    padding: 0 24px;
    // TODO: Position close button, then responsive styling.

    &:hover {
        cursor: pointer;
    }
`;

export default function CartSheet() {
    const isOpenFromCartSheet = useAppSelector((state) => state.cartSlice.isOpenFromCartSheet);
    const dispatch = useAppDispatch();

    return (
        <CartSheet__wrapper
            isOpenFromCartSheet={!!isOpenFromCartSheet}
            onBlur={() => {
                console.log("you just blurred me!!");
            }}
        >
            {/* Create an X button that triggers toggleIsOpenFromCartSheet */}
            
            <CartOverview isInCartSheet={true}>
                <CartSheet__button_close
                    onClick={() => dispatch(toggleIsOpenFromCartSheet())}
                >
                    <X />
                </CartSheet__button_close>
            </CartOverview>
        </CartSheet__wrapper>
    );
}