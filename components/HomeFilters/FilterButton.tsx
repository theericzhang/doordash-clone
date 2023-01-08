import styled from "styled-components";

const FilterButton__wrapper = styled.button`
    background-color: var(--primary-gray);
    height: 32px;
    width: fit-content;
    padding: 0 13px;
    border-radius: 16px;
`;

type TFilterButton = {
    buttonData: {
        buttonLabel: string | null;
        leftLogo: string | null;
        rightLogo: string | null;
        hasDivider: boolean;
        hasDropdown: boolean;
    }
}

export default function FilterButton({ buttonData }: TFilterButton) {
    
    return (
        <FilterButton__wrapper>

        </FilterButton__wrapper>
    );
}