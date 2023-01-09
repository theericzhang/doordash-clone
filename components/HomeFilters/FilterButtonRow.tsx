import styled from "styled-components";
import FilterButton from "./FilterButton";
import DashPass from "../Icons/DashPassIcon";
import Coupon from "../Icons/CouponIcon";
import Star from "../Icons/StarIcon";

const FilterButtonRow__wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 62px;
    background-color: var(--primary-white);
    position: sticky;
    top: 64px;
    padding: 0 320px;
    border-bottom: 1px solid var(--primary-gray);
    z-index: 1;
`;

const FilterButtonRow__list = styled.ul`
    display: flex;
    column-gap: 8px;
    list-style: none;
`;

export default function FilterButtonRow() {
    const filterButtonData = [
        {
            "buttonLabel": "DashPass",
            "leftLogo": <DashPass />,
            "rightLogo": null,
            "hasDivider": false,
            "hasDropdown": false
        },
        {
            "buttonLabel": "Offers",
            "leftLogo": <Coupon />,
            "rightLogo": null,
            "hasDivider": false,
            "hasDropdown": false
        },
        {
            "buttonLabel": "Pickup",
            "leftLogo": null,
            "rightLogo": null,
            "hasDivider": false,
            "hasDropdown": false
        },
        {
            "buttonLabel": "Over 4.5",
            "leftLogo": null,
            "rightLogo": <Star />,
            "hasDivider": true,
            "hasDropdown": true
        },
        {
            "buttonLabel": "Under 30 min",
            "leftLogo": null,
            "rightLogo": null,
            "hasDivider": false,
            "hasDropdown": false
        },
        {
            "buttonLabel": "Price",
            "leftLogo": null,
            "rightLogo": null,
            "hasDivider": false,
            "hasDropdown": true
        }
    ];


    
    return (
        <FilterButtonRow__wrapper>
            <FilterButtonRow__list>
                {
                    filterButtonData.map(buttonData => {
                        return (
                            <FilterButton 
                                buttonData={buttonData} 
                                key={buttonData.buttonLabel}
                            />
                        )
                    })
                }
            </FilterButtonRow__list>
        </FilterButtonRow__wrapper>
    );
}