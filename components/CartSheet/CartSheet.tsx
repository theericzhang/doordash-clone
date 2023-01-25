import styled from "styled-components";
import CartOverview from "../StoreComponents/CartOverviewComponent/CartOverview";
import { useAppSelector, useAppDispatch } from "../../app-redux/hooks";
import { toggleIsOpenFromCartSheet } from "../../app-redux/features/cart/cartSlice";
import X from "../Icons/XIcon";
import CartSheet__background from "./CartSheet__background";

const CartSheet__wrapper = styled.aside<{ isOpenFromCartSheet: boolean }>`
    display: flex;
    position: fixed;
    // width of the wrapper + box shadow = 340px + 24px
    right: ${props => props.isOpenFromCartSheet ? `0px` : `-364px`};
    top: 0px;
    pointer-events: ${props => props.isOpenFromCartSheet ? `all` : `none`};
    z-index: 4;
    background-color: var(--primary-white);
    height: 100%;
    width: 340px;
    transition: 0.225s right ease;

    @media screen and (min-width: 1185px) {
        display: none;
    }

    @media screen and (max-width: 770px) {
        right: ${props => !props.isOpenFromCartSheet ? `0px` : `-364px`};
        pointer-events: ${props => !props.isOpenFromCartSheet ? `all` : `none`};
    }
`;

/**
 * TODO: FIGURE OUT HOW TO ENABLE CARTSHEET ON STORE PAGE WHEN VIEWPORT WIDTH IS LESS THAN 1185px.
 * TODO: KEEP BUTTON -SHOPPINGCARTBUTTON- THAT TOGGLES STATE (COMPLETELY ENABLED) ON HOME PAGE
 * TODO: DISABLE THE SAME BUTTON WHEN ON STORE PAGE, BUT ENABLE IT WHEN VIEWPORT WIDTH IS LESS THAN 1185px. 
 * TODO: TRY NOT TO USE COSTLY EVENT LISTENERS LIKE RESIZE EVENTS
 */

const CartSheet__button_close = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 30px;
    border: none;
    background-color: transparent;
    margin: 18px 0;
    padding: 18px 0;
    // TODO: Position close button, then responsive styling.

    &:hover {
        cursor: pointer;
    }
`;

export default function CartSheet() {
    const isOpenFromCartSheet = useAppSelector((state) => state.cartSlice.isOpenFromCartSheet);
    const dispatch = useAppDispatch();

    return (
        <>
            {isOpenFromCartSheet ? <CartSheet__background /> : null}
            <CartSheet__wrapper
                isOpenFromCartSheet={!!isOpenFromCartSheet}
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
        </>
    );
}