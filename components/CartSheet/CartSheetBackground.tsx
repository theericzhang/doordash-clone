import styled from 'styled-components';
import { useAppDispatch } from '../../app-redux/hooks';
import { toggleIsOpenFromCartSheet } from '../../app-redux/features/cart/cartSlice';

const CartSheet__Background = styled.div<{ isStoreCartSheet?: boolean }>`
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.isStoreCartSheet ? 'none' : 'flex')};

    @media screen and (max-width: 1185px) {
        
    }
`;

type TCartSheetBackground = {
    isStoreCartSheet?: boolean;
};

export default function CartSheetBackground({ isStoreCartSheet }: TCartSheetBackground) {
    const dispatch = useAppDispatch();

    return (
        <CartSheet__Background
            onClick={() => { dispatch(toggleIsOpenFromCartSheet()); }}
            isStoreCartSheet={isStoreCartSheet}
        />
    );
}
