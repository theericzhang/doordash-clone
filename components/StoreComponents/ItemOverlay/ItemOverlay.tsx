import styled from "styled-components";
import { useAppSelector } from "../../../app-redux/hooks";

const ItemOverlay__wrapper = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--primary-black);
    opacity: 0.75;
    z-index: 9;
`;

export default function ItemOverlay() {
    const isOverlayOpen = useAppSelector((state) => state.itemSlice.isOverlayOpen);
    return (
        isOverlayOpen ? 
            <ItemOverlay__wrapper>

            </ItemOverlay__wrapper>
        :
            null
    );
}