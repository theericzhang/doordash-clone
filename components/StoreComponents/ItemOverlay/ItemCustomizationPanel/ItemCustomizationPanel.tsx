import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { toggleIsModalOpen } from "../../../../app-redux/features/item/itemSlice";
import {
    addItemToCart,
    setStoreID,
    resetCartNewStore,
    setPageViewingStoreID,
} from "../../../../app-redux/features/cart/cartSlice";
import { useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";

import X from "../../../Icons/XIcon";
import ThumbsUp from "../../../Icons/ThumbsUpIcon";
import Image from "next/image";
import ModalInputStepper from "./ModalInputStepper/ModalInputStepper";
import { useRef } from "react";

type TItemCustomizationPanel = {
    state: TransitionStatus;
    isModalOpen: boolean;
};

const ItemCustomizationPanel__wrapper = styled.div<TItemCustomizationPanel>`
    display: flex;
    flex-direction: column;
    width: 560px;
    min-height: 200px;
    background-color: var(--primary-white);
    opacity: 1;
    border-radius: 16px;
    /* padding: 16px; */
    position: relative;
    transform: ${(props) =>
        props.state === "entering"
            ? `scale(0.95)`
            : props.state === "entered"
            ? `scale(1)`
            : props.state === "exiting"
            ? `scale(0.95)`
            : `scale(0.95)`};
    transition: transform 225ms ease-in-out;

    @media screen and (max-width: 770px) {
        width: 480px;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
`;

const ItemCustomizationPanel__main__wrapper = styled.div`
    padding: 16px;
`;

const ItemCustomizationPanel__button_close = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;

const ItemCustomizationPanel__content__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;
    margin: 33px 0;
`;

const ItemCustomizationPanel__item__name = styled.h2`
    font-size: 32px;
    font-weight: 500;
    color: var(--primary-black);
    letter-spacing: -0.45px;
`;

const ItemCustomizationPanel__stats__wrapper = styled.div`
    display: flex;
    column-gap: 4px;
    align-items: center;
`;

const ItemCustomizationPanel__stats = styled.span`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    color: var(--secondary-black);
`;

const ItemCustomizationPanel__item__description = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--secondary-black);
    line-height: 1.4;
    margin-top: 10px;
    margin-bottom: 25px;
`;

const ItemCustomizationPanel__image__wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 295px;
    overflow: hidden;
    position: relative;
`;

const ItemCustomizationPanel__image = styled(Image)`
    width: 100%;
    object-fit: cover;
`;

const ItemCustomizationPanel__footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px;
    width: 100%;
    height: 72px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px calc(-1px) 15px;
    column-gap: 26px;
`;

const ItemCustomizationPanel__AddToCart__button = styled.button`
    width: 220px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-red);
    border-radius: 20px;
    transition: ease 0.1s;
    transition-property: background-color;
    padding: 0 25px;
    color: var(--primary-white);
    font-weight: 500;
    font-size: 16px;

    &:hover {
        background-color: var(--tertiary-red);
        transition: ease 0.1s;
        transition-property: background-color;
        cursor: pointer;
    }
`;

export default function ItemCustomizationPanel({ state, isModalOpen }: TItemCustomizationPanel) {
    const dispatch = useAppDispatch();
    // grabbing item data that was set when the user clicks on MenuItem
    const itemData = useAppSelector((state) => state.itemSlice.itemData);
    const cartStoreID = useAppSelector((state) => state.cartSlice.storeID);
    const pageViewingStoreID = useAppSelector(
        (state) => state.cartSlice.pageViewingStoreID
    );
    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    function addToCartClickHandler() {
        const cartPayload = {
            itemID: itemData.itemID,
            quantity: itemCounter,
        };
        // if the cart matches the currently viewed page's ID
        if (cartStoreID === pageViewingStoreID) {
            dispatch(addItemToCart(cartPayload));
            dispatch(toggleIsModalOpen());
            return;
        }
        // if the cart store is not defined meaning no items in cart, set the viewingID and then add
        else if (cartStoreID === undefined && !!pageViewingStoreID) {
            dispatch(setPageViewingStoreID(pageViewingStoreID));
            dispatch(setStoreID(pageViewingStoreID));
            dispatch(addItemToCart(cartPayload));
            dispatch(toggleIsModalOpen());
            return;
        }
        // if the cart's storeID doesn't match the viewingID, then start a new cart.
        else if (cartStoreID !== pageViewingStoreID && !!pageViewingStoreID) {
            dispatch(resetCartNewStore(pageViewingStoreID));
            dispatch(addItemToCart(cartPayload));
            dispatch(toggleIsModalOpen());
            return;
        }
    }

    // we need this local state to talk between modalinputstepper and add to cart button
    const [itemCounter, setItemCounter] = useState(1);

    const nodeRef = useRef(null);
    return (
        <Transition 
            nodeRef={nodeRef}
            in={isModalOpen} 
            timeout={225} 
            unmountOnExit
        >
            {() => (
                <ItemCustomizationPanel__wrapper
                    state={state}
                    isModalOpen={isModalOpen}
                    onClick={(e) => e.stopPropagation()}
                    ref={nodeRef}
                >
                    <ItemCustomizationPanel__main__wrapper>
                        <ItemCustomizationPanel__button_close
                            onClick={() => dispatch(toggleIsModalOpen())}
                        >
                            <X />
                        </ItemCustomizationPanel__button_close>
                        <ItemCustomizationPanel__content__wrapper>
                            <ItemCustomizationPanel__item__name>
                                {itemData?.itemName}
                            </ItemCustomizationPanel__item__name>
                            {itemData?.ratingCount ? (
                                <ItemCustomizationPanel__stats__wrapper>
                                    <ThumbsUp size={16} />
                                    <ItemCustomizationPanel__stats>
                                        {itemData.ratingPercentage}% (
                                        {itemData.ratingCount})
                                    </ItemCustomizationPanel__stats>
                                </ItemCustomizationPanel__stats__wrapper>
                            ) : null}
                            {itemData?.description ? (
                                <ItemCustomizationPanel__item__description>
                                    {itemData?.description}
                                </ItemCustomizationPanel__item__description>
                            ) : null}
                            {itemData?.image.src ? (
                                <ItemCustomizationPanel__image__wrapper>
                                    <ItemCustomizationPanel__image
                                        src={itemData.image.src}
                                        alt={itemData.image.alt}
                                        sizes={"295px"}
                                        fill={true}
                                    />
                                </ItemCustomizationPanel__image__wrapper>
                            ) : null}
                        </ItemCustomizationPanel__content__wrapper>
                    </ItemCustomizationPanel__main__wrapper>
                    <ItemCustomizationPanel__footer>
                        <ModalInputStepper
                            itemCounter={itemCounter}
                            setItemCounter={setItemCounter}
                        />
                        <ItemCustomizationPanel__AddToCart__button
                            onClick={addToCartClickHandler}
                        >
                            Add to Cart -{" "}
                            {priceFormatter.format(
                                itemData.price * itemCounter
                            )}
                        </ItemCustomizationPanel__AddToCart__button>
                    </ItemCustomizationPanel__footer>
                </ItemCustomizationPanel__wrapper>
            )}
        </Transition>
    );
}
