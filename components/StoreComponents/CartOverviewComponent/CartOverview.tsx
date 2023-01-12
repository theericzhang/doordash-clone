import styled from "styled-components";

const CartOverview__wrapper = styled.aside`
    display: flex;
    flex-direction: column;
    width: 340px;
    border-left: 1px solid var(--primary-gray);
    position: fixed;
    right: 0;
    height: 100%;
`;

export default function CartOverview() {
    return (
        <CartOverview__wrapper>
            { /*TODO: Continue working on CartOverview checkout button */}
        </CartOverview__wrapper>
    );
}