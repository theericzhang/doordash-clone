import styled from 'styled-components';
import FilterButton from './FilterButton';
import DashPass from '../Icons/DashPassIcon';
import Coupon from '../Icons/CouponIcon';
import Star from '../Icons/StarIcon';

const FilterButtonRowWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 62px;
    background-color: var(--primary-white);
    position: sticky;
    top: 64px;
    border-bottom: 1px solid var(--primary-gray);
    z-index: 1;

    @media screen and (max-width: 770px) {
        height: 56px;
        width: unset;
    }
`;

const FilterButtonRowResizer = styled.div`

    width: 1152px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1280px) {
        width: unset;
        max-width: 100%;
        margin: 30px 64px;
    }

    @media screen and (max-width: 1185px) {
        margin: 30px 48px;
    }

    @media screen and (max-width: 960px) {
        margin: 30px 32px;
    }

    @media screen and (max-width: 770px) {
        margin: 30px 0;
        overflow-x: scroll;
        // hide scrollbar style
        -ms-overflow-style: none; // IE and Edge
        scrollbar-width: none; // Firefox
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

const FilterButtonRowList = styled.fieldset`
    display: flex;
    column-gap: 8px;
    border: none;

    @media screen and (max-width: 770px) {
        padding: 0 32px;
        width: max-content;
    }

    @media screen and (max-width: 480px) {
        padding: 0 16px;
    }
`;

export default function FilterButtonRow() {
    const filterButtonData = [
        {
            buttonLabel: 'DashPass',
            leftLogo: <DashPass />,
            rightLogo: null,
            hasDivider: false,
            hasDropdown: false,
        },
        {
            buttonLabel: 'Offers',
            leftLogo: <Coupon />,
            rightLogo: null,
            hasDivider: false,
            hasDropdown: false,
        },
        {
            buttonLabel: 'Pickup',
            leftLogo: null,
            rightLogo: null,
            hasDivider: false,
            hasDropdown: false,
        },
        {
            buttonLabel: 'Over 4.5',
            leftLogo: null,
            rightLogo: <Star />,
            hasDivider: true,
            hasDropdown: true,
        },
        {
            buttonLabel: 'Under 30 min',
            leftLogo: null,
            rightLogo: null,
            hasDivider: false,
            hasDropdown: false,
        },
        {
            buttonLabel: 'Price',
            leftLogo: null,
            rightLogo: null,
            hasDivider: false,
            hasDropdown: true,
        },
    ];

    return (
        <FilterButtonRowWrapper>
            <FilterButtonRowResizer>
                <FilterButtonRowList>
                    {filterButtonData.map((buttonData) => (
                        <FilterButton
                            buttonData={buttonData}
                            key={buttonData.buttonLabel}
                        />
                    ))}
                </FilterButtonRowList>
            </FilterButtonRowResizer>
        </FilterButtonRowWrapper>
    );
}
