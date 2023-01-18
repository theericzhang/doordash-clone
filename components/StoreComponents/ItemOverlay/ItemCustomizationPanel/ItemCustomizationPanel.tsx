import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { toggleIsModalOpen } from "../../../../app-redux/features/item/itemSlice";
import X from "../../../Icons/XIcon";
import ThumbsUp from "../../../Icons/ThumbsUpIcon";
import Image from "next/image";

const ItemCustomizationPanel__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 560px;
    min-height: 200px;
    background-color: var(--primary-white);
    opacity: 1;
    border-radius: 16px;
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
    margin: 32px 0; 
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

export default function ItemCustomizationPanel() {
    const dispatch = useAppDispatch();
    const itemData = useAppSelector((state) => state.itemSlice.itemData);

    return (
        <ItemCustomizationPanel__wrapper onClick={(e) => e.stopPropagation()}>
            <ItemCustomizationPanel__button_close onClick={() => dispatch(toggleIsModalOpen())}>
                <X />
            </ItemCustomizationPanel__button_close>
            <ItemCustomizationPanel__content__wrapper>
                <ItemCustomizationPanel__item__name>
                    {itemData?.itemName}
                </ItemCustomizationPanel__item__name>
                {itemData?.ratingCount ? 
                    <ItemCustomizationPanel__stats__wrapper>
                        <ThumbsUp />
                        <ItemCustomizationPanel__stats>
                            {itemData.ratingPercentage}% ({itemData.ratingCount})
                        </ItemCustomizationPanel__stats>
                    </ItemCustomizationPanel__stats__wrapper>
                :
                    null
                }
                {itemData?.description ?
                    <ItemCustomizationPanel__item__description>
                        {itemData?.description}
                    </ItemCustomizationPanel__item__description>
                :
                    null
                }
                {itemData?.image.src ? 
                    <ItemCustomizationPanel__image__wrapper>
                        <ItemCustomizationPanel__image 
                            src={itemData.image.src}
                            alt={itemData.image.alt}
                            sizes={"295px"}
                            fill={true}
                        />
                    </ItemCustomizationPanel__image__wrapper>
                :
                    null
                }
            </ItemCustomizationPanel__content__wrapper>

        </ItemCustomizationPanel__wrapper>
    );
}