import styled from 'styled-components';

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
        <h3>Hello! {restaurantData.restaurantName}</h3>
    );
}