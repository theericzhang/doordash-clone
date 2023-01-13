import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { TRestaurantDataPrimary } from "../../../global";
import DashPassIcon from "../../Icons/DashPassIcon";

const RestaurantCard__article = styled.article`
    min-width: 374px;
    height: 245px;
    scroll-snap-align: start;
`;

const RestaurantCard__link = styled.a`
    display: flex;
    row-gap: 14px;
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
    row-gap: 4px;
`;

const RestaurantCard__restaurantName__label = styled.div`
    display: flex;
    align-items: center;
    column-gap: 6px;
    margin: 0 2px;
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
    restaurantData: TRestaurantDataPrimary;
    index: number;
};

export default function RestaurantCard({ restaurantID, restaurantData, index } : TRestaurantCard) {
    return (
        <RestaurantCard__article>
            <Link href={`/store/${restaurantID}`} passHref legacyBehavior>
                <RestaurantCard__link>
                    <RestaurantCard__image__wrapper>
                        {/* TODO: add a srizes property to improve loading performance */}
                        <RestaurantCard__image
                            src={restaurantData.restaurantImage.src}
                            placeholder="blur"
                            blurDataURL="/images/Blur.webp"
                            alt={restaurantData.restaurantImage.alt}
                            fill={true}
                            sizes="(max-width: 960px) 440px , 440px"
                            loading={index < 3 ? "eager" : "lazy"}
                        />
                    </RestaurantCard__image__wrapper>
                    <RestaurantCard__bottom>
                        <RestaurantCard__text>
                            <RestaurantCard__restaurantName__label>
                                <DashPassIcon color={`var(--primary-teal)`} />
                                <RestaurantCard__restaurantName>
                                    {restaurantData.restaurantName}
                                </RestaurantCard__restaurantName>
                            </RestaurantCard__restaurantName__label>
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
