import styled from "styled-components";

const ShoppingCartButton__wrapper = styled.button`
    width: 68px;
    height: 32px;
    background-color: var(--primary-red);
    transition: ease 0.1s;
    transition-property: background-color;
    border-radius: 17px;
    border: none;

    &:hover {
        background-color: var(--secondary-red);
        transition: ease 0.1s;
        transition-property: background-color;
    }
`

export default function ShoppingCartButton() {
    return (
        <ShoppingCartButton__wrapper>
            Test!
        </ShoppingCartButton__wrapper>
    );
}