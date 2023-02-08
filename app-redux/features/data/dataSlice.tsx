import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TRestaurantList, TRestaurantsCarousel } from '../../../global';

const initialState = {
    restaurantListData: {},
    restaurantCarousels: {},
};

const dataSlice = createSlice({
    // TODO: add data fetched from _app.tsx to dataSlice. Use a payload tied to action
    name: 'restaurantData',
    initialState,
    // todo: validate restarantListData and restaurantCarousels. also validate global import types
    reducers: {
        setRestaurantListData: (state, action: PayloadAction<TRestaurantList>) => {
            state.restaurantListData = action.payload;
        },
        setRestaurantCarouselData: (state, action: PayloadAction<TRestaurantsCarousel>) => {
            state.restaurantCarousels = action.payload;
        }
    }
});
