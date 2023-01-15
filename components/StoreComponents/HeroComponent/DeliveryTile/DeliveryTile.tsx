import styled from "styled-components";
import DashPassIcon from "../../../Icons/DashPassIcon";
import Information from "../../../Icons/InformationIcon";

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

const DeliveryTile__DashPass__wrapper = styled.div`
    position: absolute;
    left: 10px;
`;

const DeliveryTile__divider = styled.div`
    height: 28px;
    border-left: 1px solid var(--primary-gray);
`;

const DeliveryTime__text_strong_teal = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-teal);
`;

const DeliveryTime__text_strong = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-black);
`;

const DeliveryTime__text_regular = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

export default function DeliveryTile() {
    return (
        <DeliveryTile__wrapper>
            <DeliveryTile__half__wrapper>
                <DeliveryTile__DashPass__wrapper>
                    <DashPassIcon color={`var(--primary-teal)`}/>
                </DeliveryTile__DashPass__wrapper>
                <DeliveryTime__text_strong_teal>
                    $0.00
                </DeliveryTime__text_strong_teal>
                <DeliveryTime__text_regular>
                    delivery fee
                </DeliveryTime__text_regular>
            </DeliveryTile__half__wrapper>
            <DeliveryTile__divider />
            <DeliveryTile__half__wrapper>
                <DeliveryTime__text_strong>
                    29 min
                </DeliveryTime__text_strong>
                <DeliveryTime__text_regular>
                    delivery time
                </DeliveryTime__text_regular>
            </DeliveryTile__half__wrapper>
        </DeliveryTile__wrapper>
    );
}