import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { TRestaurantDataPrimary } from '../../../global';
import DashPassIcon from '../../Icons/DashPassIcon';
import Shimmer from '../../Placeholders/Shimmer';

const RestaurantCardArticle = styled.article`
    min-width: 374px;
    height: 245px;
    scroll-snap-align: start;


    @media screen and (max-width: 1280px) {
        flex: 0 0 calc((100% - 32px) / 3);
        min-width: unset;
    }

    @media screen and (max-width: 960px) {
        flex: 0 0 calc((100% - 16px) / 2);
    }

    @media screen and (max-width: 770px) {
        flex: 0 0 346px;
    }

    @media screen and (max-width: 480px) {
        flex: 0 0 293px;
    }
`;

const RestaurantCardLink = styled.a`
    display: flex;
    row-gap: 14px;
    flex-direction: column;
    text-decoration: none;
`;

const RestaurantCardImageWrapper = styled.div`
    width: 100%;
    height: 172px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 480px) {
        height: 144px;
    }
`;

const RestaurantCardImage = styled(Image)`
    object-fit: cover;
    transition: 0.3s;
`;

const RestaurantCardBottom = styled.div`
    display: flex;
`;

const RestaurantCardText = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`;

const RestaurantCardRestaurantNameLabel = styled.div`
    display: flex;
    align-items: center;
    column-gap: 6px;
    margin: 0 2px;
`;

const RestaurantCardRestaurantName = styled.span`
    font-size: 16px;
    font-weight: 500;
`;

const RestaurantCardAuxInfo = styled.span`
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
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <RestaurantCardArticle>
            <Link href={`/store/${restaurantID}`} passHref legacyBehavior>
                <RestaurantCardLink>
                    <RestaurantCardImageWrapper>
                        {isImageLoading ? <Shimmer width={600} /> : null}
                        <RestaurantCardImage
                            src={restaurantData.restaurantImage.src}
                            placeholder="blur"
                            blurDataURL="/images/Blur.webp"
                            alt={restaurantData.restaurantImage.alt}
                            fill
                            sizes="(max-width: 960px) 440px , 440px"
                            loading={index < 3 ? 'eager' : 'lazy'}
                            decoding={index < 3 ? 'async' : 'sync'}
                            onLoadingComplete={() => { setIsImageLoading(false); }}
                        />
                    </RestaurantCardImageWrapper>
                    <RestaurantCardBottom>
                        <RestaurantCardText>
                            <RestaurantCardRestaurantNameLabel aria-label={`${restaurantData.restaurantName} is ${restaurantData.distance} away. Time will take ${restaurantData.deliveryTime}. Get $0 delivery fee over $12.`}>
                                <DashPassIcon color="var(--primary-teal)" />
                                <RestaurantCardRestaurantName>
                                    {restaurantData.restaurantName}
                                </RestaurantCardRestaurantName>
                            </RestaurantCardRestaurantNameLabel>
                            <RestaurantCardAuxInfo aria-hidden="true">
                                {restaurantData.distance}
                                {' '}
                                •
                                {' '}
                                {restaurantData.deliveryTime}
                                {' '}
                                • $0 delivery fee over $12
                            </RestaurantCardAuxInfo>
                        </RestaurantCardText>
                    </RestaurantCardBottom>
                </RestaurantCardLink>
            </Link>
        </RestaurantCardArticle>
    );
}
