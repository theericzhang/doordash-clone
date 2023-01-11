import styled from "styled-components";
import React from "react";

const Navbar__button__address = styled.button`
    padding: 10px 0;
    margin: 0 14px;
    border: none;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;

const Navbar__label = styled.h4`
    font-family: var(--primary-font-family);
    font-size: var(--nav-label-font-size);
    font-weight: var(--nav-label-font-weight);
`;

type TAddressButtonToggle = {
    setIsAddressButtonToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddressButtonToggle({ setIsAddressButtonToggled } : TAddressButtonToggle) {
    return (
        <Navbar__button__address 
            onClick={() => setIsAddressButtonToggled(prevToggleState => !prevToggleState)}
        >
            <Navbar__label>23 Maple Dr</Navbar__label>
        </Navbar__button__address>
    );
}
