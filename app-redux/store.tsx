import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './features/cart/cartSlice';
import deliveryReducers from './features/delivery/deliverySlice';
import itemReducers from './features/item/itemSlice';

export const store = configureStore({
    reducer: {
        // Slice and reducer, slice: reducer
        cartSlice: cartReducers,
        deliverySlice: deliveryReducers,
        itemSlice: itemReducers,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
