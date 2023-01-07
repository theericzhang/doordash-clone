import styled from "styled-components";

const Navbar__button__address = styled.button`
    padding: 10px 0;
    margin: 0 14px;
    border: none;
    background-color: white;

    &:hover {
        cursor: pointer;
    }
`;

const Navbar__label = styled.h4`
    font-family: var(--primary-font-family);
    font-size: var(--nav-label-font-size);
    font-weight: var(--nav-label-font-weight);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export default function AddressButtonToggle() {
    return (
        <Navbar__button__address>
            <Navbar__label>23 Maple Dr</Navbar__label>
        </Navbar__button__address>
    );
}
