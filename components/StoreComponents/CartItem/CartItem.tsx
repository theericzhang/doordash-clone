import Image from "next/image";
import styled from "styled-components";

const CartItem__wrapper = styled.a`
    width: 100%;
    display: flex;
    padding: 16px 0;
    padding-left: 5px;
    border-bottom: 1px solid var(--primary-gray);
`;

const CartItem__image__wrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 3px;
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
`;

const CartItem__description__span = styled.span`
    font-size: 16px;
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
                <CartItem__description__span>
                    Garlic Knots
                </CartItem__description__span>
                <CartItem__description__span>
                    $8.99
                </CartItem__description__span>
            </CartItem__description__wrapper>
        </CartItem__wrapper>
    );
}