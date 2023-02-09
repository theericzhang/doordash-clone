import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TRestaurantList, TRestaurantCarousels } from '../../../global';

const initialState = {
    restaurantListData: {},
    restaurantCarousels: {},
};

const dataSlice = createSlice({
    name: 'restaurantData',
    initialState,
    // todo: validate restarantListData and restaurantCarousels. also validate global import types
    reducers: {
        setRestaurantListData: (state, action: PayloadAction<TRestaurantList>) => {
            state.restaurantListData = action.payload;
            console.log(state.restaurantListData);
        },
        setRestaurantCarouselData: (state, action: PayloadAction<TRestaurantCarousels>) => {
            state.restaurantCarousels = action.payload;
            console.log(state.restaurantCarousels);
        }
    }
});

export const { setRestaurantListData, setRestaurantCarouselData } = dataSlice.actions;
export default dataSlice.reducer;
