import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../../app-redux/hooks";
import { toggleIsModalOpen } from "../../../app-redux/features/item/itemSlice";
import ItemCustomizationPanel from "./ItemCustomizationPanel/ItemCustomizationPanel";

const ItemModal__wrapper = styled.section`
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
`;

export default function ItemModal() {
    const isModalOpen = useAppSelector((state) => state.itemSlice.isModalOpen);
    const dispatch = useAppDispatch();
    return (
        isModalOpen ? 
            <ItemModal__wrapper onClick={() => dispatch(toggleIsModalOpen())}>
                <ItemCustomizationPanel />
            </ItemModal__wrapper>
        :
            null
    );
}