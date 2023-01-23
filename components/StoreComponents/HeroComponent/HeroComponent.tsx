import styled from 'styled-components';
import Image from 'next/image';
import { TRestaurantDataPrimary, TStorefrontData } from '../../../global';
import DashPassLabel from '../../Icons/DashPassLabel';
import DeliveryTile from './DeliveryTile/DeliveryTile';
import Star from '../../Icons/StarIcon';
import ClockIcon from '../../Icons/ClockIcon';
import Information from '../../Icons/InformationIcon';
import AuxOptions from './AuxOptions/AuxOptions';

const HeroComponent__wrapper = styled.section`
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
`;

const HeroComponent__images__collection = styled.div`
    position: relative;
`;

const HeroComponent__image__wrapper = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const HeroComponent__storeProfile__image__area = styled.div`
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
`;

const HeroComponent__storeProfile__image_wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 95%;
    height: 95%;
    border-radius: 100%;
`;

const HeroComponent__storeProfile__image = styled(Image)`
    object-fit: cover;
`;

const HeroComponent__image = styled(Image)`
    object-fit: cover;
`;

const HeroComponent__information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 4px;
    width: 100%;
`;

const HeroComponent__restaurantName = styled.h2`
    font-weight: 500;
    font-size: 40px;
    color: var(--primary-black);
    letter-spacing: -1.1px;
`;

const HeroComponent__information__primary = styled.div`
    display: flex;
`;

const HeroComponent__information__span = styled.span`
    display: flex;
    font-weight: 400;
    color: var(--quinary-gray);
    column-gap: 6px;
    font-size: 14px;
    align-items: center;
`;

const HeroComponent__information__bullet = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const HeroComponent__information__rating__wrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
`;

const HeroComponent__information__secondary = styled.div`
    display: flex;
    margin: 6px 0;
    margin-bottom: 3.5px;
`;

const HeroComponent__information__time_open = styled.span`
    display: flex;
    color: var(--primary-green);
    align-items: center;
    column-gap: 3px;
`;

const HeroComponent__information__time_closed = styled.span`
    display: flex;
    color: var(--primary-gold);
    align-items: center;
    column-gap: 3px;
`;

const HeroComponent__information__tertiary = styled.div`
    display: flex;
`;

const HeroComponent__information__quaternary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

type TRestaurantData = {
    restaurantData: TRestaurantDataPrimary;
    storefrontData: TStorefrontData
}

export default function HeroComponent({ restaurantData, storefrontData }: TRestaurantData) {
    
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
    
    return (
        <HeroComponent__wrapper>
            <HeroComponent__images__collection>
                <HeroComponent__image__wrapper>
                    <HeroComponent__image
                        src={restaurantData.restaurantImage.src}
                        alt={restaurantData.restaurantImage.alt}
                        fill={true}
                        sizes="440px"
                        // sizes="374px"
                        priority={true}
                        loading='eager'
                    />
                </HeroComponent__image__wrapper>
                <HeroComponent__storeProfile__image__area>
                    <HeroComponent__storeProfile__image_wrapper>
                        <HeroComponent__storeProfile__image
                            src={restaurantData.restaurantImage.src}
                            alt={restaurantData.restaurantImage.alt}
                            placeholder="blur"
                            blurDataURL="/images/Blur.webp"
                            fill={true}
                            sizes="(max-width: 960px) 76px, 76px"
                        />
                    </HeroComponent__storeProfile__image_wrapper>
                </HeroComponent__storeProfile__image__area>
            </HeroComponent__images__collection>
            {/*immediate info area*/}
            <HeroComponent__information>
                <HeroComponent__restaurantName>
                    {restaurantData.restaurantName}
                </HeroComponent__restaurantName>
                <HeroComponent__information__primary>
                    <HeroComponent__information__span>
                        {!!restaurantData.isDashPass ? 
                            <>
                                <DashPassLabel isFull={true}/>
                                <HeroComponent__information__bullet>
                                    •
                                </HeroComponent__information__bullet>
                            </> 
                        : 
                            null
                        }
                        {!!storefrontData.shortDescription ? 
                            <>
                                {storefrontData.shortDescription}
                                <HeroComponent__information__bullet>
                                    •
                                </HeroComponent__information__bullet>
                            </>
                        :
                            null
                        }
                        {!!storefrontData.averageRating ?
                            <HeroComponent__information__rating__wrapper>
                                {storefrontData.averageRating}
                                <Star 
                                    color={`var(--quinary-gray)`}
                                    isInlineReview={true}
                                />
                                {ratingsCountLocalized}
                                <HeroComponent__information__bullet>
                                    •
                                </HeroComponent__information__bullet>
                            </HeroComponent__information__rating__wrapper>
                        :
                            null
                        }
                        {!!restaurantData.distance ?
                            <>
                                {restaurantData.distance}
                                <HeroComponent__information__bullet>
                                    •
                                </HeroComponent__information__bullet>
                            </>
                        :
                            null
                        }
                        {!!storefrontData.priceRating ?
                            <>
                                {
                                    Array(storefrontData.priceRating).fill('$')
                                }
                            </>
                        :
                            null
                        }
                    </HeroComponent__information__span>
                </HeroComponent__information__primary>
                <HeroComponent__information__secondary>
                    <HeroComponent__information__span>
                    {isOpen ? 
                        <HeroComponent__information__time_open>
                            <ClockIcon />
                            Open now
                        </HeroComponent__information__time_open>
                    :
                        <HeroComponent__information__time_closed>
                            <ClockIcon />
                            Closed now
                        </HeroComponent__information__time_closed>
                    }
                    </HeroComponent__information__span>
                </HeroComponent__information__secondary>
                <HeroComponent__information__tertiary>
                    <HeroComponent__information__span>
                        Pricing & Fees <Information />
                    </HeroComponent__information__span>
                </HeroComponent__information__tertiary>
                <HeroComponent__information__quaternary>
                    <DeliveryTile 
                        deliveryTime={restaurantData.deliveryTime}
                        pickupTime={restaurantData.pickupTime}
                    />
                    <AuxOptions 
                        deliveryTime={restaurantData.deliveryTime}
                        pickupTime={restaurantData.pickupTime}
                    />
                </HeroComponent__information__quaternary>
            </HeroComponent__information>
        </HeroComponent__wrapper>
    );
}