import styled from 'styled-components';
import Image from 'next/image';

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

const HeroComponent__image = styled(Image)`
    object-fit: cover;
`;

const HeroComponent__information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`;

const HeroComponent__restaurantName = styled.h2`
    font-weight: 500;
    font-size: 38px;
    color: var(--primary-black);
`;

type TRestaurantData = {
    restaurantData: {
        restaurantName: string;
        restaurantImage: string;
        distance: string;
        deliveryTime: string;
    };
}

export default function HeroComponent({ restaurantData }: TRestaurantData) {
    return (
        <HeroComponent__wrapper>
            <HeroComponent__inner>
                <HeroComponent__image__wrapper>
                    <HeroComponent__image 
                        src={restaurantData.restaurantImage}
                        alt={`Image from ${restaurantData.restaurantName}`}
                        placeholder="blur"
                        blurDataURL="/images/Blur.png"
                        fill={true}
                    />
                </HeroComponent__image__wrapper>
                {/*immediate info area*/}
                <HeroComponent__information>
                    <HeroComponent__restaurantName>
                        {restaurantData.restaurantName}
                    </HeroComponent__restaurantName>
                </HeroComponent__information>
            </HeroComponent__inner>
        </HeroComponent__wrapper>
    );
}