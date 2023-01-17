import styled from "styled-components";

const MenuSection__section = styled.section`
    display: flex;
    flex-direction: column;
`;

const MenuSection__header__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3.5px;
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
    column-gap: 14px;
    row-gap: 16px;
    flex-wrap: wrap;
    width: 100%;
    margin: 18px 0;
    overflow: hidden;
`;

const MenuSection__item = styled.button`
    width: 49.2%;
    height: 144px;
    display: flex;
    background-color: var(--primary-white);
    border: 1px solid;
    border-color: var(--primary-gray);
    border-radius: 4px;
    transition: 0.25s ease;
    transition-property: border-color;
    align-items: center;

    &:hover {
        cursor: pointer;
        border-color: var(--quaternary-gray);
        transition: 0.25s ease;
        transition-property: border-color;
    }
`;

const Item__text__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
    row-gap: 5px;
`;

const Item__text__name = styled.span`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.4px;
    color: var(--primary-black);
`;

const Item__text__description = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const Item__text__stats__wrapper = styled.div`
    display: flex;
`;

const Item__text__stats = styled.span`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    color: var(--secondary-black);
`;

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
                <MenuSection__item>
                    <Item__text__wrapper>
                        <Item__text__name>
                            12 piece Omakase
                        </Item__text__name>
                        <Item__text__description>
                            Chef&apos;s choice of daily sushi
                        </Item__text__description>
                        <Item__text__stats__wrapper>
                            <Item__text__stats>
                                $8.95
                            </Item__text__stats>
                        </Item__text__stats__wrapper>
                    </Item__text__wrapper>
                </MenuSection__item>
                {/* <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item />
                <MenuSection__item /> */}

            </MenuSection__items__wrapper>
        </MenuSection__section>
    );
}
