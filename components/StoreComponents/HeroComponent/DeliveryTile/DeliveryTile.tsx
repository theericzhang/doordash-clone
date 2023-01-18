import styled from "styled-components";
import DashPassIcon from "../../../Icons/DashPassIcon";
import Information from "../../../Icons/InformationIcon";
import { useAppSelector } from "../../../../app-redux/hooks";

const DeliveryTile__wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 62px;
    border-radius: 8px;
    border: 1px solid var(--primary-gray);
    margin: 10px 0;
`;

const DeliveryTile__half__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 100%;
    position: relative;
`;

const DeliveryTile__DashPass__wrapper = styled.div<{ isDelivery: boolean }>`
    position: absolute;
    left: ${props => props.isDelivery ? '34px' : '28px'};
    top: 10px;
`;

const DeliveryTile__divider = styled.div`
    height: 28px;
    border-left: 1px solid var(--primary-gray);
`;

const DeliveryTime__text_strong_teal = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-teal);
    letter-spacing: -0.4px;
    margin-bottom: -1px;
`;

const DeliveryTime__text_strong = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-black);
    letter-spacing: -0.4px;
    margin-bottom: -1px;
`;

const DeliveryTime__text_regular = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const DeliveryTime__Information__wrapper = styled.div`
    position: absolute;
    right: 31px;
    bottom: 13px;
`;

type TDeliveryTime = {
    deliveryTime: string;
    pickupTime: string;
}

export default function DeliveryTile({ deliveryTime, pickupTime }: TDeliveryTime) {
    const isDelivery = useAppSelector((state) => state.deliverySlice.isDelivery);

    return (
        <DeliveryTile__wrapper>
            <DeliveryTile__half__wrapper>
                <DeliveryTile__DashPass__wrapper isDelivery={isDelivery}>
                    <DashPassIcon color={`var(--primary-teal)`}/>
                </DeliveryTile__DashPass__wrapper>
                <DeliveryTime__text_strong_teal>
                    {isDelivery ? '$0.00' : '5% back'}
                </DeliveryTime__text_strong_teal>
                <DeliveryTime__text_regular>
                    {isDelivery ? 'delivery fee' : 'and $0 fees'}
                </DeliveryTime__text_regular>
                <DeliveryTime__Information__wrapper>
                    <Information />
                </DeliveryTime__Information__wrapper>
            </DeliveryTile__half__wrapper>
            <DeliveryTile__divider />
            <DeliveryTile__half__wrapper>
                <DeliveryTime__text_strong>
                    {isDelivery ? deliveryTime : pickupTime}
                </DeliveryTime__text_strong>
                <DeliveryTime__text_regular>
                    {isDelivery ? 'delivery time' : 'ready for pickup'}
                </DeliveryTime__text_regular>
            </DeliveryTile__half__wrapper>
        </DeliveryTile__wrapper>
    );
}