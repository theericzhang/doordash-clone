import styled from "styled-components";
import Heart from "../../../Icons/HeartIcon";
import GroupOfPeople from "../../../Icons/GroupOfPeopleIcon";
import { useState } from "react";

const AuxOptions__wrapper = styled.div`
    display: flex;
    height: 40px;
    column-gap: 15px;
    margin-bottom: 5px;
`;

const AuxOptions__Button__primary = styled.button`
    display: flex;
    height: 100%;
    background-color: var(--primary-gray);
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 0 12px;
    column-gap: 10px;
`;

const AuxOptions__Button__label = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`;

const AuxOptions__Toggle__wrapper = styled.button`
    display: flex;
    align-items: center;
    height: 100%;
    background-color: var(--primary-gray);
    border: none;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    width: 195px;
    transition: 0.15s ease;
    transition-property: background-color;
    justify-content: space-around;

    &:hover {
        cursor: pointer;
        transition: 0.15s ease;
        transition-property: background-color;
        background-color: var(--secondary-gray);
    }
`;

const AuxOptions__Toggle__slider = styled.div<{isDelivery: boolean}>`
    display: flex;
    background-color: var(--primary-black);
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 24px;
    border-radius: 20px;
    transition: 0.15s ease;
    transition-property: background-color;
    position: absolute;
    left: ${props => props.isDelivery ? '0px' : 'unset'}; // something's wrong here
    right: ${props => !props.isDelivery ? '0px' : 'unset'};
    z-index: 1;

    &:hover {
        cursor: pointer;
        transition: 0.15s ease;
        transition-property: background-color;
        background-color: var(--tertiary-gray);
    }
`;

const AuxOptions__Toggle__label__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1px;
    margin-bottom: 1px;
`;

const AuxOptions__Toggle__label__wrapper__stationary__left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1px;
    margin-bottom: 1px;
`

const AuxOptions__Toggle__label__wrapper__stationary__right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1px;
    margin-bottom: 1px;
`

const AuxOptions__Toggle__label__small = styled.span`
    font-size: 12px;
    color: var(--quaternary-gray);
`;

const AuxOptions__Toggle__label = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-white);
`;

const AuxOptions__Toggle__label__small__stationary = styled.span`
    font-size: 12px;
    color: var(--secondary-black);
`;

const AuxOptions__Toggle__label__stationary = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`;

export default function AuxOptions() {
    
    const [ isDelivery, setIsDelivery ] = useState(true);

    return (
        <AuxOptions__wrapper>
            <AuxOptions__Button__primary>
                <Heart />
                <AuxOptions__Button__label>Save</AuxOptions__Button__label>
            </AuxOptions__Button__primary>
            <AuxOptions__Button__primary>
                <GroupOfPeople />
                <AuxOptions__Button__label>
                    Group Order
                </AuxOptions__Button__label>
            </AuxOptions__Button__primary>
            {/* TODO: STOP EVENT PROPOGATION TO SLIDER COMPONENT. ANIMATE SLIDER COMPONENT TO MOVE ACROSS. CLEAN UP UNNEEDED CSS */}
            <AuxOptions__Toggle__wrapper onClick={(e) => {
                setIsDelivery(prevIsDelivery => !prevIsDelivery);
            }}>
                <AuxOptions__Toggle__slider 
                    isDelivery={isDelivery}
                    onClick={(e) => e.stopPropagation()}
                >
                    <AuxOptions__Toggle__label__wrapper>
                        <AuxOptions__Toggle__label>
                            {isDelivery ? 'Delivery' : 'Pickup'}
                        </AuxOptions__Toggle__label>
                        <AuxOptions__Toggle__label__small>
                            {isDelivery ? '22' : '14'} min
                        </AuxOptions__Toggle__label__small>
                    </AuxOptions__Toggle__label__wrapper>
                </AuxOptions__Toggle__slider>

                <AuxOptions__Toggle__label__wrapper__stationary__left>
                    <AuxOptions__Toggle__label__stationary>
                        Delivery
                    </AuxOptions__Toggle__label__stationary>
                    <AuxOptions__Toggle__label__small__stationary>
                        22 min
                    </AuxOptions__Toggle__label__small__stationary>
                </AuxOptions__Toggle__label__wrapper__stationary__left>
                <AuxOptions__Toggle__label__wrapper__stationary__right>
                    <AuxOptions__Toggle__label__stationary>
                        Pickup
                    </AuxOptions__Toggle__label__stationary>
                    <AuxOptions__Toggle__label__small__stationary>
                        14 min
                    </AuxOptions__Toggle__label__small__stationary>
                </AuxOptions__Toggle__label__wrapper__stationary__right>
            </AuxOptions__Toggle__wrapper>
        </AuxOptions__wrapper>
    );
}
