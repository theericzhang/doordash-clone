import styled from "styled-components";
import CarrotDown from "../Icons/CarrotDownIcon";

const FilterButton__wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2px;
    background-color: var(--primary-gray);
    transition: 0.15s ease;
    transition-property: background-color;
    height: 32px;
    width: fit-content;
    padding: 0 13px;
    border-radius: 16px;

    &:hover {
        cursor: pointer;
        transition: 0.15s ease;
        transition-property: background-color;
        background-color: var(--secondary-gray);
    }

    // equivalent to onMouseDown
    &:active {
        transition: 0.15s ease;
        transition-property: background-color;
        background-color: var(--quaternary-gray);
    }
`;

const FilterButton__buttonLabel = styled.h5`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`;

const FilterButton__verticalDivider = styled.hr`
    border: 1px solid var(--quaternary-gray);
    height: 16px;
    border-top: none;
    border-bottom: none;
    border-left: none;
`

type TFilterButton = {
    buttonData: {
        buttonLabel: string | null;
        leftLogo: JSX.Element | null;
        rightLogo: JSX.Element | null;
        hasDivider: boolean;
        hasDropdown: boolean;
    }
}

export default function FilterButton({ buttonData }: TFilterButton) {
    
    return (
        <FilterButton__wrapper>
            {buttonData.leftLogo}
            <FilterButton__buttonLabel>{buttonData.buttonLabel}</FilterButton__buttonLabel>
            {buttonData.rightLogo}
            {buttonData.hasDivider ? 
                    <FilterButton__verticalDivider />
                :
                    null
            }
            {buttonData.hasDropdown ?
                    <CarrotDown />
                :
                    null
            }
        </FilterButton__wrapper>
    );
}