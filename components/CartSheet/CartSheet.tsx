import styled from 'styled-components';
import FocusTrap from 'focus-trap-react';
import { useRef } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import CartOverview from '../StoreComponents/CartOverviewComponent/CartOverview';
import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { toggleIsOpenFromCartSheet } from '../../app-redux/features/cart/cartSlice';
import X from '../Icons/XIcon';
import CartSheetBackground from './CartSheetBackground';

const CartSheetWrapper = styled.aside<ICartSheetWrapper>`
    display: flex;
    position: fixed;
    // width of the wrapper + box shadow = 340px + 24px ≈ 370px
    right: ${(props) => (props.state === 'entered' ? '0px' : '-370px')};
    top: 0px;
    pointer-events: ${(props) => (props.state === 'entered' ? 'all' : 'none')};
    z-index: 4;
    background-color: var(--primary-white);
    height: 100%;
    width: 340px;
    transition: 0.225s right ease;

    @media screen and (min-width: 1185px) {
        display: ${(props) => (props.isStoreCartSheet ? 'none' : 'flex')};
    }

    @media screen and (max-width: 1185px) {
        width: ${(props) => props.isStoreCartSheet && props.isOpenFromCartSheet && '50%'};
        /* width: ${(props) => (props.isOpenFromCartSheet ? props.isStoreCartSheet ? '50%' : 'inherit' : 'inherit')}; */
        /* right: ${(props) => (props.isOpenFromCartSheet ? '0px' : '-53%')}; */
        /* inverse logic to determine the position if it's CLOSED, then if it's store or home cart */
        right: ${(props) => (!(props.state === 'entered') ? props.isStoreCartSheet ? '-50vw' : '-370px' : '0px')};
    }

    @media screen and (max-width: 770px) {
        display: flex;
        width: ${(props) => props.isStoreCartSheet && props.isOpenFromCartSheet && '375px'};
        right: ${(props) => (props.state === 'entered' ? '0px' : '-394px')};
        pointer-events: all;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        right: ${(props) => (props.state === 'entered' ? '0px' : '-105%')};
    }
`;

const CartSheetButtonClose = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 30px;
    border: none;
    background-color: transparent;
    margin: 18px 0;
    padding: 18px 0;
    color: inherit;

    &:hover {
        cursor: pointer;
    }

    &:visited {
        color: inherit;
    }
`;

interface ICartSheetWrapper {
    state: TransitionStatus;
    isOpenFromCartSheet: boolean;
    isStoreCartSheet?: boolean;
}

type TCartSheet = {
    isStoreCartSheet?: boolean;
};

export default function CartSheet({ isStoreCartSheet }: TCartSheet) {
    const isOpenFromCartSheet = useAppSelector((state) => state.cartSlice.isOpenFromCartSheet);
    const dispatch = useAppDispatch();
    const nodeRef = useRef(null);

    return (
        <Transition
            nodeRef={nodeRef}
            in={isOpenFromCartSheet}
            timeout={225}
            unmountOnExit
        >
            {(state) => (
                <FocusTrap>
                    <div role="dialog">
                        {isOpenFromCartSheet ?
                            <CartSheetBackground /> : isStoreCartSheet ?
                                <CartSheetBackground isStoreCartSheet={isStoreCartSheet} /> : null}
                        {/* TODO: Look into how to use dynamic props to set for the wrapper. */}
                        <CartSheetWrapper
                            state={state}
                            isOpenFromCartSheet={!!isOpenFromCartSheet}
                            isStoreCartSheet={!!isStoreCartSheet}
                            aria-hidden={!isOpenFromCartSheet}
                            ref={nodeRef}
                        >
                            <CartOverview isInCartSheet>
                                <CartSheetButtonClose
                                    onClick={() => dispatch(toggleIsOpenFromCartSheet())}
                                    aria-label="Close cart"
                                    aria-hidden={!isOpenFromCartSheet}
                                    tabIndex={isOpenFromCartSheet ? 0 : -1}
                                >
                                    <X />
                                </CartSheetButtonClose>
                            </CartOverview>
                        </CartSheetWrapper>
                    </div>
                </FocusTrap>
            )}
        </Transition>
    );
}
