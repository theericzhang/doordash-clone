import styled from "styled-components";
import MenuSection from "../MenuSection/MenuSection";

const QuickActions__wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 928px;
    margin: 0 auto;
    position: relative;
    row-gap: 50px;
`;



export default function QuickActions() {
    return (
        <QuickActions__wrapper>
            <MenuSection />
        </QuickActions__wrapper>
    );
}