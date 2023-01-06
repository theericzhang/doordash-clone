import styled from "styled-components";
import HamburgerButton from "./HamburgerButton";
import HomeLogoLink from "./HomeLogoLink";

const NavbarWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 64px;
    border: 1px solid var(--primary-gray);
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 0 64px;
`;

const NavbarSubLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2px;
`;

export default function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarSubLeft>
                <HamburgerButton />
                <HomeLogoLink />
            </NavbarSubLeft>
        </NavbarWrapper>
    );
}
