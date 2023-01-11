export type TRestaurantDataPrimary = {
    restaurantName: string;
    restaurantImage: string;
    distance: string;
    deliveryTime: string;
    isDashPass: boolean;
};

export type TStorefrontData = {
    shortDescription?: string;
    averageRating?: number;
    ratingCount?: number;
    priceRating?: number;
};