import styled from "styled-components";
import MenuSection from "../MenuSection/MenuSection";

const QuickActions__wrapper = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 928px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    row-gap: 50px;

    @media screen and (max-width: 1300px) {
        padding: 0 16px;
        margin: 0;
    }
`;



export default function QuickActions() {
    return (
        <QuickActions__wrapper>
            <MenuSection />
        </QuickActions__wrapper>
    );
}