import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../../app-redux/hooks";
import { toggleIsModalOpen } from "../../../app-redux/features/item/itemSlice";
import ItemCustomizationPanel from "./ItemCustomizationPanel/ItemCustomizationPanel";

import { Transition, TransitionStatus } from "react-transition-group";
import { useRef } from "react";

interface ItemModalWrapperProps {
    state: TransitionStatus;
    isModalOpen: boolean;
}

const ItemModal__wrapper = styled.section<ItemModalWrapperProps>`
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
    opacity: ${(props) => 
    (props.state === "entering" 
    ?
        0 : props.state === "entered" 
        ? 
            1 : props.state ==="exiting" 
            ? 0 
            : 0)};
    transition: opacity 300ms ease;
`;

export default function ItemModal() {
    const isModalOpen = useAppSelector((state) => state.itemSlice.isModalOpen);
    const dispatch = useAppDispatch();
    const nodeRef = useRef(null);
    return (
        <Transition
            nodeRef={nodeRef}
            in={isModalOpen}
            timeout={300}
            unmountOnExit
        >
            {(state) => (
                <ItemModal__wrapper 
                    state={state}
                    isModalOpen={isModalOpen}
                    onClick={() => dispatch(toggleIsModalOpen())}
                    ref={nodeRef}
                >
                    <ItemCustomizationPanel />
                </ItemModal__wrapper>
            )}
        </Transition>

        // isModalOpen ?
        //     <ItemModal__wrapper
        //         onClick={() => dispatch(toggleIsModalOpen())}
        //         isModalOpen={isModalOpen}
        //     >
        //         <ItemCustomizationPanel />
        //     </ItemModal__wrapper>
        // :
        //     null
    );
}
