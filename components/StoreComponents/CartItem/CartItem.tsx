import Image from 'next/image';
import styled from 'styled-components';
import InputStepper from '../InputStepper/InputStepper';

const CartItemWrapper = styled.a`
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    align-items: center;
    padding: 16px 0;
    padding-left: 5px;
    padding-right: 16px;
    border-bottom: 1px solid var(--primary-gray);
    background-color: transparent;
    text-align: left;
`;

const CartItemImageWrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const CartItemImage = styled(Image)`
    object-fit: cover;
`;

const CartItemDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    margin-right: 9.5px;
    max-width: 98px;
`;

const CartItemDescriptionItem = styled.span`
    max-width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-black);
    line-height: 22px;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
`;

const CartItemDescriptionPrice = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--primary-black);
`;

type TCartItem = {
    imageSrc: string;
    imageAlt: string;
    itemName: string;
    price: number;
    itemID: number;
};

export default function CartItem({
    imageSrc, imageAlt, itemName, price, itemID
}: TCartItem) {
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <CartItemWrapper
            aria-label={`Cart Item: ${itemName}.`}
            // eslint-disable-next-line styled-components-a11y/no-noninteractive-tabindex
            tabIndex={0}
        >
            <CartItemImageWrapper>
                <CartItemImage
                    src={imageSrc}
                    alt={imageAlt}
                    sizes="80px"
                    fill
                />
            </CartItemImageWrapper>
            <CartItemDescriptionWrapper>
                <CartItemDescriptionItem>
                    {itemName}
                </CartItemDescriptionItem>
                <CartItemDescriptionPrice>
                    {priceFormatter.format(price)}
                </CartItemDescriptionPrice>
            </CartItemDescriptionWrapper>
            <InputStepper
                itemID={itemID}
            />
        </CartItemWrapper>
    );
}
