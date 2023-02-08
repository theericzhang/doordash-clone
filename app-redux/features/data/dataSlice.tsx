import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TRestaurantList, TRestaurantsCarousel } from '../global.d.ts';

const initialState = {
    restaurantListData: {},
    restaurantCarousels: {},
};

const dataSlice = createSlice({
    // TODO: add data fetched from _app.tsx to dataSlice. Use a payload tied to action
    name: 'restaurantData',
    initialState,
    // todo: try to add restaurantCarousels somehow?
    reducers: {
        setRestaurantListData: (state, action: PayloadAction<TRestaurantList>) => {
            state.restaurantListData = action.payload;
        },
        setRestaurantCarouselData: (state, action: PayloadAction<TRestaurantsCarousel>) => {
            state.restaurantCarousels = action.payload;
        }
    }
});
