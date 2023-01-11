import DashPassIcon from './DashPassIcon';
import styled from 'styled-components';

type TDashPass = {
    isFull: boolean;
};

const DashPassLabel__wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 2px;
`;

const DashPassLabel__span = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-teal);
`;

export default function DashPassLabel({ isFull }: TDashPass) {
    return (
        isFull ?
            // style this dashpass area
            <DashPassLabel__wrapper>
                <DashPassIcon 
                    size={20}
                    color={`var(--primary-teal)`}
                />
                <DashPassLabel__span>
                    DashPass
                </DashPassLabel__span>
            </DashPassLabel__wrapper>
        :
            <DashPassLabel__wrapper>
                <DashPassIcon />
            </DashPassLabel__wrapper>
    );
}