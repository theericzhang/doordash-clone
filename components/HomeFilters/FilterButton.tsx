import styled from "styled-components";

const FilterButton__wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2px;
    background-color: var(--primary-gray);
    height: 32px;
    width: fit-content;
    padding: 0 13px;
    border-radius: 16px;
`;

const FilterButton__buttonLabel = styled.h5`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`;

const FilterButton__verticalDivider = styled.hr`
    width: 1px;
    height: 16px;
    border-top: none;
    border-bottom: none;
    border-left: none;
    border-color: var(--quaternary-gray);
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
        </FilterButton__wrapper>
    );
}