import styled from 'styled-components';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../app-redux/hooks';
import { setFalseIsOpenFromCartSheet, toggleIsOpenFromCartSheet } from '../../app-redux/features/cart/cartSlice';

const CartSheetBackgroundWrapper = styled.dialog<{ isStoreCartSheet?: boolean }>`
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    border: none;
    display: ${(props) => (props.isStoreCartSheet ? 'none' : 'flex')};

    @media screen and (max-width: 1185px) {
        
    }
`;

type TCartSheetBackground = {
    isStoreCartSheet?: boolean;
};

export default function CartSheetBackground({ isStoreCartSheet }: TCartSheetBackground) {
    const dispatch = useAppDispatch();

    // function keyDownHandler(e: KeyboardEvent<HTMLDialogElement>) {
    //     if (e.key === 'Escape') {
    //         dispatch(setFalseIsOpenFromCartSheet());
    //     }
    // }

    const keyDownHandler = useCallback((e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            dispatch(setFalseIsOpenFromCartSheet());
        }
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('keydown', keyDownHandler as any);
        return () => {
            window.removeEventListener('keydown', keyDownHandler as any);
        };
    }, [keyDownHandler]);

    return (
        // eslint-disable-next-line styled-components-a11y/no-noninteractive-element-interactions
        <CartSheetBackgroundWrapper
            onClick={() => { dispatch(toggleIsOpenFromCartSheet()); }}
            onKeyDown={keyDownHandler}
            isStoreCartSheet={isStoreCartSheet}
            aria-modal="true"
        />
    );
}
