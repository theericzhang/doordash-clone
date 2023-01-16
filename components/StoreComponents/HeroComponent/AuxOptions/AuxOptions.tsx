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

const AuxOptions__Toggle = styled.button<{ isDelivery: boolean }>`
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: ${props => props.isDelivery ? 'var(--primary-black)' : 'var(--primary-gray)'};
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 0 24px;
`;

const AuxOptions__Button__label = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`;

const AuxOptions__Toggle__label__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1px;
    margin-bottom: 1px;
`

const AuxOptions__Toggle__label__small = styled.span<{isDelivery: boolean}>`
    font-size: 12px;
    color: ${props => props.isDelivery ? `var(--quaternary-gray)` : `var(--secondary-black)`};
`;

const AuxOptions__Toggle__label = styled.span<{isDelivery: boolean}>`
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.isDelivery ? `var(--primary-white)` : `var(--primary-black)`};
`;

const AuxOptions__Toggle__wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    background-color: var(--primary-gray);
    border: none;
    border-radius: 20px;
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
            <AuxOptions__Toggle__wrapper>
                <AuxOptions__Toggle isDelivery={isDelivery}>
                    <AuxOptions__Toggle__label__wrapper>
                        <AuxOptions__Toggle__label isDelivery={isDelivery}>
                            Delivery
                        </AuxOptions__Toggle__label>
                        <AuxOptions__Toggle__label__small isDelivery={isDelivery}>
                            22 min
                        </AuxOptions__Toggle__label__small>
                    </AuxOptions__Toggle__label__wrapper>
                </AuxOptions__Toggle>
                <AuxOptions__Toggle isDelivery={!isDelivery}>
                    <AuxOptions__Toggle__label__wrapper>
                        <AuxOptions__Toggle__label isDelivery={!isDelivery}>
                            Pickup
                        </AuxOptions__Toggle__label>
                        <AuxOptions__Toggle__label__small isDelivery={!isDelivery}>
                            14 min
                        </AuxOptions__Toggle__label__small>
                    </AuxOptions__Toggle__label__wrapper>
                </AuxOptions__Toggle>
            </AuxOptions__Toggle__wrapper>
        </AuxOptions__wrapper>
    );
}
