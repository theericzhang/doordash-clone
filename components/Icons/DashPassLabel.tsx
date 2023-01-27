import styled from 'styled-components';
import DashPassIcon from './DashPassIcon';

type TDashPass = {
    isFull: boolean;
};

const DashPassLabelWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 2px;
`;

const DashPassLabelSpan = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-teal);
`;

export default function DashPassLabel({ isFull }: TDashPass) {
    return (
        isFull ?
            <DashPassLabelWrapper>
                <DashPassIcon
                    size={20}
                    color="var(--primary-teal)"
                />
                <DashPassLabelSpan>
                    DashPass
                </DashPassLabelSpan>
            </DashPassLabelWrapper>
            :
            <DashPassLabelWrapper>
                <DashPassIcon />
            </DashPassLabelWrapper>
    );
}
