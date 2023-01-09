import styled from "styled-components";
import CarouselTitle from "./CarouselTitle";
import RestaurantCard from "./RestaurantCard/RestaurantCard";

const RestaurantCarousel__article = styled.article`
    display: flex;
    flex-direction: column;
    margin: 19px 0;
    row-gap: 19px;
`

const RestaurantCarousel__topRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const RestaurantCarousel__carousel = styled.div`
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
`

export default function RestaurantCarousel() {
    return (
        <RestaurantCarousel__article>
            <RestaurantCarousel__topRow>
                <CarouselTitle />
                {/* add buttons to navigate through carousel */}
            </RestaurantCarousel__topRow>
            <RestaurantCarousel__carousel>
                {/* Add custom restaurant cards here*/}
                <RestaurantCard />
            </RestaurantCarousel__carousel>
        </RestaurantCarousel__article>
    );
}