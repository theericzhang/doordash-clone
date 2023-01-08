import styled from "styled-components";
import DashPass from "../Icons/DashPassIcon";
import Coupon from "../Icons/CouponIcon";
import Star from "../Icons/StarIcon";

const FilterButton__wrapper = styled.button`
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
`

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
            <FilterButton__buttonLabel>{buttonData.buttonLabel}</FilterButton__buttonLabel>
        </FilterButton__wrapper>
    );
}