import styled from "styled-components";
import ThumbsUp from "../../Icons/ThumbsUpIcon";
import Image from "next/image";

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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-align: left;
    -webkit-line-clamp: 2;
    overflow: hidden;
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
`

type TMenuItem = {
    itemName: string;
    shortDescription: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
}

export default function MenuItem({itemName, shortDescription, imageSrc, imageAlt, price}: TMenuItem) {
    return (
        <Item__wrapper>
            <Item__text__wrapper>
                <Item__text__name>{itemName}</Item__text__name>
                <Item__text__description>
                    {shortDescription}
                </Item__text__description>
                <Item__text__stats__wrapper>
                    <Item__text__price>${price}</Item__text__price>
                    <Item__text__stats>•</Item__text__stats>
                    <ThumbsUp />
                    <Item__text__stats>94% (120)</Item__text__stats>
                </Item__text__stats__wrapper>
                <Item__text__lastordered>
                    Last ordered on 7/27/22
                </Item__text__lastordered>
            </Item__text__wrapper>
            <Item__image__wrapper>
                <Item__image
                    src={imageSrc}
                    alt={imageAlt}
                    fill={true}
                />
            </Item__image__wrapper>
        </Item__wrapper>
    );
}
