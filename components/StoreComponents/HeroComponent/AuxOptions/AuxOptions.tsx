import styled from "styled-components";
import Heart from "../../../Icons/HeartIcon";

const AuxOptions__wrapper = styled.div`
    display: flex;
    height: 40px;
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
`

const AuxOptions__Button__label = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`

export default function AuxOptions() {
    return (
        <AuxOptions__wrapper>
            <AuxOptions__Button__primary>
                <Heart />
                <AuxOptions__Button__label>
                    Save
                </AuxOptions__Button__label>
            </AuxOptions__Button__primary>
        </AuxOptions__wrapper>
    );
}