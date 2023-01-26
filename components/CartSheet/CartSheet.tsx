import styled from "styled-components";
import CartOverview from "../StoreComponents/CartOverviewComponent/CartOverview";
import { useAppSelector, useAppDispatch } from "../../app-redux/hooks";
import { toggleIsOpenFromCartSheet } from "../../app-redux/features/cart/cartSlice";
import X from "../Icons/XIcon";
import CartSheet__background from "./CartSheet__background";

const CartSheet__wrapper = styled.aside<{ isOpenFromCartSheet: boolean; isStoreCartSheet?: boolean }>`
    display: flex;
    position: fixed;
    // width of the wrapper + box shadow = 340px + 24px
    right: ${props => props.isOpenFromCartSheet ? `0px` : `-370px`};
    top: 0px;
    pointer-events: ${props => props.isOpenFromCartSheet ? `all` : `none`};
    z-index: 4;
    background-color: var(--primary-white);
    height: 100%;
    width: 340px;
    transition: 0.225s right ease;

    @media screen and (min-width: 1185px) {
        display: ${props => props.isStoreCartSheet ? `none` : `flex`};
    }

    @media screen and (max-width: 1185px) {
        width: ${props => props.isStoreCartSheet && props.isOpenFromCartSheet && `50%`};
        right: ${props => props.isOpenFromCartSheet ? `0px` : `-53%`};
    }

    @media screen and (max-width: 770px) {
        /* display: ${props => props.isStoreCartSheet ? `flex`: `none`}; */
        display: flex;
        width: ${props => props.isStoreCartSheet && props.isOpenFromCartSheet && `375px`};
        right: ${props => props.isOpenFromCartSheet ? `0px` : `-394px`};
        /* right: ${props => props.isOpenFromCartSheet ? `0px` : `-100%`}; */
        pointer-events: all;
        /* pointer-events: ${props => !props.isOpenFromCartSheet ? `all` : `none`}; */
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        right: ${props => props.isOpenFromCartSheet ? `0px` : `-105%`};
    }
`;

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

    &:hover {
        cursor: pointer;
    }
`;

type TCartSheet = {
    isStoreCartSheet?: boolean;
}

export default function CartSheet({ isStoreCartSheet }: TCartSheet) {
    const isOpenFromCartSheet = useAppSelector((state) => state.cartSlice.isOpenFromCartSheet);
    const dispatch = useAppDispatch();

    return (
        <>
            {isOpenFromCartSheet ? <CartSheet__background /> : !!isStoreCartSheet ? <CartSheet__background isStoreCartSheet={isStoreCartSheet} /> : null}
            <CartSheet__wrapper
                isOpenFromCartSheet={!!isOpenFromCartSheet}
                isStoreCartSheet={!!isStoreCartSheet}
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