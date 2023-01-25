import styled from "styled-components";
import { useAppDispatch } from "../../app-redux/hooks";
import { toggleIsOpenFromCartSheet } from "../../app-redux/features/cart/cartSlice";

const CartSheet__Background = styled.div<{ isStoreCartSheet?: boolean }>`
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    z-index: 3;
    position: fixed;

    @media screen and (max-width: 1185px) {
        display: ${props => props.isStoreCartSheet ? `none` : `flex`}
    }
`;

type TCartSheet__background = {
    isStoreCartSheet?: boolean;
}

export default function CartSheet__background({ isStoreCartSheet }: TCartSheet__background) {
    const dispatch = useAppDispatch();

    return (
        <CartSheet__Background 
            onClick={() => {dispatch(toggleIsOpenFromCartSheet())}}
            isStoreCartSheet={isStoreCartSheet}
        />
    );
}