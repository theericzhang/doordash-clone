export type TRestaurantDataPrimary = {
    restaurantName: string;
    restaurantImage: {
        src: string;
        alt: string;
    };
    distance: string;
    deliveryTime: string;
    isDashPass: boolean;
};

export type TStorefrontData = {
    shortDescription?: string;
    averageRating?: number;
    ratingCount?: number;
    priceRating?: number;
    operationHours: {
        openHour: number;
        openMinute: number;
        closeHour: number;
        closeMinute: number;
    }[];
    items: TStoreItem[];
};

export type TStoreItem = {
    image: {
        src: string;
        alt: string;
    };
    itemName: string;
    price: number;
    description: string;
};