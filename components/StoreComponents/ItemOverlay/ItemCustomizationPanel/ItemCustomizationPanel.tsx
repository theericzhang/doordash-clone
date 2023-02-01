/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable @typescript-eslint/no-shadow */
import styled from 'styled-components';
import {
    useState, useRef, useEffect,
} from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import Image from 'next/image';
import Shimmer from '../../../Placeholders/Shimmer';
import { useAppDispatch, useAppSelector } from '../../../../app-redux/hooks';
import { toggleIsModalOpen } from '../../../../app-redux/features/item/itemSlice';
import {
    addItemToCart,
    setStoreID,
    resetCartNewStore,
    setPageViewingStoreID,
} from '../../../../app-redux/features/cart/cartSlice';

import X from '../../../Icons/XIcon';
import ThumbsUp from '../../../Icons/ThumbsUpIcon';
import ModalInputStepper from './ModalInputStepper/ModalInputStepper';

type TItemCustomizationPanel = {
    state: TransitionStatus;
    isModalOpen: boolean;
};

const ItemCustomizationPanelWrapper = styled.div<TItemCustomizationPanel>`
    display: flex;
    flex-direction: column;
    width: 560px;
    min-height: 200px;
    background-color: var(--primary-white);
    opacity: 1;
    border-radius: 16px;
    /* padding: 16px; */
    position: relative;
    transform: ${(props) => (props.state === 'entering'
        ? 'scale(0.95)'
        : props.state === 'entered'
            ? 'scale(1)'
            : props.state === 'exiting'
                ? 'scale(0.95)'
                : 'scale(0.95)')};
    transition: transform 225ms ease-in-out;
    justify-content: space-between;

    @media screen and (max-width: 770px) {
        width: 480px;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
`;

const ItemCustomizationPanelMainWrapper = styled.div`
    padding: 16px;
`;

const ItemCustomizationPanelButtonClose = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    color: inherit;

    &:hover {
        cursor: pointer;
    }

    &:visited {
        color: inherit;
        background-color: inherit;
    }
`;

const ItemCustomizationPanelContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;
    margin: 33px 0;
`;

const ItemCustomizationPanelItemName = styled.h2`
    font-size: 32px;
    font-weight: 500;
    color: var(--primary-black);
    letter-spacing: -0.45px;
`;

const ItemCustomizationPanelStatsWrapper = styled.div`
    display: flex;
    column-gap: 4px;
    align-items: center;
`;

const ItemCustomizationPanelStats = styled.span`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    color: var(--secondary-black);
`;

const ItemCustomizationPanelItemDescription = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--secondary-black);
    line-height: 1.4;
    margin-top: 10px;
    margin-bottom: 25px;
`;

const ItemCustomizationPanelImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 295px;
    overflow: hidden;
    position: relative;
`;

const ItemCustomizationPanelImage = styled(Image)`
    width: 100%;
    object-fit: cover;
`;

const ItemCustomizationPanelFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px;
    width: 100%;
    height: 72px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px calc(-1px) 15px;
    column-gap: 26px;

    @media screen and (max-width: 480px) {
        column-gap: 0;
        justify-content: center;
    }
`;

const ItemCustomizationPanelAddToCartButton = styled.button`
    width: 220px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-red);
    border-radius: 20px;
    transition: ease 0.15s;
    transition-property: background-color;
    padding: 0 25px;
    color: var(--primary-white);
    font-weight: 500;
    font-size: 16px;

    &:hover {
        background-color: var(--tertiary-red);
        transition: ease 0.15s;
        transition-property: background-color;
        cursor: pointer;
    }

    &:active {
        transition: 0.15s ease;
        transition-property: background-color;
        background-color: var(--quaternary-red);
    }

    @media screen and (max-width: 480px) {
        width: 192px;
        padding: 0 5px;
    }
`;

export default function ItemCustomizationPanel({ state, isModalOpen }: TItemCustomizationPanel) {
    // we need this local state to talk between modalinputstepper and add to cart button
    const [itemCounter, setItemCounter] = useState(1);

    const [isImageLoading, setIsImageLoading] = useState(true);

    const nodeRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        nodeRef.current && nodeRef.current.focus();
    }, []);

    const dispatch = useAppDispatch();
    // grabbing item data that was set when the user clicks on MenuItem
    const itemData = useAppSelector((state) => state.itemSlice.itemData);
    const cartStoreID = useAppSelector((state) => state.cartSlice.storeID);
    const pageViewingStoreID = useAppSelector(
        (state) => state.cartSlice.pageViewingStoreID
    );
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
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
        }
        // if the cart store is not defined meaning no items in cart, set the viewingID and then add
        else if (cartStoreID === undefined && !!pageViewingStoreID) {
            dispatch(setPageViewingStoreID(pageViewingStoreID));
            dispatch(setStoreID(pageViewingStoreID));
            dispatch(addItemToCart(cartPayload));
            dispatch(toggleIsModalOpen());
        }
        // if the cart's storeID doesn't match the viewingID, then start a new cart.
        else if (cartStoreID !== pageViewingStoreID && !!pageViewingStoreID) {
            dispatch(resetCartNewStore(pageViewingStoreID));
            dispatch(addItemToCart(cartPayload));
            dispatch(toggleIsModalOpen());
        }
    }

    return (
        <Transition
            nodeRef={nodeRef}
            in={isModalOpen}
            timeout={225}
            unmountOnExit
        >
            {() => (
                <ItemCustomizationPanelWrapper
                    state={state}
                    isModalOpen={isModalOpen}
                    onClick={(e) => e.stopPropagation()}
                    ref={nodeRef}
                    // eslint-disable-next-line styled-components-a11y/no-noninteractive-tabindex
                    tabIndex={isModalOpen ? 0 : -1}
                    id="ItemCustomizationPanel"
                    role="none"
                >
                    <ItemCustomizationPanelMainWrapper>
                        <ItemCustomizationPanelButtonClose
                            onClick={() => dispatch(toggleIsModalOpen())}
                            aria-label="Close Item Customization Modal"
                        >
                            <X />
                        </ItemCustomizationPanelButtonClose>
                        <ItemCustomizationPanelContentWrapper>
                            <ItemCustomizationPanelItemName>
                                {itemData?.itemName}
                            </ItemCustomizationPanelItemName>
                            {itemData?.ratingCount ? (
                                <ItemCustomizationPanelStatsWrapper>
                                    <ThumbsUp size={16} />
                                    <ItemCustomizationPanelStats>
                                        {itemData.ratingPercentage}
                                        % (
                                        {itemData.ratingCount}
                                        )
                                    </ItemCustomizationPanelStats>
                                </ItemCustomizationPanelStatsWrapper>
                            ) : null}
                            {itemData?.description ? (
                                <ItemCustomizationPanelItemDescription>
                                    {itemData?.description}
                                </ItemCustomizationPanelItemDescription>
                            ) : null}
                            {itemData?.image.src ? (
                                <ItemCustomizationPanelImageWrapper>
                                    {isImageLoading ? <Shimmer width={600} /> : null}
                                    <ItemCustomizationPanelImage
                                        src={itemData.image.src}
                                        alt={itemData.image.alt}
                                        sizes="295px"
                                        fill
                                        onLoadingComplete={() => setIsImageLoading(false)}
                                    />
                                </ItemCustomizationPanelImageWrapper>
                            ) : null}
                        </ItemCustomizationPanelContentWrapper>
                    </ItemCustomizationPanelMainWrapper>
                    <ItemCustomizationPanelFooter>
                        <ModalInputStepper
                            itemCounter={itemCounter}
                            setItemCounter={setItemCounter}
                        />
                        <ItemCustomizationPanelAddToCartButton
                            onClick={addToCartClickHandler}
                        >
                            Add to Cart -
                            {' '}
                            {priceFormatter.format(
                                itemData.price * itemCounter
                            )}
                        </ItemCustomizationPanelAddToCartButton>
                    </ItemCustomizationPanelFooter>
                </ItemCustomizationPanelWrapper>
            )}
        </Transition>
    );
}
