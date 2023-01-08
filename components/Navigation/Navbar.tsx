import Link from "next/link";
import styled from "styled-components";
import HamburgerButton from "./HamburgerButton";
import HomeLogoLink from "./HomeLogoLink";
import AddressButtonToggle from "./AddressButtonToggle";
import SearchBar from "./SearchBar";
import ShoppingCartButton from "./ShoppingCartButton";
import { useState } from "react";

// Navbar styles

const Navbar__wrapper = styled.nav`
    position: sticky;
    top: 0;
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
`;

const Navbar__subLeft = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2px;
`;

const Navbar__linkGroup = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-right: 18px;
`;

const Navbar__link__wrapper = styled.div`
    display: flex;
    column-gap: 24px;
`;

const Navbar__link__li = styled.li`
    text-decoration: none;
    list-style: none;
`

const Navbar__link__inner = styled.a`
    padding: 10px 0;
`;

const Navbar__label = styled.h4`
    font-family: var(--primary-font-family);
    font-size: var(--nav-label-font-size);
    font-weight: var(--nav-label-font-weight);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

const Navbar__verticalDivider = styled.hr`
    width: 0px;
    height: 24px;
    border: 1px solid var(--primary-gray);
    border-radius: 2px;
`;

const Navbar__subRight = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 16px;
`

export default function Navbar() {

    // AddressButtonToggle state that reveals address list
    const [ isAddressButtonToggled, setIsAddressButtonToggled ] = useState(false);
    const [ isSearchBarToggled, setIsSearchBarToggled ] = useState(false);

    return (
        <Navbar__wrapper>
            <Navbar__subLeft>
                <HamburgerButton />
                <HomeLogoLink />
                <Navbar__linkGroup>
                    <Navbar__link__wrapper>
                        <Navbar__link__li>
                            <Link href="/" passHref legacyBehavior>
                                <Navbar__link__inner>
                                    <Navbar__label>Delivery</Navbar__label>
                                </Navbar__link__inner>
                            </Link>
                        </Navbar__link__li>
                        <Navbar__link__li>
                            <Link href="/pickup" passHref legacyBehavior>
                                <Navbar__link__inner>
                                    <Navbar__label>Pickup</Navbar__label>
                                </Navbar__link__inner>
                            </Link>
                        </Navbar__link__li>
                    </Navbar__link__wrapper>
                </Navbar__linkGroup>
                <Navbar__verticalDivider />
                <Navbar__link__wrapper>
                    <Navbar__link__li>
                        <AddressButtonToggle 
                            setIsAddressButtonToggled={setIsAddressButtonToggled}
                        />
                    </Navbar__link__li>
                </Navbar__link__wrapper>
            </Navbar__subLeft>
            <Navbar__subRight>
                <SearchBar 
                    isSearchBarToggled={isSearchBarToggled}
                    setIsSearchBarToggled={setIsSearchBarToggled} 
                />
                <ShoppingCartButton />
            </Navbar__subRight>
        </Navbar__wrapper>
    );
}
