import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const RestaurantCard__article = styled.article`
    min-width: 374px;
    height: 245px;
    scroll-snap-align: start;
`;

const RestaurantCard__link = styled.a`
    display: flex;
    row-gap: 16px;
    flex-direction: column;
    text-decoration: none;
`;

const RestaurantCard__image__wrapper = styled.div`
    width: 100%;
    height: 172px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const RestaurantCard__image = styled(Image)`
    object-fit: cover;
`;

const RestaurantCard__bottom = styled.div`
    display: flex;
`;

const RestaurantCard__text = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 7px;
`;

const RestaurantCard__restaurantName = styled.h3`
    font-size: 16px;
    font-weight: 500;
`;

const RestaurantCard__auxInfo = styled.h5`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

type TRestaurantCard = {
    restaurantID: number,
    restaurantData: {
        restaurantName: string;
        restaurantImage: string;
        distance: string;
        deliveryTime: string;
    };
};

export default function RestaurantCard({ restaurantID, restaurantData } : TRestaurantCard) {
    return (
        <RestaurantCard__article>
            <Link href={`/store/${restaurantID}`} passHref legacyBehavior>
                <RestaurantCard__link>
                    <RestaurantCard__image__wrapper>
                        <RestaurantCard__image
                            src={restaurantData.restaurantImage}
                            placeholder="blur"
                            blurDataURL="/images/Blur.png"
                            alt={"A closeup of a New York style pizza pie"}
                            fill={true}
                        />
                    </RestaurantCard__image__wrapper>
                    <RestaurantCard__bottom>
                        <RestaurantCard__text>
                            <RestaurantCard__restaurantName>
                                {restaurantData.restaurantName}
                            </RestaurantCard__restaurantName>
                            <RestaurantCard__auxInfo>
                                {restaurantData.distance} • {restaurantData.deliveryTime} • $0 delivery fee over $12
                            </RestaurantCard__auxInfo>
                        </RestaurantCard__text>
                    </RestaurantCard__bottom>
                </RestaurantCard__link>
            </Link>
        </RestaurantCard__article>
    );
}
