import styled from "styled-components";

const CheckoutButton__button = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: var(--secondary-red);
    border-radius: 20px;

    &:hover {
        background-color: var(--tertiary-red);
    }
`;

export default function CheckoutButton() {
    return (
        <CheckoutButton__button>
            
        </CheckoutButton__button>
    );
}