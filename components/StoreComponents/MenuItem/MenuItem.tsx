import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import ThumbsUp from '../../Icons/ThumbsUpIcon';
import Shimmer from '../../Placeholders/Shimmer';
import { TStoreItem } from '../../../global';
import { useAppDispatch } from '../../../app-redux/hooks';
import { toggleIsModalOpen, setModalData } from '../../../app-redux/features/item/itemSlice';

const ItemWrapper = styled.button`
    width: 49.2%;
    height: 144px;
    display: flex;
    background-color: var(--primary-white);
    border: 1px solid;
    border-color: var(--primary-gray);
    border-radius: 4px;
    transition: 0.25s ease;
    transition-property: border-color;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    &:hover {
        cursor: pointer;
        border-color: var(--quaternary-gray);
        transition: 0.25s ease;
        transition-property: border-color;
    }

    @media screen and (max-width: 1300px) {
        max-width: 49.1%;
    }

    @media screen and (max-width: 770px) {
        max-width: 100%;
        width: 100%;
        border: none;
        border-radius: 0;
    }
`;

const ItemTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
    row-gap: 5px;
    max-width: 313px;

    @media screen and (max-width: 770px) {
        max-width: 580px;
        padding-left: 0;
    }
`;

const ItemTextName = styled.span`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.4px;
    color: var(--primary-black);
`;

const ItemTextDescription = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 1.5;
`;

const ItemTextStatsWrapper = styled.div`
    display: flex;
    column-gap: 4px;
    align-items: center;
`;

const ItemTextPrice = styled.span`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    color: var(--secondary-black);
`;

const ItemTextStats = styled.span`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    color: var(--secondary-black);
`;

const ItemTextLastOrdered = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-teal);
    letter-spacing: -0.4px;
`;

const ItemImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 143px;
    height: 100%;

    @media screen and (max-width: 770px) {
        border-radius: 4px;
        overflow: hidden;
        min-width: 110px;
        height: 110px;
    }
`;

const ItemImage = styled(Image)`
    object-fit: cover;
`;

export default function MenuItem({
    itemID, image, itemName, price, description, ratingCount, ratingPercentage, lastOrdered
}: TStoreItem) {
    const dispatch = useAppDispatch();
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // shimmer loading state
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <ItemWrapper
            onClick={
                () => {
                    dispatch(toggleIsModalOpen());
                    dispatch(setModalData({
                        itemID, image, itemName, price, description, ratingCount, ratingPercentage, lastOrdered
                    }));
                }
            }
        >
            <ItemTextWrapper>
                <ItemTextName>{itemName}</ItemTextName>
                <ItemTextDescription>
                    {description}
                </ItemTextDescription>
                <ItemTextStatsWrapper>
                    <ItemTextPrice>{priceFormatter.format(price)}</ItemTextPrice>
                    <ItemTextStats>•</ItemTextStats>
                    <ThumbsUp />
                    <ItemTextStats>
                        {ratingPercentage}
                        % (
                        {ratingCount}
                        )
                    </ItemTextStats>
                </ItemTextStatsWrapper>
                <ItemTextLastOrdered>
                    {lastOrdered ? `Last ordered on ${lastOrdered}` : null}
                </ItemTextLastOrdered>
            </ItemTextWrapper>
            <ItemImageWrapper>
                {isImageLoading ? <Shimmer width={300} /> : null}
                <ItemImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="141px"
                    onLoadingComplete={() => setIsImageLoading(false)}
                />

            </ItemImageWrapper>
        </ItemWrapper>
    );
}
