import Image from "next/image";
import styled from "styled-components";
import InputStepper from "../InputStepper/InputStepper";

const CartItem__wrapper = styled.a`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    padding-left: 5px;
    padding-right: 16px;
    border-bottom: 1px solid var(--primary-gray);
`;

const CartItem__image__wrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const CartItem__image = styled(Image)`
    object-fit: cover;
`;

const CartItem__description__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    margin-right: 9.5px;
    max-width: 98px;
`;

const CartItem__description__item = styled.span`
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

const CartItem__description__price = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--primary-black);
`;

export default function CartItem() {
    return (
        <CartItem__wrapper>
            <CartItem__image__wrapper>
                <CartItem__image 
                    src="/images/65341/GarlicKnots.webp"
                    alt="yummy LOL"
                    sizes="80px"
                    fill={true}
                />
            </CartItem__image__wrapper>
            <CartItem__description__wrapper>
                <CartItem__description__item>
                    Rice & Black Beans Rice & Black Beans Rice & Black Beans Rice & Black Beans Rice & Black Beans
                </CartItem__description__item>
                <CartItem__description__price>
                    $8.99
                </CartItem__description__price>
            </CartItem__description__wrapper>
            <InputStepper />
        </CartItem__wrapper>
    );
}