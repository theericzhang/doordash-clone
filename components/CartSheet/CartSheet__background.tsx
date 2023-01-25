import styled from "styled-components";
import { useAppDispatch } from "../../app-redux/hooks";
import { toggleIsOpenFromCartSheet } from "../../app-redux/features/cart/cartSlice";

const CartSheet__Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    z-index: 3;
    position: fixed;
`;

export default function CartSheet__background() {
    const dispatch = useAppDispatch();

    return (
        <CartSheet__Background onClick={() => {dispatch(toggleIsOpenFromCartSheet())}}/>
    );
}