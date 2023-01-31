import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { TRestaurantDataPrimary, TStorefrontData } from '../../../global';
import DashPassLabel from '../../Icons/DashPassLabel';
import DeliveryTile from './DeliveryTile/DeliveryTile';
import Star from '../../Icons/StarIcon';
import ClockIcon from '../../Icons/ClockIcon';
import Information from '../../Icons/InformationIcon';
import AuxOptions from './AuxOptions/AuxOptions';
import Shimmer from '../../Placeholders/Shimmer';

const HeroComponentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 928px;
    margin: 0 auto;
    position: relative;
    row-gap: 50px;

    @media screen and (max-width: 1300px) {
        padding: 0 16px;
        margin: 0;
        max-width: 100%;
        width: 100%;
    }

    @media screen and (max-width: 1185px) {
        width: calc(928px + 16px * 2);
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 0;
        // padding is 16px for other elements
    }
`;

const HeroComponentImagesCollection = styled.div`
    position: relative;
`;

const HeroComponentImageWrapper = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 480px) {
        border-radius: 0;
    }
`;

const HeroComponentStoreProfileImageArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: var(--primary-white);
    position: absolute;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, .2));
    bottom: -38px;
    left: 16px;
    z-index: 2;
`;

const HeroComponentStoreProfileImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 95%;
    height: 95%;
    border-radius: 100%;
`;

const HeroComponenSttoreProfileImage = styled(Image)`
    object-fit: cover;
`;

const HeroComponentImage = styled(Image)`
    object-fit: cover;
`;

const HeroComponentInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 4px;
    width: 100%;

    @media screen and (max-width: 480px) {
        padding: 0 16px;
    }
`;

const HeroComponentRestaurantName = styled.h2`
    font-weight: 500;
    font-size: 40px;
    color: var(--primary-black);
    letter-spacing: -1.1px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

const HeroComponentInformationPrimary = styled.div`
    display: flex;
`;

const HeroComponentInformationSpan = styled.span`
    display: flex;
    font-weight: 400;
    color: var(--quinary-gray);
    column-gap: 6px;
    font-size: 14px;
    align-items: center;

    @media screen and (max-width: 480px) {
        flex-wrap: wrap;
        width: 70%;
    }
`;

const HeroComponentInformationBullet = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const HeroComponentInformationRatingWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
`;

const HeroComponentInformationSecondary = styled.div`
    display: flex;
    margin: 6px 0;
    margin-bottom: 3.5px;
`;

const HeroComponentInformationTimeOpen = styled.span`
    display: flex;
    color: var(--primary-green);
    align-items: center;
    column-gap: 3px;
`;

const HeroComponentInformationTimeClosed = styled.span`
    display: flex;
    color: var(--primary-gold);
    align-items: center;
    column-gap: 3px;
`;

const HeroComponentInformationTertiary = styled.div`
    display: flex;
`;

const HeroComponentInformationQuaternary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

type TRestaurantData = {
    restaurantData: TRestaurantDataPrimary;
    storefrontData: TStorefrontData
};

export default function HeroComponent({ restaurantData, storefrontData }: TRestaurantData) {
    // already checking to see if storefrontData?.ratingCount exists. disable this lint rule
    // eslint-disable-next-line no-unsafe-optional-chaining
    const ratingsCountLocalized = storefrontData?.ratingCount && `${(Math.floor(storefrontData?.ratingCount / 1000) * 1000).toLocaleString()}+ ratings`;
    // in the future, validate time (isOpen) against a ground truth source instead of machine local.
    const currentTime = new Date();

    // create openTime to compare
    const openTime = new Date(currentTime);
    openTime.setHours(storefrontData.operationHours[0].openHour);
    openTime.setMinutes(storefrontData.operationHours[0].openMinute);

    // create closeTime to compare
    const closeTime = new Date(currentTime);
    closeTime.setHours(storefrontData.operationHours[0].closeHour);
    closeTime.setMinutes(storefrontData.operationHours[0].openMinute);

    const isOpen = currentTime > openTime && currentTime < closeTime;

    const [isProfileImageLoading, setIsProfileImageLoading] = useState(true);
    const [isHeroImageLoading, setIsHeroImageLoading] = useState(true);

    return (
        <HeroComponentWrapper>
            <HeroComponentImagesCollection>
                <HeroComponentImageWrapper>
                    {isHeroImageLoading ? <Shimmer width={1800} /> : null}
                    <HeroComponentImage
                        src={restaurantData.restaurantImage.src}
                        alt={restaurantData.restaurantImage.alt}
                        fill
                        sizes="440px"
                        priority
                        loading="eager"
                        onLoadingComplete={() => { setIsHeroImageLoading(false); }}
                    />
                </HeroComponentImageWrapper>
                <HeroComponentStoreProfileImageArea>
                    <HeroComponentStoreProfileImageWrapper>
                        {isProfileImageLoading ? <Shimmer width={180} /> : null}
                        <HeroComponenSttoreProfileImage
                            src={restaurantData.restaurantImage.src}
                            alt={restaurantData.restaurantImage.alt}
                            placeholder="blur"
                            blurDataURL="/images/Blur.webp"
                            fill
                            sizes="(max-width: 960px) 76px, 76px"
                            onLoadingComplete={() => { setIsProfileImageLoading(false); }}
                        />
                    </HeroComponentStoreProfileImageWrapper>
                </HeroComponentStoreProfileImageArea>
            </HeroComponentImagesCollection>
            {/* immediate info area */}
            <HeroComponentInformation>
                <HeroComponentRestaurantName>
                    {restaurantData.restaurantName}
                </HeroComponentRestaurantName>
                <HeroComponentInformationPrimary>
                    <HeroComponentInformationSpan>
                        {restaurantData.isDashPass ?
                            <>
                                <DashPassLabel isFull />
                                <HeroComponentInformationBullet>
                                    •
                                </HeroComponentInformationBullet>
                            </>
                            :
                            null}
                        {storefrontData.shortDescription ?
                            <>
                                {storefrontData.shortDescription}
                                <HeroComponentInformationBullet>
                                    •
                                </HeroComponentInformationBullet>
                            </>
                            :
                            null}
                        {storefrontData.averageRating ?
                            <HeroComponentInformationRatingWrapper>
                                {storefrontData.averageRating}
                                <Star
                                    color="var(--quinary-gray)"
                                    isInlineReview
                                />
                                {ratingsCountLocalized}
                                <HeroComponentInformationBullet>
                                    •
                                </HeroComponentInformationBullet>
                            </HeroComponentInformationRatingWrapper>
                            :
                            null}
                        {restaurantData.distance ?
                            <>
                                {restaurantData.distance}
                                <HeroComponentInformationBullet>
                                    •
                                </HeroComponentInformationBullet>
                            </>
                            :
                            null}
                        {storefrontData.priceRating ?
                            <>
                                {
                                    Array(storefrontData.priceRating).fill('$')
                                }
                            </>
                            :
                            null}
                    </HeroComponentInformationSpan>
                </HeroComponentInformationPrimary>
                <HeroComponentInformationSecondary>
                    <HeroComponentInformationSpan>
                        {isOpen ?
                            <HeroComponentInformationTimeOpen>
                                <ClockIcon />
                                Open now
                            </HeroComponentInformationTimeOpen>
                            :
                            <HeroComponentInformationTimeClosed>
                                <ClockIcon />
                                Closed now
                            </HeroComponentInformationTimeClosed>}
                    </HeroComponentInformationSpan>
                </HeroComponentInformationSecondary>
                <HeroComponentInformationTertiary>
                    <HeroComponentInformationSpan>
                        Pricing & Fees
                        {' '}
                        <Information />
                    </HeroComponentInformationSpan>
                </HeroComponentInformationTertiary>
                <HeroComponentInformationQuaternary>
                    <DeliveryTile
                        deliveryTime={restaurantData.deliveryTime}
                        pickupTime={restaurantData.pickupTime}
                    />
                    <AuxOptions
                        deliveryTime={restaurantData.deliveryTime}
                        pickupTime={restaurantData.pickupTime}
                    />
                </HeroComponentInformationQuaternary>
            </HeroComponentInformation>
        </HeroComponentWrapper>
    );
}
