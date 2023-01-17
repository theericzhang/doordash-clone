import styled from "styled-components";

const MenuSection__section = styled.section`
    display: flex;
    flex-direction: column;
`;

const MenuSection__header__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
`;

// reserved for larger headers, like feature items section
const MenuSection__header__large = styled.h2`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.6px;
    color: var(--primary-black);
`;

const MenuSection__header = styled.h2`
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.7px;
    color: var(--primary-black);
`;

const MenuSection__subheader = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const MenuSection__items__wrapper = styled.div`
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    width: 100%;
`;

const MenuSection__item = styled.button`
    width: 49.2%;
    height: 144px;
    display: flex;
    background-color: var(--primary-white);
    border: 1px solid var(--primary-gray);
    border-radius: 4px;
`

export default function MenuSection() {
    return (
        <MenuSection__section>
            <MenuSection__header__wrapper>
                <MenuSection__header>
                    Popular Items
                </MenuSection__header>
                <MenuSection__subheader>
                    The most commonly ordered items and dishes from this store
                </MenuSection__subheader>
            </MenuSection__header__wrapper>
            <MenuSection__items__wrapper>
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />

            </MenuSection__items__wrapper>
        </MenuSection__section>
    );
}
