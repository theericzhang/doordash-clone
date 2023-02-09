export type TRestaurantList = {
    [key: number]: {
        restaurantData: TRestaurantDataPrimary;
        storefrontData: TStorefrontData;
    },
};

export type TRestaurantCarousels = {
    restaurantCarouselsData: {
        carouselName: string;
        selectedRestaurantIDs: number[];
    }[];
};

export type TRestaurantDataPrimary = {
    restaurantName: string;
    restaurantImage: {
        src: string;
        alt: string;
    };
    distance: string;
    deliveryTime: string;
    pickupTime: string;
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
    itemID: number;
    image: {
        src: string;
        alt: string;
    };
    itemName: string;
    price: number;
    description?: string;
    lastOrdered?: string;
    ratingPercentage: number;
    ratingCount: number;
};
