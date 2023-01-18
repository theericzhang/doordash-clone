import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../app-redux/hooks";
import { toggleIsModalOpen } from "../../../../app-redux/features/item/itemSlice";

const ItemCustomizationPanel__wrapper = styled.div`
    display: flex;
    width: 430px;
    min-height: 200px;
    background-color: var(--primary-white);
    opacity: 1;
`;

export default function ItemCustomizationPanel() {
    const dispatch = useAppDispatch();

    return (
        <ItemCustomizationPanel__wrapper>
            Hello!
        </ItemCustomizationPanel__wrapper>
    );
}