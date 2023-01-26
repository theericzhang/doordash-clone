import styled from 'styled-components';
import { useAppDispatch } from '../../app-redux/hooks';
import { toggleIsOpenFromCartSheet } from '../../app-redux/features/cart/cartSlice';

const CartSheetBackgroundWrapper = styled.div<{ isStoreCartSheet?: boolean }>`
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
        // eslint-disable-next-line styled-components-a11y/no-noninteractive-element-interactions
        <CartSheetBackgroundWrapper
            onClick={() => { dispatch(toggleIsOpenFromCartSheet()); }}
            onKeyDown={(e) => {
                if (e.key === 'Escape') {
                    dispatch(toggleIsOpenFromCartSheet());
                }
            }}
            isStoreCartSheet={isStoreCartSheet}
            role="dialog"
            tabIndex={-1}
            aria-modal="true"
        />
    );
}
