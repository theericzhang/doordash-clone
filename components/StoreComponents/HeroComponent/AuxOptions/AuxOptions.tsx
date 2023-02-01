import styled from 'styled-components';
import Heart from '../../../Icons/HeartIcon';
import GroupOfPeople from '../../../Icons/GroupOfPeopleIcon';

// redux global state
import { useAppSelector, useAppDispatch } from '../../../../app-redux/hooks';
import { toggleDeliveryState } from '../../../../app-redux/features/delivery/deliverySlice';

const AuxOptionsWrapper = styled.div`
    display: flex;
    height: 40px;
    column-gap: 15px;
    margin-bottom: 5px;

    @media screen and (max-width: 480px) {
        align-items: center;
    }
`;

const AuxOptionsButtonPrimary = styled.button`
    display: flex;
    height: 100%;
    background-color: var(--primary-gray);
    transition: 0.15s ease;
    transition-property: background-color;
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 0 12px;
    column-gap: 10px;
    color: inherit;

    &:hover {
        cursor: pointer;
        transition: 0.15s ease;
        transition-property: background-color;
        background-color: var(--secondary-gray);
    }

    // equivalent to onMouseDown
    &:active {
        transition: 0.15s ease;
        transition-property: background-color;
        background-color: var(--quaternary-gray);
    }

    &:visited {
        color: inherit;
        background-color: inherit;
    }

    @media screen and (max-width: 480px) {
        padding: 0 8px;
        height: 32px;
    }
`;

const AuxOptionsButtonLabel = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

const AuxOptionsToggleWrapper = styled.button`
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

    // equivalent to onMouseDown
    &:active {
        transition: 0.15s ease;
        transition-property: background-color;
        background-color: var(--quaternary-gray);
    }
`;

const AuxOptionsToggleSlider = styled.div<{ isDelivery: boolean }>`
    display: flex;
    background-color: var(--primary-black);
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 24px;
    border-radius: 20px;
    transition: 0.25s ease;
    transition-property: background-color;
    position: absolute;
    left: ${(props) => (props.isDelivery ? '0px' : 'unset')};
    right: ${(props) => (!props.isDelivery ? '0px' : 'unset')};
    z-index: 1;

    &:hover {
        cursor: pointer;
        transition: 0.25s ease;
        transition-property: background-color;
        background-color: var(--tertiary-gray);
    }
`;

const AuxOptionsToggleLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1px;
    margin-bottom: 1px;
`;

const AuxOptionsToggleLabelWrapperStationaryLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1px;
    margin-bottom: 1px;
`;

const AuxOptionsToggleLabelWrapperStationaryRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1px;
    margin-bottom: 1px;
`;

const AuxOptionsToggleLabelSmall = styled.span`
    font-size: 12px;
    color: var(--quaternary-gray);
`;

const AuxOptionsToggleLabel = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-white);
`;

const AuxOptionsToggleLabelSmallStationary = styled.span`
    font-size: 12px;
    color: var(--secondary-black);
`;

const AuxOptionsToggleLabelStationary = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-black);
`;

type TAuxOptions = {
    deliveryTime: string;
    pickupTime: string;
};

export default function AuxOptions({ deliveryTime, pickupTime }: TAuxOptions) {
    const isDelivery = useAppSelector((state) => state.deliverySlice.isDelivery);
    const dispatch = useAppDispatch();

    return (
        <AuxOptionsWrapper>
            <AuxOptionsButtonPrimary>
                <Heart />
                <AuxOptionsButtonLabel>Save</AuxOptionsButtonLabel>
            </AuxOptionsButtonPrimary>
            <AuxOptionsButtonPrimary>
                <GroupOfPeople />
                <AuxOptionsButtonLabel>
                    Group Order
                </AuxOptionsButtonLabel>
            </AuxOptionsButtonPrimary>
            <AuxOptionsToggleWrapper
                onClick={() => {
                    dispatch(toggleDeliveryState());
                }}
                aria-label="Selected delivery option"
                role="switch"
                aria-checked={isDelivery ? 'true' : 'false'}
            >
                <AuxOptionsToggleSlider
                    isDelivery={isDelivery}
                    onClick={(e) => e.stopPropagation()}
                    role="none"
                >
                    <AuxOptionsToggleLabelWrapper>
                        <AuxOptionsToggleLabel>
                            {isDelivery ? 'Delivery' : 'Pickup'}
                        </AuxOptionsToggleLabel>
                        <AuxOptionsToggleLabelSmall>
                            {isDelivery ? deliveryTime : pickupTime}
                        </AuxOptionsToggleLabelSmall>
                    </AuxOptionsToggleLabelWrapper>
                </AuxOptionsToggleSlider>

                <AuxOptionsToggleLabelWrapperStationaryLeft>
                    <AuxOptionsToggleLabelStationary>
                        Delivery
                    </AuxOptionsToggleLabelStationary>
                    <AuxOptionsToggleLabelSmallStationary>
                        {deliveryTime}
                    </AuxOptionsToggleLabelSmallStationary>
                </AuxOptionsToggleLabelWrapperStationaryLeft>
                <AuxOptionsToggleLabelWrapperStationaryRight>
                    <AuxOptionsToggleLabelStationary>
                        Pickup
                    </AuxOptionsToggleLabelStationary>
                    <AuxOptionsToggleLabelSmallStationary>
                        {pickupTime}
                    </AuxOptionsToggleLabelSmallStationary>
                </AuxOptionsToggleLabelWrapperStationaryRight>
            </AuxOptionsToggleWrapper>
        </AuxOptionsWrapper>
    );
}
