import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import HomeLogoLink from './HomeLogoLink';
import AddressButtonToggle from './AddressButtonToggle';
import SearchBar from './SearchBar';
import ShoppingCartButton from './ShoppingCartButton';

// Navbar styles

const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0;
    overscroll-behavior-y: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;
    background-color: var(--primary-white);
    border: 1px solid var(--primary-gray);
    border-top: none;
    border-right: none;
    border-left: none;
    padding-left: 64px;
    padding-right: 144px;
    z-index: 3;

    @media screen and (max-width: 1185px) {
        padding-left: 0;
        padding-right: 48px;
    }

    @media screen and (max-width: 960px) {
        padding-left: 0;
        padding-right: 16px;
    }
`;

const NavbarSubLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2px;

    @media screen and (max-width: 1280px) {
        min-width: 496px;
    }

    @media screen and (max-width: 960px) {
        justify-content: flex-start;
        min-width: fit-content;
    }

    @media screen and (max-width: 770px) {
        margin-right: 30px;
    }
`;

const NavbarLinkGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 32px;
    margin-right: 16px;

    @media screen and (max-width: 770px) {
        display: none;
    }
`;

const NavbarLinkWrapper = styled.div`
    display: flex;
    column-gap: 24px;
    text-decoration: none;
    list-style: none;
`;

const NavbarLinkInner = styled.a`
    padding: 10px 0;
`;

const NavbarLabel = styled.span`
    font-family: var(--primary-font-family);
    font-size: var(--nav-label-font-size);
    font-weight: var(--nav-label-font-weight);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

const NavbarVerticalDivider = styled.hr`
    width: 0px;
    height: 24px;
    border: 1px solid var(--primary-gray);
    border-radius: 2px;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

const NavbarSubRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 16px;

    @media screen and (max-width: 1185px) {
        width: 100%;
        justify-content: flex-end;
    }

    @media screen and (max-width: 960px) {
        padding-right: 24px;
    }

    @media screen and (max-width: 770px) {
        width: 100%;
    }
`;

type TNavBar = {
    isShoppingCartToggleable: boolean;
};

export default function Navbar({ isShoppingCartToggleable }: TNavBar) {
    // AddressButtonToggle state that reveals address list
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isAddressButtonToggled, setIsAddressButtonToggled] = useState(false);
    const [isSearchBarToggled, setIsSearchBarToggled] = useState(false);

    return (
        <NavbarWrapper>
            <NavbarSubLeft>
                <HamburgerButton />
                <HomeLogoLink />
                <NavbarLinkGroup>
                    <NavbarLinkWrapper>
                        <Link href="/" passHref legacyBehavior>
                            <NavbarLinkInner>
                                <NavbarLabel aria-label="Delivery.">
                                    Delivery
                                </NavbarLabel>
                            </NavbarLinkInner>
                        </Link>
                        <Link href="/pickup" passHref legacyBehavior>
                            <NavbarLinkInner>
                                <NavbarLabel aria-label="Pickup.">
                                    Pickup
                                </NavbarLabel>
                            </NavbarLinkInner>
                        </Link>
                    </NavbarLinkWrapper>
                </NavbarLinkGroup>
                <NavbarVerticalDivider />
                <NavbarLinkWrapper>
                    <AddressButtonToggle
                        setIsAddressButtonToggled={setIsAddressButtonToggled}
                    />
                </NavbarLinkWrapper>
            </NavbarSubLeft>
            <NavbarSubRight>
                <SearchBar
                    isSearchBarToggled={isSearchBarToggled}
                    setIsSearchBarToggled={setIsSearchBarToggled}
                />
                <ShoppingCartButton isShoppingCartToggleable={isShoppingCartToggleable} />
            </NavbarSubRight>
        </NavbarWrapper>
    );
}
