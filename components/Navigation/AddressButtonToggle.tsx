import styled from 'styled-components';
import React from 'react';

const NavbarButtonAddress = styled.button`
    padding: 10px 0;
    margin: 0 14px;
    border: none;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

const NavbarLabel = styled.h4`
    font-family: var(--primary-font-family);
    font-size: var(--nav-label-font-size);
    font-weight: var(--nav-label-font-weight);
`;

type TAddressButtonToggle = {
    setIsAddressButtonToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddressButtonToggle({ setIsAddressButtonToggled } : TAddressButtonToggle) {
    return (
        <NavbarButtonAddress
            onClick={() => setIsAddressButtonToggled((prevToggleState) => !prevToggleState)}
        >
            <NavbarLabel>23 Maple Dr</NavbarLabel>
        </NavbarButtonAddress>
    );
}
