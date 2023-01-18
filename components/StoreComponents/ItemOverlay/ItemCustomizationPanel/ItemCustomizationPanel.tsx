import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { toggleIsModalOpen } from "../../../../app-redux/features/item/itemSlice";
import X from "../../../Icons/XIcon";

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

const ItemCustomizationPanel__item__name = styled.h2`
    font-size: 32px;
    font-weight: 500;
    color: var(--primary-black);
    letter-spacing: -0.45px;
`;

const ItemCustomizationPanl__item__description = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--secondary-black);
`

export default function ItemCustomizationPanel() {
    const dispatch = useAppDispatch();
    const itemData = useAppSelector((state) => state.itemSlice.itemData);

    return (
        <ItemCustomizationPanel__wrapper onClick={(e) => e.stopPropagation()}>
            <ItemCustomizationPanel__button_close onClick={() => dispatch(toggleIsModalOpen())}>
                <X />
            </ItemCustomizationPanel__button_close>
            <ItemCustomizationPanel__item__name>
                {itemData?.itemName}
            </ItemCustomizationPanel__item__name>
            <ItemCustomizationPanl__item__description>
                {itemData?.description}
            </ItemCustomizationPanl__item__description>
        </ItemCustomizationPanel__wrapper>
    );
}