import styled from 'styled-components';
import DashPassIcon from '../../../Icons/DashPassIcon';
import Information from '../../../Icons/InformationIcon';
import { useAppSelector } from '../../../../app-redux/hooks';

const DeliveryTileWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 62px;
    border-radius: 8px;
    border: 1px solid var(--primary-gray);
    margin: 10px 0;
`;

const DeliveryTileHalfWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 100%;
    position: relative;
`;

const DeliveryTileDashPassWrapper = styled.div<{ isDelivery: boolean }>`
    position: absolute;
    left: ${(props) => (props.isDelivery ? '34px' : '28px')};
    top: 10px;
`;

const DeliveryTileDivider = styled.div`
    height: 28px;
    border-left: 1px solid var(--primary-gray);
`;

const DeliveryTimeTextStrongTeal = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-teal);
    letter-spacing: -0.4px;
    margin-bottom: -1px;
`;

const DeliveryTimeTextStrong = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-black);
    letter-spacing: -0.4px;
    margin-bottom: -1px;
`;

const DeliveryTimeTextRegular = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const DeliveryTimeInformationWrapper = styled.div`
    position: absolute;
    right: 31px;
    bottom: 13px;
`;

type TDeliveryTime = {
    deliveryTime: string;
    pickupTime: string;
};

export default function DeliveryTile({ deliveryTime, pickupTime }: TDeliveryTime) {
    const isDelivery = useAppSelector((state) => state.deliverySlice.isDelivery);

    return (
        <DeliveryTileWrapper>
            <DeliveryTileHalfWrapper>
                <DeliveryTileDashPassWrapper isDelivery={isDelivery}>
                    <DashPassIcon color="var(--primary-teal)" />
                </DeliveryTileDashPassWrapper>
                <DeliveryTimeTextStrongTeal>
                    {isDelivery ? '$0.00' : '5% back'}
                </DeliveryTimeTextStrongTeal>
                <DeliveryTimeTextRegular>
                    {isDelivery ? 'delivery fee' : 'and $0 fees'}
                </DeliveryTimeTextRegular>
                <DeliveryTimeInformationWrapper>
                    <Information />
                </DeliveryTimeInformationWrapper>
            </DeliveryTileHalfWrapper>
            <DeliveryTileDivider />
            <DeliveryTileHalfWrapper>
                <DeliveryTimeTextStrong>
                    {isDelivery ? deliveryTime : pickupTime}
                </DeliveryTimeTextStrong>
                <DeliveryTimeTextRegular>
                    {isDelivery ? 'delivery time' : 'ready for pickup'}
                </DeliveryTimeTextRegular>
            </DeliveryTileHalfWrapper>
        </DeliveryTileWrapper>
    );
}
