import styled from 'styled-components';
import Image from 'next/image';
import { TRestaurantDataPrimary, TStorefrontData } from '../../../global';
import DashPassLabel from '../../Icons/DashPassLabel';
import Star from '../../Icons/StarIcon';

const HeroComponent__wrapper = styled.section`
    display: flex;
    margin: 17px 0;
    width: 100%;
`;

const HeroComponent__inner = styled.div`
    display: flex;
    flex-direction: column;
    width: 928px;
    margin: 0 auto;
    position: relative;
    row-gap: 50px;
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
    object-fit: cover
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
`;

const HeroComponent__information__bullet = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const HeroComponent__information__rating__wrapper = styled.div`
    display: flex;
    align-items: center;
`;

type TRestaurantData = {
    restaurantData: TRestaurantDataPrimary;
    storefrontData: TStorefrontData
}

export default function HeroComponent({ restaurantData, storefrontData }: TRestaurantData) {
    return (
        <HeroComponent__wrapper>
            <HeroComponent__inner>
                <HeroComponent__images__collection>
                    <HeroComponent__image__wrapper>
                        <HeroComponent__image
                            src={restaurantData.restaurantImage}
                            alt={`Image from ${restaurantData.restaurantName}`}
                            placeholder="blur"
                            blurDataURL="/images/Blur.png"
                            fill={true}
                        />
                    </HeroComponent__image__wrapper>
                    <HeroComponent__storeProfile__image__area>
                        <HeroComponent__storeProfile__image_wrapper>
                            <HeroComponent__storeProfile__image
                                src={restaurantData.restaurantImage}
                                alt={`Image from ${restaurantData.restaurantName}`}
                                placeholder="blur"
                                blurDataURL="/images/Blur.png"
                                fill={true}
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
                                    {storefrontData.ratingCount}
                                </HeroComponent__information__rating__wrapper>
                            :
                                null
                            }
                        </HeroComponent__information__span>
                    </HeroComponent__information__primary>
                </HeroComponent__information>
            </HeroComponent__inner>
        </HeroComponent__wrapper>
    );
}