import styled from "styled-components";

const ItemOverlay__wrapper = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--primary-black);
    z-index: 9;
`;

export default function ItemOverlay() {
    return (
        <ItemOverlay__wrapper>

        </ItemOverlay__wrapper>
    );
}