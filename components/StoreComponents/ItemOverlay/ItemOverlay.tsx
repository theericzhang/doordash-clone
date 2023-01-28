/* eslint-disable styled-components-a11y/no-noninteractive-element-interactions */
import styled from 'styled-components';
import { Transition, TransitionStatus } from 'react-transition-group';
import React, { useCallback, useEffect, useRef } from 'react';
import FocusTrap from 'focus-trap-react';
import { useAppSelector, useAppDispatch } from '../../../app-redux/hooks';
import { setIsModalOpenFalse, toggleIsModalOpen } from '../../../app-redux/features/item/itemSlice';
import ItemCustomizationPanel from './ItemCustomizationPanel/ItemCustomizationPanel';

interface ItemModalWrapperProps {
    state: TransitionStatus;
    isModalOpen: boolean;
}

const ItemModalWrapper = styled.dialog<ItemModalWrapperProps>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--primary-black-transparency-75);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    opacity: ${(props) => (props.state === 'entering'
        ?
        0 : props.state === 'entered'
            ?
            1 : props.state === 'exiting'
                ? 0
                : 0)};
    transition: opacity 225ms ease;

    @media screen and (max-width: 770px) {
        padding: 0 16px;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

export default function ItemModal() {
    const isModalOpen = useAppSelector((state) => state.itemSlice.isModalOpen);
    const dispatch = useAppDispatch();
    const nodeRef = useRef(null);

    const keyDownHandler = useCallback((e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            dispatch(setIsModalOpenFalse());
        }
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('keydown', keyDownHandler as any);
        return () => {
            window.removeEventListener('keydown', keyDownHandler as any);
        };
    }, [keyDownHandler]);

    return (
        <Transition
            nodeRef={nodeRef}
            in={isModalOpen}
            timeout={225}
            unmountOnExit
        >
            {(state) => (
                <FocusTrap>
                    <ItemModalWrapper
                        state={state}
                        isModalOpen={isModalOpen}
                        onClick={() => dispatch(toggleIsModalOpen())}
                        onKeyDown={(e) => keyDownHandler(e as React.KeyboardEvent<HTMLDialogElement>)}
                        ref={nodeRef}
                    >
                        <ItemCustomizationPanel
                            state={state}
                            isModalOpen={isModalOpen}
                        />
                    </ItemModalWrapper>
                </FocusTrap>
            )}
        </Transition>
    );
}
