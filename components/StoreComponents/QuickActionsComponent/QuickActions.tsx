import styled from "styled-components";

const QuickActions__wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 928px;
    margin: 0 auto;
    position: relative;
    row-gap: 50px;
`;

const QuickActions__section = styled.section`
    display: flex;
    flex-direction: column;
`;

const QuickActions__section__header = styled.h2`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.6px;
`

export default function QuickActions() {
    return (
        <QuickActions__wrapper>
            <QuickActions__section>
                <QuickActions__section__header>
                    Popular Items
                </QuickActions__section__header>
            </QuickActions__section>
        </QuickActions__wrapper>
    );
}