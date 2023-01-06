import styled from "styled-components";
import HamburgerButton from "./HamburgerButton";
import HomeLogoLink from "./HomeLogoLink";

const NavbarWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 63px;
    border: 2px solid var(--primary-gray);
    border-right: none;
    border-left: none;
`;

const NavbarSubLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
