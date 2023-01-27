import styled from 'styled-components';
import CarrotDown from '../Icons/CarrotDownIcon';

const FilterButtonWrapper = styled.button`
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

const FilterButtonButtonLabel = styled.h5`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`;

const FilterButtonVerticalDivider = styled.hr`
    border: 1px solid var(--quaternary-gray);
    height: 16px;
    border-top: none;
    border-bottom: none;
    border-left: none;
`;

type TFilterButton = {
    buttonData: {
        buttonLabel: string | null;
        leftLogo: JSX.Element | null;
        rightLogo: JSX.Element | null;
        hasDivider: boolean;
        hasDropdown: boolean;
    }
};

export default function FilterButton({ buttonData }: TFilterButton) {
    return (
        <FilterButtonWrapper>
            {buttonData.leftLogo}
            <FilterButtonButtonLabel>{buttonData.buttonLabel}</FilterButtonButtonLabel>
            {buttonData.rightLogo}
            {buttonData.hasDivider ?
                <FilterButtonVerticalDivider />
                :
                null}
            {buttonData.hasDropdown ?
                <CarrotDown />
                :
                null}
        </FilterButtonWrapper>
    );
}
