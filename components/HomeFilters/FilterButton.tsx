import styled from "styled-components";
import DashPass from "../Icons/DashPassIcon";
import Coupon from "../Icons/CouponIcon";
import Star from "../Icons/StarIcon";
import { JsxElement } from "typescript";

const FilterButton__wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
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
        </FilterButton__wrapper>
    );
}