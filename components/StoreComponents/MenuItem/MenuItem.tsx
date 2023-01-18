import styled from "styled-components";
import ThumbsUp from "../../Icons/ThumbsUpIcon";
import Image from "next/image";
import { TStoreItem } from "../../../global";
import { useAppSelector, useAppDispatch } from "../../../app-redux/hooks";
import { toggleIsModalOpen, setModalData } from "../../../app-redux/features/item/itemSlice";

const Item__wrapper = styled.button`
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
`;

const Item__text__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
    row-gap: 5px;
    max-width: 313px;
`;

const Item__text__name = styled.span`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.4px;
    color: var(--primary-black);
`;

const Item__text__description = styled.span`
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

const Item__text__stats__wrapper = styled.div`
    display: flex;
    column-gap: 4px;
    align-items: center;
`;

const Item__text__price = styled.span`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    color: var(--secondary-black);
`;

const Item__text__stats = styled.span`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    color: var(--secondary-black);
`;

const Item__text__lastordered = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-teal);
    letter-spacing: -0.4px;
`;

const Item__image__wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 143px;
    height: 100%;
`;

const Item__image = styled(Image)`
    object-fit: cover;
`;

export default function MenuItem({ image, itemName, price, description, ratingCount, ratingPercentage, lastOrdered }: TStoreItem) {
    const dispatch = useAppDispatch();
    return (
        <Item__wrapper 
            onClick={
                () => {
                    dispatch(toggleIsModalOpen());
                    dispatch(setModalData({ image, itemName, price, description, ratingCount, ratingPercentage, lastOrdered }));
                }
            }
        >
            <Item__text__wrapper>
                <Item__text__name>{itemName}</Item__text__name>
                <Item__text__description>
                    {description}
                </Item__text__description>
                <Item__text__stats__wrapper>
                    <Item__text__price>${price}</Item__text__price>
                    <Item__text__stats>•</Item__text__stats>
                    <ThumbsUp />
                    <Item__text__stats>{ratingPercentage}% ({ratingCount})</Item__text__stats>
                </Item__text__stats__wrapper>
                <Item__text__lastordered>
                    {!!lastOrdered ? `Last ordered on ${lastOrdered}` : null}
                </Item__text__lastordered>
            </Item__text__wrapper>
            <Item__image__wrapper>
                <Item__image
                    src={image.src}
                    alt={image.alt}
                    fill={true}
                    sizes={"141px"}
                />
            </Item__image__wrapper>
        </Item__wrapper>
    );
}
