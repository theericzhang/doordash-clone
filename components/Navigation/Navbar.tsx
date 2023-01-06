import Link from "next/link";
import styled from "styled-components";
import HamburgerButton from "./HamburgerButton";
import HomeLogoLink from "./HomeLogoLink";

const Navbar__wrapper = styled.nav`
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
    margin: 0 30px;
`;

const Navbar__link__wrapper = styled.div`
    display: flex;
    font-family: 'TTNorms';
    font-size: 14px;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    column-gap: 24px;
`;

const Navbar__link__li = styled.li`
    text-decoration: none;
    list-style: none;
`

const Navbar__link__inner = styled.a`
    padding: 10px 0;
`;

export default function Navbar() {
    return (
        <Navbar__wrapper>
            <Navbar__subLeft>
                <HamburgerButton />
                <HomeLogoLink />
                <Navbar__linkGroup>
                    <Navbar__link__wrapper>
                        <Navbar__link__li>
                            <Link href="/" passHref legacyBehavior>
                                <Navbar__link__inner>Delivery</Navbar__link__inner>
                            </Link>
                        </Navbar__link__li>
                        <Navbar__link__li>
                            <Link href="/pickup" passHref legacyBehavior>
                                <Navbar__link__inner>Pickup</Navbar__link__inner>
                            </Link>
                        </Navbar__link__li>
                    </Navbar__link__wrapper>
                </Navbar__linkGroup>
            </Navbar__subLeft>
        </Navbar__wrapper>
    );
}
