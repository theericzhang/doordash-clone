import styled from "styled-components";
import CarouselTitle from "./CarouselTitle";
import RestaurantCard from "./RestaurantCard/RestaurantCard";

const RestaurantCarousel__article = styled.article`
    display: flex;
    flex-direction: column;
    margin: 19px auto;
    row-gap: 19px;

    // TODO: responsive styling for smaller screens. Currently drafting at device width = 1800px
    width: 1152px;
`;

const RestaurantCarousel__topRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const RestaurantCarousel__carousel = styled.div`
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
`;

type TRestaurauntCarousel = {
    carouselData: {
        carouselName: string;
        restaurantData: {
            restaurantID: number;
            restaurantName: string;
            restaurantImage: string;
            distance: string;
            deliveryTime: string;
        }[];
    }
}

export default function RestaurantCarousel({carouselData} : TRestaurauntCarousel) {
    
    const arrayOfRestaurantCards = carouselData.restaurantData.map(restaurantData => {
        return (
            <RestaurantCard
                restaurantData={restaurantData}
                key={restaurantData.restaurantID}
            />
        )
    })

    return (
        <RestaurantCarousel__article>
            <RestaurantCarousel__topRow>
                <CarouselTitle carouselName={carouselData.carouselName}/>
                {/* add buttons to navigate through carousel */}
            </RestaurantCarousel__topRow>
            <RestaurantCarousel__carousel>
                {/* Add custom restaurant cards here*/}
                {arrayOfRestaurantCards}
            </RestaurantCarousel__carousel>
        </RestaurantCarousel__article>
    );
}