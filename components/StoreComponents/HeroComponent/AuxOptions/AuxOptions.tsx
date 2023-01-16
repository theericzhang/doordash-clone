import styled from "styled-components";
import Heart from "../../../Icons/HeartIcon";
import GroupOfPeople from "../../../Icons/GroupOfPeopleIcon";

const AuxOptions__wrapper = styled.div`
    display: flex;
    height: 40px;
    column-gap: 15px;
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

const AuxOptions__Toggle__selected = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background-color: var(--primary-black);
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 0 20px;
    column-gap: 10px;
`;

const AuxOptions__Toggle = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background-color: var(--primary-gray);
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 0 20px;
    column-gap: 10px;
`;

const AuxOptions__Button__label = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`;

const AuxOptions__Toggle__label__small = styled.span`
    font-size: 12px;
    color: var(--secondary-black);
`

const AuxOptions__Toggle__label = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`;

const AuxOptions__Toggle__label__selected = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-white);
`;

const AuxOptions__Toggle__label__selected__small = styled.span`
    font-size: 12px;
    color: var(--quaternary-gray);
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
                <AuxOptions__Toggle__selected>
                    <AuxOptions__Toggle__label__selected>
                        Delivery
                    </AuxOptions__Toggle__label__selected>
                    <AuxOptions__Toggle__label__selected__small>
                        22 min
                    </AuxOptions__Toggle__label__selected__small>
                </AuxOptions__Toggle__selected>
                <AuxOptions__Toggle>
                    <AuxOptions__Toggle__label>
                        Pickup
                    </AuxOptions__Toggle__label>
                    <AuxOptions__Toggle__label__small>
                        14 min
                    </AuxOptions__Toggle__label__small>
                </AuxOptions__Toggle>
            </AuxOptions__Toggle__wrapper>
        </AuxOptions__wrapper>
    );
}
