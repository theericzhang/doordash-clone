import styled from 'styled-components';
import CarouselTitle from './CarouselTitle';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import { restaurantList } from '../datav2';

const RestaurantCarouselArticle = styled.article`
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    row-gap: 19px;
    width: 1152px;

    @media screen and (max-width: 1280px) {
        width: unset;
        max-width: 100%;
        margin: 30px 64px;
    }

    @media screen and (max-width: 1185px) {
        margin: 30px 48px;
    }

    @media screen and (max-width: 960px) {
        margin: 30px 32px;
    }

    @media screen and (max-width: 770px) {
        margin: 30px 0;
    }

    @media screen and (max-width: 480px) {
        margin: 15px 0;
        row-gap: 15px;
    }
`;

const RestaurantCarouselTopRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    @media screen and (max-width: 770px) {
        padding-left: 32px;
    }

    @media screen and (max-width: 480px) {
        padding-left: 16px;
    }
`;

const RestaurantCarouselCarousel = styled.div`
    display: flex;
    max-width: 100%;
    column-gap: 15px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    // hide scrollbar style
    -ms-overflow-style: none; // IE and Edge
    scrollbar-width: none; // Firefox
    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 770px) {
        overflow-x: scroll;
        padding: 0 32px;
        scroll-snap-type: none;
        column-gap: 12px;
    }

    @media screen and (max-width: 480px) {
        overflow-x: scroll;
        padding: 0 16px;
        scroll-snap-type: none;
        column-gap: 8px;
    }
`;

type TRestaurauntCarousel = {
    carouselData: {
        carouselName: string,
        selectedRestaurantIDs: number[];
    };
};

export default function RestaurantCarousel({ carouselData } : TRestaurauntCarousel) {
    const arrayOfRestaurantCards = carouselData.selectedRestaurantIDs.map(((restaurantID, index) => (
        <RestaurantCard
            restaurantID={restaurantID}
            restaurantData={
                restaurantList[restaurantID as keyof typeof restaurantList].restaurantData
            }
            index={index}
            key={restaurantID}
        />
    )));

    return (
        <RestaurantCarouselArticle aria-label={carouselData.carouselName}>
            <RestaurantCarouselTopRow>
                <CarouselTitle carouselName={carouselData.carouselName} />
                {/* add buttons to navigate through carousel */}
            </RestaurantCarouselTopRow>
            <RestaurantCarouselCarousel>
                {/* Add custom restaurant cards here */}
                {arrayOfRestaurantCards}
            </RestaurantCarouselCarousel>
        </RestaurantCarouselArticle>
    );
}
